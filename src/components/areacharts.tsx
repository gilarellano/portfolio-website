"use client";

import React from "react";
import MouseClickIcon from "../assets/icons/mouse_click.svg";
import TrophyIcon from "../assets/icons/trophy_icon.svg";
import { AreaChart } from "@tremor/react";

interface ChartData {
  date: string;
  Visitors: number;
  AvgLoadTime: number;
}

interface CustomTooltipProps {
  payload?: any[];
  active?: boolean;
}

const chartdata = [
  { date: "Jan 1", Visitors: 5, AvgLoadTime: 1.23 },
  { date: "Jan 8", Visitors: 10, AvgLoadTime: 1.14 },
  { date: "Jan 15", Visitors: 15, AvgLoadTime: 1.19 },
  { date: "Jan 22", Visitors: 12, AvgLoadTime: 1.32 },
  { date: "Jan 29", Visitors: 8, AvgLoadTime: 1.6 },
  { date: "Feb 5", Visitors: 3, AvgLoadTime: 1.42 },
  { date: "Feb 12", Visitors: 7, AvgLoadTime: 1.39 },
  { date: "Feb 19", Visitors: 14, AvgLoadTime: 1.25 },
  { date: "Feb 26", Visitors: 9, AvgLoadTime: 1.33 },
  { date: "Mar 4", Visitors: 11, AvgLoadTime: 1.49 },
  { date: "Mar 11", Visitors: 5, AvgLoadTime: 1.54 },
  { date: "Mar 18", Visitors: 20, AvgLoadTime: 1.1 },
];

const valueFormatter = (number: number): string => {
  return `${number.toFixed(2)} s`;
};

const customTooltip = (props: CustomTooltipProps) => {
  const { payload, active } = props;
  if (!active || !payload || payload.length === 0) return null;

  const date = payload[0].payload.date;

  return (
    <div className="flex rounded-tremor-default border-custom-width border-custom bg-background p-2 text-tremor-default shadow-tremor-dropdown">
      {payload.map((category, idx) => (
        <div className="flex flex-1 space-x-2.5">
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

export default function AreaChartHero() {
  return (
    <div className="lg:max-w-[490px]">
      {/* Weekly Visitor Chart */}
      <div className="bg-[#2E2E2E] bg-opacity-10 mb-8 p-4 border-custom-width border-custom rounded-custom">
        <div className="flex flex-row justify-between items-center">
          <span className="flex flex-row gap-x-1 items-center">
            <h2 className="text-base md:text-lg lg:text-base text-secondary-text">
              Total Visitors:
            </h2>
            <p className="text-base md:text-lg lg:text-base font-bold text-primary">
              231
            </p>
          </span>
          <div className="flex flex-row items-center gap-x-1 py-1 px-2 border rounded-custom text-primary bg-green-950 border-green-950">
            <MouseClickIcon className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[18px] lg:h-[18px]" />
            <p className="text-xs md:text-sm lg:text-xs">
              You&apos;re Visitor #<b>32</b>
            </p>
          </div>
        </div>
        <AreaChart
          className="h-[80px] mt-3"
          data={chartdata}
          index="date"
          categories={["Visitors"]}
          colors={["emerald"]}
          showLegend={false}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
          showAnimation={true}
          animationDuration={900}
          autoMinValue={true}
          customTooltip={customTooltip}
        />
      </div>

      {/* Load Time Chart */}
      <div className="bg-[#2E2E2E] bg-opacity-10 p-4 border-custom-width border-custom rounded-custom">
        <div className="flex flex-row justify-between items-center">
          <span className="flex flex-row gap-x-1 items-center">
            <h2 className="text-base md:text-lg lg:text-base text-secondary-text">
              Page Load Time:
            </h2>
            <p className="text-base md:text-lg lg:text-base font-bold text-primary">
              1.23 s
            </p>
          </span>
          <div className="hidden sm:flex flex-row items-center gap-x-1 py-1 px-2 border rounded-custom text-primary bg-green-950 border-green-950">
            <TrophyIcon className="w-[16px] h-[16px]lg:w-[14px] lg:h-[14px]" />
            <p className="text-xs md:text-sm lg:text-xs">
              Rank: <b>Top 10.24</b>%
            </p>
          </div>
        </div>
        <AreaChart
          className="h-[80px] mt-3"
          data={chartdata}
          index="date"
          categories={["AvgLoadTime"]}
          valueFormatter={valueFormatter}
          colors={["emerald"]}
          showLegend={false}
          yAxisWidth={60}
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
