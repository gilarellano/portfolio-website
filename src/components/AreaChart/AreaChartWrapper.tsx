// components/AreaChartWrapper.tsx
import AreaChartHero from "./AreaChartHero";
import { fetchWeeklySummary, fetchSiteData } from "@/lib/data";

export default async function AreaChartWrapper() {
  const [weeklySummary, { totalVisitors, avgLoadTime }] = await Promise.all([
    fetchWeeklySummary(),
    fetchSiteData(),
  ]);

  return (
    <AreaChartHero
      chartData={weeklySummary}
      totalVisitors={totalVisitors}
      avgLoadTime={avgLoadTime}
    />
  );
}
