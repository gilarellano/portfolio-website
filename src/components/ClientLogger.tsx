// app/components/ClientLogger.tsx
"use client";

import { useEffect, useState, ReactNode } from "react";
import { getPageLoadTime } from "@/lib/loadTime";

interface ClientLoggerProps {
  children: ReactNode;
  setPageLoadTime: (loadTime: number) => void;
}

const ClientLogger: React.FC<ClientLoggerProps> = ({
  children,
  setPageLoadTime,
}) => {
  const [pageLoadTime, setPageLoadTimeInternal] = useState<number | null>(null);

  useEffect(() => {
    const fetchLoadTime = async () => {
      const loadTime = await getPageLoadTime();
      setPageLoadTimeInternal(loadTime);
      setPageLoadTime(loadTime); // Update the parent state with the load time
    };

    fetchLoadTime();
  }, [setPageLoadTime]);

  if (pageLoadTime === null) {
    return <p>Loading...</p>; // Or any other loading indicator
  }

  return <>{children}</>;
};

export default ClientLogger;
