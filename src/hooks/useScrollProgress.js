import { useEffect, useState } from 'react';

/** Returns scroll progress through the whole document, 0..1. */
export default function useScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      setPct(Math.max(0, Math.min(1, (window.scrollY || 0) / max)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return pct;
}
