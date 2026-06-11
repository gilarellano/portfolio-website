import { useEffect } from "react";

// Scroll-spy: reports the active `<section id>` so the nav can highlight it.
// Uses scroll position (not visibility ratios) so tall sections still activate
// — active = the last section whose top has passed ~30% of the viewport.
const useIntersectionObserver = (
  setActiveSection: (section: string) => void,
) => {
  useEffect(() => {
    // Sync on scroll: two rect reads, and React bails on unchanged values.
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
