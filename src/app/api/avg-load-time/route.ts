import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  try {
    const data = await sql<{ avg: number }>`
      SELECT AVG(page_load_time) as avg
      FROM visitors
    `;
    return NextResponse.json({ avgLoadTime: data.rows[0].avg.toFixed(2) });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch average load time" },
      { status: 500 },
    );
  }
}
