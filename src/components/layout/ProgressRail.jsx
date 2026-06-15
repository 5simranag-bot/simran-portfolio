import { peaks } from '../../data/portfolio';
import useActiveSection from '../../hooks/useActiveSection';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { scrollToId } from '../../utils/scroll';

const SECTION_IDS = peaks.map((p) => p.id);

/** Fixed right-edge rail of "peaks" showing scroll progress through the page. */
export default function ProgressRail() {
  const active = useActiveSection(SECTION_IDS);
  const reduced = usePrefersReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="hidden xl:flex fixed top-1/2 -translate-y-1/2 z-70 flex-col gap-5"
      style={{ right: 'clamp(16px,2.4vw,34px)' }}
    >
      {peaks.map((peak) => {
        const on = peak.id === active;
        return (
          <button
            key={peak.id}
            onClick={() => scrollToId(peak.id, reduced)}
            aria-label={peak.aria}
            className="flex items-center gap-[11px] bg-transparent border-none p-0 justify-end transition-transform duration-300 hover:-translate-x-[3px]"
          >
            <span
              className="font-serif text-[11px] tracking-[.04em] whitespace-nowrap transition-all duration-400"
              style={{
                color: '#6b6052',
                opacity: on ? 1 : 0,
                transform: on ? 'translateX(0)' : 'translateX(6px)',
              }}
            >
              {peak.label}
            </span>
            <span
              className="rounded-full flex-shrink-0 transition-all duration-400"
              style={{
                width: on ? 11 : 8,
                height: on ? 11 : 8,
                background: on ? '#b14b34' : 'rgba(110,96,82,.4)',
                boxShadow: on ? '0 0 0 4px rgba(177,75,52,.16)' : 'none',
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
