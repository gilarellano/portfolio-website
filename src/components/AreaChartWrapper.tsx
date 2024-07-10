// components/AreaChartWrapper.tsx
"use client";

import { WeeklySummary } from "@/lib/definitions";
import AreaChartHero from "./AreaChartHero";
import { usePageLoadTime } from "@/lib/usePageLoadTime";

function processWeeklySummary(data: WeeklySummary[]) {
  return data
    .map((week) => ({
      date: new Date(week.week_start).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      Visitors: week.visitor_count,
      AvgLoadTime: week.average_load_time,
    }))
    .reverse(); // Reverse to get chronological order
}

export default function AreaChartWrapper({
  weeklySummary,
  totalVisitors,
  avgLoadTime,
}: {
  weeklySummary: WeeklySummary[];
  totalVisitors: number;
  avgLoadTime: string;
}) {

  const pageLoadTime = usePageLoadTime();
  const processedData = processWeeklySummary(weeklySummary);
  const formattedLoadTime =
    pageLoadTime !== undefined ? (pageLoadTime / 1000).toFixed(2) : "-.--";

  return (
    <AreaChartHero
      chartData={processedData}
      totalVisitors={totalVisitors}
      avgLoadTime={avgLoadTime}
      pageLoadTime={formattedLoadTime ?? null}
    />
  );
}
