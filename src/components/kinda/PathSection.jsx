import Reveal from '../shared/Reveal';
import { path } from '../../data/kindaShopee';

/** Chapter Three "The Path": six switchbacks from research to final design. */
export default function PathSection() {
  return (
    <section
      id="k-path"
      data-screen-label="KINDA SHOPEE The Path"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: 'radial-gradient(ellipse 60% 50% at 20% 30%,#221712,#15100c 62%)' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif text-[13px]" style={{ letterSpacing: '.3em', color: '#caa066' }}>
            参 Chapter Three
          </span>
          <span className="flex-1 h-px max-w-[160px]" style={{ background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="font-serif font-semibold leading-[1.04]" style={{ margin: '0 0 16px', fontSize: 'clamp(32px,5.4vw,62px)', color: '#f3e8d3' }}>
          The Path
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[50ch]" style={{ margin: '0 0 clamp(44px,6vw,68px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f' }}>
          The trail wound up the mountain in six switchbacks each one earning the next.
        </Reveal>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute"
            style={{ top: 38, left: '7%', right: '7%', height: 2, background: 'repeating-linear-gradient(90deg,rgba(202,160,102,.5) 0 9px,transparent 9px 18px)' }}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[14px]">
            {path.map((p) => (
              <Reveal key={p.n} delay={p.delay} className="relative flex flex-col items-center text-center">
                <div
                  className="relative grid place-items-center font-serif mb-[18px] rounded-full"
                  style={{ width: 76, height: 76, background: '#1d1610', border: '2px solid #caa066', fontSize: 26, color: '#caa066', boxShadow: '0 0 0 6px #15100c, 0 14px 30px -16px rgba(0,0,0,.8)' }}
                >
                  {p.icon}
                </div>
                <span className="font-mono" style={{ fontSize: 10, letterSpacing: '.14em', color: '#8a7350' }}>
                  {p.n}
                </span>
                <h3 className="font-serif font-semibold" style={{ margin: '4px 0 6px', fontSize: 16.5, color: '#ecdcbb' }}>
                  {p.t}
                </h3>
                <p className="font-light" style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: '#a0906c' }}>
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
