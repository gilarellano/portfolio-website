// lib/data.ts

import { sql } from "@vercel/postgres";
import {
  unstable_noStore as noStore,
  unstable_cache as cache,
} from "next/cache";
import { WeeklySummary } from "./definitions";

//const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export async function fetchWeeklySummary(): Promise<WeeklySummary[]> {
  noStore();
  const fetcher = async () => {
    try {
      const data = await sql<WeeklySummary>`
        SELECT week_start, week_end, visitor_count, avg_load_time_ms
        FROM weeklysummary 
        ORDER BY week_start DESC 
        LIMIT 20
      `;
      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch weekly summary");
    }
  };

  const cachedFetcher = cache(fetcher, ["weeklysummary"], {
    revalidate: 1, // Revalidate weekly, 60,480s
  });

  return cachedFetcher();
}

export async function fetchTotalVisitors(): Promise<number> {
  noStore();
  const fetcher = async () => {
    try {
      const data = await sql<{ count: number }>`
        SELECT COUNT(*) as count
        FROM visitors
      `;
      return data.rows[0].count;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch total visitors");
    }
  };

  const cachedFetcher = cache(fetcher, ["totalVisitors"], {
    revalidate: 1, // Revalidate every minute, 60s
  });

  return cachedFetcher();
}

export async function fetchAvgLoadTime(): Promise<string> {
  noStore();
  const fetcher = async () => {
    try {
      // Converts from ms to seconds
      const data = await sql<{ avg: number }>`
        SELECT AVG(page_load_time_ms) / 1000.0 as avg
        FROM visitors
      `;
      return data.rows[0].avg.toFixed(2);
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch average load time");
    }
  };

  const cachedFetcher = cache(fetcher, ["avgLoadTime"], {
    revalidate: 1, // Revalidate every minute, 60s
  });

  return cachedFetcher();
}
