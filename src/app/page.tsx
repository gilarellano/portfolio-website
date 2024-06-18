import {
  Avatar,
  Bio,
  ListOfProjects,
  Menu,
  SocialMediaLinks,
  ListOfExperiences,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-background mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Avatar />
            {/* Area Chart #1 <div className="mt-8 w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3"><p>Area Chart #1</p></div>*/}
            {/* Area Chart #2 <div className="mt-8 w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3"><p>Area Chart #2</p></div>*/}
            <Menu />
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
    </main>
  );
}
