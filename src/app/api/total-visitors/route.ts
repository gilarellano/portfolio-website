import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  try {
    const data = await sql<{ count: number }>`
      SELECT COUNT(*) as count
      FROM visitors
    `;
    return NextResponse.json({ totalVisitors: data.rows[0].count });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch total visitors" },
      { status: 500 },
    );
  }
}
