import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const ParallaxContext = createContext(null);

/**
 * Drives a single rAF loop that smoothly lerps scroll position and mouse
 * position, then notifies subscribed layers each frame. Mirrors the
 * prototype's `_loop` / `_collect` / `_measure` logic, but as a context so
 * each layer can write directly to its own DOM node (no re-renders).
 */
export function ParallaxProvider({ anchors, children }) {
  const subsRef = useRef(new Set());
  const stateRef = useRef({ scrollY: 0, mx: 0, my: 0, tmx: 0, tmy: 0, anchors: {} });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const measure = () => {
      anchors.forEach((id) => {
        const el = document.getElementById(id);
        stateRef.current.anchors[id] = el ? el.offsetTop : 0;
      });
    };
    measure();

    const onResize = () => measure();
    const onMove = (e) => {
      if (reduced) return;
      stateRef.current.tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      stateRef.current.tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);

    let raf;
    const loop = () => {
      const s = stateRef.current;
      const targetSy = window.scrollY || 0;
      s.scrollY += (targetSy - s.scrollY) * (reduced ? 1 : 0.12);
      s.mx += (s.tmx - s.mx) * 0.06;
      s.my += (s.tmy - s.my) * 0.06;
      subsRef.current.forEach((fn) => fn(s));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const subscribe = useCallback((fn) => {
    subsRef.current.add(fn);
    return () => subsRef.current.delete(fn);
  }, []);

  return <ParallaxContext.Provider value={{ subscribe }}>{children}</ParallaxContext.Provider>;
}

/** Ref to attach to an element; updates its transform every parallax frame. */
export function useParallaxRef({ anchor, speed = 0, mouse = 0 }) {
  const ref = useRef(null);
  const ctx = useContext(ParallaxContext);

  useEffect(() => {
    if (!ctx) return;
    return ctx.subscribe((s) => {
      const el = ref.current;
      if (!el) return;
      const top = s.anchors[anchor] || 0;
      const dy = (s.scrollY - top) * speed;
      const tx = s.mx * mouse;
      const ty = s.my * mouse * 0.5;
      el.style.transform = `translate3d(${tx.toFixed(2)}px,${(dy + ty).toFixed(2)}px,0)`;
    });
  }, [ctx, anchor, speed, mouse]);

  return ref;
}

/** Convenience element wrapper around `useParallaxRef`. */
export function ParallaxLayer({ anchor, speed = 0, mouse = 0, as: Tag = 'div', ...rest }) {
  const ref = useParallaxRef({ anchor, speed, mouse });
  return <Tag ref={ref} {...rest} />;
}
