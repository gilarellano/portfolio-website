import { useEffect } from "react";

const useIntersectionObserver = (
  setActiveSection: (section: string) => void,
) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveSection(`#${id}`);
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0.5 }, // Adjust rootMargin and threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);
};

export default useIntersectionObserver;
