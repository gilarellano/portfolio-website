import "dotenv/config"; // This will load the .env file
import { sql } from "@vercel/postgres";

const dummyVisitors = [
  { visit_date: "2024-07-01T08:00:00Z", page_load_time_ms: 150.0 },
  { visit_date: "2024-07-01T09:00:00Z", page_load_time_ms: 200.0 },
  { visit_date: "2024-07-02T10:00:00Z", page_load_time_ms: 120.0 },
  { visit_date: "2024-07-02T11:00:00Z", page_load_time_ms: 130.0 },
  { visit_date: "2024-07-03T12:00:00Z", page_load_time_ms: 180.0 },
  { visit_date: "2024-07-03T13:00:00Z", page_load_time_ms: 140.0 },
  { visit_date: "2024-07-04T14:00:00Z", page_load_time_ms: 160.0 },
  { visit_date: "2024-07-04T15:00:00Z", page_load_time_ms: 110.0 },
  { visit_date: "2024-07-05T16:00:00Z", page_load_time_ms: 190.0 },
  { visit_date: "2024-07-05T17:00:00Z", page_load_time_ms: 170.0 },
  { visit_date: "2024-07-06T18:00:00Z", page_load_time_ms: 200.0 },
  { visit_date: "2024-07-06T19:00:00Z", page_load_time_ms: 150.0 },
  { visit_date: "2024-07-07T20:00:00Z", page_load_time_ms: 140.0 },
  { visit_date: "2024-07-07T21:00:00Z", page_load_time_ms: 160.0 },
  { visit_date: "2024-07-08T22:00:00Z", page_load_time_ms: 130.0 },
  { visit_date: "2024-07-08T23:00:00Z", page_load_time_ms: 120.0 },
  { visit_date: "2024-07-09T00:00:00Z", page_load_time_ms: 110.0 },
  { visit_date: "2024-07-09T01:00:00Z", page_load_time_ms: 100.0 },
  { visit_date: "2024-07-10T02:00:00Z", page_load_time_ms: 90.0 },
  { visit_date: "2024-07-10T03:00:00Z", page_load_time_ms: 80.0 },
];

const dummyWeeklySummary = {
  week_start: "2024-07-01",
  week_end: "2024-07-07",
  visitor_count: 10,
  avg_load_time_ms: 140.0,
};

async function clearTables() {
  try {
    // Use TRUNCATE to clear tables and reset ID counters
    await sql`TRUNCATE TABLE visitors RESTART IDENTITY CASCADE`;
    await sql`TRUNCATE TABLE weeklysummary RESTART IDENTITY CASCADE`;
    console.log(
      "Cleared visitors and weeklysummary tables and reset ID counters.",
    );
  } catch (error) {
    console.error("Error clearing tables:", error);
    throw new Error("Failed to clear tables.");
  }
}

async function repopulateVisitors() {
  try {
    for (const visitor of dummyVisitors) {
      await sql`
        INSERT INTO visitors (visit_date, page_load_time_ms)
        VALUES (${visitor.visit_date}, ${visitor.page_load_time_ms})
      `;
    }
    console.log("Repopulated visitors table with dummy data.");
  } catch (error) {
    console.error("Error repopulating visitors table:", error);
    throw new Error("Failed to repopulate visitors table.");
  }
}

async function repopulateWeeklySummary() {
  try {
    await sql`
      INSERT INTO weeklysummary (week_start, week_end, visitor_count, avg_load_time_ms)
      VALUES (${dummyWeeklySummary.week_start}, ${dummyWeeklySummary.week_end}, ${dummyWeeklySummary.visitor_count}, ${dummyWeeklySummary.avg_load_time_ms})
    `;
    console.log("Repopulated weeklysummary table with dummy data.");
  } catch (error) {
    console.error("Error repopulating weeklysummary table:", error);
    throw new Error("Failed to repopulate weeklysummary table.");
  }
}

async function resetTables() {
  await clearTables();
  await repopulateVisitors();
  await repopulateWeeklySummary();
}

resetTables().catch((error) => {
  console.error("Script failed:", error);
});
