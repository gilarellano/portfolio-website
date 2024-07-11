// app/api/weekly-summary/route.ts

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { WeeklySummary } from "@/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  try {
    const data = await sql<WeeklySummary[]>`
      SELECT week_start, week_end, visitor_count, avg_load_time_ms
      FROM weeklysummary 
      ORDER BY week_start DESC 
      LIMIT 20
    `;
    return NextResponse.json(data.rows);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch weekly summary" },
      { status: 500 },
    );
  }
}
