// Decorative grainy-gradient backdrop: soft emerald blobs slowly drifting over
// the near-black base, finished with an SVG film-grain overlay. Pure CSS, so
// this stays a Server Component and ships no JS. Styles live in
// styles/globals.css (search "grainy-gradient background").
//
// `intensity` sets how strongly the green reads through. You can also flip the
// rendered `data-intensity` between "whisper" and "noticeable" live in devtools
// to compare the two presets without a rebuild.

type Intensity = "whisper" | "noticeable";

export default function GradientBackground({
  intensity = "noticeable",
}: {
  intensity?: Intensity;
}) {
  return (
    <div
      aria-hidden="true"
      data-intensity={intensity}
      className="grain-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="grain-blob grain-blob--1" />
      <div className="grain-blob grain-blob--2" />
      <div className="grain-blob grain-blob--3" />
      <div className="grain-blob grain-blob--4" />
      <div className="grain-overlay" />
    </div>
  );
}
