import { useMemo } from 'react';

/**
 * Generates the SVG path for a wavy ring (badge-outline shape).
 * Both the outer and inner edges trace a sinusoidal circle so the
 * ring looks like the attached HOOP badge icon.
 */
function generateWavyRingPath(cx, cy, outerR, innerR, amplitude, bumps, steps = 200) {
  const outerPts = [];
  const innerPts = [];

  for (let i = 0; i < steps; i++) {
    const θ = (i / steps) * Math.PI * 2;
    const wave = amplitude * Math.sin(bumps * θ);
    outerPts.push([cx + (outerR + wave) * Math.cos(θ), cy + (outerR + wave) * Math.sin(θ)]);
    innerPts.push([cx + (innerR + wave) * Math.cos(θ), cy + (innerR + wave) * Math.sin(θ)]);
  }

  const toPath = (pts) =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ') + ' Z';

  // Reverse inner path so fill-rule:evenodd punches the hole cleanly
  return `${toPath(outerPts)} ${toPath([...innerPts].reverse())}`;
}

/**
 * Renders the HOOP wavy-ring badge shape as an ambient background decoration.
 *
 * Props
 * ─────
 * size     px dimensions of the square SVG (default 400)
 * opacity  overall opacity of the shape (default 0.12)
 * blur     CSS blur in px (default 16)
 * rotate   CSS rotation in degrees (default 0)
 * className / style — forwarded to the wrapper div
 */
export default function WavyRingDecor({
  size = 400,
  opacity = 0.12,
  blur = 16,
  rotate = 0,
  className = '',
  style = {},
}) {
  const path = useMemo(
    () =>
      generateWavyRingPath(
        size / 2,
        size / 2,
        size * 0.455,  // outer radius
        size * 0.295,  // inner radius  (ring ~16 % of diameter wide)
        size * 0.044,  // wave amplitude
        10.5,          // number of bumps — matches the badge icon
      ),
    [size],
  );

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        filter: `blur(${blur}px)`,
        transform: `rotate(${rotate}deg)`,
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill="white" fillRule="evenodd" />
      </svg>
    </div>
  );
}
