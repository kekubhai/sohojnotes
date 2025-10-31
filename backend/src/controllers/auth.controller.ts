import { Request, Response } from 'express';
import prisma from '../prisma/client';
import { hashPassword, comparePassword, generateToken } from '../utils/auth.utils';

// Register a new user
export const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password } = req.body;
    
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'USER'
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatarUrl: true,
        bio: true,
        createdAt: true
      }
    });
    
    // Generate token
    const token = generateToken(user.id);
    
    return res.status(201).json({
      message: 'User registered successfully',
      user,
      token
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Login user
export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        avatarUrl: true,
        bio: true
      }
    });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Generate token (exclude password from user object)
    const { password: _, ...userWithoutPassword } = user;
    const token = generateToken(user.id);
    
    return res.json({
      message: 'Login successful',
      user: userWithoutPassword,
      token
    });
  } catch (error: any) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get current user profile
export const getProfile = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = (req as any).user.id;
    
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatarUrl: true,
        bio: true,
        createdAt: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    return res.json({ user });
  } catch (error: any) {
    console.error('Get profile error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update user profile
export const updateProfile = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = (req as any).user.id;
    const { name, bio, avatarUrl } = req.body;
    
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        bio,
        avatarUrl
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatarUrl: true,
        bio: true,
        createdAt: true
      }
    });
    
    return res.json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error: any) {
    console.error('Update profile error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Logout user
export const logout = async (req: Request, res: Response): Promise<Response> => {
  try {
    // For JWT, logout is handled client-side by removing the token
    // We can add token blacklisting here if needed
    return res.json({ message: 'Logout successful' });
  } catch (error: any) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};