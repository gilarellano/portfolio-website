// api/calculate-weekly-summary/route.ts

import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    // Step 1: Fetch Total Visitor Count
    const totalVisitorsResult = await sql`SELECT COUNT(*) as count FROM visitors`;
    const totalVisitors = totalVisitorsResult.rows[0].count;
    console.log('Total Visitors:', totalVisitors);

    // Step 2: Fetch Most Recent Week's Visitor Count and End Date
    const mostRecentWeekResult = await sql`
      SELECT visitor_count, week_end FROM weeklysummary
      ORDER BY week_end DESC
      LIMIT 1
    `;
    const mostRecentWeekCount = mostRecentWeekResult.rows[0]?.visitor_count || 0;
    const previousWeekEndDate = mostRecentWeekResult.rows[0]?.week_end || new Date();
    console.log('Most Recent Week Count:', mostRecentWeekCount);
    console.log('Previous Week End Date:', previousWeekEndDate);

    // Step 3: Calculate Weekly Visitor Count
    const weeklyVisitorCount = totalVisitors - mostRecentWeekCount;
    console.log('Weekly Visitor Count:', weeklyVisitorCount);

    // Step 4: Fetch Last Weeks Records
    const lastWeeksRecordsResult = await sql`
      SELECT page_load_time_ms FROM visitors
      ORDER BY visit_date DESC
      LIMIT ${weeklyVisitorCount}
    `;
    const lastWeeksRecords = lastWeeksRecordsResult.rows;
    console.log('Last weeks records:', lastWeeksRecords);

    // Step 5: Calculate Average Load Time
    const totalLoadTime = lastWeeksRecords.reduce((acc, record) => acc + record.page_load_time_ms, 0);
    const averageLoadTime = weeklyVisitorCount ? totalLoadTime / weeklyVisitorCount : 0;
    console.log('Average Load Time:', averageLoadTime);

    // Step 6: Create Weekly Metrics
    const weekStart = new Date(previousWeekEndDate);
    const weekEnd = new Date();
    console.log('Week Start:', weekStart);
    console.log('Week End:', weekEnd);

    await sql`
      INSERT INTO weeklysummary (week_start, week_end, visitor_count, avg_load_time_ms)
      VALUES (${weekStart.toISOString()}, ${weekEnd.toISOString()}, ${weeklyVisitorCount}, ${averageLoadTime})
    `;

    return NextResponse.json({ message: 'Weekly summary calculated successfully' });
  } catch (error) {
    console.error('Error calculating weekly summary:', error);
    return NextResponse.json({ error: 'Failed to calculate weekly summary' }, { status: 500 });
  }
}