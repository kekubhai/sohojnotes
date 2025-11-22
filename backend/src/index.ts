import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import prisma from './prisma/client';
import notesRouter from './routes/notes.router';
import authRouter from './routes/auth/auth';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002; // Changed to 5002 to avoid conflicts with other services


// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'X-API-Key'],
  exposedHeaders: ['Authorization', 'X-Total-Count'],
  optionsSuccessStatus: 200,
  preflightContinue: true
}));

// Handle preflight requests for all routes
app.options('*', cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'X-API-Key'],
  exposedHeaders: ['Authorization', 'X-Total-Count'],
  optionsSuccessStatus: 200
}));
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'সহজNotes API Server',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Add a test endpoint for connectivity testing
app.get('/api/test', (req: Request, res: Response) => {
  res.json({
    message: 'API connectivity test successful',
    timestamp: new Date().toISOString(),
    server: 'sohojnotes-backend'
  });
});

// Mount routers
app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.message
  });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found',
    path: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`🚀 সহজNotes Backend Server is running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 API URL: http://localhost:${PORT}`);
});

export default app;