// components/VisitorGlobe/VisitorGlobeWrapper.tsx
// Server component: resolves the visitor's approximate location from Vercel's
// free edge geo headers (no API, no key, no DB) and hands it to the client globe.
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

  // Localhost has no geo headers. Fall back to a default *only* in dev so the
  // component is fully testable; in production we prefer an honest generic line.
  if (process.env.NODE_ENV !== "production") {
    return { city: "San Francisco", region: "CA", lat: 37.7749, lng: -122.4194 };
  }
  return { city: null, region: null, lat: null, lng: null };
}

export default function VisitorGlobeWrapper() {
  return <VisitorGlobe location={readVisitorLocation()} />;
}
