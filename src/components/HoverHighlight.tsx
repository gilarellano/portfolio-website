import React from "react";

// Absolutely-positioned hover background behind Project / Experience
// list items (lg screens only).
const HoverHighlight = () => (
  <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden lg:block rounded-md motion-reduce:transition-none group-hover:bg-neutral-700/20 group-hover:shadow-panel-inset group-hover:drop-shadow-lg"></div>
);

export default HoverHighlight;
