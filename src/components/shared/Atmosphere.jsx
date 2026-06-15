import { useMemo } from 'react';

const rand = (a, b) => a + Math.random() * (b - a);

/** Drifting clouds, floating motes and the occasional bird for the hero sky. */
export default function Atmosphere() {
  const { clouds, motes, birds } = useMemo(
    () => ({
      clouds: Array.from({ length: 6 }, () => ({
        top: rand(6, 46),
        w: rand(160, 360),
        h: rand(46, 92),
        op: rand(0.35, 0.75),
        dur: rand(48, 92),
        delay: -rand(0, 60),
      })),
      motes: Array.from({ length: 22 }, () => ({
        left: rand(2, 96),
        bottom: rand(0, 60),
        size: rand(2, 5),
        op: rand(0.25, 0.6),
        dur: rand(7, 15),
        delay: -rand(0, 14),
      })),
      birds: Array.from({ length: 3 }, (_, i) => ({
        top: rand(14, 34),
        scale: rand(0.7, 1.1),
        dur: rand(26, 40),
        delay: -rand(0, 30) + i * 9,
      })),
    }),
    []
  );

  return (
    <>
      {clouds.map((c, i) => (
        <div
          key={'c' + i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: c.top + '%',
            left: 0,
            width: c.w + 'px',
            height: c.h + 'px',
            borderRadius: '50%',
            background:
              'radial-gradient(closest-side, rgba(255,253,247,.95), rgba(255,251,242,.55) 58%, rgba(255,251,242,0))',
            filter: 'blur(7px)',
            opacity: c.op,
            animation: `cloudMove ${c.dur}s linear ${c.delay}s infinite`,
            willChange: 'transform',
          }}
        />
      ))}
      {motes.map((m, i) => (
        <div
          key={'m' + i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: m.left + '%',
            bottom: m.bottom + '%',
            width: m.size + 'px',
            height: m.size + 'px',
            borderRadius: '50%',
            background: `rgba(255,250,235,${m.op})`,
            boxShadow: '0 0 6px rgba(255,245,220,.6)',
            animation: `moteFloat ${m.dur}s ease-in-out ${m.delay}s infinite`,
            willChange: 'transform,opacity',
          }}
        />
      ))}
      {birds.map((b, i) => (
        <svg
          key={'b' + i}
          aria-hidden="true"
          viewBox="0 0 30 10"
          width={30 * b.scale}
          height={10 * b.scale}
          style={{
            position: 'absolute',
            top: b.top + '%',
            left: 0,
            overflow: 'visible',
            animation: `birdFly ${b.dur}s linear ${b.delay}s infinite`,
            willChange: 'transform',
          }}
        >
          <path
            d="M1,8 Q8,1 15,7 Q22,1 29,8"
            fill="none"
            stroke="rgba(70,60,48,.5)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </>
  );
}
