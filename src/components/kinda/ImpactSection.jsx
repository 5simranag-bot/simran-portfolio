import { Link } from 'react-router-dom';
import Reveal from '../shared/Reveal';
import AnimatedCounter from './AnimatedCounter';
import { impact } from '../../data/kindaShopee';

/** Chapter Seven "The Impact": metrics from concept testing, plus closing CTAs. */
export default function ImpactSection() {
  return (
    <section
      id="k-impact"
      data-screen-label="KINDA SHOPEE Impact"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,160px) clamp(20px,5vw,42px) clamp(70px,9vw,110px)', background: 'radial-gradient(ellipse 80% 70% at 50% 100%,#2a1d12,#1a130d 56%,#15100c 100%)' }}
    >
      <div className="max-w-[1140px] mx-auto text-center">
        <Reveal className="inline-flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif text-[13px]" style={{ letterSpacing: '.3em', color: '#caa066' }}>
            漆 The Summit
          </span>
        </Reveal>
        <Reveal as="h2" delay={80} className="font-serif font-semibold leading-[1.04]" style={{ margin: '0 0 16px', fontSize: 'clamp(32px,5.4vw,62px)', color: '#f3e8d3' }}>
          The Impact
        </Reveal>
        <Reveal as="p" delay={140} className="font-light mx-auto max-w-[46ch]" style={{ margin: '0 auto clamp(48px,7vw,72px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f' }}>
          Markers planted at the summit measured against the noisy world we left behind.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(18px,3vw,30px)' }}>
          {impact.map((m) => (
            <Reveal
              key={m.label}
              delay={m.delay}
              className="relative flex flex-col items-center rounded-2xl"
              style={{ padding: 'clamp(28px,4vw,40px) 18px clamp(24px,3vw,32px)', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.2)' }}
            >
              <span aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 30, height: 30, background: '#caa066', clipPath: 'polygon(50% 0,100% 100%,0 100%)' }} />
              <span className="flex items-baseline gap-[3px] font-serif font-bold leading-none" style={{ color: m.color }}>
                <span aria-hidden="true" style={{ fontSize: 'clamp(22px,3vw,30px)' }}>
                  {m.arrow}
                </span>
                <AnimatedCounter target={m.target} style={{ fontSize: 'clamp(44px,6vw,68px)' }} />
                <span style={{ fontSize: 'clamp(24px,3vw,34px)' }}>%</span>
              </span>
              <span className="mt-[14px]" style={{ fontSize: 13.5, letterSpacing: '.04em', color: '#cbb78f', fontWeight: 400 }}>
                {m.label}
              </span>
              <span className="font-mono mt-[5px]" style={{ fontSize: 10.5, color: '#8a7350' }}>
                {m.sub}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[clamp(56px,8vw,90px)]">
          <p className="mx-auto font-serif italic max-w-[26ch]" style={{ margin: '0 auto', fontSize: 'clamp(20px,2.8vw,30px)', lineHeight: 1.5, color: '#e3d2af', fontWeight: 500 }}>
            The quietest interfaces ask the most of their makers and give the most back to the people who use them.
          </p>
          <div className="flex flex-wrap justify-center gap-[14px] mt-[38px]">
            <Link
              to="/#work"
              className="inline-flex items-center gap-[10px] rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9b87a]"
              style={{ background: '#caa066', color: '#15100c', padding: '15px 28px', fontSize: 14, letterSpacing: '.04em' }}
            >
              ← Back to the temple
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-[10px] rounded-full transition-colors duration-300 hover:bg-[rgba(202,160,102,.14)] hover:[border-color:#caa066]"
              style={{ background: 'none', border: '1px solid rgba(202,160,102,.4)', color: '#e3d2af', padding: '15px 28px', fontSize: 14, letterSpacing: '.04em' }}
            >
              Start a conversation →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
