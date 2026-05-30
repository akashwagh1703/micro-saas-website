import { ChevronDown } from 'lucide-react';

/** Animated scroll cue below hero */
export default function ScrollHint() {
  return (
    <a
      href="#features"
      className="scroll-hint mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-slate-400 transition hover:text-emerald-600 sm:mt-14"
      aria-label="Scroll to features"
    >
      <span className="type-caption font-semibold uppercase tracking-widest">Explore</span>
      <ChevronDown size={20} className="animate-bounce-soft" strokeWidth={2.5} />
    </a>
  );
}
