import { NextRequest, NextResponse } from 'next/server';
import Connection from '@/lib/db';

export async function GET(request: NextRequest) {
  const query = 'SELECT * FROM users WHERE id = $1';
  if (!Connection) {
    return NextResponse.json({ message: 'Connection not established' }, {
      status: 500
    });
  }

  const res = await Connection.query(query, [1]);

  return NextResponse.json({ data: res.rows, count: res.rowCount });
}
