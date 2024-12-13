// lib/data.ts

import { sql } from "@vercel/postgres";
import {
  unstable_noStore as noStore,
  unstable_cache as cache,
} from "next/cache";
import { WeeklySummary } from "./definitions";
import { processWeeklySummary } from "@/utils/index";

export async function fetchWeeklySummary() {
  noStore();
  const fetcher = async () => {
    try {
      const data = await sql<WeeklySummary>`
        SELECT week_start, week_end, visitor_count, avg_load_time_ms
        FROM weeklysummary 
        ORDER BY week_start DESC 
        LIMIT 4
      `;
      return processWeeklySummary(data.rows);
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch weekly summary");
    }
  };

  const cachedFetcher = cache(fetcher, ["weeklysummary"], {
    revalidate: 60, // For now revalidate every minute, but supposed to revalidate weekly, 60,480s
  });

  return cachedFetcher();
}

export async function fetchSiteData() {
  noStore();
  const fetcher = async () => {
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
  };

  const cachedFetcher = cache(fetcher, ["totalVisitorsAndAvgLoadTime"], {
    revalidate: 60, // Revalidate every minute, 60s
  });

  return cachedFetcher();
}
