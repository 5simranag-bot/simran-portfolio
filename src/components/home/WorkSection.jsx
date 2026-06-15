import { Link } from 'react-router-dom';
import Reveal from '../shared/Reveal';

const tags = ['UX Research', 'Mobile · iOS', 'Design System'];

/** Mountain Two "What I Create": the single featured KINDA SHOPEE case-study shrine. */
export default function WorkSection() {
  return (
    <section
      id="work"
      data-screen-label="Mountain 2 What I Create"
      className="relative overflow-hidden"
      style={{
        padding: 'clamp(96px,13vw,170px) 0 clamp(90px,12vw,150px)',
        background: 'linear-gradient(180deg,#6f5c44 0%,#8a7457 8%,#cdb591 26%,#f6efe0 60%,#efe3cf 100%)',
      }}
    >
      <div className="relative z-3 max-w-[1180px] mx-auto px-[clamp(22px,6vw,64px)]">
        <Reveal className="flex items-center gap-4 mb-[18px]">
          <span className="font-mono text-xs" style={{ letterSpacing: '.3em', color: '#f0d9b5' }}>
            峰 02 Mountain Two
          </span>
          <span className="flex-1 h-px max-w-[120px]" style={{ background: 'rgba(244,234,217,.35)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold leading-[1.02]" style={{ fontSize: 'clamp(34px,5.4vw,68px)', color: '#fbf4e6' }}>
          What I Create
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[44ch]" style={{ margin: '18px 0 0', fontSize: 16, lineHeight: 1.8, color: '#efe3cf' }}>
          <b>A temple housing the work. Step through the featured shrine to walk a full case study, from the first question to the summit.</b>
        </Reveal>

        <Reveal
          as={Link}
          to="/work/kinda-shopee"
          aria-label="Open the KINDA SHOPEE case study featured project"
          className="relative grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-[clamp(20px,4vw,46px)] items-center overflow-hidden transition-all duration-500 hover:-translate-y-[6px]"
          style={{
            marginTop: 'clamp(40px,6vw,60px)',
            padding: 'clamp(52px,6vw,74px) clamp(28px,4vw,50px) clamp(30px,4vw,44px)',
            background: 'linear-gradient(165deg,#2a1f14,#171009)',
            clipPath: 'polygon(50% 0,100% 8%,100% 100%,0 100%,0 8%)',
            filter: 'drop-shadow(0 34px 44px rgba(43,39,34,.5))',
          }}
        >
          <span aria-hidden="true" className="absolute" style={{ top: '8%', left: 0, right: 0, height: 7, background: 'linear-gradient(90deg,#b8915a,#caa066,#b8915a)' }} />
          <span aria-hidden="true" className="absolute" style={{ top: 'calc(8% + 14px)', left: '6%', right: '6%', height: 4, background: 'rgba(202,160,102,.5)' }} />
          <span
            aria-hidden="true"
            className="absolute rounded-full"
            style={{ top: '2.6%', left: '50%', transform: 'translateX(-50%)', width: 12, height: 12, background: '#caa066', boxShadow: '0 0 16px 3px rgba(202,160,102,.6)' }}
          />
          <div className="relative">
            <span className="font-mono text-[11px] uppercase" style={{ letterSpacing: '.2em', color: '#caa066' }}>
              Featured shrine
            </span>
            <h3 className="font-serif font-bold leading-[.98]" style={{ margin: '10px 0 0', fontSize: 'clamp(30px,4.6vw,54px)', letterSpacing: '.04em', color: '#f5ead4' }}>
              KINDA SHOPEE
            </h3>
            <p className="font-serif italic max-w-[30ch]" style={{ margin: '16px 0 0', fontSize: 'clamp(15px,1.9vw,19px)', lineHeight: 1.5, color: '#cdb893' }}>
              A journey toward thoughtful commerce a calm, trust-led shopping experience for mobile.
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: 22 }}>
              {tags.map((tag) => (
                <span key={tag} className="text-xs rounded-full" style={{ color: '#d8c6a8', border: '1px solid rgba(202,160,102,.34)', padding: '6px 13px' }}>
                  {tag}
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-[9px] rounded-full font-medium"
              style={{ marginTop: 26, background: '#caa066', color: '#15100c', padding: '13px 24px', fontSize: 13.5, letterSpacing: '.04em' }}
            >
              Enter the shrine <span aria-hidden="true">→</span>
            </span>
          </div>
          <div className="hidden md:flex relative justify-end items-end gap-[14px]" style={{ minHeight: 'clamp(200px,26vw,290px)' }}>
            <div
              className="overflow-hidden bg-black"
              style={{ width: 'clamp(118px,15vw,156px)', borderRadius: 22, border: '5px solid #2a2018', boxShadow: '0 24px 40px -20px rgba(0,0,0,.8)', transform: 'translateY(14px) rotate(-3deg)', aspectRatio: '375/812' }}
            >
              <img src="/assets/karna-home.png" alt="KINDA SHOPEE home screen" className="block w-full h-full object-cover" />
            </div>
            <div
              className="overflow-hidden bg-black"
              style={{ width: 'clamp(118px,15vw,156px)', borderRadius: 22, border: '5px solid #2a2018', boxShadow: '0 24px 40px -20px rgba(0,0,0,.8)', transform: 'translateY(-10px) rotate(3deg)', aspectRatio: '375/812' }}
            >
              <img src="/assets/karna-product.png" alt="KINDA SHOPEE product detail screen" className="block w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
