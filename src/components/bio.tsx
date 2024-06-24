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
      <div className="leading-relaxed text-secondary-text text-base">
        <p className="mb-4">
          I graduated from Chapman University with a Bachelor's in Software
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
          platforms. By bringing in advanced software solutions, I've made our
          workflow more efficient, blending traditional craftsmanship with
          modern technology.
        </p>

        <p className="mb-4">
          Before this, I used to run a{" "}
          <a
            href="https://www.berkeleyside.org/2017/05/24/la-capilla-in-west-berkeley"
            target="_blank"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            🌮 small taqueria
          </a>
          , where I learned a lot about managing, delegating, and running a
          business. It was a great experience that taught me the value of
          effective communication, teamwork, and leadership. These skills have
          been helpful in my software engineering journey, allowing me to tackle
          technical challenges with a practical, business-focused approach.
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
          for this site. I initially designed it in Figma and then brought it to
          life. Explore my projects to see how I design, document, develop, and
          test software solutions.
        </p>
      </div>
    </section>
  );
};

export default Bio;
