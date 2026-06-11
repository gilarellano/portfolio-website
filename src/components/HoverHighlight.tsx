import React from "react";

// Theme-aware hover background behind project list items (wide+ only).
const HoverHighlight = () => (
  <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden wide:block rounded-md motion-reduce:transition-none group-hover:bg-[var(--hover-highlight)] group-hover:shadow-panel-inset group-hover:drop-shadow-[0_8px_8px_var(--hover-shadow)]"></div>
);

export default HoverHighlight;
