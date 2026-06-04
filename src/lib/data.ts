// lib/data.ts

import { sql } from "@vercel/postgres";
import {
  unstable_noStore as noStore,
  unstable_cache as cache,
} from "next/cache";
import { WeeklySummary } from "./definitions";
import { processWeeklySummary } from "@/utils/index";

// Opt out of request memoization, then wrap the query in a time-based cache.
// Shared by every data fetcher below.
function cachedQuery<T>(
  keyParts: string[],
  revalidate: number,
  fetcher: () => Promise<T>,
): Promise<T> {
  noStore();
  return cache(fetcher, keyParts, { revalidate })();
}

export async function fetchWeeklySummary() {
  // revalidate: 1s is a leftover debug value (intended to be weekly, 604800s)
  return cachedQuery(["weeklysummary"], 1, async () => {
    try {
      const data = await sql<WeeklySummary>`
        SELECT week_start, week_end, visitor_count, avg_load_time_ms
        FROM weeklysummary
        ORDER BY week_start DESC
        LIMIT 30
      `;
      return processWeeklySummary(data.rows);
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch weekly summary");
    }
  });
}

export async function fetchSiteData() {
  return cachedQuery(["totalVisitorsAndAvgLoadTime"], 60, async () => {
    try {
      const data = await sql<{ count: number; avg: number }>`
        SELECT COUNT(*) as count, AVG(page_load_time_ms) as avg
        FROM visitors
      `;
      return {
        totalVisitors: data.rows[0].count,
        avgLoadTime: data.rows[0].avg,
      };
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch total visitors and average load time");
    }
  });
}
