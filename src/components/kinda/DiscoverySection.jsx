import Reveal from '../shared/Reveal';
import { discovery } from '../../data/kindaShopee';

/** Chapter Two "The Discovery": fragments from interviews, friction and the wider market. */
export default function DiscoverySection() {
  return (
    <section id="k-discovery" data-screen-label="KINDA SHOPEE The Discovery" className="relative" style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: '#15100c' }}>
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif text-[13px]" style={{ letterSpacing: '.3em', color: '#caa066' }}>
            弐 Chapter Two
          </span>
          <span className="flex-1 h-px max-w-[160px]" style={{ background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="font-serif font-semibold leading-[1.04]" style={{ margin: '0 0 16px', fontSize: 'clamp(32px,5.4vw,62px)', color: '#f3e8d3' }}>
          The Discovery
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[50ch]" style={{ margin: '0 0 clamp(40px,6vw,60px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f' }}>
          I gathered fragments of an old map what people said, where they stumbled, what the market missed. Pinned together, they pointed the way.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {discovery.map((d) => (
            <div
              key={d.t}
              className="relative transition-transform duration-500 [transform:rotate(var(--tilt))] hover:[transform:rotate(0deg)_translateY(-6px)]"
              style={{ '--tilt': d.tilt, transitionTimingFunction: 'cubic-bezier(.16,.8,.24,1)' }}
            >
              <Reveal
                delay={d.delay}
                className="relative flex flex-col h-full"
                style={{ padding: '26px 22px', background: 'linear-gradient(165deg,#efe3ca,#dccbaa)', borderRadius: '4px 14px 4px 14px', boxShadow: '0 22px 44px -28px rgba(0,0,0,.7)' }}
              >
                <span aria-hidden="true" className="absolute rounded-full" style={{ top: -7, left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, background: '#b14b34', boxShadow: '0 2px 6px rgba(0,0,0,.4)' }} />
                <span className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: '.16em', color: '#9a6b3f' }}>
                  {d.tag}
                </span>
                <h3 className="font-serif font-semibold leading-[1.2]" style={{ margin: '9px 0 8px', fontSize: 18, color: '#2c2114' }}>
                  {d.t}
                </h3>
                <p style={{ margin: '0 0 14px', fontSize: 13, lineHeight: 1.6, color: '#5e4c33', fontWeight: 400 }}>{d.d}</p>
                <span className="font-serif italic leading-[1.4]" style={{ marginTop: 'auto', fontSize: 13.5, color: '#9a4b2f' }}>
                  “{d.insight}”
                </span>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
