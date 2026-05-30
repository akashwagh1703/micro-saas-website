import { useInView } from '../../hooks/useInView';

/** Animates a horizontal fill (0 → target %) when scrolled into view */
export default function ScrollFill({ target = 100, className = '', barClassName = '' }) {
  const { ref, inView } = useInView({ threshold: 0.35 });

  return (
    <div ref={ref} className={`overflow-hidden rounded-full bg-slate-100 ${className}`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r from-[#25D366] to-teal-500 transition-[width] duration-[1.2s] ease-out ${barClassName}`}
        style={{ width: inView ? `${target}%` : '0%' }}
      />
    </div>
  );
}
