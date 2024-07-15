// src/app/api/calculate-weekly-summary/route.ts

import { NextResponse } from 'next/server';
import { calculateWeeklySummary } from '@/lib/action';

const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');

  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await calculateWeeklySummary();
    return NextResponse.json({ message: 'Weekly summary calculated successfully' });
  } catch (error) {
    console.error('Error calculating weekly summary:', error);
    return NextResponse.json({ error: 'Failed to calculate weekly summary' }, { status: 500 });
  }
}
