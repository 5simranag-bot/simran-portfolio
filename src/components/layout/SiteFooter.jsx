import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { scrollToId } from '../../utils/scroll';

/** Closing footer for the home page: brand mark, credit line and a "back to base" jump. */
export default function SiteFooter() {
  const reduced = usePrefersReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-3 px-[clamp(22px,6vw,64px)] pb-9"
      style={{ background: '#2b2722', color: '#cabfaf', paddingTop: 'clamp(40px,6vw,64px)' }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-[22px]">
        <div className="flex items-center gap-[13px]">
          <span
            aria-hidden="true"
            className="grid place-items-center w-9 h-9 rounded-[3px] border-[1.5px] font-serif text-[19px]"
            style={{ borderColor: '#b6855f', color: '#d9a877' }}
          >
            道
          </span>
          <span className="font-serif text-[15px]" style={{ color: '#f4ead9' }}>
            Simran Agarwal
          </span>
        </div>
        <span className="text-[12.5px] tracking-[.04em]" style={{ color: '#9a8f7e' }}>
          The Journey of a Designer crafted with intention · © {year}
        </span>
        <button
          onClick={() => scrollToId('hero', reduced)}
          className="text-[12px] tracking-[.16em] uppercase bg-transparent border rounded-full px-[18px] py-[9px] transition-colors duration-300 hover:bg-[rgba(217,168,119,.12)] hover:border-[#d9a877]"
          style={{ color: '#d9a877', borderColor: '#5a4f40' }}
        >
          Back to base ↑
        </button>
      </div>
    </footer>
  );
}
