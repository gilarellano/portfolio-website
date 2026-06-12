"use client";

import React, { useEffect, useRef, useState } from "react";
import { GithubIcon, LinkedInIcon } from "@/assets/icons";
import ThemeToggle from "./ThemeToggle";

interface TopNavProps {
  activeItem?: string;
  handleClick?: (item: string) => void;
  /** Slot for server-rendered content (the spark stats). */
  children?: React.ReactNode;
}

// The name doubles as the Bio link; one underline slides between it and Projects.
const navItems = [
  { href: "#bio", label: "Gilberto Arellano", isName: true },
  { href: "#projects", label: "Projects", isName: false },
];

const TopNav: React.FC<TopNavProps> = ({
  activeItem = "",
  handleClick = () => {},
  children,
}) => {
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [bar, setBar] = useState({ left: 0, width: 0, ready: false });

  // Glide the underline to whichever link owns the active section.
  const active = activeItem || "#bio";
  useEffect(() => {
    const update = () => {
      const el = linkRefs.current[active];
      if (el) {
        setBar({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
      } else {
        setBar((b) => ({ ...b, ready: false }));
      }
    };
    update();
    window.addEventListener("resize", update);
    // Re-measure once webfonts swap in (text width changes slightly).
    document.fonts?.ready.then(update).catch(() => {});
    return () => window.removeEventListener("resize", update);
  }, [active]);

  return (
    <header className="sticky top-0 z-50">
      {/* Feathered blur/tint layer — fades out instead of ending in a line */}
      <div className="nav-veil" aria-hidden />
      <nav className="relative mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-6 py-3 md:px-10">
        {/* Left: name (= bio) + Projects, sharing one sliding underline */}
        <div className="relative flex items-baseline gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              ref={(el) => {
                linkRefs.current[item.href] = el;
              }}
              onClick={() => handleClick(item.href)}
              className={
                item.isName
                  ? "text-base font-bold tracking-tight text-primary-text transition-colors hover:text-primary"
                  : `hidden sm:inline text-sm transition-colors duration-200 ${
                      active === item.href
                        ? "text-primary-text"
                        : "text-secondary-text hover:text-primary"
                    }`
              }
            >
              {item.label}
            </a>
          ))}
          {/* The sliding underline */}
          <span
            aria-hidden
            className="absolute -bottom-1.5 h-[2px] rounded-full bg-primary transition-all duration-300 ease-out"
            style={{
              left: bar.left,
              width: bar.width,
              opacity: bar.ready ? 1 : 0,
            }}
          />
        </div>

        {/* Right: spark stats · socials · theme toggle */}
        <div className="flex items-center gap-5">
          {children}
          <span
            className="hidden h-7 w-px bg-neutral-700/70 wide:block"
            aria-hidden
          />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/gilarellano"
              target="_blank"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5 fill-secondary transition-colors hover:fill-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/gilbertoarellano/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5 fill-secondary transition-colors hover:fill-primary" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
