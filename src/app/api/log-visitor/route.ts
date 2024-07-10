import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { pageLoadTime } = await request.json();

    await sql`
      INSERT INTO visitors (visit_date, page_load_time_ms)
      VALUES (NOW(), ${pageLoadTime})
    `;

    return NextResponse.json({ message: "Visitor logged successfully" });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to log visitor" }, { status: 500 });
  }
}
