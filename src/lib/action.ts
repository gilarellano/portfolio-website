"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// Function to create a visitor entry with artificial load time
export async function logVisitor() {
  // Generate an artificial page load time between 1000ms and 3000ms
  const artificialLoadTime = Math.random() * (3000 - 1000) + 1000;

  try {
    // Insert visitor data into the database
    await sql`
      INSERT INTO Visitors (visit_date, page_load_time)
      VALUES (CURRENT_TIMESTAMP, ${artificialLoadTime})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Visitor.",
    };
  }

  // Revalidate the path where the visitor count and load times are displayed
  revalidatePath("/"); // Replace with the actual path you want to revalidate
}
