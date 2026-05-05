/**
 * RibbonBanner
 * Full-width animated marquee ribbon with wavy top/bottom edges.
 * The wavy edge illusion is created by overlaying the page background colour
 * (solid #0a0a0a) over the top and bottom of the ribbon via absolute SVG paths.
 *
 * Props
 * ─────
 * phrases   string[]          — text items to scroll
 * direction 'left' | 'right'  — scroll direction (default 'left')
 * rotate    number            — degrees of rotation, e.g. -2 (default -2)
 * speed     number            — animation duration in seconds (default 35)
 * animKey   string            — unique key to namespace CSS keyframes (required
 *                               when multiple banners are on the same page)
 */
export default function RibbonBanner({
  phrases,
  direction = 'left',
  rotate = -2,
  speed = 35,
  animKey = 'rb',
}) {
  // Quadruple-repeat so the marquee never shows a gap during looping
  const items = [...phrases, ...phrases, ...phrases, ...phrases];
  const animName = `ribbon-${direction}-${animKey}`;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        transform: `rotate(${rotate}deg) scaleX(1.08)`,
        marginTop: '-8px',
        marginBottom: '-8px',
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes ${animName} {
          from { transform: translateX(${direction === 'left' ? '0' : '-50%'}); }
          to   { transform: translateX(${direction === 'left' ? '-50%' : '0'}); }
        }
      `}</style>

      {/* Wavy top edge — #0a0a0a "cuts" a smooth sine wave into the top */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 18"
        preserveAspectRatio="none"
        style={{ height: 18, zIndex: 2, display: 'block' }}
        aria-hidden="true"
      >
        <path
          d="M0,10 C80,0 160,18 240,10 C320,0 400,18 480,10 C560,0 640,18 720,10 C800,0 880,18 960,10 C1040,0 1120,18 1200,10 C1280,0 1360,18 1440,10 L1440,0 L0,0 Z"
          fill="#0a0a0a"
        />
      </svg>

      {/* Ribbon body */}
      <div className="bg-[#141414] border-y border-white/[0.06] overflow-hidden" style={{ paddingTop: 14, paddingBottom: 14 }}>
        <div
          className="flex items-center"
          style={{
            animation: `${animName} ${speed}s linear infinite`,
            width: 'max-content',
          }}
        >
          {items.map((phrase, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 text-white font-semibold text-sm uppercase tracking-[0.18em] whitespace-nowrap px-5"
            >
              {phrase}
              <span className="text-white/20 text-[7px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Wavy bottom edge */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 18"
        preserveAspectRatio="none"
        style={{ height: 18, zIndex: 2, display: 'block' }}
        aria-hidden="true"
      >
        <path
          d="M0,8 C80,18 160,0 240,8 C320,18 400,0 480,8 C560,18 640,0 720,8 C800,18 880,0 960,8 C1040,18 1120,0 1200,8 C1280,18 1360,0 1440,8 L1440,18 L0,18 Z"
          fill="#0a0a0a"
        />
      </svg>
    </div>
  );
}
