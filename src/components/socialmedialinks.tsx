import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  ResumeIcon,
  SourceCodeIcon,
} from "@/assets/icons";
import { Button } from "@headlessui/react";

const SocialMediaLinks = () => {
  return (
    <div className="flex lg:ml-4 gap-5 items-center">
      <a
        href="/ArellanoGilbertoResume.pdf"
        target="_blank"
        className="lg:hidden"
        aria-label="Resume"
      >
        <Button className="inline-flex items-center gap-2 rounded-md shadow-md py-1.5 px-3 text-sm/6 font-semibold text-primary-text bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800">
          <ResumeIcon className="stroke-primary-text stroke-1.5 w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
          Resume
        </Button>
      </a>

      <a href="https://github.com/gilarellano" target="_blank" aria-label="Github">
        <GithubIcon className="fill-secondary hover:fill-primary w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>
      <a href="https://www.linkedin.com/in/gilbertoarellano/" target="_blank" aria-label="LinkedIn">
        <LinkedInIcon className="fill-secondary hover:fill-primary w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>

      {/*
      <a href="twitter-coming-soon" target="_blank" aria-label="Twitter">
        <XIcon className="fill-secondary hover:fill-primary w-6 h-6 shrink-0" />
      </a>
      <a href="ig-coming-soon" target="_blank" aria-label="Instagram">
        <InstagramIcon className="fill-secondary hover:fill-primary w-6 h-6 shrink-0" />
      </a>
      */}

      <a href="https://github.com/gilarellano/portfolio-website" target="_blank" aria-label="Source Code">
        <SourceCodeIcon className="stroke-secondary hover:stroke-primary stroke-2 w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
