import React from "react";

// Visible section header for the single-column layout — mono label + a thin
// rule that fills the rest of the row.
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="mb-6 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-secondary-text">
    {title}
    <span className="h-px flex-1 bg-neutral-700" aria-hidden />
  </h2>
);

export default SectionHeader;
