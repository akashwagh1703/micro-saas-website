import { useEffect, useState } from 'react';

/** Highlights whichever section id is currently in the viewport */
export function useScrollSpy(sectionIds = [], offset = 120, rootMarginBottom = '-55%') {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${offset}px 0px ${rootMarginBottom} 0px`, threshold: [0, 0.15, 0.35, 0.55] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, offset, rootMarginBottom]);

  return activeId;
}
