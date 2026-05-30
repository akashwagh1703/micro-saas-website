import { useInView } from '../../hooks/useInView';

/** Horizontal progress line that draws between step cards on scroll */
export default function StepTimeline({ steps = 3 }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative mb-2 hidden sm:block" aria-hidden>
      <div className="absolute left-[16.67%] right-[16.67%] top-7 h-0.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full origin-left rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-500 transition-transform duration-[1.4s] ease-out"
          style={{ transform: inView ? 'scaleX(1)' : 'scaleX(0)' }}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 opacity-0" style={{ height: 0 }}>
        {Array.from({ length: steps }).map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  );
}
