"use client";

import React, { useState, useEffect } from "react";
import {
  BioIcon,
  ProjectIcon,
  ExperienceIcon,
  ResumeIcon,
} from "@/assets/icons";

interface MenuProps {
  activeItem: string;
  handleClick: (item: string) => void;
}

const Menu: React.FC<MenuProps> = ({ activeItem, handleClick }) => {
  return (
    <nav className="nav hidden lg:block">
      <ul
        role="list"
        className="bg-[#2E2E2E] gap-1 bg-opacity-10 mt-8 p-1.5 flex flex-col border-2 border-custom rounded-custom w-fit h-fit"
      >
        <li
          className={`group/item ${activeItem === "#bio" ? "bg-green-950 rounded-md text-primary" : ""}`}
        >
          <a
            href="#bio"
            className="flex flex-row gap-1.5 items-center rounded-md py-1.5 px-3 hover:bg-green-950"
            onClick={() => handleClick("#bio")}
          >
            <BioIcon
              className={`${activeItem === "#bio" ? "stroke-primary" : "stroke-secondary"} w-5 h-5 group-hover/item:stroke-primary shrink-0`}
            />
            <p
              className={`${activeItem === "#bio" ? "text-primary" : "text-secondary-text"} text-sm group-hover/item:text-primary`}
            >
              Bio
            </p>
          </a>
        </li>

        <li
          className={`group/item ${activeItem === "#projects" ? "bg-green-950 rounded-md text-primary" : ""}`}
        >
          <a
            href="#projects"
            className="flex flex-row rounded-md gap-1.5 items-center py-1.5 px-3 hover:bg-green-950"
            onClick={() => handleClick("#projects")}
          >
            <ProjectIcon
              className={`${activeItem === "#projects" ? "stroke-primary" : "stroke-secondary"} w-5 h-5 group-hover/item:stroke-primary shrink-0`}
            />
            <p
              className={`${activeItem === "#projects" ? "text-primary" : "text-secondary-text"} text-sm group-hover/item:text-primary`}
            >
              Projects
            </p>
          </a>
        </li>

        <li
          className={`group/item ${activeItem === "#experiences" ? "bg-green-950 rounded-md text-primary" : ""}`}
        >
          <a
            href="#experiences"
            className="flex flex-row rounded-md gap-1.5 items-center py-1.5 px-3 hover:bg-green-950"
            onClick={() => handleClick("#experiences")}
          >
            <ExperienceIcon
              className={`${activeItem === "#experiences" ? "stroke-primary" : "stroke-secondary"} w-5 h-5 group-hover/item:stroke-primary shrink-0`}
            />
            <p
              className={`${activeItem === "#experiences" ? "text-primary" : "text-secondary-text"} text-sm group-hover/item:text-primary`}
            >
              Experiences
            </p>
          </a>
        </li>

        <li className="group/item">
          <a
            href="/ArellanoGilbertoResume.pdf"
            target="_blank"
            className="flex flex-row rounded-md gap-1.5 items-center py-1.5 px-3 hover:bg-green-950"
          >
            <ResumeIcon className="w-5 h-5 stroke-secondary group-hover/item:stroke-primary shrink-0" />
            <p className="text-secondary-text text-sm group-hover/item:text-primary">
              Resume
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
