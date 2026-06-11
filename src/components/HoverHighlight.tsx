import React from "react";

// Absolutely-positioned hover background behind Project / Experience
// list items (lg screens only). Wash and shadow are theme-aware: dark gets
// a subtle panel + black shadow, light a white paper-lift + warm shadow.
const HoverHighlight = () => (
  <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden lg:block rounded-md motion-reduce:transition-none group-hover:bg-[var(--hover-highlight)] group-hover:shadow-panel-inset group-hover:drop-shadow-[0_8px_8px_var(--hover-shadow)]"></div>
);

export default HoverHighlight;
