import { useInView } from '../../hooks/useInView';

const variants = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  blur: 'reveal-blur',
};

/**
 * Scroll-triggered entrance animation. Runs once when element enters viewport.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  ...props
}) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${variants[variant] ?? variants.up} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/** Parent reveals children with staggered delays via CSS nth-child */
export function StaggerGroup({ children, className = '', stagger = 70, variant = 'up' }) {
  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`stagger-group ${variants[variant] ?? variants.up} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--stagger-step': `${stagger}ms` }}
    >
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return <div className={`stagger-item ${className}`}>{children}</div>;
}
