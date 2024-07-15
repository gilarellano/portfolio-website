// lib/loadTime.ts
'use client';

import { logVisitor } from "./action";

// Function to check if a new day has started
export function isNewDay(): boolean {
  const now = new Date();
  const storedDate = localStorage.getItem("visitorDate");
  if (!storedDate) {
    // Store the current date as the visitor date if no date is found in local storage
    localStorage.setItem("visitorDate", now.toISOString().split("T")[0]);
    return true;
  }
  const storedDateObj = new Date(storedDate);
  const nowDate = now.toISOString().split("T")[0];
  if (nowDate !== storedDateObj.toISOString().split("T")[0]) {
    // Update the visitor date in local storage if the stored date is different from the current date
    localStorage.setItem("visitorDate", nowDate);
    return true;
  }
  return false;
}

// Function to get the page load time
export function getPageLoadTime(): Promise<number> {
  return new Promise((resolve) => {
    const checkPerformanceEntries = () => {
      const navigationEntries = performance.getEntriesByType(
        "navigation",
      ) as PerformanceNavigationTiming[];
      
      // If the navigation entry has a non-zero duration, resolve the promise with the page load time
      if (navigationEntries.length > 0 && navigationEntries[0].duration != 0) {
        const pageLoadTime = navigationEntries[0].duration;
        resolve(pageLoadTime);
      } else {
        // Retry after 100ms if the navigation entry duration is zero
        setTimeout(checkPerformanceEntries, 100);
      }
    };

    checkPerformanceEntries(); // Initial call to check performance entries
  });
}

// Flag to track if logging is in progress
let isLogging = false;

// Function to log visitor info and return the visitor ID
export async function logVisitorInfo(pageLoadTime: number): Promise<number | undefined> {
  // Check if the visitor is new for the day
  const isNewVisitor = isNewDay();

  if (isNewVisitor) {
    console.log("New visitor");
    console.log(`Page load time: ${pageLoadTime} ms`);
    try {
      // Set logging in progress flag
      isLogging = true;

      // Log the visitor directly using the logVisitor function
      const result = await logVisitor(pageLoadTime);

      console.log('Visitor logged successfully');
      const visitorId = result.visitorId;

      // Save visitor ID and date to local storage
      localStorage.setItem("visitorId", visitorId.toString());
      localStorage.setItem("visitorDate", new Date().toISOString().split("T")[0]);
      return visitorId;
    } catch (error) {
      // Log any errors that occur during the fetch
      console.error('Error logging visitor:', error);
      return undefined;
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
    const visitorId = localStorage.getItem("visitorId");
    console.log("Returning visitor");
    console.log(`Page load time: ${pageLoadTime} ms`);
    return visitorId ? parseInt(visitorId, 10) : undefined;
  }
}
