// components/VisitorGlobe/VisitorGlobe.tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import type { VisitorLocation } from "./VisitorGlobeWrapper";

// How long the globe "spins up" (loading their data) before settling on them.
const LOADING_MS = 1900;

type Phase = "loading" | "reveal" | "live";
type GreetingMode = "loading" | "deleting" | "typing" | "done";

// Rotation [phi, theta] that brings a given lat/long to face the viewer.
function locationToAngles(lat: number, lng: number): [number, number] {
  return [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ];
}

// Shortest signed angular distance current -> target, wrapped to (-π, π].
function shortestAngleDelta(current: number, target: number): number {
  let diff = (target - current) % (2 * Math.PI);
  if (diff < -Math.PI) diff += 2 * Math.PI;
  if (diff > Math.PI) diff -= 2 * Math.PI;
  return diff;
}

// Drives the mono greeting line: an animated "Locating you…" while the globe
// spins up, then back-spaces it and types out the resolved place once revealed.
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

  // Kick off the reveal once the location has "loaded".
  useEffect(() => {
    if (revealed && mode === "loading") setMode("deleting");
  }, [revealed, mode]);

  // Back-space whatever is currently on screen.
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

  // Fire once when the place finishes typing (so the hand can wave).
  useEffect(() => {
    if (mode === "done" && !typedFired.current) {
      typedFired.current = true;
      onTyped();
    }
  }, [mode, onTyped]);

  // Hard-blink only while idle (loading / done); stay solid while in motion.
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

export default function VisitorGlobe({
  location,
}: {
  location: VisitorLocation;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>("loading");
  const [revealed, setRevealed] = useState(false);
  const [typedDone, setTypedDone] = useState(false);
  const handleTyped = useCallback(() => setTypedDone(true), []);

  const hasFocus = location.lat !== null && location.lng !== null;
  const hasGeo = location.city !== null;
  const intro = hasGeo ? "Hello from" : "Hello there,";
  const place = hasGeo
    ? location.region
      ? `${location.city}, ${location.region}`
      : (location.city as string)
    : "fellow traveler";
  const emoji = hasGeo ? "👋" : "🌍";

  // After the spin-up: settle on the visitor (reveal) or keep gently turning.
  useEffect(() => {
    const t = setTimeout(() => {
      phaseRef.current = hasFocus ? "reveal" : "live";
      setRevealed(true);
    }, LOADING_MS);
    return () => clearTimeout(t);
  }, [hasFocus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 0;
    const onResize = () => {
      if (canvas) width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    let phi = 0;
    let theta = 0.2;
    const focus = hasFocus
      ? locationToAngles(location.lat as number, location.lng as number)
      : null;

    const SPIN_FAST = 0.04; // "loading their data"
    const SPIN_SLOW = 0.004; // gently alive once settled
    const EASE = 0.045;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 12000,
      mapBrightness: 8,
      baseColor: [0.42, 0.44, 0.48],
      markerColor: [0.431, 0.906, 0.718], // emerald — matches --primary-color #6ee7b7
      glowColor: [0.18, 0.22, 0.2],
      markers: hasFocus
        ? [
            {
              location: [location.lat as number, location.lng as number],
              size: 0.09,
            },
          ]
        : [],
    });

    // cobe v2 renders per update() — drive the rotation on our own rAF loop.
    let raf = requestAnimationFrame(function tick() {
      const phase = phaseRef.current;
      if (phase === "loading") {
        phi += SPIN_FAST;
      } else if (phase === "reveal" && focus) {
        const dPhi = shortestAngleDelta(phi, focus[0]);
        phi += dPhi * EASE;
        theta += (focus[1] - theta) * EASE;
        if (Math.abs(dPhi) < 0.002 && Math.abs(focus[1] - theta) < 0.002) {
          phaseRef.current = "live";
        }
      } else {
        phi += SPIN_SLOW;
      }
      globe.update({ phi, theta, width: width * 2, height: width * 2 });
      // Fade the canvas in on the first painted frame.
      if (canvas.style.opacity !== "1") canvas.style.opacity = "1";
      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [hasFocus, location.lat, location.lng]);

  return (
    <section
      className="mb-8 flex w-full flex-row items-center gap-4 lg:max-w-[400px]"
      aria-label="Visitor location globe"
    >
      {/* Globe — eases in; sized a touch larger than the avatar photo. */}
      <div className="relative aspect-square w-24 shrink-0 lg:w-28">
        <canvas
          ref={canvasRef}
          className="h-full w-full opacity-0 transition-opacity duration-1000"
        />
      </div>

      {/* Greeting — eases in alongside the globe. */}
      <div className="animate-fade-in flex min-w-0 flex-col">
        <span className="flex items-center gap-1.5 text-l uppercase tracking-wider text-secondary-text">
          {intro}
          <span className={`text-sm ${typedDone ? "animate-wave" : ""}`}>
            {emoji}
          </span>
        </span>
        <span className="font-mono text-xl font-bold leading-tight text-primary-text sm:text-2xl">
          <GreetingTypewriter
            revealed={revealed}
            place={place}
            onTyped={handleTyped}
          />
        </span>
      </div>
    </section>
  );
}
