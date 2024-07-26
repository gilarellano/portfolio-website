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
  avg_load_time_ms: number;
}

export interface ChartData {
  date: string;
  Visitors: number;
  AvgLoadTime: number;
}

export interface AreaChartHeroProps {
  chartData: ChartData[];
  totalVisitors: number;
  avgLoadTime: number;
}

export interface CustomTooltipProps {
  payload?: any[];
  active?: boolean;
}
