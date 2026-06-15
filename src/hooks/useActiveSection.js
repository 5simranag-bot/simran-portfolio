import { useEffect, useState } from 'react';

/**
 * Tracks which section id is "active" based on scroll position the same way
 * the original prototype's progress rail did: the last section whose top has
 * scrolled past a point ~40% down the viewport.
 */
export default function useActiveSection(ids, offsetFraction = 0.4) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const mid = (window.scrollY || 0) + window.innerHeight * offsetFraction;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) cur = id;
      }
      setActive((prev) => (prev === cur ? prev : cur));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(','), offsetFraction]);

  return active;
}
