import { useScrollProgress } from '../../hooks/useScrollProgress';

/** Fixed orbs that drift with scroll — fresh emerald / sky / violet / coral palette */
export default function ScrollAmbient() {
  const p = useScrollProgress();
  const y1 = p * 180;
  const y2 = p * -140;
  const y3 = p * 100;
  const x1 = p * 60;
  const x2 = p * -80;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="scroll-orb scroll-orb-emerald"
        style={{ transform: `translate(${x1}px, ${y1}px)` }}
      />
      <div
        className="scroll-orb scroll-orb-sky"
        style={{ transform: `translate(${x2}px, ${y2}px)` }}
      />
      <div
        className="scroll-orb scroll-orb-violet"
        style={{ transform: `translate(${-x1 * 0.5}px, ${y3}px)` }}
      />
      <div
        className="scroll-orb scroll-orb-coral"
        style={{ transform: `translate(${x2 * 0.6}px, ${-y1 * 0.4}px)` }}
      />
      <div
        className="scroll-orb scroll-orb-mint"
        style={{ transform: `translate(${x1 * 0.3}px, ${y2 * 0.5}px)` }}
      />
    </div>
  );
}
