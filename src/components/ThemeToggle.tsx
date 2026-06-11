"use client";

import React, { useEffect, useState } from "react";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

type Theme = "dark" | "light";

// Sun/moon toggle. Dark is the default (no data-theme attribute); light sets
// data-theme="light" on <html>. The choice persists in localStorage and is
// applied pre-paint by the inline script in layout.tsx.
export default function ThemeToggle() {
  // null until mounted — the server doesn't know the visitor's theme.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark",
    );
  }, []);

  const toggle = () => {
    if (theme === null) return;
    const next: Theme = theme === "light" ? "dark" : "light";
    const root = document.documentElement;

    // Ease every color change during the swap (class removed right after).
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 450);

    if (next === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode etc. — theme just won't persist */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="rounded-md p-1.5 text-secondary-text transition-colors hover:bg-neutral-700/20 hover:text-primary"
    >
      {theme === "light" ? (
        <RiMoonLine className="h-5 w-5" />
      ) : theme === "dark" ? (
        <RiSunLine className="h-5 w-5" />
      ) : (
        <span className="block h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
