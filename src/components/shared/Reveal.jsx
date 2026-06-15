import { useMemo } from 'react';
import { motion } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const EASE = [0.16, 0.8, 0.24, 1];

/**
 * Scroll-reveal wrapper: fades up 30px on first view, with an optional
 * delay (ms). Mirrors the prototype's `data-reveal` / `data-reveal-delay`
 * IntersectionObserver behaviour. `as` accepts either an HTML tag name or a
 * component (e.g. React Router's `Link`).
 */
export default function Reveal({ as = 'div', delay = 0, className, style, children, ...rest }) {
  const reduced = usePrefersReducedMotion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Tag = useMemo(() => (typeof as === 'string' ? motion[as] || motion.div : motion.create(as)), [as]);

  if (reduced) {
    const Plain = as;
    return (
      <Plain className={className} style={style} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.12 }}
      transition={{ duration: 0.95, ease: EASE, delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
