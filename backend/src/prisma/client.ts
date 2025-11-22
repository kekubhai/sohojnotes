// Recommended import pattern: https://pris.ly/d/importing-client
// Import a single PrismaClient instance and reuse it across the app to avoid exhausting
// database connections. This file exports the shared client instance.
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
