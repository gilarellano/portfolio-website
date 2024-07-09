// components/AreaChartWrapper.tsx
"use client";

import React, { useState, useEffect } from "react";
import { WeeklySummary } from "@/lib/definitions";
import AreaChartHero from "./AreaChartHero";
import { getPageLoadTime } from "@/lib/loadTime";

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
  const [pageLoadTime, setPageLoadTime] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    getPageLoadTime().then((time) => setPageLoadTime(time));
  }, []);

  const processedData = processWeeklySummary(weeklySummary);
  const formattedLoadTime =
    pageLoadTime !== undefined ? (pageLoadTime / 1000).toFixed(2) : "-.--";

  console.log("load time: ", pageLoadTime);

  return (
    <AreaChartHero
      chartData={processedData}
      totalVisitors={totalVisitors}
      avgLoadTime={avgLoadTime}
      pageLoadTime={formattedLoadTime ?? null}
    />
  );
}
