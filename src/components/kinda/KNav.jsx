import { Link } from 'react-router-dom';
import { sections } from '../../data/kindaShopee';
import useActiveSection from '../../hooks/useActiveSection';
import useScrollProgress from '../../hooks/useScrollProgress';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { scrollToId } from '../../utils/scroll';

const SECTION_IDS = ['k-hero', ...sections.map((s) => s.id)];

/** Sticky header: a way back to the journey, the KINDA SHOPEE mark, chapter pills and a scroll-progress bar. */
export default function KNav() {
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();
  const reduced = usePrefersReducedMotion();

  return (
    <header
      className="fixed inset-x-0 top-0 z-90 backdrop-blur-[10px]"
      style={{ background: 'linear-gradient(180deg,rgba(21,16,12,.94),rgba(21,16,12,.72))', borderBottom: '1px solid rgba(202,160,102,.16)' }}
    >
      <div className="flex items-center justify-between gap-[18px] px-[clamp(18px,4vw,42px)] py-[14px]">
        <Link
          to="/#work"
          className="inline-flex items-center gap-[9px] text-[12.5px] transition-colors duration-300 hover:text-[#f3e8d3]"
          style={{ letterSpacing: '.04em', color: '#caa066' }}
        >
          <span aria-hidden="true">←</span>
          <span className="hidden lg:inline">Back to the journey</span>
        </Link>

        <div className="flex items-center gap-[11px]">
          <span aria-hidden="true" className="font-serif" style={{ fontSize: 17, color: '#caa066' }}>
            ⛩
          </span>
          <span className="font-serif text-base font-semibold" style={{ letterSpacing: '.14em', color: '#f3e8d3' }}>
            KINDA SHOPEE
          </span>
        </div>

        <nav aria-label="Sections" className="hidden lg:flex items-center gap-1">
          {sections.map((s) => {
            const on = s.id === active;
            return (
              <a
                key={s.id}
                href={'#' + s.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(s.id, reduced, 60);
                }}
                className="text-xs rounded-full transition-all duration-300 hover:brightness-110"
                style={{ letterSpacing: '.04em', padding: '6px 12px', color: on ? '#15100c' : '#bda783', background: on ? '#caa066' : 'transparent' }}
              >
                {s.label}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="h-[2px] w-full" style={{ background: 'rgba(202,160,102,.12)' }}>
        <div
          className="h-full transition-[width] duration-100 ease-linear"
          style={{ width: progress * 100 + '%', background: 'linear-gradient(90deg,#b14b34,#caa066)' }}
        />
      </div>
    </header>
  );
}
