// lib/data.ts

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Visitor, WeeklySummary } from "./definitions";

export async function fetchVisitors(limit: number = 5): Promise<Visitor[]> {
  noStore();
  try {
    const data = await sql<Visitor>`
      SELECT * FROM visitors
      ORDER BY visit_date DESC
      LIMIT ${limit}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch visitor data.");
  }
}

export async function fetchWeeklySummary(): Promise<WeeklySummary[]> {
  noStore();
  try {
    const data = await sql<WeeklySummary>`
      SELECT week_start, week_end, visitor_count, average_load_time 
      FROM weeklysummary 
      ORDER BY week_start DESC 
      LIMIT 20
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch weekly summary data.");
  }
}
