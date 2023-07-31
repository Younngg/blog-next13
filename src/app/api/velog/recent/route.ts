import { getRecentVelogPost } from '@/service/post';
import { NextResponse } from 'next/server';

export async function GET() {
  return getRecentVelogPost().then((data) => NextResponse.json(data));
}
