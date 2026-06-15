import Reveal from '../shared/Reveal';
import { callPoints } from '../../data/kindaShopee';

/** Chapter One "The Call to Adventure": the noise the project set out to quiet. */
export default function StorySection() {
  return (
    <section
      id="k-story"
      data-screen-label="KINDA SHOPEE The Call"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: 'radial-gradient(ellipse 70% 50% at 80% 10%,#241813,#15100c 60%)' }}
    >
      <div className="max-w-[1000px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif text-[13px]" style={{ letterSpacing: '.3em', color: '#caa066' }}>
            壱 Chapter One
          </span>
          <span className="flex-1 h-px max-w-[160px]" style={{ background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="font-serif font-semibold leading-[1.04]" style={{ margin: '0 0 18px', fontSize: 'clamp(32px,5.4vw,62px)', color: '#f3e8d3' }}>
          The Call to Adventure
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[52ch]" style={{ margin: '0 0 clamp(34px,5vw,52px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f' }}>
          Every journey begins with a disturbance in the ordinary world. For the modern shopper, that world had grown loud.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]" style={{ marginBottom: 'clamp(40px,6vw,60px)' }}>
          {callPoints.map((c) => (
            <Reveal
              key={c.t}
              delay={c.delay}
              className="relative overflow-hidden rounded-[14px]"
              style={{ padding: '24px 26px', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.18)' }}
            >
              <span aria-hidden="true" className="absolute font-serif" style={{ top: 14, right: 18, fontSize: 30, color: 'rgba(202,160,102,.22)' }}>
                {c.kanji}
              </span>
              <h3 className="font-serif font-semibold" style={{ margin: '0 0 7px', fontSize: 19, color: '#ecdcbb' }}>
                {c.t}
              </h3>
              <p className="font-light max-w-[34ch]" style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#a8966f' }}>
                {c.d}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="relative overflow-hidden rounded-[18px]"
          style={{ padding: 'clamp(34px,5vw,56px)', background: 'linear-gradient(160deg,#ece0c8,#ddccab)', boxShadow: '0 30px 60px -34px rgba(0,0,0,.7)' }}
        >
          <span aria-hidden="true" className="absolute font-serif leading-none" style={{ top: -30, right: -20, fontSize: 160, color: 'rgba(110,85,54,.08)' }}>
            問
          </span>
          <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: '.24em', color: '#9a6b3f' }}>
            The question
          </span>
          <p className="font-serif font-semibold max-w-[24ch]" style={{ margin: '14px 0 0', fontSize: 'clamp(22px,3.4vw,38px)', lineHeight: 1.35, color: '#2c2114' }}>
            How might we create a calmer, more intentional way to shop one built on trust instead of noise?
          </p>
        </Reveal>
      </div>
    </section>
  );
}
