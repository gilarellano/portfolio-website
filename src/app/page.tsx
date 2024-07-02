import {
  Avatar,
  Bio,
  ListOfProjects,
  Menu,
  SocialMediaLinks,
  ListOfExperiences,
} from "@/components";

import ClientWrapper from "@/components/ClientWrapper";
import AreaChartWrapper from "@/components/AreaChartWrapper";

export default async function Home() {

  return (
    <div className="bg-background mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Column */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Avatar />
            <AreaChartWrapper />
            <ClientWrapper>
              <Menu />
            </ClientWrapper>
          </div>
          <SocialMediaLinks />
        </div>

        {/* Right Column */}
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <Bio />
          <ListOfProjects />
          <ListOfExperiences />
        </div>
      </div>
    </div>
  );
}
