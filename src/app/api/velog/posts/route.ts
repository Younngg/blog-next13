import { getAllVelogPost } from '@/service/post';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return getAllVelogPost().then((data) => NextResponse.json(data));
}
