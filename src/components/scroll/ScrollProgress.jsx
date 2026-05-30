import { useScrollProgress } from '../../hooks/useScrollProgress';

/** Thin gradient bar — fills as user scrolls the page */
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-slate-200/30"
      aria-hidden
    >
      <div
        className="progress-glow h-full rounded-r-full bg-gradient-to-r from-[#25D366] via-teal-400 via-50% to-sky-400 shadow-[0_0_12px_rgba(37,211,102,0.5)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
