import Reveal from '../shared/Reveal';
import { lessons } from '../../data/kindaShopee';

/** Chapter Six "What the Mountain Taught Me": four lessons from the climb. */
export default function LessonsSection() {
  return (
    <section id="k-lessons" data-screen-label="KINDA SHOPEE Lessons" className="relative" style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: '#15100c' }}>
      <div className="max-w-[1000px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif text-[13px]" style={{ letterSpacing: '.3em', color: '#caa066' }}>
            陸 Chapter Six
          </span>
          <span className="flex-1 h-px max-w-[160px]" style={{ background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="font-serif font-semibold leading-[1.04]" style={{ margin: '0 0 clamp(34px,5vw,52px)', fontSize: 'clamp(32px,5.4vw,62px)', color: '#f3e8d3' }}>
          What the Mountain Taught Me
        </Reveal>
        <div className="flex flex-col" style={{ gap: 2 }}>
          {lessons.map((l) => (
            <Reveal key={l.n} delay={l.delay} className="flex items-baseline" style={{ gap: 'clamp(18px,3vw,34px)', padding: 'clamp(22px,3vw,30px) 0', borderBottom: '1px solid rgba(202,160,102,.16)' }}>
              <span className="flex-shrink-0 font-serif leading-none" style={{ fontSize: 'clamp(24px,3vw,34px)', color: 'rgba(202,160,102,.5)' }}>
                {l.n}
              </span>
              <div>
                <h3 className="font-serif font-semibold leading-[1.25]" style={{ margin: '0 0 7px', fontSize: 'clamp(19px,2.5vw,26px)', color: '#ecdcbb' }}>
                  {l.t}
                </h3>
                <p className="font-light max-w-[60ch]" style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#a8966f' }}>
                  {l.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
