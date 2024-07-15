// lib/useIntersectionObserver.ts

import { useEffect } from "react";

/**
 * Custom hook to set up an IntersectionObserver that updates the active section
 * based on the current scroll position of the user. The active section is used to
 * highlight the menu item corresponding to the section in view.
 *
 * @param setActiveSection - Function to set the active section identifier.
 */
const useIntersectionObserver = (
  setActiveSection: (section: string) => void,
) => {
  useEffect(() => {
    // Select all sections in the document
    const sections = document.querySelectorAll("section");

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the section is intersecting the viewport
          if (entry.isIntersecting) {
            // Get the id attribute of the intersecting section
            const id = entry.target.getAttribute("id");
            if (id) {
              // Update the active section state
              setActiveSection(`#${id}`);
              // Update the URL hash without reloading the page
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { 
        // Adjust the rootMargin to trigger the intersection earlier/later
        rootMargin: "0px 0px -50% 0px", 
        // The threshold is the percentage of the target's visibility
        threshold: 0.5 
      },
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Clean up the observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]); // Dependency array includes setActiveSection
};

export default useIntersectionObserver;
