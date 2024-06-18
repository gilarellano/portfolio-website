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
      <GithubIcon className="text-secondary w-6 h-6 shrink-0" />
      <LinkedInIcon className="text-secondary w-6 h-6 shrink-0" />
      <XIcon className="text-secondary w-6 h-6 shrink-0" />
      <InstagramIcon className="text-secondary w-6 h-6 shrink-0" />
      <SourceCodeIcon className="stroke-custom stroke-2 w-6 h-6 shrink-0" />
    </div>
  );
};

export default SocialMediaLinks;
