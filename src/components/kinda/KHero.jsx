import Reveal from '../shared/Reveal';
import KParticles from './KParticles';

/** Hero: a glowing scroll, the case study title and the opening tags. */
export default function KHero() {
  return (
    <section
      id="k-hero"
      data-screen-label="KINDA SHOPEE Hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: '100vh',
        padding: '120px clamp(20px,5vw,40px) 80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% 36%,#241914 0%,#1a130d 46%,#120d09 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <KParticles />
      </div>

      <div className="relative mb-[42px]" style={{ animation: 'kfloatY 7s ease-in-out infinite' }}>
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{ inset: '-60px', background: 'radial-gradient(circle,rgba(202,160,102,.34),rgba(202,160,102,0) 68%)', animation: 'kglow 6s ease-in-out infinite' }}
        />
        <div
          className="relative flex flex-col items-center justify-center gap-[10px] overflow-hidden rounded-xl"
          style={{
            width: 'clamp(132px,18vw,186px)',
            height: 'clamp(150px,20vw,210px)',
            background: 'linear-gradient(160deg,#efe2c6,#dcc8a0)',
            boxShadow: '0 30px 60px -24px rgba(0,0,0,.7), inset 0 2px 0 rgba(255,255,255,.5)',
          }}
        >
          <span aria-hidden="true" className="absolute top-0 left-0 right-0" style={{ height: 14, background: 'linear-gradient(180deg,#caa066,#b8915a)' }} />
          <span aria-hidden="true" className="absolute bottom-0 left-0 right-0" style={{ height: 14, background: 'linear-gradient(0deg,#caa066,#b8915a)' }} />
          <span className="font-serif leading-none" style={{ fontSize: 46, color: '#15100c' }}>
            道
          </span>
          <span className="font-mono uppercase" style={{ fontSize: 9.5, letterSpacing: '.28em', color: '#6e5536' }}>
            unfold
          </span>
        </div>
      </div>

      <Reveal as="span" className="font-mono uppercase mb-[18px]" style={{ fontSize: 12, letterSpacing: '.4em', color: '#caa066' }}>
        Case Study · E-commerce
      </Reveal>
      <Reveal
        as="h1"
        delay={100}
        className="font-serif font-bold m-0"
        style={{ fontSize: 'clamp(40px,10vw,116px)', lineHeight: 0.92, letterSpacing: '.02em', color: '#f5ead4', textShadow: '0 4px 40px rgba(202,160,102,.3)' }}
      >
        KINDA SHOPEE
      </Reveal>
      <Reveal
        as="p"
        delay={200}
        className="font-serif italic max-w-[30ch]"
        style={{ margin: '22px 0 0', fontSize: 'clamp(16px,2.2vw,24px)', lineHeight: 1.5, color: '#cdb893', fontWeight: 400 }}
      >
        A journey toward thoughtful commerce.
      </Reveal>
      <Reveal
        delay={320}
        className="flex flex-wrap justify-center font-mono uppercase"
        style={{ gap: '10px 26px', marginTop: 34, fontSize: 11.5, letterSpacing: '.12em', color: '#9a8157' }}
      >
        <span>Role UX/UI Designer</span>
        <span aria-hidden="true" style={{ color: '#caa066' }}>
          ·
        </span>
        <span>Mobile · iOS</span>
        <span aria-hidden="true" style={{ color: '#caa066' }}>
          ·
        </span>
        <span>Research → Ship</span>
      </Reveal>

      <div
        aria-hidden="true"
        className="absolute bottom-[26px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'kbob 2.6s ease-in-out infinite' }}
      >
        <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '.3em', color: '#7a6444' }}>
          begin
        </span>
        <span style={{ width: 1, height: 34, background: 'linear-gradient(#caa066,rgba(202,160,102,0))' }} />
      </div>
    </section>
  );
}
