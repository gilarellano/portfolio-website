// lib/definitions.ts

export interface Visitor {
  id: number;
  visit_date: string;
  page_load_time: number;
}

export interface WeeklySummary {
  week_start: string;
  week_end: string;
  visitor_count: number;
  average_load_time: number;
}
