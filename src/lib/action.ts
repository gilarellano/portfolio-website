// lib/actions.ts
"use server";
import { sql } from "@vercel/postgres";
import { unstable_cache as cache } from "next/cache";
import { WeeklySummary } from "./definitions";

// Function to log visitor info and return the visitor ID
export async function logVisitor(
  pageLoadTime: number,
): Promise<{ visitorId: number }> {
  try {
    const result = await sql`
      INSERT INTO visitors (visit_date, page_load_time_ms)
      VALUES (NOW(), ${pageLoadTime})
      RETURNING id
    `;

    const visitorId = result.rows[0].id;
    return { visitorId };
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