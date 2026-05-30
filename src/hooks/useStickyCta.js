import { useEffect, useState } from 'react';

/** True once user scrolls past `offset` px. */
export function useScrollPast(offset = 400) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return past;
}

/** True when a selector-matched element is intersecting the viewport. */
export function useSelectorInView(selector, rootMargin = '0px') {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = document.querySelector(selector);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [selector, rootMargin]);

  return inView;
}
