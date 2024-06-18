import React from "react";

const Bio = () => {
  return (
    <section
      id="bio"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="leading-relaxed text-secondary-text text-base font-light">
        {/* 1st Paragraph */}
        <p className="mb-4">
          As a recent graduate from Chapman University with a Bachelors in
          Software Engineering, I bring a blend of technical skills and hands-on
          experience. I ran a small taqueria in Berkeley, where I learned
          business operations and how to manage a team. Currently, Im helping
          manage my familys wood window manufacturing business in San Francisco,
          focusing on transitioning to digital systems. One of my key projects
          is a Window Quote Calculator that speeds up quote generation.
        </p>

        {/* 2nd Paragraph */}
        <p className="mb-4">
          Ive planned, designed, developed, tested, and deployed various
          projects using technologies like React, Next.js, TypeScript,
          PostgreSQL, and AWS. I enjoy combining business insights with software
          development to create practical solutions that meet both operational
          and customer needs. This approach helps me see the bigger picture and
          understand how technology impacts business performance
        </p>
      </div>
    </section>
  );
};

export default Bio;
