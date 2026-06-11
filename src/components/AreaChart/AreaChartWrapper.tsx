// components/AreaChartWrapper.tsx
import SparkStats from "./SparkStats";
import { fetchWeeklySummary, fetchSiteData } from "@/lib/data";

export default async function AreaChartWrapper() {
  const [weeklySummary, { totalVisitors, avgLoadTime }] = await Promise.all([
    fetchWeeklySummary(),
    fetchSiteData(),
  ]);

  return (
    <SparkStats
      chartData={weeklySummary}
      totalVisitors={totalVisitors}
      avgLoadTime={avgLoadTime}
    />
  );
}
