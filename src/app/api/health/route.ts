import { NextResponse } from 'next/server';
import { createSuccessResponse } from '@/types/api';

export async function GET() {
  const startTime = Date.now();
  const requestId = crypto.randomUUID();

  const healthData = {
    status: 'HEALTHY',
    service: 'shapetoolexpo-api',
    timestamp: new Date().toISOString(),
    runtime: 'edge',
    environment: process.env.NODE_ENV || 'development',
  };

  return NextResponse.json(
    createSuccessResponse(healthData, startTime, requestId),
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    }
  );
}
