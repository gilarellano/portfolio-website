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
        <ul role="list" className="bg-[#2E2E2E] bg-opacity-10 mt-8 p-1.5 flex flex-col border-2 border-custom rounded-custom w-fit h-fit">
            <li className="group/item">
                <a href="#bio" className="flex flex-row gap-1.5 items-center rounded-md py-1.5 px-3 hover:bg-green-950">
                    <BioIcon className="w-5 h-5 stroke-secondary group-hover/item:stroke-primary shrink-0" />
                    <p className="text-secondary-text text-base group-hover/item:text-primary">Bio</p>
                </a>
            </li>

            <li className="group/item">
                <a href="#projects" className="flex flex-row rounded-md gap-1.5 items-center py-1.5 px-3 hover:bg-green-950">
                    <ProjectIcon className="w-5 h-5 stroke-secondary group-hover/item:stroke-primary shrink-0" />
                    <p className="text-secondary-text text-base group-hover/item:text-primary">Projects</p>
                </a>
            </li>

            <li className="group/item">
                <a href="#experiences" className="flex flex-row rounded-md gap-1.5 items-center py-1.5 px-3 hover:bg-green-950">
                    <ExperienceIcon className="w-5 h-5 stroke-secondary group-hover/item:stroke-primary shrink-0" />
                    <p className="text-secondary-text text-base group-hover/item:text-primary">Experience</p>
                </a>
            </li>

            <li className="group/item">
                <a href="/ArellanoGilbertoResume.pdf" target="_blank" className="flex flex-row rounded-md gap-1.5 items-center py-1.5 px-3 hover:bg-green-950">
                    <ResumeIcon className="w-5 h-5 stroke-secondary group-hover/item:stroke-primary shrink-0" />
                    <p className="text-secondary-text text-base group-hover/item:text-primary">Resume</p>
                </a>
            </li>

        </ul>
      </nav>
    );
  };
  

export default Menu;
