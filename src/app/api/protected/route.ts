import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key'; // Match backend secret

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token');

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = jwt.verify(token, secret);
    return NextResponse.json({ message: 'Authorized', user });
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
