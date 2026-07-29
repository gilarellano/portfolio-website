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

// Lead product card.
const product = {
  title: "Sash Solutions",
  tagline: "Used daily at our family window business.",
  description:
    "Quoting software for custom window shops. Build quotes for windows, doors, and new-construction units from a catalog that already knows your rates. Everything reprices live and exports as a client-ready PDF, cutting quote prep by roughly 90%.",
  imgSrc: "/sash_project_screenshot.webp",
  imgAlt: "Sash Solutions quoting software landing page",
  technologies: ["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Docker"],
  liveHref: "https://sashsolutions.app",
};

const projects: Project[] = [
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
            className="group relative mb-12 rounded-md wide:transition-all wide:hover:!opacity-100 wide:group-hover/list:opacity-50"
          >
            <a href={project.href} target="_blank">
              <HoverHighlight />
              <div className="relative z-10 flex flex-row gap-x-4">
                <Image
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  width={86}
                  height={68}
                  className="mt-1 shrink-0 w-[86px] h-[68px] rounded-custom group-hover:border-primary"
                />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-primary-text text-2xl leading-tight wide:text-lg font-bold wide:group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="leading-normal text-secondary-text text-sm">
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
