import React from "react";
import Image from "next/image";
import { RiArrowRightUpLine } from "@remixicon/react";
import { GithubIcon } from "@/assets/icons";
import { Button } from "@headlessui/react";
import TechPills from "./TechPills";
import HoverHighlight from "./HoverHighlight";

interface ProductCardProps {
  title: string;
  tagline: string; // short emerald outcome line
  description: string;
  imgSrc: string;
  imgAlt: string;
  technologies: string[];
  liveHref?: string;
  codeHref?: string;
}

// Lead item of the projects list, so it shares the list's width + hover behavior.
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  tagline,
  description,
  imgSrc,
  imgAlt,
  technologies,
  liveHref,
  codeHref,
}) => (
  <li className="group relative mb-14 rounded-md wide:transition-all wide:hover:!opacity-100 wide:group-hover/list:opacity-50">
    <HoverHighlight />
    <div className="relative z-10 flex flex-col gap-y-3">
      {/* Title + live badge */}
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-bold leading-tight text-primary-text wide:text-xl">
          {title}
        </h3>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-600/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live
        </span>
      </div>

      <a
        href={liveHref ?? codeHref ?? "#"}
        target="_blank"
        className="block overflow-hidden rounded-custom border border-custom"
        aria-label={`${title} preview`}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={1551}
          height={898}
          className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </a>

      <div>
        <p className="text-sm font-medium text-primary">{tagline}</p>
        <p className="mt-2 text-sm leading-normal text-secondary-text">
          {description}
        </p>
        <TechPills items={technologies} />

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {liveHref && (
            <a
              href={liveHref}
              target="_blank"
              aria-label={`${title} live demo`}
            >
              <Button className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-emerald-400/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 active:translate-y-0">
                Live demo
                <RiArrowRightUpLine className="h-4 w-4" />
              </Button>
            </a>
          )}
          {codeHref && (
            <a
              href={codeHref}
              target="_blank"
              aria-label={`${title} source code`}
            >
              <Button className="inline-flex items-center gap-1.5 rounded-md border border-custom px-3.5 py-2 text-sm font-semibold text-secondary-text transition-colors duration-200 hover:border-emerald-500/50 hover:text-primary">
                <GithubIcon className="h-4 w-4 fill-current" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  </li>
);

export default ProductCard;
