import { NextRequest, NextResponse } from 'next/server';
import Connection from '@/lib/db';

export async function GET(request: NextRequest) {
  if (!Connection) {
    return NextResponse.json({ message: 'Connection not established' }, {
      status: 500
    });
  }

  const query = 'CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(100))';

  await Connection.query(query);

  return NextResponse.json({
    message: 'Hello World'
  })
}
