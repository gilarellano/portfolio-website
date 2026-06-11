// Resolves the visitor's location from Vercel's edge geo headers (no API/key/DB).
import { headers } from "next/headers";
import VisitorGlobe from "./VisitorGlobe";

export type VisitorLocation = {
  city: string | null;
  region: string | null;
  lat: number | null;
  lng: number | null;
};

export function readVisitorLocation(): VisitorLocation {
  const h = headers();
  const rawCity = h.get("x-vercel-ip-city");
  const rawRegion = h.get("x-vercel-ip-country-region");
  const lat = h.get("x-vercel-ip-latitude");
  const lng = h.get("x-vercel-ip-longitude");

  // Vercel sends city/region URL-encoded (e.g. "San%20Francisco").
  if (rawCity && lat && lng) {
    return {
      city: decodeURIComponent(rawCity),
      region: rawRegion ? decodeURIComponent(rawRegion) : null,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };
  }

  // Localhost has no geo headers — dev-only fallback so it stays testable.
  if (process.env.NODE_ENV !== "production") {
    return {
      city: "San Francisco",
      region: "CA",
      lat: 37.7749,
      lng: -122.4194,
    };
  }
  return { city: null, region: null, lat: null, lng: null };
}

export default function VisitorGlobeWrapper() {
  return <VisitorGlobe location={readVisitorLocation()} />;
}
