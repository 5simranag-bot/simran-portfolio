import { useMemo } from 'react';

const rand = (a, b) => a + Math.random() * (b - a);
const SYMBOLS = ['信', '心', '道', '静', '誠'];

/** Drifting gold motes and kanji symbols for the hero's atmosphere. */
export default function KParticles() {
  const { motes, symbols } = useMemo(
    () => ({
      motes: Array.from({ length: 20 }, () => ({
        left: rand(2, 96),
        bottom: rand(0, 50),
        size: rand(2, 4),
        op: rand(0.2, 0.5),
        dur: rand(8, 16),
        delay: -rand(0, 14),
      })),
      symbols: SYMBOLS.map((c) => ({
        c,
        left: rand(8, 90),
        bottom: rand(4, 40),
        dur: rand(13, 20),
        delay: -rand(0, 18),
        size: rand(20, 36),
      })),
    }),
    []
  );

  return (
    <>
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
            background: `rgba(202,160,102,${m.op})`,
            boxShadow: '0 0 7px rgba(202,160,102,.5)',
            animation: `kmote ${m.dur}s ease-in-out ${m.delay}s infinite`,
            willChange: 'transform,opacity',
          }}
        />
      ))}
      {symbols.map((s, i) => (
        <span
          key={'s' + i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: s.left + '%',
            bottom: s.bottom + '%',
            fontFamily: "'Shippori Mincho',serif",
            fontSize: s.size + 'px',
            color: 'rgba(202,160,102,.4)',
            animation: `ksymbol ${s.dur}s ease-in-out ${s.delay}s infinite`,
            willChange: 'transform,opacity',
          }}
        >
          {s.c}
        </span>
      ))}
    </>
  );
}
