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
        aria-label="Download résumé"
      >
        <Button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3.5 py-2 text-sm/6 font-semibold text-primary-text shadow-md shadow-emerald-900/40 ring-1 ring-inset ring-emerald-400/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 active:translate-y-0 active:bg-emerald-700">
          <ResumeIcon className="animate-bob h-[18px] w-[18px] stroke-primary-text stroke-2" />
          Resume
        </Button>
      </a>

      <a
        href="https://github.com/gilarellano"
        target="_blank"
        aria-label="Github"
      >
        <GithubIcon className="fill-secondary hover:fill-primary w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>
      <a
        href="https://www.linkedin.com/in/gilbertoarellano/"
        target="_blank"
        aria-label="LinkedIn"
      >
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

      <a
        href="https://github.com/gilarellano/portfolio-website"
        target="_blank"
        aria-label="Source Code"
      >
        <SourceCodeIcon className="stroke-secondary hover:stroke-primary stroke-2 w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
