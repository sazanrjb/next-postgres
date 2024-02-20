import { Pool } from 'pg';

let Connection: Pool | null = null;

if (!Connection) {
  Connection = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 5432,
    database: process.env.DATABASE_NAME,
  });
}

export default Connection;