"use client";

import React, { useId } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import type { ChartData } from "@/lib/definitions";

// Minimal sparkline built directly on recharts (Tremor's spark charts hide
// the animation flag, but the full-size charts' "line draws itself" effect
// is just recharts' native mount animation — so we go straight to the
// source). Same emerald stroke + gradient the Tremor charts used.
export default function SparkArea({
  data,
  dataKey,
}: {
  data: ChartData[];
  dataKey: keyof ChartData & string;
}) {
  const gradientId = useId();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 2, right: 0, bottom: 0, left: 0 }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#10b981"
          strokeWidth={1.5}
          fill={`url(#${gradientId})`}
          dot={false}
          isAnimationActive={true}
          animationDuration={900}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
