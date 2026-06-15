import Reveal from '../shared/Reveal';
import { ParallaxLayer } from '../../context/ParallaxContext';
import { processSteps, methods, frameworks } from '../../data/portfolio';

/** Mountain Three "How I Think": the six-step process path plus methods/frameworks chips. */
export default function ProcessSection() {
  return (
    <section
      id="process"
      data-screen-label="Mountain 3 How I Think"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(96px,13vw,170px) 0 0', background: 'linear-gradient(180deg,#efe3cf 0%,#eae3d6 40%,#e4ddd0 100%)' }}
    >
      <div className="relative z-3 max-w-[1180px] mx-auto px-[clamp(22px,6vw,64px)]">
        <Reveal className="flex items-center gap-4 mb-[18px]">
          <span className="font-mono text-xs" style={{ letterSpacing: '.3em', color: '#b14b34' }}>
            峰 03 Mountain Three
          </span>
          <span className="flex-1 h-px max-w-[120px]" style={{ background: '#d8cdbb' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold leading-[1.02]" style={{ fontSize: 'clamp(34px,5.4vw,68px)', color: '#241f1a' }}>
          How I Think
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[46ch]" style={{ margin: '18px 0 0', fontSize: 16, lineHeight: 1.8, color: '#574d3f' }}>
          <b>
            Every climb follows the same path six steps from the question no one has framed yet, to the thing people actually use.
            The terrain changes; the discipline doesn't.
          </b>
        </Reveal>

        {/* process path */}
        <div className="relative" style={{ marginTop: 'clamp(44px,6vw,72px)' }}>
          <div
            aria-hidden="true"
            className="hidden xl:block absolute"
            style={{ top: 34, left: '6%', right: '6%', height: 1, background: 'repeating-linear-gradient(90deg,#c9bda9 0 8px,transparent 8px 16px)' }}
          />
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-[clamp(12px,1.6vw,22px)] gap-y-[34px] xl:gap-y-[clamp(12px,1.6vw,22px)]">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 70} className="relative">
                <div
                  className="relative grid place-items-center font-serif font-semibold rounded-full"
                  style={{ width: 68, height: 68, background: '#faf5ec', border: '1px solid #d8cdbb', fontSize: 19, color: '#b14b34', boxShadow: '0 12px 24px -16px rgba(43,39,34,.5)', marginBottom: 20 }}
                >
                  {step.n}
                </div>
                <h3 className="font-serif font-semibold" style={{ margin: '0 0 7px', fontSize: 18, color: '#2b2722' }}>
                  {step.t}
                </h3>
                <p className="font-light" style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#6b6052' }}>
                  <b>{step.d}</b>
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* methods + frameworks */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[clamp(24px,4vw,52px)]" style={{ marginTop: 'clamp(48px,7vw,84px)' }}>
          <Reveal>
            <h3 className="font-mono uppercase" style={{ margin: '0 0 18px', fontSize: 12, letterSpacing: '.24em', color: '#9a8f7e' }}>
              Research methods
            </h3>
            <div className="flex flex-wrap gap-[9px]">
              {methods.map((m) => (
                <span key={m} className="text-[13px] rounded-lg" style={{ color: '#3a342b', background: 'rgba(255,255,255,.55)', border: '1px solid #d8cdbb', padding: '9px 16px' }}>
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="font-mono uppercase" style={{ margin: '0 0 18px', fontSize: 12, letterSpacing: '.24em', color: '#9a8f7e' }}>
              Frameworks I lean on
            </h3>
            <div className="flex flex-wrap gap-[9px]">
              {frameworks.map((f) => (
                <span key={f} className="text-[13px] rounded-lg" style={{ color: '#3a342b', background: 'rgba(177,75,52,.08)', border: '1px solid rgba(177,75,52,.28)', padding: '9px 16px' }}>
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* mountain footer */}
      <div className="relative" style={{ height: 'clamp(140px,18vw,230px)', marginTop: 'clamp(48px,7vw,84px)' }}>
        <ParallaxLayer
          as="svg"
          anchor="process"
          speed={0.07}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '78%' }}
        >
          <path d="M0,160 L240,110 L470,165 L700,100 L940,160 L1180,110 L1440,150 L1440,360 L0,360Z" fill="#cdc7ba" />
        </ParallaxLayer>
        <ParallaxLayer
          as="svg"
          anchor="process"
          speed={0.14}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '88%' }}
        >
          <path d="M0,220 L300,165 L560,225 L820,150 L1080,215 L1320,165 L1440,195 L1440,360 L0,360Z" fill="#b3ab98" />
        </ParallaxLayer>
        <ParallaxLayer
          as="svg"
          anchor="process"
          speed={0.22}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '60%' }}
        >
          <path d="M0,280 L360,235 L680,285 L1000,225 L1280,280 L1440,255 L1440,360 L0,360Z" fill="#5f5848" />
        </ParallaxLayer>
      </div>
    </section>
  );
}
