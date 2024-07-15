"use client";
import React, { useState, useEffect, ReactElement } from "react";
import useIntersectionObserver from "@/utils/useIntersectionObserver";

interface ClientWrapperProps {
  children: ReactElement;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [activeItem, setActiveItem] = useState<string>("");

  useIntersectionObserver(setActiveSection);

  useEffect(() => {
    setActiveItem(window.location.hash);
    const handleHashChange = () => {
      setActiveItem(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    setActiveItem(activeSection);
  }, [activeSection]);

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return React.cloneElement(children, { activeItem, handleClick });
}
