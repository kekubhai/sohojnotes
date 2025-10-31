"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: string; // Add this property
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<{ success: boolean; message: string }>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing token in cookies on initial load
  useEffect(() => {
    const storedToken = Cookies.get('token');
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('http://localhost:5002/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setToken(data.token);
        Cookies.set('token', data.token, { expires: 7 });
        return { success: true, message: 'Login successful' };
      } else {
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Handle different types of errors
      if (error.name === 'AbortError') {
        return { success: false, message: 'Request timed out. Please try again.' };
      }
      
      if (error instanceof TypeError) {
        if (error.message.includes('fetch')) {
          return { success: false, message: 'Unable to connect to the server. Please check your internet connection and try again.' };
        }
        return { success: false, message: 'Network error: ' + error.message };
      }
      
      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    }
  };

  const fetchUserProfile = async (authToken: string) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('http://localhost:5002/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        // Token is invalid, remove it
        Cookies.remove('token');
        setToken(null);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      Cookies.remove('token');
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (userData: Partial<User>) => {
    if (!token) {
      return { success: false, message: 'Not authenticated' };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('http://localhost:5002/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        return { success: true, message: 'Profile updated successfully' };
      } else {
        return { success: false, message: data.message || 'Profile update failed' };
      }
    } catch (error: any) {
      console.error('Profile update error:', error);
      
      // Handle different types of errors
      if (error.name === 'AbortError') {
        return { success: false, message: 'Request timed out. Please try again.' };
      }
      
      if (error instanceof TypeError) {
        if (error.message.includes('fetch')) {
          return { success: false, message: 'Unable to connect to the server. Please check your internet connection and try again.' };
        }
        return { success: false, message: 'Network error: ' + error.message };
      }
      
      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove('token');
    
    // Call backend logout endpoint with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    fetch('http://localhost:5002/api/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      signal: controller.signal
    }).catch(error => {
      console.error('Logout API error:', error);
    }).finally(() => {
      clearTimeout(timeoutId);
    });
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      console.log('Attempting to register user:', { name, email });
      
      const url = 'http://localhost:5002/api/auth/register';
      console.log('Calling URL:', url);
      
      // Add a timeout to the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      console.log('Registration response status:', response.status);
      const data = await response.json();
      console.log('Registration response data:', data);

      if (response.ok) {
        setUser(data.user);
        setToken(data.token);
        Cookies.set('token', data.token, { expires: 7 });
        return { success: true, message: 'Registration successful' };
      } else {
        return { success: false, message: data.message || 'Registration failed' };
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      console.error('Error type:', typeof error);
      console.error('Error constructor:', error.constructor.name);
      
      // Handle different types of errors
      if (error.name === 'AbortError') {
        return { success: false, message: 'Request timed out. Please try again.' };
      }
      
      if (error instanceof TypeError) {
        if (error.message.includes('fetch')) {
          return { success: false, message: 'Unable to connect to the server. Please check your internet connection and make sure the backend server is running.' };
        }
        return { success: false, message: 'Network error: ' + error.message };
      }
      
      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    }
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    updateProfile,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};