import React from "react";
import Image from "next/image";

const ListOfProjects = () => {
  return (
    <section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-y-12 pb-36">
        <div className="flex flex-row gap-x-4">
          <Image
            src="/project_screenshot.webp"
            alt="Academic Advising Tool Screenshot"
            width={86}
            height={68}
            className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
          />
          <div className="flex flex-col gap-y-2">
            <h3 className="text-primary-text text-xl font-bold">
              Academic Advising Tool
            </h3>
            <p className="text-secondary-text text-xs">
              Build and maintain critical components used to construct Klaviyo’s
              frontend, across the whole product. Work closely with
              cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </p>
            <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
              <li>AWS</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Jest</li>
              <li>SonarQube</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-x-4">
          <Image
            src="/project_screenshot.webp"
            alt="Academic Advising Tool Screenshot"
            width={86}
            height={68}
            className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
          />
          <div className="flex flex-col gap-y-2">
            <h3 className="text-primary-text text-xl font-bold">
              Window Quote Project
            </h3>
            <p className="text-secondary-text text-xs">
              Build and maintain critical components used to construct Klaviyo’s
              frontend, across the whole product. Work closely with
              cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </p>
            <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
              <li>C++</li>
              <li>Documentation</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-x-4">
          <Image
            src="/project_screenshot.webp"
            alt="Academic Advising Tool Screenshot"
            width={86}
            height={68}
            className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
          />
          <div className="flex flex-col gap-y-2">
            <h3 className="text-primary-text text-xl font-bold">
              Long Short Term Memory: Speech Emulation
            </h3>
            <p className="text-secondary-text text-xs">
              Build and maintain critical components used to construct Klaviyo’s
              frontend, across the whole product. Work closely with
              cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </p>
            <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
              <li>sci-kit learn</li>
              <li>API</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-x-4">
          <Image
            src="/project_screenshot.webp"
            alt="Academic Advising Tool Screenshot"
            width={86}
            height={68}
            className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
          />
          <div className="flex flex-col gap-y-2">
            <h3 className="text-primary-text text-xl font-bold">
              Game Of Life: Showcasing OOP Practices
            </h3>
            <p className="text-secondary-text text-xs">
              Build and maintain critical components used to construct Klaviyo’s
              frontend, across the whole product. Work closely with
              cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </p>
            <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
              <li>C++</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListOfProjects;
