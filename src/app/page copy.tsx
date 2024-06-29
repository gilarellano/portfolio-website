"use client";

import { useState, useEffect, Suspense } from "react";
import {
  Avatar,
  Bio,
  ListOfProjects,
  Menu,
  SocialMediaLinks,
  ListOfExperiences,
  AreaChartHero,
} from "@/components";

import useIntersectionObserver from "@/lib/useIntersectionObserver";
import VisitorsTable from "@/components/VisitorsTable";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [activeItem, setActiveItem] = useState<string>("");

  // Changes the URL based on the section
  useIntersectionObserver(setActiveSection);

  useEffect(() => {
    // Set the active item based on the current URL hash when the component mounts
    setActiveItem(window.location.hash);

    const handleHashChange = () => {
      setActiveItem(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Update the active item whenever the active section changes
    setActiveItem(activeSection);
  }, [activeSection]);

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-background mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            {/*
            <Avatar />
            <AreaChartHero />
            <Menu activeItem={activeItem} handleClick={handleClick} />
            */}
            <Suspense>
             <VisitorsTable />
            </Suspense>
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
