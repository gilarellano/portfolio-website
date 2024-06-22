import exp from "constants";
import React from "react";

interface Experience {
  href: string;
  period: string;
  role: string;
  company: string;
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    href: "gilbertowindows.com",
    period: "2014 - PRESENT",
    role: "Operations Manager & Systems Developer",
    company: "Gilberto Arellano Windows, San Francisco",
    description:
      "Managed daily operations, staffing, inventory, and customer service to ensure a high-quality dining experience. Collaborated on menu development, marketing strategies, and financial planning, driving significant growth and establishing our taqueria as a beloved local spot.",
    technologies: ["CRM", "Quickbooks"],
  },
  {
    href: "gilbertowindows.com",
    period: "2016 - 2019",
    role: "Restaurant Co-Owner",
    company: "La Capilla, Berkeley",
    description:
      "Managed daily operations, staffing, inventory, and customer service to ensure a high-quality dining experience. Collaborated on menu development, marketing strategies, and financial planning, driving significant growth and establishing our taqueria as a beloved local spot.",
  },
];

const ListOfExperiences: React.FC = () => {
  return (
    <section
      id="experiences"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <ol className="group/list flex flex-col" role="list">
        {experiences.map((experience, index) => (
          <a key={index} href={experience.href}>
            <li className="group relative mb-10 rounded-md transition-all hover:!opacity-100 group-hover/list:opacity-50">
              <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden lg:block rounded-md motion-reduce:transition-none group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>
              <div className="relative z-10 flex flex-col gap-y-2 lg:flex-row lg:gap-x-4">
                <p className="pt-0.5 lg:w-[86px] shrink-0 text-secondary-text font-light text-sm lg:text-xs">
                  {experience.period}
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-col pb-2">
                    <div className="pb-2">
                      <h3 className="text-primary-text text-2xl lg:text-xl font-bold group-hover:text-primary">
                        {experience.role}
                      </h3>
                      <h4 className="text-secondary-text text-sm lg:text-xs font-bold">
                        {experience.company}
                      </h4>
                    </div>
                    <p className="text-secondary-text text-sm lg:text-xs">
                      {experience.description}
                    </p>
                  </div>
                  {experience.technologies && (
                    <ul className="flex flex-grid pt-2 gap-3 text-primary text-sm lg:text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
                      {experience.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          </a>
        ))}
      </ol>
    </section>
  );
};

export default ListOfExperiences;
