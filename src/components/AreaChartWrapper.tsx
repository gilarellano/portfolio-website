// components/AreaChartWrapper.tsx
import { fetchWeeklySummary } from "@/lib/data";
import { WeeklySummary } from "@/lib/definitions";
import AreaChartHero from "./AreaChartHero";

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

export default async function AreaChartWrapper() {
  const weeklySummary = await fetchWeeklySummary();
  const processedData = processWeeklySummary(weeklySummary);

  const totalVisitors = weeklySummary.reduce(
    (sum, week) => sum + week.visitor_count,
    0,
  );
  const overallAvgLoadTime = (
    weeklySummary.reduce((sum, week) => sum + week.average_load_time, 0) /
    weeklySummary.length
  ).toFixed(2);

  return (
    <AreaChartHero
      chartData={processedData}
      totalVisitors={totalVisitors}
      avgLoadTime={overallAvgLoadTime}
    />
  );
}
