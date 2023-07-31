import { getAllVelogPost } from '@/service/post';
import { NextResponse } from 'next/server';

export async function GET() {
  return getAllVelogPost().then((data) => NextResponse.json(data));
}
