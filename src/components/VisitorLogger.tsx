"use client";

import { usePageLoadTime } from "@/utils/usePageLoadTime";

// Records the visit (once per browser per day). Renders nothing, but it is the
// only caller of the logging hook — removing it silently stops visitor tracking.
export default function VisitorLogger() {
  usePageLoadTime();
  return null;
}
