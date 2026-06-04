// lib/actions.ts
"use server";
import { sql } from "@vercel/postgres";
import { headers } from "next/headers";
import { isbot } from "isbot";

// Reject page-load times outside a plausible human range (ms).
// The historical bot cluster sat at ~20-30ms; real browser navigations are >100ms.
const MIN_PLAUSIBLE_LOAD_MS = 50;
const MAX_PLAUSIBLE_LOAD_MS = 60_000;

// Log a real visitor, returning the cleaned cumulative visitor count.
// Returns { visitorId: null } when the request is filtered as a bot so the
// UI can show "#--" without recording anything.
export async function logVisitor(
  pageLoadTime: number,
): Promise<{ visitorId: number | null }> {
  // --- Server-side gate: tamper-resistant, runs even if the action is called directly ---
  const userAgent = headers().get("user-agent") ?? "";
  if (isbot(userAgent)) {
    return { visitorId: null }; // known crawler / monitor / link-preview bot
  }
  if (
    !Number.isFinite(pageLoadTime) ||
    pageLoadTime < MIN_PLAUSIBLE_LOAD_MS ||
    pageLoadTime > MAX_PLAUSIBLE_LOAD_MS
  ) {
    return { visitorId: null }; // implausible timing — almost certainly automated
  }

  try {
    await sql`
      INSERT INTO visitors (visit_date, page_load_time_ms)
      VALUES (NOW(), ${pageLoadTime})
    `;

    // Return the cumulative (bot-filtered) count so "You're visitor #N"
    // stays consistent with the "Total Visitors" stat.
    const countResult = await sql<{ count: number }>`
      SELECT COUNT(*)::int AS count FROM visitors
    `;
    return { visitorId: countResult.rows[0].count };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to log visitor");
  }
}

export async function calculateWeeklySummary(): Promise<void> {
  try {
    // Step 1: Get the end date of the most recent summary
    const mostRecentWeekResult = await sql`
      SELECT week_end FROM weeklysummary
      ORDER BY week_end DESC
      LIMIT 1
    `;
    const previousWeekEndDate = mostRecentWeekResult.rows[0]?.week_end || new Date(0);
    
    // Step 2: Count visitors since the last summary
    const newVisitorsResult = await sql`
      SELECT 
        COUNT(*) as visitor_count,
        AVG(page_load_time_ms) as avg_load_time
      FROM visitors
      WHERE visit_date > ${previousWeekEndDate}
    `;
    
    const weeklyVisitorCount = Number(newVisitorsResult.rows[0].visitor_count);
    const averageLoadTime = Number(newVisitorsResult.rows[0].avg_load_time) || 0;

    // Only create a new summary if there are new visitors
    if (weeklyVisitorCount > 0) {
      const weekStart = new Date(previousWeekEndDate);
      const weekEnd = new Date();

      await sql`
        INSERT INTO weeklysummary (
          week_start, 
          week_end, 
          visitor_count, 
          avg_load_time_ms
        )
        VALUES (
          ${weekStart.toISOString()}, 
          ${weekEnd.toISOString()}, 
          ${weeklyVisitorCount}, 
          ${averageLoadTime}
        )
      `;

      console.log({
        weekStart,
        weekEnd,
        weeklyVisitorCount,
        averageLoadTime
      });
    }
  } catch (error) {
    console.error("Error calculating weekly summary:", error);
    throw new Error("Failed to calculate weekly summary");
  }
}