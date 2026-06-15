import Reveal from '../shared/Reveal';
import { craft } from '../../data/kindaShopee';

/** Chapter Five "The Craft": each of the seven screens, with why/solves/business rationale. */
export default function CraftSection() {
  return (
    <section
      id="k-craft"
      data-screen-label="KINDA SHOPEE The Craft"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: 'radial-gradient(ellipse 80% 40% at 50% 0%,#1f1611,#15100c 60%)' }}
    >
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif text-[13px]" style={{ letterSpacing: '.3em', color: '#caa066' }}>
            伍 Chapter Five
          </span>
          <span className="flex-1 h-px max-w-[160px]" style={{ background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="font-serif font-semibold leading-[1.04]" style={{ margin: '0 0 16px', fontSize: 'clamp(32px,5.4vw,62px)', color: '#f3e8d3' }}>
          The Craft
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[54ch]" style={{ margin: '0 0 clamp(54px,8vw,86px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f' }}>
          Where the journey becomes the product. Each screen earns its place here's why it exists, the problem it solves, and the goal it serves.
        </Reveal>

        <div className="flex flex-col" style={{ gap: 'clamp(64px,9vw,120px)' }}>
          {craft.map((c) => (
            <div
              key={c.img}
              className={`flex flex-col sm:items-center text-center sm:text-left ${c.dir === 'row' ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              style={{ gap: 'clamp(34px,6vw,80px)' }}
            >
              {/* phone */}
              <Reveal className="relative flex-shrink-0 mx-auto sm:mx-0" style={{ width: 'clamp(216px,26vw,264px)' }}>
                <span aria-hidden="true" className="absolute rounded-full" style={{ inset: '-12% -8% -8%', background: 'radial-gradient(circle,rgba(202,160,102,.18),rgba(202,160,102,0) 70%)' }} />
                <div className="relative rounded-[38px]" style={{ padding: 9, background: 'linear-gradient(160deg,#2a2018,#14100b 100%)', boxShadow: '0 40px 70px -30px rgba(0,0,0,.85), inset 0 0 0 1px rgba(202,160,102,.22)' }}>
                  <div className="relative overflow-hidden rounded-[30px] bg-black" style={{ aspectRatio: '375/812' }}>
                    <span aria-hidden="true" className="absolute top-2 left-1/2 -translate-x-1/2 rounded-b-[14px]" style={{ width: '42%', height: 18, background: '#0a0a0a', zIndex: 2 }} />
                    <img src={c.img} alt={c.alt} className="block w-full h-full object-cover" />
                  </div>
                </div>
              </Reveal>
              {/* rationale */}
              <Reveal delay={120} className="flex-1 min-w-0">
                <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: '.2em', color: '#caa066' }}>
                  {c.step}
                </span>
                <h3 className="font-serif font-semibold leading-[1.1]" style={{ margin: '10px 0 8px', fontSize: 'clamp(24px,3.2vw,34px)', color: '#f3e8d3' }}>
                  {c.t}
                </h3>
                <p className="font-light max-w-[42ch] mx-auto sm:mx-0" style={{ margin: '0 0 24px', fontSize: 15.5, lineHeight: 1.75, color: '#bfae88' }}>
                  {c.lead}
                </p>
                <div className="flex flex-col gap-[14px] max-w-[46ch] mx-auto sm:mx-0">
                  <div className="flex gap-[13px] text-left">
                    <span className="flex-shrink-0 font-mono uppercase" style={{ fontSize: 10, letterSpacing: '.1em', color: '#caa066', width: 64, paddingTop: 2 }}>
                      Why
                    </span>
                    <span className="font-light" style={{ fontSize: 14, lineHeight: 1.6, color: '#d3c3a0' }}>
                      {c.why}
                    </span>
                  </div>
                  <div className="flex gap-[13px] text-left" style={{ borderTop: '1px solid rgba(202,160,102,.14)', paddingTop: 14 }}>
                    <span className="flex-shrink-0 font-mono uppercase" style={{ fontSize: 10, letterSpacing: '.1em', color: '#caa066', width: 64, paddingTop: 2 }}>
                      Solves
                    </span>
                    <span className="font-light" style={{ fontSize: 14, lineHeight: 1.6, color: '#d3c3a0' }}>
                      {c.solves}
                    </span>
                  </div>
                  <div className="flex gap-[13px] text-left" style={{ borderTop: '1px solid rgba(202,160,102,.14)', paddingTop: 14 }}>
                    <span className="flex-shrink-0 font-mono uppercase" style={{ fontSize: 10, letterSpacing: '.1em', color: '#caa066', width: 64, paddingTop: 2 }}>
                      Business
                    </span>
                    <span className="font-light" style={{ fontSize: 14, lineHeight: 1.6, color: '#d3c3a0' }}>
                      {c.business}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
