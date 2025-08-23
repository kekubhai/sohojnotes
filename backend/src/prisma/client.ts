// Recommended import pattern: https://pris.ly/d/importing-client
// Import a single PrismaClient instance and reuse it across the app to avoid exhausting
// database connections. This file exports the shared client instance.
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
