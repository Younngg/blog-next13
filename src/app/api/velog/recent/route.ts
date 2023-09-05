import { getRecentVelogPost } from '@/service/post';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return getRecentVelogPost().then((data) => NextResponse.json(data));
}
