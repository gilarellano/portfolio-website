import React from "react";
import Image from "next/image";
import VisitorGlobeWrapper from "./VisitorGlobe/VisitorGlobeWrapper";
import LocationGreetingWrapper from "./VisitorGlobe/LocationGreetingWrapper";

// antfu.me-style facts: muted label column, bold linked values.
const factLink =
  "text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2";

const Bio = () => {
  return (
    // `relative` anchors the absolutely-parked globe to this section.
    <section id="bio" className="relative isolate mb-24 scroll-mt-24">
      {/* Globe — right-anchored at every size (absolute), so it sits on the right
          and passes behind the content. right-0 anchors it, translate-x slides it
          out, -top-10 raises it. Size scales per breakpoint in VisitorGlobe.tsx. */}
      <div className="absolute right-0 -top-10 z-0 translate-x-[5%]">
        <VisitorGlobeWrapper />
      </div>

      {/* Greeting traces the globe's top-left curve at every size. pr-* nudges it
          toward/away from the globe; the staircase step is the city's mr-* in
          LocationGreeting.tsx. */}
      <div className="relative z-10 mb-12 pr-28 wide:mb-28 wide:pr-64">
        <LocationGreetingWrapper variant="hero" />
      </div>

      {/* Identity — squared to the column; the globe passes behind it. */}
      <div className="relative z-10 mb-6 flex items-center gap-4">
        <Image
          src="/headshot.webp"
          alt="Gilberto Arellano"
          width={384}
          height={384}
          priority
          quality={95}
          className="h-16 w-16 shrink-0 rounded-full border-2 border-neutral-200/90 object-cover sm:h-20 sm:w-20"
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary-text sm:text-3xl">
            Gilberto Arellano
          </h1>
          <p className="mt-1 text-base text-secondary-text">
            Business Owner / Developer
          </p>
        </div>
      </div>

      {/* Positioning */}
      <p className="relative z-10 mb-8 leading-relaxed text-secondary-text text-base">
        I build automated systems for businesses in manufacturing and services:
        quoting engines, CRM workflows, and the data tools that keep a
        production shop running.
      </p>

      {/* Facts */}
      <div className="relative z-10 space-y-2 text-base">
        <p>
          <span className="block w-28 font-mono text-sm text-secondary-text sm:inline-block">
            Working at
          </span>
          <a
            href="https://www.gilbertowindows.com/"
            target="_blank"
            className={factLink}
          >
            🪟 Gilberto Arellano Windows
          </a>
        </p>
        <p>
          <span className="block w-28 font-mono text-sm text-secondary-text sm:inline-block">
            Created
          </span>
          <a href="#projects" className={factLink}>
            🧮 Sash Solutions
          </a>
        </p>
        <p>
          <span className="block w-28 font-mono text-sm text-secondary-text sm:inline-block">
            This site
          </span>
          <a
            href="https://github.com/gilarellano/portfolio-website"
            target="_blank"
            className={factLink}
          >
            👨🏽‍💻 Source code
          </a>
          <span className="mx-2 hidden text-secondary-text sm:inline">·</span>
          <a
            href="https://www.figma.com/design/xukmU5squhP9sHETmApbyK/Personal-Portfolio-Website?node-id=103-985&t=DY88M8zzrCUA4mzc-10"
            target="_blank"
            className={`${factLink} hidden sm:inline`}
          >
            🎨 Figma design
          </a>
        </p>
      </div>
    </section>
  );
};

export default Bio;
