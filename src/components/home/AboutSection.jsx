import Reveal from '../shared/Reveal';
import { ParallaxLayer } from '../../context/ParallaxContext';
import { principles, stats, timeline } from '../../data/portfolio';

/** Mountain One "Who I Am": intro copy, principles, stats, career timeline and a torii-gate mountain footer. */
export default function AboutSection() {
  return (
    <section
      id="about"
      data-screen-label="Mountain 1 Who I Am"
      className="relative overflow-hidden"
      style={{ paddingTop: 'clamp(96px,13vw,180px)', background: 'linear-gradient(180deg,#e8dcc8 0%,#f4eddf 30%,#efe6d6 100%)' }}
    >
      <div className="relative z-3 max-w-[1120px] mx-auto px-[clamp(22px,6vw,64px)]">
        <Reveal className="flex items-center gap-4 mb-[18px]">
          <span className="font-mono text-xs" style={{ letterSpacing: '.3em', color: '#b14b34' }}>
            峰 01 Mountain One
          </span>
          <span className="flex-1 h-px max-w-[120px]" style={{ background: '#d8cdbb' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold leading-[1.02] relative" style={{ fontSize: 'clamp(34px,5.4vw,68px)', letterSpacing: '-.01em', color: '#241f1a' }}>
          Who I Am
        </Reveal>

        <div className="relative grid grid-cols-1 xl:grid-cols-[1.3fr_1fr] gap-[clamp(34px,6vw,80px)] items-start" style={{ marginTop: 'clamp(40px,6vw,64px)' }}>
          <div>
            <Reveal as="p" className="m-0 font-serif font-medium" style={{ fontSize: 'clamp(20px,2.5vw,30px)', lineHeight: 1.5, color: '#3a342b' }}>
              I turn fragmented, complex workflows into experiences that feel quietly effortless.
            </Reveal>
            <Reveal as="p" delay={100} className="font-light" style={{ margin: '24px 0 0', fontSize: 16, lineHeight: 1.85, color: '#574d3f' }}>
              <b>
                I'm a Senior UX Designer with 5+ years across enterprise SaaS platforms, internal tools and complex B2B systems. I
                specialise in transforming tangled workflows into streamlined experiences through user-centred research, data
                visualisation and design systems partnering closely with engineering and facilitating workshops to drive product
                strategy. I trained as an architect, and still design the way I learned to build: structure first, then light.
              </b>
            </Reveal>
            <Reveal delay={180} className="flex flex-wrap gap-[10px]" style={{ marginTop: 30 }}>
              {principles.map((p) => (
                <span
                  key={p}
                  className="text-[12.5px] rounded-full whitespace-nowrap"
                  style={{ letterSpacing: '.04em', color: '#6b6052', border: '1px solid #d8cdbb', background: 'rgba(255,255,255,.45)', padding: '8px 15px' }}
                >
                  {p}
                </span>
              ))}
            </Reveal>
            <Reveal delay={240} className="flex gap-[clamp(24px,5vw,52px)]" style={{ marginTop: 42 }}>
              {stats.map((s) => (
                <div key={s.l} className="flex flex-col gap-[6px]">
                  <span className="font-serif font-bold leading-none text-terracotta" style={{ fontSize: 'clamp(34px,4.6vw,52px)' }}>
                    {s.v}
                  </span>
                  <span className="text-xs uppercase" style={{ letterSpacing: '.1em', color: '#9a8f7e' }}>
                    {s.l}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* timeline + shrine label */}
          <Reveal delay={120} className="relative border-l pl-[26px]" style={{ borderColor: '#d8cdbb' }}>
            {timeline.map((t) => (
              <div key={t.year} className="relative" style={{ padding: '0 0 30px' }}>
                <span
                  aria-hidden="true"
                  className="absolute rounded-full"
                  style={{ left: -32, top: 5, width: 9, height: 9, background: '#b14b34', boxShadow: '0 0 0 4px rgba(177,75,52,.14)' }}
                />
                <span className="font-mono text-xs" style={{ color: '#b14b34', letterSpacing: '.06em' }}>
                  {t.year}
                </span>
                <h3 className="font-serif font-semibold" style={{ margin: '3px 0 5px', fontSize: 18, color: '#2b2722' }}>
                  {t.title}
                </h3>
                <p className="font-light" style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: '#6b6052' }}>
                  <b>{t.desc}</b>
                </p>
              </div>
            ))}
            <span
              className="absolute uppercase font-serif"
              style={{ top: 2, left: 532, fontSize: 11, letterSpacing: '.24em', color: '#9a8f7e', writingMode: 'vertical-rl' }}
            >
              The climb so far
            </span>
          </Reveal>
        </div>
      </div>

      {/* mountain footer w/ torii shrine */}
      <div className="relative" style={{ height: 'clamp(180px,24vw,300px)', marginTop: 'clamp(40px,6vw,72px)' }}>
        <ParallaxLayer
          as="svg"
          anchor="about"
          speed={0.07}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '80%' }}
        >
          <path d="M0,160 L240,110 L470,165 L700,100 L940,160 L1180,110 L1440,150 L1440,360 L0,360Z" fill="#d6c9b3" />
        </ParallaxLayer>
        <ParallaxLayer
          as="svg"
          anchor="about"
          speed={0.13}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '90%' }}
        >
          <path d="M0,220 L300,165 L560,225 L820,150 L1080,215 L1320,165 L1440,195 L1440,360 L0,360Z" fill="#c2ad8c" />
        </ParallaxLayer>
        {/* torii gate */}
        <ParallaxLayer
          anchor="about"
          speed={0.2}
          aria-hidden="true"
          className="absolute"
          style={{ bottom: '14%', left: '50%', transform: 'translateX(-50%)', width: 'clamp(120px,15vw,180px)', height: 'clamp(96px,12vw,150px)', zIndex: 2 }}
        >
          <div className="absolute rounded" style={{ top: 0, left: '-9%', width: '118%', height: '14%', background: '#b14b34', boxShadow: '0 4px 8px -3px rgba(43,39,34,.5)' }} />
          <div className="absolute rounded-sm" style={{ top: '20%', left: '2%', width: '96%', height: '9%', background: '#9a3f2b' }} />
          <div className="absolute" style={{ top: '14%', left: '14%', width: '8%', height: '86%', background: '#b14b34' }} />
          <div className="absolute" style={{ top: '14%', right: '14%', width: '8%', height: '86%', background: '#b14b34' }} />
        </ParallaxLayer>
        <ParallaxLayer
          as="svg"
          anchor="about"
          speed={0.22}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '62%', zIndex: 3 }}
        >
          <path d="M0,280 L360,235 L680,285 L1000,225 L1280,280 L1440,255 L1440,360 L0,360Z" fill="#6f5c44" />
        </ParallaxLayer>
      </div>
    </section>
  );
}
