import React from "react";
import Image from "next/image";

interface Project {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    href: "github.com",
    imgSrc: "/project_screenshot.webp",
    imgAlt: "Academic Advising Tool Screenshot",
    title: "Academic Advising Tool",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: [
      "AWS",
      "Typescript",
      "React",
      "Next.js",
      "Jest",
      "SonarQube",
    ],
  },
  {
    href: "#",
    imgSrc: "/project_screenshot.webp",
    imgAlt: "Window Quote Project Screenshot",
    title: "Window Quote Project",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["C++", "Documentation", "CI/CD"],
  },
  {
    href: "#",
    imgSrc: "/project_screenshot.webp",
    imgAlt: "Speech Emulation Project Screenshot",
    title: "Long Short Term Memory: Speech Emulation",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["sci-kit learn", "API"],
  },
  {
    href: "#",
    imgSrc: "/project_screenshot.webp",
    imgAlt: "Game Of Life Project Screenshot",
    title: "Game Of Life: Showcasing OOP Practices",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["C++"],
  },
];

const ListOfProjects: React.FC = () => {
  return (
    <section id="projects" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      {/* Projects Header for smaller screens */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <ol className="group/list flex flex-col" role="list">
        {projects.map((project, index) => (
          <a key={index} href={project.href}>
            <li className="group relative mb-12 rounded-md transition-all hover:!opacity-100 group-hover/list:opacity-50">
              <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden lg:block rounded-md motion-reduce:transition-none group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>
              <div className="relative z-10 flex flex-row gap-x-4">
                <Image
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  width={86}
                  height={68}
                  className="mt-1 shrink-0 w-[86px] h-[68px] border-custom-width border-custom rounded-custom group-hover:border-emerald-300"
                />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-primary-text text-2xl lg:text-xl font-bold group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-secondary-text text-sm lg:text-xs">
                    {project.description}
                  </p>
                  <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-sm lg:text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </a>
        ))}
      </ol>
    </section>
  );
};

export default ListOfProjects;
