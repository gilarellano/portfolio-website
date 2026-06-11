// components/VisitorGlobe/LocationGreetingWrapper.tsx
// Server component: resolves the visitor's location (same edge-header logic
// as the globe) and renders the typed greeting.
import { readVisitorLocation } from "./VisitorGlobeWrapper";
import LocationGreeting from "./LocationGreeting";

export default function LocationGreetingWrapper({
  variant,
}: {
  variant?: "under" | "hero";
}) {
  return <LocationGreeting location={readVisitorLocation()} variant={variant} />;
}
