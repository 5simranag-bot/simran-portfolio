import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { scrollToId } from '../utils/scroll';

/** Scrolls to a section on route change: to the `#hash` target, or to the top otherwise. */
export default function ScrollToHash() {
  const location = useLocation();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => scrollToId(location.hash.slice(1), reduced));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, reduced]);

  return null;
}
