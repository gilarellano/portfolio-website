"use client";

import React from "react";
import SparkArea from "./SparkArea";
import { AreaChartHeroProps } from "@/lib/definitions";

// Compact spark stats for the nav; hidden below `wide` (no room).
export default function SparkStats({
  chartData,
  totalVisitors,
  avgLoadTime,
}: AreaChartHeroProps) {
  return (
    <div className="hidden items-center gap-x-6 font-mono wide:flex">
      <div className="flex items-center gap-2">
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] text-secondary-text">Visitors</span>
          <span className="text-sm font-bold text-primary-text">
            {Number(totalVisitors).toLocaleString("en-US")}
          </span>
        </div>
        <div className="h-8 w-20">
          <SparkArea data={chartData} dataKey="Visitors" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] text-secondary-text">Avg load</span>
          <span className="text-sm font-bold text-primary-text">
            {(avgLoadTime / 1000).toFixed(2)}s
          </span>
        </div>
        <div className="h-8 w-20">
          <SparkArea data={chartData} dataKey="AvgLoadTime" />
        </div>
      </div>
    </div>
  );
}
