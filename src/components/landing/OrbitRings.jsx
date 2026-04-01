import { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';

const cssAnims = `
  /* Idle 3D gyroscope — all axes spinning */
  @keyframes idleX  { from { transform: rotateX(0deg);    } to { transform: rotateX(360deg);  } }
  @keyframes idleY  { from { transform: rotateY(0deg);    } to { transform: rotateY(-360deg); } }
  @keyframes idleZ1 { from { transform: rotateZ(0deg);    } to { transform: rotateZ(360deg);  } }
  @keyframes idleZ2 { from { transform: rotateZ(0deg);    } to { transform: rotateZ(-360deg); } }
  @keyframes idleZ3 { from { transform: rotateZ(0deg);    } to { transform: rotateZ(360deg);  } }

  /* Scroll triggered — tilt wrapper eases flat */
  @keyframes convergeToPlane {
    from { transform: rotateX(55deg) rotateY(30deg); }
    to   { transform: rotateX(0deg)  rotateY(0deg);  }
  }

  /* Post-converge Z spins (kept running throughout) */
  @keyframes spinZ1 { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg);  } }
  @keyframes spinZ2 { from { transform: rotateZ(0deg); } to { transform: rotateZ(-360deg); } }
  @keyframes spinZ3 { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg);  } }
`;

export default function OrbitRings({ smooth }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 20) return true;   // crossed into scroll territory
        if (prev && y < 10) return false;   // scrolled back to top — restore idle
        return prev;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scale       = useTransform(smooth, [0, 1], [1, 30]);
  const ringOpacity = useTransform(smooth, [0, 0.15, 0.45, 0.70], [0.5, 1, 1, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ contain: 'paint', transform: 'translateZ(0)' }}>
      <style>{cssAnims}</style>

      <motion.div
        style={{ scale, opacity: ringOpacity, willChange: 'transform, opacity' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Wrapper: idle = tilted 3D gyroscope, scrolled = eases flat then freezes */}
        <div
          className="relative w-[700px] h-[700px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: !scrolled ? 'rotateX(55deg) rotateY(30deg)' : undefined,
            animation: scrolled ? 'convergeToPlane 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards' : undefined,
          }}
        >
          {/* Ring 1 — spins idle only, freezes on scroll */}
          <div
            className="absolute inset-0"
            style={{ animation: !scrolled ? 'idleX 11s linear infinite, idleZ1 18s linear infinite' : 'none' }}
          >
            <div className="absolute inset-0 rounded-full" style={{ border: '1.5px solid rgba(255,255,255,0.55)', boxShadow: '0 0 12px 4px rgba(255,255,255,0.18), inset 0 0 12px 4px rgba(255,255,255,0.08)' }} />
          </div>

          {/* Ring 2 — spins idle only */}
          <div
            className="absolute inset-[110px]"
            style={{ animation: !scrolled ? 'idleY 7s linear infinite, idleZ2 14s linear infinite' : 'none' }}
          >
            <div className="absolute inset-0 rounded-full" style={{ border: '1.5px solid rgba(255,255,255,0.42)', boxShadow: '0 0 12px 4px rgba(0,184,230,0.25), inset 0 0 12px 4px rgba(0,184,230,0.1)' }} />
          </div>

          {/* Ring 3 — spins idle only */}
          <div
            className="absolute inset-[220px]"
            style={{ animation: !scrolled ? 'idleX 13s linear infinite reverse, idleZ3 10s linear infinite' : 'none' }}
          >
            <div className="absolute inset-0 rounded-full" style={{ border: '1.5px solid rgba(255,255,255,0.7)', boxShadow: '0 0 16px 5px rgba(255,255,255,0.22), inset 0 0 10px 3px rgba(255,255,255,0.1)' }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
