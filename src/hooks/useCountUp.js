import { useEffect, useState } from 'react';

/** Animate a number from 0 → end when `active` becomes true. */
export function useCountUp(end, active, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(end * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, active, duration]);

  return value;
}

/** Parse display price like "₹499" or "₹4,999" into a number. */
export function parsePriceAmount(priceStr) {
  return Number(String(priceStr).replace(/[^\d]/g, '')) || 0;
}

export function formatInr(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}
