// Resolves the visitor's location (same as the globe) and renders the greeting.
import { readVisitorLocation } from "./VisitorGlobeWrapper";
import LocationGreeting from "./LocationGreeting";

export default function LocationGreetingWrapper({
  variant,
}: {
  variant?: "under" | "hero";
}) {
  return (
    <LocationGreeting location={readVisitorLocation()} variant={variant} />
  );
}
