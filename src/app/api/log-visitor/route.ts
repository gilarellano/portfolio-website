import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { pageLoadTime } = await request.json();

    const result = await sql`
      INSERT INTO visitors (visit_date, page_load_time_ms)
      VALUES (NOW(), ${pageLoadTime})
      RETURNING id
    `;

    const insertedId = result.rows[0].id;

    return NextResponse.json({ message: "Visitor logged successfully", visitorId: insertedId });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to log visitor" }, { status: 500 });
  }
}
