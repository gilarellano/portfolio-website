import React from "react";
import Image from "next/image";
import HoverHighlight from "./HoverHighlight";
import TechPills from "./TechPills";
import ProductCard from "./ProductCard";

interface Project {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  technologies: string[];
}

// Lead product card. TODO: swap demo/code/screenshot/copy when the live app ships.
const product = {
  title: "Sash Solutions",
  tagline: "Used daily at our family window business.",
  description:
    "A quoting app that turns a window's measurements, wood, glass, and type into an instant, accurate estimate — cutting quote prep by roughly 90%.",
  imgSrc: "/sash_project_screenshot.webp",
  imgAlt: "Sash Solutions window quoting app",
  technologies: ["C++", "Documentation", "CI/CD"],
  liveHref: "https://gilarellano.github.io/sash-solutions/",
  codeHref: "https://github.com/gilarellano/sash-solutions",
};

const projects: Project[] = [
  {
    href: "https://github.com/gilarellano/academic-advising-tool",
    imgSrc: "/advising_project_screenshot.webp",
    imgAlt: "Academic Advising Tool Screenshot",
    title: "Academic Advising Tool",
    description:
      "Developed and maintained a comprehensive academic advising tool, deployed on AWS EC2 and Vercel, using TypeScript, React, and Next.js. Implemented unit and integration tests with Jest, and generated code quality reports using SonarQube.",
    technologies: [
      "AWS",
      "TypeScript",
      "React",
      "Next.js",
      "Jest",
      "SonarQube",
    ],
  },
  {
    href: "https://gilarellano.github.io/LSTM_SpeechEmulation_Chelsea/",
    imgSrc: "/LSTM_project_screenshot.webp",
    imgAlt: "Speech Emulation Project Screenshot",
    title: "Long Short Term Memory: Speech Emulation",
    description:
      "Developed a speech emulation project using LSTM models with TensorFlow and Keras, comparing it to GPT models. Processed and cleaned datasets using Python and NLTK, and visualized data with WordCloud and Matplotlib.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "NLTK",
      "WordCloud",
      "Matplotlib",
    ],
  },
];

// One list so the product and side projects share width + hover behavior.
const ListOfProjects: React.FC = () => {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <ol className="group/list flex flex-col" role="list">
        <ProductCard {...product} />

        {projects.map((project, index) => (
          <li
            key={index}
            className="group relative mb-12 rounded-md lg:transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <a href={project.href} target="_blank">
              <HoverHighlight />
              <div className="relative z-10 flex flex-row gap-x-4">
                <Image
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  width={86}
                  height={68}
                  className="mt-1 shrink-0 w-[86px] h-[68px] rounded-custom group-hover:border-emerald-300"
                />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-primary-text text-2xl leading-tight lg:text-lg font-bold lg:group-hover:text-emerald-400">
                    {project.title}
                  </h3>
                  <p className="leading-normal text-secondary-text text-sm lg:text-sm">
                    {project.description}
                  </p>
                  <TechPills items={project.technologies} />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ListOfProjects;
