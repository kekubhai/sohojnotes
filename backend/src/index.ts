import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import prisma from './prisma/client';
import notesRouter from './routes/notes.router';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Changed to 5000 to avoid conflicts with Next.js


// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
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

// Mount routers
app.use('/api/notes', notesRouter);
app.put('/api/notes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updates = req.body;
    const updated = await prisma.note.update({ where: { id }, data: updates });
    res.json({ note: updated });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/notes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.note.delete({ where: { id } });
    res.json({ message: 'Deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

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
