import React from "react";
import {
  BioIcon,
  ProjectIcon,
  ExperienceIcon,
  ResumeIcon,
} from "@/assets/icons";

const Menu = () => {
  return (
    <nav className="nav hidden lg:block">
      <div className="mt-8 flex flex-col p-4 items-start border-2 border-custom rounded-custom gap-4 w-fit h-fit">
        <div className="flex flex-row gap-2 items-center">
          <BioIcon className="w-6 h-6 stroke-custom shrink-0" />
          <a href="#bio" className="text-secondary-text text-base">
            Bio
          </a>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <ProjectIcon className="w-6 h-6 stroke-custom shrink-0" />
          <a href="#projects" className="text-secondary-text text-base">
            Projects
          </a>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <ExperienceIcon className="w-6 h-6 stroke-custom shrink-0" />
          <a href="#experience" className="text-secondary-text text-base">
            Experience
          </a>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <ResumeIcon className="w-6 h-6 stroke-custom shrink-0" />
          <a
            href="/ArellanoGilbertoResume.pdf"
            className="text-secondary-text text-base"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
