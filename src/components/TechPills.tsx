import React from "react";

// Emerald "pill" list of technologies, shared by Project / Experience items.
const TechPills = ({ items }: { items: string[] }) => (
  <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-sm lg:text-xs font-extralight *:rounded-full *:bg-emerald-600/20 *:px-3 *:py-1">
    {items.map((tech, i) => (
      <li key={i}>{tech}</li>
    ))}
  </ul>
);

export default TechPills;
