import { Bio, ListOfProjects, TopNav } from "@/components";

import ClientWrapper from "@/components/ClientWrapper";
import AreaChartWrapper from "@/components/AreaChart/AreaChartWrapper";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="bg-background min-h-screen font-sans">
      {/* Sticky top toolbar: nav + live spark stats */}
      <ClientWrapper>
        <TopNav>
          <Suspense fallback={<div className="hidden h-8 w-56 wide:block" />}>
            <AreaChartWrapper />
          </Suspense>
        </TopNav>
      </ClientWrapper>

      {/* Single-column body — sections cascade in (slide-enter) */}
      <main className="slide-enter-content mx-auto max-w-2xl px-6 pb-24 pt-12 md:px-8">
        <Bio />
        <ListOfProjects />
      </main>
    </div>
  );
}
