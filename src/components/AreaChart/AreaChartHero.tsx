// src/components/AreaChartHero.tsx
"use client";

import React from "react";
import { MouseClickIcon, ClockIcon } from "@/assets/icons";
import { AreaChart } from "@tremor/react";
import { usePageLoadTime } from "@/utils/usePageLoadTime";
import { AreaChartHeroProps, CustomTooltipProps } from "@/lib/definitions";
import { statCardClass } from "./styles";

const valueFormatter = (number: number): string => {
  return `${number.toFixed(2)}s`;
};

// Smooth, gridline-free sparkline with mono axis ticks for a quieter, more
// intentional look.
const chartClass = "h-[80px] mt-3 [&_text]:font-mono";

const customTooltip = ({
  payload = [],
  active = false,
}: CustomTooltipProps) => {
  if (!active || payload.length === 0) return null;

  const date = payload[0].payload.date;

  return (
    <div className="flex rounded-tremor-default border-custom-width border-custom bg-background p-2 font-mono text-tremor-default shadow-tremor-dropdown">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div className={`flex w-1 flex-col bg-emerald-500 rounded`} />
          <div className="space-y-1">
            <p className="text-secondary-text">{date}</p>
            <p className="font-small font-bold text-primary-text">
              {category.dataKey}: {category.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function AreaChartHero({
  chartData,
  totalVisitors,
  avgLoadTime,
}: AreaChartHeroProps) {
  const { pageLoadTime, visitorId } = usePageLoadTime();

  return (
    <div className="lg:max-w-[400px]">
      <div className={statCardClass}>
        <div className="flex flex-row justify-between w-full px-0.5 font-mono">
          <span className="hidden sm:flex flex-row gap-x-1 items-center">
            <h2 className="text-base md:text-lg lg:text-xs text-secondary-text">
              Total Visitors:
            </h2>
            <p className="text-base md:text-lg lg:text-xs font-bold text-primary-text">
              {Number(totalVisitors).toLocaleString("en-US")}
            </p>
          </span>
          <div className="flex flex-row items-center gap-x-1 py-1 px-2 text-secondary-text rounded-custom">
            <MouseClickIcon className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[18px] lg:h-[18px]" />
            <p className="text-base md:text-lg lg:text-xs">
              You&apos;re Visitor{" "}
              <b className="text-primary">
                #
                {visitorId !== undefined
                  ? visitorId.toLocaleString("en-US")
                  : "--"}
              </b>
            </p>
          </div>
        </div>

        <AreaChart
          className={chartClass}
          data={chartData}
          index="date"
          categories={["Visitors"]}
          colors={["emerald"]}
          showLegend={false}
          showGridLines={false}
          curveType="monotone"
          yAxisWidth={32}
          showAnimation={true}
          animationDuration={900}
          autoMinValue={false}
          customTooltip={customTooltip}
        />
      </div>

      <div className={statCardClass}>
        <div className="flex flex-row justify-between w-full px-0.5 font-mono">
          <span className="hidden sm:flex flex-row gap-x-1 items-center">
            <h2 className="text-base md:text-lg lg:text-xs text-secondary-text">
              Avg. Page Load Time:
            </h2>
            <p className="text-base md:text-lg lg:text-xs font-bold text-primary-text">
              {`${(avgLoadTime / 1000).toFixed(2)}`}s
            </p>
          </span>
          <div className="flex flex-row items-center gap-x-1 py-1 px-2 rounded-custom text-secondary-text">
            <ClockIcon className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[14px] lg:h-[14px]" />
            <p className="hidden sm:block text-base md:text-lg lg:text-xs">
              Your Time:{" "}
              <b className="text-primary inline-block w-[40px]">
                {pageLoadTime !== undefined
                  ? `${(pageLoadTime / 1000).toFixed(2)}s`
                  : "-.--s"}
              </b>
            </p>
            <p className="block sm:hidden text-base md:text-lg lg:text-xs">
              Your Page Load Time:{" "}
              <b className="text-primary inline-block w-[40px]">
                {pageLoadTime !== undefined
                  ? `${(pageLoadTime / 1000).toFixed(2)}s`
                  : "-.--s"}
              </b>
            </p>
          </div>
        </div>
        <AreaChart
          className={chartClass}
          data={chartData}
          index="date"
          categories={["AvgLoadTime"]}
          valueFormatter={valueFormatter}
          colors={["emerald"]}
          showLegend={false}
          showGridLines={false}
          curveType="monotone"
          yAxisWidth={50}
          showAnimation={true}
          animationDuration={900}
          autoMinValue={true}
          customTooltip={customTooltip}
        />
      </div>
    </div>
  );
}
