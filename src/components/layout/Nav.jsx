import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/portfolio';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { scrollToId } from '../../utils/scroll';

/** Fixed primary nav with a full-screen mobile menu overlay. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id, reduced);
  };

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-80 flex items-center justify-between px-[clamp(20px,4vw,52px)] py-5 backdrop-blur-[8px]"
        style={{ background: 'linear-gradient(180deg, rgba(245,239,228,.82), rgba(245,239,228,0))' }}
      >
        <a href="#hero" onClick={go('hero')} aria-label="Simran Agarwal home" className="flex items-center gap-[13px]">
          <span
            aria-hidden="true"
            className="grid place-items-center w-[38px] h-[38px] rounded-[3px] border-[1.5px] font-serif text-[20px] leading-none"
            style={{ borderColor: '#b14b34', color: '#b14b34' }}
          >
            道
          </span>
          <span className="flex flex-col leading-[1.1]">
            <span className="font-serif text-base font-semibold tracking-[.04em] text-ink">Simran Agarwal</span>
            <span className="text-[10.5px] tracking-[.26em] uppercase mt-0.5" style={{ color: '#9a8f7e' }}>
              Senior UX Designer
            </span>
          </span>
        </a>

        <div className="flex items-center gap-[clamp(14px,2.4vw,34px)]">
          <div className="hidden md:flex items-center gap-[clamp(14px,2.4vw,34px)]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={'#' + link.id}
                onClick={go(link.id)}
                className="text-[13.5px] tracking-[.03em] py-1.5 px-0.5 relative transition-colors duration-300 hover:text-terracotta"
                style={{ color: '#4a4236' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 text-[13px] tracking-[.04em] text-cream bg-terracotta py-[9px] px-[18px] rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-dark"
          >
            Résumé<span aria-hidden="true" className="text-[11px]">↗</span>
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex md:hidden w-10 h-10 border rounded-lg items-center justify-center flex-col gap-1 transition-colors duration-300 hover:bg-terracotta/[.12]"
            style={{ borderColor: '#d8cdbb', background: 'rgba(255,255,255,.4)' }}
          >
            <span aria-hidden="true" className="w-4 h-[1.5px] bg-ink" />
            <span aria-hidden="true" className="w-4 h-[1.5px] bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-79 flex flex-col items-center justify-center gap-[26px] backdrop-blur-md"
          style={{ background: 'rgba(236,226,209,.97)' }}
        >
          {navLinks.map((link) => (
            <a key={link.id} href={'#' + link.id} onClick={go(link.id)} className="font-serif text-[30px] text-ink">
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="mt-[18px] text-[13px] tracking-[.2em] uppercase bg-transparent border-none text-terracotta"
          >
            Close ✕
          </button>
        </div>
      )}
    </>
  );
}
