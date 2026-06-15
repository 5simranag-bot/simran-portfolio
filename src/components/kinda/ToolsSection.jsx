import Reveal from '../shared/Reveal';
import { tools } from '../../data/kindaShopee';

/** Chapter Four "The Tools of the Traveler": the artifacts that kept the work honest. */
export default function ToolsSection() {
  return (
    <section id="k-tools" data-screen-label="KINDA SHOPEE The Tools" className="relative" style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: '#15100c' }}>
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif text-[13px]" style={{ letterSpacing: '.3em', color: '#caa066' }}>
            肆 Chapter Four
          </span>
          <span className="flex-1 h-px max-w-[160px]" style={{ background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="font-serif font-semibold leading-[1.04]" style={{ margin: '0 0 16px', fontSize: 'clamp(32px,5.4vw,62px)', color: '#f3e8d3' }}>
          The Tools of the Traveler
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[50ch]" style={{ margin: '0 0 clamp(40px,6vw,60px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f' }}>
          Artifacts collected along the way each one a tool that kept the work honest.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t) => (
            <Reveal
              key={t.t}
              delay={t.delay}
              className="relative flex flex-col rounded-[14px] transition-colors duration-400 hover:[border-color:rgba(202,160,102,.5)] hover:bg-[rgba(236,224,200,.07)]"
              style={{ padding: '28px 24px', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.2)' }}
            >
              <span aria-hidden="true" className="grid place-items-center font-serif rounded-[10px] mb-[18px]" style={{ width: 48, height: 48, background: 'rgba(202,160,102,.14)', fontSize: 24, color: '#caa066' }}>
                {t.icon}
              </span>
              <h3 className="font-serif font-semibold" style={{ margin: '0 0 8px', fontSize: 19, color: '#ecdcbb' }}>
                {t.t}
              </h3>
              <p className="font-light" style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: '#a8966f' }}>
                {t.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
