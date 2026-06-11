import React from "react";
import Image from "next/image";
import VisitorGlobeWrapper from "./VisitorGlobe/VisitorGlobeWrapper";
import LocationGreetingWrapper from "./VisitorGlobe/LocationGreetingWrapper";

// Facts in the antfu.me format: muted label column, bold linked values.
const factLink =
  "text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2";

const Bio = () => {
  return (
    // `relative` anchors the absolutely-parked globe to this section.
    <section id="bio" className="relative isolate mb-24 scroll-mt-24">
      {/* Globe — parked LEFT at xl (absolute, right ~22% tucked under the
          column); below xl it sits in-flow, centered, caption beneath.
          KNOBS: xl:-top-10 = vertical (more negative = higher, toward nav);
                 xl:translate-x-[22%] = how far it pokes into the column. */}
      <div className="mb-6 flex flex-col items-center xl:absolute xl:-top-10 xl:right-full xl:translate-x-[22%]">
        <VisitorGlobeWrapper />
        <div className="mt-3 xl:hidden">
          <LocationGreetingWrapper />
        </div>
      </div>

      {/* Greeting — traces the sphere's upper-right curve at the top of the
          column (xl only).
          ┌─ CLOSER / FARTHER FROM THE GLOBE: change `xl:pl-6` below.
          │    smaller pl = closer (e.g. pl-2); use a negative margin like
          │    `xl:-ml-3` to sit ONTO the globe's edge.
          └─ STAIRCASE STEP between the two lines: the `ml-4` on the city
               line in components/VisitorGlobe/LocationGreeting.tsx. */}
      <div className="relative z-10 mb-24 hidden xl:block xl:pl-4">
        <LocationGreetingWrapper variant="hero" />
      </div>

      {/* Identity — picture first, left-aligned and squared to the column,
          directly above the bio. Ignores the globe (sphere passes behind). */}
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

      {/* Positioning — squared to the column */}
      <p className="relative z-10 mb-8 leading-relaxed text-secondary-text text-base">
        I build automated systems for businesses in manufacturing and
        services: quoting engines, CRM workflows, and the data tools that
        keep a production shop running.
      </p>

      {/* Facts */}
      <div className="relative z-10 space-y-2 text-base">
        <p>
          <span className="inline-block w-28 font-mono text-sm text-secondary-text">
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
          <span className="inline-block w-28 font-mono text-sm text-secondary-text">
            Created
          </span>
          <a href="#projects" className={factLink}>
            🧮 Sash Solutions
          </a>
        </p>
        <p>
          <span className="inline-block w-28 font-mono text-sm text-secondary-text">
            This site
          </span>
          <a
            href="https://github.com/gilarellano/portfolio-website"
            target="_blank"
            className={factLink}
          >
            👨🏽‍💻 Source code
          </a>
          <span className="mx-2 text-secondary-text">·</span>
          <a
            href="https://www.figma.com/design/xukmU5squhP9sHETmApbyK/Personal-Portfolio-Website?node-id=103-985&t=DY88M8zzrCUA4mzc-10"
            target="_blank"
            className={factLink}
          >
            🎨 Figma design
          </a>
        </p>
      </div>
    </section>
  );
};

export default Bio;
