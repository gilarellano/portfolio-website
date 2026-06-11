// utils/useIntersectionObserver.ts

import { useEffect } from "react";

/**
 * Scroll-spy: tracks which `<section id>` is currently in view and reports it
 * as the active section (e.g. "#projects") so the nav can highlight it.
 *
 * Uses scroll position rather than IntersectionObserver visibility ratios, so
 * that tall sections (which can never be ">= 50% visible") still activate
 * correctly. The active section is the last one whose top has scrolled past a
 * line ~30% down the viewport — i.e. the section you're currently reading.
 *
 * @param setActiveSection - setter called with the active section id ("#id").
 */
const useIntersectionObserver = (
  setActiveSection: (section: string) => void,
) => {
  useEffect(() => {
    // Runs synchronously on scroll — the work is two getBoundingClientRect
    // calls, and React bails out when the value hasn't changed, so a
    // throttle adds fragility without buying anything.
    const update = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]"),
      );
      if (sections.length === 0) return;

      const triggerLine = window.innerHeight * 0.3;
      let activeId = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= triggerLine) {
          activeId = section.id;
        }
      }
      setActiveSection(`#${activeId}`);
    };

    update(); // set initial state on mount
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [setActiveSection]);
};

export default useIntersectionObserver;
