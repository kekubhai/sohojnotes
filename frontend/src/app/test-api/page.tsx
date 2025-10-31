"use client";

import { useState } from 'react';

export default function TestApiPage() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const testApiConnection = async () => {
    setLoading(true);
    setResult('Testing API connection...');
    
    try {
      const response = await fetch('http://localhost:5002');
      const data = await response.json();
      setResult(`Success: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const testRegisterEndpoint = async () => {
    setLoading(true);
    setResult('Testing register endpoint...');
    
    try {
      const response = await fetch('http://localhost:5002/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: `test${Date.now()}@example.com`,
          password: 'password123'
        })
      });
      
      const data = await response.json();
      setResult(`Status: ${response.status}\nResponse: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const testCORS = async () => {
    setLoading(true);
    setResult('Testing CORS preflight...');
    
    try {
      const response = await fetch('http://localhost:5002/api/auth/register', {
        method: 'OPTIONS'
      });
      
      setResult(`CORS Preflight Status: ${response.status}\nAllow Header: ${response.headers.get('allow')}`);
    } catch (error) {
      setResult(`CORS Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error('CORS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">API Connection Test</h1>
      <div className="space-y-4">
        <button 
          onClick={testApiConnection}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {loading ? 'Testing...' : 'Test API Connection'}
        </button>
        <button 
          onClick={testCORS}
          disabled={loading}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {loading ? 'Testing...' : 'Test CORS'}
        </button>
        <button 
          onClick={testRegisterEndpoint}
          disabled={loading}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Testing...' : 'Test Register API'}
        </button>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <pre className="whitespace-pre-wrap">{result}</pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-bold mb-2">Debug Information</h2>
        <p>Backend should be running on: http://localhost:5002</p>
        <p>Frontend should be running on: http://localhost:3000</p>
        <p>If you see "Failed to fetch" errors, it might be due to:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Backend server not running</li>
          <li>Firewall blocking the connection</li>
          <li>CORS issues</li>
          <li>Network configuration issues</li>
        </ul>
      </div>
    </div>
  );
}