import React from "react";
import SectionHeader from "./SectionHeader";

const Bio = () => {
  return (
    <section
      id="bio"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeader title="About" />
      <div className="leading-relaxed text-secondary-text text-base">
        <p className="mb-4">
          I graduated from Chapman University with a Bachelor&apos;s in Software
          Engineering and now handle the day-to-day operations at{" "}
          <a
            href="https://www.gilbertowindows.com/"
            target="_blank"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            🪟 Gilberto Arellano Windows
          </a>
          , our family-owned wood window company. My job involves making sure
          everything runs smoothly and updating our systems to digital
          platforms. I&apos;ve made our workflow more efficient, blending
          traditional craftsmanship with modern technology.
        </p>

        <p className="mb-4">
          Feel free to check out the{" "}
          <a
            href="https://github.com/gilarellano/portfolio-website"
            target="_blank"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            👨🏽‍💻 source code
          </a>{" "}
          or{" "}
          <a
            href="https://www.figma.com/design/xukmU5squhP9sHETmApbyK/Personal-Portfolio-Website?node-id=103-985&t=DY88M8zzrCUA4mzc-10"
            target="_blank"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            🎨 figma design
          </a>{" "}
          for this site. Explore my projects to see how I design, document,
          develop, and test software solutions.
        </p>
      </div>
    </section>
  );
};

export default Bio;
