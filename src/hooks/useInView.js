import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when element enters viewport. Respects prefers-reduced-motion.
 */
export function useInView(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -8% 0px',
    once = true,
  } = options;

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
