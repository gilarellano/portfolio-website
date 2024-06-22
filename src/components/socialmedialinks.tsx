import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  SourceCodeIcon,
} from "@/assets/icons";

const SocialMediaLinks = () => {
  return (
    <div className="flex mt-8 gap-5 items-center">
      <a href="https://github.com/gilarellano" target="_blank">
        <GithubIcon className="fill-secondary hover:fill-primary w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>
      <a href="https://www.linkedin.com/in/gilbertoarellano/" target="_blank">
        <LinkedInIcon className="fill-secondary hover:fill-primary w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>

      {/*<a href="twitter-soon-to-create?" target="_blank">
        <XIcon className="fill-secondary hover:fill-primary w-6 h-6 shrink-0" />
      </a>
      <a href="ig-coming-soon??" target="_blank">
        <InstagramIcon className="fill-secondary hover:fill-primary w-6 h-6 shrink-0" />
      </a>*/}

      <a href="https://github.com/gilarellano/portfolio-website" target="_blank">
        <SourceCodeIcon className="stroke-secondary hover:stroke-primary stroke-2 w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
