"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import type { VisitorLocation } from "./VisitorGlobeWrapper";

// Mirrors the globe's spin-up time so the reveal stays in sync.
const LOADING_MS = 1900;

type GreetingMode = "loading" | "deleting" | "typing" | "done";

// Animated "Locating you…" that back-spaces and types the resolved place.
function GreetingTypewriter({
  revealed,
  place,
  onTyped,
}: {
  revealed: boolean;
  place: string;
  onTyped: () => void;
}) {
  const LOADING_TEXT = "Locating you";
  const [displayed, setDisplayed] = useState(LOADING_TEXT);
  const [mode, setMode] = useState<GreetingMode>("loading");
  const typedFired = useRef(false);

  // Cycle "." → ".." → "..." while loading.
  useEffect(() => {
    if (mode !== "loading") return;
    let dots = 0;
    const id = setInterval(() => {
      dots = (dots % 3) + 1;
      setDisplayed(LOADING_TEXT + ".".repeat(dots));
    }, 400);
    return () => clearInterval(id);
  }, [mode]);

  // Start the reveal once the location has "loaded".
  useEffect(() => {
    if (revealed && mode === "loading") setMode("deleting");
  }, [revealed, mode]);

  // Back-space whatever is on screen.
  useEffect(() => {
    if (mode !== "deleting") return;
    if (displayed.length === 0) {
      setMode("typing");
      return;
    }
    const id = setTimeout(() => setDisplayed((p) => p.slice(0, -1)), 38);
    return () => clearTimeout(id);
  }, [mode, displayed]);

  // Type the resolved place out.
  useEffect(() => {
    if (mode !== "typing") return;
    if (displayed.length >= place.length) {
      setMode("done");
      return;
    }
    const id = setTimeout(
      () => setDisplayed(place.slice(0, displayed.length + 1)),
      62,
    );
    return () => clearTimeout(id);
  }, [mode, displayed, place]);

  // Fire once when typing finishes (so the hand can wave).
  useEffect(() => {
    if (mode === "done" && !typedFired.current) {
      typedFired.current = true;
      onTyped();
    }
  }, [mode, onTyped]);

  // Blink only while idle; stay solid while in motion.
  const idle = mode === "loading" || mode === "done";

  return (
    <span aria-label={place}>
      {displayed}
      <span
        aria-hidden="true"
        className={`ml-[2px] inline-block h-[1em] w-[2px] bg-primary align-middle ${
          idle ? "animate-cursor-blink" : ""
        }`}
      />
    </span>
  );
}

// "under": caption centered beneath the globe.
// "hero": right-aligned with a staircase indent to trace the globe's top-left curve.
export default function LocationGreeting({
  location,
  variant = "under",
}: {
  location: VisitorLocation;
  variant?: "under" | "hero";
}) {
  const [revealed, setRevealed] = useState(false);
  const [typedDone, setTypedDone] = useState(false);
  const handleTyped = useCallback(() => setTypedDone(true), []);

  const hasGeo = location.city !== null;
  const intro = hasGeo ? "Hello from" : "Hello there,";
  const place = hasGeo
    ? location.region
      ? `${location.city}, ${location.region}`
      : (location.city as string)
    : "fellow traveler";
  const emoji = hasGeo ? "👋" : "🌍";

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), LOADING_MS);
    return () => clearTimeout(t);
  }, []);

  const isHero = variant === "hero";

  return (
    <div
      className={`animate-fade-in flex flex-col ${
        isHero ? "items-end text-right" : "items-center text-center"
      }`}
    >
      <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-secondary-text">
        {intro}
        <span className={`text-sm ${typedDone ? "animate-wave" : ""}`}>
          {emoji}
        </span>
      </span>
      <span
        className={`whitespace-nowrap font-mono text-lg font-bold leading-tight text-primary-text sm:text-xl ${
          isHero ? "mr-8" : ""
        }`}
      >
        <GreetingTypewriter
          revealed={revealed}
          place={place}
          onTyped={handleTyped}
        />
      </span>
    </div>
  );
}
