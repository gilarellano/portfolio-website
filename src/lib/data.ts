// lib/data.ts

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Visitor, WeeklySummary } from "./definitions";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export async function fetchWeeklySummary(): Promise<WeeklySummary[]> {
  const res = await fetch(`${BASE_URL}/api/weekly-summary`, {
    next: { revalidate: 1 }, // Revalidate weekly 60,480s
  });
  if (!res.ok) {
    throw new Error("Failed to fetch weekly summary");
  }
  return res.json();
}

export async function fetchTotalVisitors(): Promise<number> {
  const res = await fetch(`${BASE_URL}/api/total-visitors`, {
    next: { revalidate: 1 }, // Revalidate every minute, 60s
  })
  if (!res.ok) {
    throw new Error("Failed to fetch total visitors");
  }
  const data = await res.json();
  return data.totalVisitors;
}

export async function fetchAvgLoadTime(): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/avg-load-time`, {
    next: { revalidate: 1 }, // Revalidate every minute, 60s
  });
  if (!res.ok) {
    throw new Error("Failed to fetch average load time");
  }
  const data = await res.json();
  return data.avgLoadTime;
}

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
