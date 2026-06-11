"use client";

import React from "react";
import { BioIcon, ProjectIcon, ResumeIcon } from "@/assets/icons";
import { Button } from "@headlessui/react";

interface MenuItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className: string }>;
}

interface MenuProps {
  activeItem?: string;
  handleClick?: (item: string) => void;
}

const menuItems: MenuItem[] = [
  { href: "#bio", label: "Bio", icon: BioIcon },
  { href: "#projects", label: "Projects", icon: ProjectIcon },
];

// Box chrome shared by the variants (the existing shadow/border panel).
const boxClass =
  "flex flex-row items-center gap-1 w-fit p-1.5 border-custom rounded-custom bg-neutral-700/20 bg-opacity-10 drop-shadow-xl shadow-panel-inset";

// Bio / Projects links — shared by every variant.
function NavLinks({ activeItem, handleClick }: Required<MenuProps>) {
  return (
    <ul role="list" className="flex flex-row items-center gap-1">
      {menuItems.map((item, index) => {
        const isActive = activeItem === item.href;
        return (
          <li key={index} className="group/item">
            <a
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`flex flex-row items-center gap-1.5 rounded-md px-3 py-1.5 transition-colors duration-200 ${
                isActive ? "bg-emerald-600/10" : "hover:bg-emerald-600/10"
              }`}
            >
              <item.icon
                className={`${isActive ? "stroke-primary" : "stroke-secondary"} h-5 w-5 shrink-0 transition-colors duration-200 group-hover/item:stroke-primary`}
              />
              <p
                className={`${isActive ? "text-primary" : "text-secondary-text"} text-sm transition-colors duration-200 group-hover/item:text-primary`}
              >
                {item.label}
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// The résumé call-to-action (filled emerald). `size` tunes it to the row.
function ResumeCta({ size = "sm" }: { size?: "sm" | "md" }) {
  const pad = size === "sm" ? "px-3 py-1.5" : "px-3.5 py-2";
  return (
    <a
      href="/ArellanoGilbertoResume.pdf"
      target="_blank"
      aria-label="Download résumé"
    >
      <Button
        className={`inline-flex items-center gap-1.5 rounded-md bg-emerald-600 ${pad} text-sm font-semibold text-primary-text shadow-md shadow-emerald-900/40 ring-1 ring-inset ring-emerald-400/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 active:translate-y-0`}
      >
        <ResumeIcon className="h-4 w-4 stroke-primary-text stroke-2" />
        Resume
      </Button>
    </a>
  );
}

const Divider = () => (
  <span className="mx-1 h-6 w-px shrink-0 bg-neutral-600/70" aria-hidden />
);

// ===== Variant A: one bar — nav links · divider · filled résumé CTA =====
function VariantA(props: Required<MenuProps>) {
  return (
    <div className={boxClass}>
      <NavLinks {...props} />
      <Divider />
      <ResumeCta size="sm" />
    </div>
  );
}

// ===== Variant B: nav box, with the résumé button standing beside it =====
function VariantB(props: Required<MenuProps>) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className={boxClass}>
        <NavLinks {...props} />
      </div>
      <ResumeCta size="md" />
    </div>
  );
}

// ===== Variant C: résumé as an emerald CTA pill inside the row (no divider) =====
function VariantC(props: Required<MenuProps>) {
  return (
    <div className={boxClass}>
      <NavLinks {...props} />
      <ResumeCta size="sm" />
    </div>
  );
}

const Menu: React.FC<MenuProps> = ({
  activeItem = "",
  handleClick = () => {},
}) => {
  const props = { activeItem, handleClick };

  return (
    <nav className="nav mt-8 hidden lg:block">
      {/* ─── Pick a layout: keep ONE uncommented, comment the others ─── */}

      {/* A · unified bar: Bio/Projects · divider · filled résumé CTA  (recommended) */}
      <VariantA {...props} />

      {/* B · nav box with the résumé button beside it
      <VariantB {...props} />
      */}

      {/* C · résumé as a filled CTA pill inside the row, no divider
      <VariantC {...props} />
      */}
    </nav>
  );
};

export default Menu;
