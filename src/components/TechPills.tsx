import React from "react";

// Emerald "pill" list of technologies, shared by Project / Experience items.
// Mono type makes them read like code tags.
const TechPills = ({ items }: { items: string[] }) => (
  <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-sm wide:text-xs font-mono *:rounded-full *:bg-emerald-600/20 *:px-3 *:py-1">
    {items.map((tech, i) => (
      <li key={i}>{tech}</li>
    ))}
  </ul>
);

export default TechPills;
