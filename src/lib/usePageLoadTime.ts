// lib/usePageLoadTime.ts
import { useState, useEffect, useRef } from 'react';
import { getPageLoadTime, logVisitorInfo } from './loadTime';

export function usePageLoadTime() {
  const [pageLoadTime, setPageLoadTime] = useState<number | undefined>(undefined);
  const hasLoggedRef = useRef(false); // Ref to track if the function has been invoked
  const isLoggingRef = useRef(false); // Ref to track if the API call is in progress

  useEffect(() => {
    const logTime = async () => {
      if (!hasLoggedRef.current && !isLoggingRef.current) {
        isLoggingRef.current = true;
        const time = await getPageLoadTime();
        setPageLoadTime(time);
        await logVisitorInfo(time);
        hasLoggedRef.current = true; // Set the ref to true after logging
        isLoggingRef.current = false; // Reset the API call progress ref
      }
    };

    logTime();
  }, []);

  return pageLoadTime;
}
