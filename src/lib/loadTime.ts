// lib/loadTime.ts
'use client';

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
  return new Promise((resolve) => {
    const checkPerformanceEntries = () => {
      const navigationEntries = performance.getEntriesByType(
        "navigation",
      ) as PerformanceNavigationTiming[];
      
      if (navigationEntries[0].duration != 0) {
        const pageLoadTime = navigationEntries[0].duration;
        resolve(pageLoadTime);
      } else {
        setTimeout(checkPerformanceEntries, 100); // Retry after 100ms
      }
    };

    checkPerformanceEntries(); // Initial call
  });
}


// Flag to track if logging is in progress
let isLogging = false;

export async function logVisitorInfo(pageLoadTime: number) {
  // Check if the visitor is new for the day
  const isNewVisitor = isNewDay();

  if (isNewVisitor) {
    // New visitor logic
    console.log("New visitor");
    console.log(`Page load time: ${pageLoadTime} ms`);
    try {
      // Set logging in progress flag
      isLogging = true;
      // Send POST request to log the visitor
      const response = await fetch('/api/log-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageLoadTime }),
      });
      // Check if the response is OK
      if (!response.ok) {
        console.error('Failed to log visitor');
      } else {
        console.log('Visitor logged successfully');
      }
    } catch (error) {
      // Log any errors that occur during the fetch
      console.error('Error logging visitor:', error);
    } finally {
      // Reset logging in progress flag
      isLogging = false;
    }
  } else {
    // Returning visitor logic
    // Wait until logging is complete before continuing
    while (isLogging) {
      await new Promise(resolve => setTimeout(resolve, 50)); // Wait for 50ms intervals
    }
    console.log("Returning visitor");
    console.log(`Page load time: ${pageLoadTime} ms`);
  }
}
