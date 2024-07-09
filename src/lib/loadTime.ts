"use client";
// lib/loadTime.ts

// Function to check if a new day has started
export function isNewDay(): boolean {
  const now = new Date();
  const storedDate = localStorage.getItem("visitorDate");
  if (!storedDate) {
    localStorage.setItem("visitorDate", now.toISOString().split("T")[0]);
    return true;
  }
  const storedDateObj = new Date(storedDate);
  const nowDate = now.toISOString().split("T")[0];
  if (nowDate !== storedDateObj.toISOString().split("T")[0]) {
    localStorage.setItem("visitorDate", nowDate);
    return true;
  }
  return false;
}

export function getPageLoadTime(): Promise<number> {
  return new Promise((resolve, reject) => {
    const navigationEntries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];
    // Access the duration after a short delay
    setTimeout(() => {
      if (navigationEntries.length > 0) {
        const pageLoadTime = navigationEntries[0].duration;
        //console.log("Page Load Time (ms):", pageLoadTime);
        resolve(pageLoadTime);
      } else {
        //console.log("No navigation entries found");
        resolve(0);
      }
    }, 100); // 100ms delay to ensure the timing data is populated
  });
}

// Function to log visitor info
export function logVisitorInfo() {
  const isNewVisitor = isNewDay();
  const pageLoadTime = getPageLoadTime();

  //console.log(`Page load time: ${pageLoadTime} ms`);
  if (isNewVisitor) {
    //console.log("New visitor");
  } else {
    //console.log("Returning visitor");
  }
}
