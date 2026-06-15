import Reveal from '../shared/Reveal';
import Atmosphere from '../shared/Atmosphere';
import { ParallaxLayer } from '../../context/ParallaxContext';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { scrollToId } from '../../utils/scroll';

const MOUNTAIN_VIEWBOX = '0 0 1440 520';
const mountains = [
  { speed: 0.05, mouse: 8, fill: '#d9ccb5', d: 'M0,310 L180,250 L300,290 L470,228 L640,285 L820,236 L1010,288 L1220,248 L1380,300 L1440,278 L1440,520 L0,520Z' },
  { speed: 0.1, mouse: 16, fill: '#ccba9d', d: 'M0,350 L150,300 L320,345 L520,272 L700,335 L900,284 L1120,340 L1300,294 L1440,330 L1440,520 L0,520Z' },
  { speed: 0.17, mouse: 26, fill: '#bca887', d: 'M0,400 L220,330 L430,395 L640,318 L880,385 L1080,330 L1300,390 L1440,360 L1440,520 L0,520Z' },
  { speed: 0.27, mouse: 40, fill: '#a78f6c', d: 'M0,442 L260,382 L500,442 L760,360 L1000,436 L1240,386 L1440,420 L1440,520 L0,520Z' },
];

/** Full-viewport hero: sun, sky atmosphere, parallax mountains, the kimono figure and hero copy. */
export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <header
      id="hero"
      data-screen-label="Hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 620, background: 'linear-gradient(180deg,#f6efe2 0%,#f1e7d6 46%,#e8dcc8 100%)' }}
    >
      {/* sun */}
      <ParallaxLayer
        anchor="hero"
        speed={0.06}
        className="absolute pointer-events-none"
        style={{
          top: '16%',
          left: '58%',
          width: 'min(340px,46vw)',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(circle,#fdf7ea 0%,#f9edd2 38%,rgba(246,228,196,.4) 60%,rgba(246,228,196,0) 72%)',
          animation: 'sunPulse 9s ease-in-out infinite',
        }}
      />

      {/* atmosphere: clouds, motes, birds */}
      <div className="absolute inset-0 pointer-events-none">
        <Atmosphere />
      </div>

      {/* mist band */}
      <ParallaxLayer
        anchor="hero"
        speed={0.05}
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: '30%',
          left: '-5%',
          width: '110%',
          height: 120,
          background: 'radial-gradient(ellipse 60% 100% at 50% 60%,rgba(250,244,233,.85),rgba(250,244,233,0))',
          filter: 'blur(6px)',
        }}
      />

      {/* mountain layers, back to front */}
      {mountains.map((m, i) => (
        <ParallaxLayer
          key={i}
          as="svg"
          anchor="hero"
          speed={m.speed}
          mouse={m.mouse}
          viewBox={MOUNTAIN_VIEWBOX}
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          className="absolute block pointer-events-none"
          style={{ bottom: 0, left: '-10%', width: '120%', height: 'auto' }}
        >
          <path d={m.d} fill={m.fill} />
        </ParallaxLayer>
      ))}

      {/* figure on the foreground cliff */}
      <ParallaxLayer
        anchor="hero"
        speed={0.3}
        mouse={24}
        className="absolute pointer-events-none"
        style={{ bottom: '8.5%', right: '-1%', zIndex: 4, width: 'clamp(330px,45vw,600px)' }}
      >
        <div className="relative origin-bottom" style={{ animation: 'swaySoft 8.5s ease-in-out infinite' }}>
          <div
            aria-hidden="true"
            className="absolute"
            style={{
              left: '46%',
              bottom: '1%',
              transform: 'translateX(-50%)',
              width: '46%',
              height: 24,
              background: 'radial-gradient(ellipse,rgba(43,39,34,.30),rgba(43,39,34,0) 70%)',
              filter: 'blur(6px)',
            }}
          />
          <img
            src="/assets/kimono-walk.png"
            alt="Simran, a woman in a flowing coral kimono walking along the cliff edge, hair streaming in the wind, gazing toward the distant mountains"
            className="relative block w-full h-auto"
            style={{ transform: 'scaleX(-1)', filter: 'drop-shadow(0 22px 30px rgba(43,39,34,.22))' }}
          />
        </div>
      </ParallaxLayer>

      {/* foreground cliff */}
      <ParallaxLayer
        as="svg"
        anchor="hero"
        speed={0.42}
        mouse={54}
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute block pointer-events-none"
        style={{ bottom: 0, left: '-6%', width: '112%', height: '26%', zIndex: 3 }}
      >
        <path d="M0,90 C200,84 360,108 520,96 C700,82 820,66 980,72 C1140,78 1300,100 1440,84 L1440,220 L0,220Z" fill="#6e5b43" />
      </ParallaxLayer>

      {/* hero copy */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-[clamp(22px,7vw,120px)] pointer-events-none"
        style={{ zIndex: 6 }}
      >
        <Reveal
          as="span"
          className="font-mono text-xs uppercase"
          style={{ letterSpacing: '.42em', color: '#b14b34', marginBottom: 22 }}
        >
          <b>The Journey of a Designer</b>
        </Reveal>
        <Reveal
          as="h1"
          delay={120}
          className="font-serif font-semibold leading-[.96] max-w-[14ch]"
          style={{ margin: 0, fontSize: 'clamp(46px,8.4vw,116px)', letterSpacing: '-.01em', color: '#241f1a', textShadow: '0 1px 0 rgba(255,255,255,.3)' }}
        >
          Simran<br />Agarwal
        </Reveal>
        <Reveal
          as="p"
          delay={240}
          className="font-light max-w-[34ch]"
          style={{ margin: '26px 0 0', fontSize: 'clamp(15px,1.7vw,20px)', lineHeight: 1.7, color: '#574d3f' }}
        >
          <b>Senior UX Designer turning fragmented, complex enterprise workflows into experiences that feel quietly effortless.</b>
        </Reveal>
        <Reveal
          as="div"
          delay={360}
          className="flex flex-wrap items-center gap-[18px] pointer-events-auto"
          style={{ marginTop: 38 }}
        >
          <button
            onClick={() => scrollToId('about', reduced)}
            className="inline-flex items-center gap-3 border-none rounded-full text-[14.5px] transition-all duration-400 hover:-translate-y-[3px] hover:bg-[#3a342b]"
            style={{ background: '#2b2722', color: '#f4ead9', padding: '16px 30px', letterSpacing: '.04em', boxShadow: '0 16px 34px -18px rgba(43,39,34,.7)' }}
          >
            Begin the Journey<span aria-hidden="true" className="text-[13px]">↓</span>
          </button>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('work', reduced);
            }}
            className="text-[13.5px] uppercase transition-colors duration-300 hover:text-terracotta hover:border-terracotta"
            style={{ letterSpacing: '.16em', color: '#6b6052', borderBottom: '1px solid #c9bda9', paddingBottom: 4 }}
          >
            <b>Skip to the work</b>
          </a>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-[26px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 6, animation: 'bob 2.6s ease-in-out infinite' }}
      >
        <span className="font-mono text-[10px] uppercase" style={{ letterSpacing: '.3em', color: '#9a8f7e' }}>
          <b>scroll</b>
        </span>
        <span style={{ width: 1, height: 34, background: 'linear-gradient(#b14b34,rgba(177,75,52,0))' }} />
      </div>
    </header>
  );
}
