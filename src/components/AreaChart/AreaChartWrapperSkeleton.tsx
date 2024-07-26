// components/AreaChartWrapperSkeleton.tsx
export default function AreaChartWrapperSkeleton() {
  return (
    <div className="lg:max-w-[400px] animate-pulse">
      {/* Total Visitors Section Skeleton */}
      <div className="flex flex-col items-center bg-neutral-700/20 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg mb-8 p-4 rounded-custom">
        <div className="flex flex-row justify-between w-full px-0.5">
          <div className="hidden sm:flex flex-row gap-x-1 items-center">
            <div className="w-24 h-5 bg-neutral-700 rounded"></div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-40 h-5 bg-neutral-700 rounded"></div>
          </div>
        </div>
        <div className="h-[80px] mt-3 w-full bg-neutral-700 rounded"></div>
      </div>

      {/* Avg. Page Load Time Section Skeleton */}
      <div className="flex flex-col items-center bg-neutral-700/20 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg mb-8 p-4 rounded-custom">
        <div className="flex flex-row justify-between w-full px-0.5">
          <div className="hidden sm:flex flex-row gap-x-1 items-center">
            <div className="w-24 h-5 bg-neutral-700 rounded"></div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-40 h-5 bg-neutral-700 rounded"></div>
          </div>
        </div>
        <div className="h-[80px] mt-3 w-full bg-neutral-700 rounded"></div>
      </div>
    </div>
  );
}
