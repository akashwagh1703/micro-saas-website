import { useInView } from '../../hooks/useInView';

const tones = {
  emerald: {
    glow: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(37, 211, 102, 0.14), transparent 68%)',
    orbA: 'bg-emerald-400/25',
    orbB: 'bg-teal-300/20',
  },
  sky: {
    glow: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(56, 189, 248, 0.14), transparent 68%)',
    orbA: 'bg-sky-400/25',
    orbB: 'bg-cyan-300/20',
  },
  violet: {
    glow: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(167, 139, 250, 0.14), transparent 68%)',
    orbA: 'bg-violet-400/22',
    orbB: 'bg-fuchsia-300/18',
  },
  coral: {
    glow: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(255, 107, 107, 0.12), transparent 68%)',
    orbA: 'bg-rose-400/20',
    orbB: 'bg-amber-300/18',
  },
  mint: {
    glow: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(110, 231, 183, 0.14), transparent 68%)',
    orbA: 'bg-emerald-300/22',
    orbB: 'bg-lime-300/18',
  },
};

/**
 * Section wrapper — tone-colored glow + floating orbs activate on scroll.
 */
export default function ScrollSection({ children, className = '', id, tone = 'emerald' }) {
  const { ref, inView } = useInView({ threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
  const cfg = tones[tone] ?? tones.emerald;

  return (
    <section
      id={id}
      ref={ref}
      data-tone={tone}
      className={`scroll-section scroll-mt-24 ${inView ? 'is-active' : ''} ${className}`}
    >
      <div
        className="scroll-section-glow transition-opacity duration-1000"
        style={{ background: cfg.glow }}
        aria-hidden
      />
      <div
        className={`scroll-section-orb scroll-section-orb-a ${cfg.orbA} ${inView ? 'is-active' : ''}`}
        aria-hidden
      />
      <div
        className={`scroll-section-orb scroll-section-orb-b ${cfg.orbB} ${inView ? 'is-active' : ''}`}
        aria-hidden
      />
      <div className="relative">{children}</div>
    </section>
  );
}
