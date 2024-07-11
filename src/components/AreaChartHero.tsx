"use client";

import React from "react";
import { MouseClickIcon, ClockIcon } from "@/assets/icons";
import { AreaChart } from "@tremor/react";

interface ChartData {
  date: string;
  Visitors: number;
  AvgLoadTime: number;
}

interface AreaChartHeroProps {
  chartData: ChartData[];
  totalVisitors: number;
  avgLoadTime: string;
  pageLoadTime: number | null;
  visitorId: number | null;
}

interface CustomTooltipProps {
  payload?: any[];
  active?: boolean;
}

const valueFormatter = (number: number): string => {
  return `${number.toFixed(2)}s`;
};

const customTooltip = ({
  payload = [],
  active = false,
}: CustomTooltipProps) => {
  if (!active || payload.length === 0) return null;

  const date = payload[0].payload.date;

  return (
    <div className="flex rounded-tremor-default border-custom-width border-custom bg-background p-2 text-tremor-default shadow-tremor-dropdown">
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
  pageLoadTime,
  visitorId,
}: AreaChartHeroProps) {
  return (
    <div className="lg:max-w-[400px]">
      <div className="flex flex-col items-center bg-neutral-700/20 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg mb-8 p-4 rounded-custom">
        <div className="flex flex-row justify-between w-full px-0.5">
          <span className="hidden sm:flex flex-row gap-x-1 items-center">
            <h2 className="text-base md:text-lg lg:text-sm text-secondary-text">
              Total Visitors:
            </h2>
            <p className="text-base md:text-lg lg:text-sm font-bold text-primary-text">
              {totalVisitors}
            </p>
          </span>
          <div className="flex flex-row items-center gap-x-1 py-1 px-2 text-secondary-text rounded-custom">
            <MouseClickIcon className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[18px] lg:h-[18px]" />
            <p className="text-base md:text-lg lg:text-sm">
              You&apos;re Visitor{" "}
              <b className="text-primary">#{visitorId !== null ? `${visitorId}`: '--'}</b>
            </p>
          </div>
        </div>

        <AreaChart
          className="h-[80px] mt-3"
          data={chartData}
          index="date"
          categories={["Visitors"]}
          colors={["emerald"]}
          showLegend={false}
          yAxisWidth={32}
          onValueChange={(v) => console.log(v)}
          showAnimation={true}
          animationDuration={900}
          autoMinValue={true}
          customTooltip={customTooltip}
        />
      </div>

      <div className="flex flex-col items-center bg-neutral-700/20 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg mb-8 p-4 rounded-custom">
        <div className="flex flex-row justify-between w-full px-0.5">
          <span className="hidden sm:flex flex-row gap-x-1 items-center">
            <h2 className="text-base md:text-lg lg:text-sm text-secondary-text">
              Avg. Page Load Time:
            </h2>
            <p className="text-base md:text-lg lg:text-sm font-bold text-primary-text">
              {avgLoadTime}s
            </p>
          </span>
          <div className="flex flex-row items-center gap-x-1 py-1 px-2 rounded-custom text-secondary-text">
            <ClockIcon className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[14px] lg:h-[14px]" />
            <p className="hidden sm:block text-base md:text-lg lg:text-sm">
              Your Time:{" "}
              <b className="text-primary inline-block w-[40px]">
                {pageLoadTime !== null ? `${pageLoadTime}s` : "-.--s"}
              </b>
            </p>
            <p className="block sm:hidden text-base md:text-lg lg:text-sm">
              Your Page Load Time:{" "}
              <b className="text-primary inline-block w-[40px]">
                {pageLoadTime !== null ? `${pageLoadTime}s` : "-.--s"}
              </b>
            </p>
          </div>
        </div>
        <AreaChart
          className="h-[80px] mt-3"
          data={chartData}
          index="date"
          categories={["AvgLoadTime"]}
          valueFormatter={valueFormatter}
          colors={["emerald"]}
          showLegend={false}
          yAxisWidth={50}
          onValueChange={(v) => console.log(v)}
          showAnimation={true}
          animationDuration={900}
          autoMinValue={true}
          customTooltip={customTooltip}
        />
      </div>
    </div>
  );
}
