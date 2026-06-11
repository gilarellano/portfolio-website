"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import type { VisitorLocation } from "./VisitorGlobeWrapper";

// Spin-up time before the globe settles on the visitor (synced with the greeting).
const LOADING_MS = 1900;

type Phase = "loading" | "reveal" | "live";

// Rotation [phi, theta] that brings a lat/long to face the viewer.
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

// The sphere only; the typed greeting lives in LocationGreeting.
export default function VisitorGlobe({
  location,
}: {
  location: VisitorLocation;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>("loading");

  const hasFocus = location.lat !== null && location.lng !== null;

  // After the spin-up: settle on the visitor, or keep gently turning.
  useEffect(() => {
    const t = setTimeout(() => {
      phaseRef.current = hasFocus ? "reveal" : "live";
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

    const SPIN_FAST = 0.04;
    const SPIN_SLOW = 0.004;
    const EASE = 0.045;

    // Theme-aware palette, re-read per frame so the globe follows the toggle live.
    const palette = () =>
      document.documentElement.getAttribute("data-theme") === "light"
        ? {
            dark: 0,
            // a couple shades darker than the cream bg (mirrors the dark globe)
            baseColor: [0.84, 0.8, 0.73] as [number, number, number],
            markerColor: [0.016, 0.471, 0.341] as [number, number, number], // emerald-700
            glowColor: [0.9, 0.86, 0.79] as [number, number, number],
            mapBrightness: 4,
          }
        : {
            dark: 1,
            baseColor: [0.42, 0.44, 0.48] as [number, number, number],
            markerColor: [0.431, 0.906, 0.718] as [number, number, number], // emerald-300
            glowColor: [0.18, 0.22, 0.2] as [number, number, number],
            mapBrightness: 8,
          };
    const paletteRef = { current: palette() };
    const observer = new MutationObserver(() => {
      paletteRef.current = palette();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      diffuse: 1.4,
      mapSamples: 12000,
      ...paletteRef.current,
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
      globe.update({
        phi,
        theta,
        width: width * 2,
        height: width * 2,
        ...paletteRef.current,
      });
      // Fade the canvas in on the first painted frame.
      if (canvas.style.opacity !== "1") canvas.style.opacity = "1";
      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [hasFocus, location.lat, location.lng]);

  return (
    <div
      className="relative aspect-square w-40 sm:w-48 wide:w-80"
      aria-label="Visitor location globe"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-1000"
      />
    </div>
  );
}
