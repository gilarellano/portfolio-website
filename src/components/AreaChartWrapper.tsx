// components/AreaChartWrapper.tsx
"use client";

import { WeeklySummary } from "@/lib/definitions";
import AreaChartHero from "./AreaChartHero";
import { usePageLoadTime } from "@/utils/usePageLoadTime";

function processWeeklySummary(data: WeeklySummary[]) {
  return data
    .map((week) => ({
      date: new Date(week.week_start).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      Visitors: week.visitor_count,
      AvgLoadTime: formatLoadTime(week.avg_load_time_ms),
    }))
    .reverse(); // Reverse to get chronological order
}

// Function to format load time from milliseconds to seconds with 2 decimal places
function formatLoadTime(milliseconds: number): number {
  return parseFloat((milliseconds / 1000).toFixed(2));
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
  const { pageLoadTime, visitorId } = usePageLoadTime();
  const processedData = processWeeklySummary(weeklySummary);
  const formattedLoadTime =
    pageLoadTime !== undefined ? formatLoadTime(pageLoadTime) : null;

  return (
    <AreaChartHero
      chartData={processedData}
      totalVisitors={totalVisitors}
      avgLoadTime={avgLoadTime}
      pageLoadTime={formattedLoadTime ?? null}
      visitorId={visitorId ?? null}
    />
  );
}
