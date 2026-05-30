import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { registerUrl } from '../config';
import { useScrollPast, useSelectorInView } from '../hooks/useStickyCta';

/** Thin trial bar — mobile/tablet only, hides near footer or final CTA. */
export default function StickyMobileCta() {
  const pastHero = useScrollPast(420);
  const footerVisible = useSelectorInView('footer', '0px 0px -40px 0px');
  const finalCtaVisible = useSelectorInView('#final-cta', '0px 0px -20px 0px');
  const show = pastHero && !footerVisible && !finalCtaVisible;

  useEffect(() => {
    document.body.classList.toggle('has-sticky-cta', show);
    return () => document.body.classList.remove('has-sticky-cta');
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="sticky-mobile-cta fixed inset-x-0 z-40 border-t border-emerald-200/60 bg-white/95 px-4 py-3 shadow-[0_-8px_32px_-8px_rgba(37,211,102,0.25)] backdrop-blur-md lg:hidden"
      role="region"
      aria-label="Start free trial"
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <p className="type-caption min-w-0 flex-1 leading-tight font-semibold text-slate-700">
          14-day free trial · No credit card
        </p>
        <a href={registerUrl} className="btn-primary shrink-0 !px-4 !py-2.5 !text-xs sm:!text-sm">
          Start trial
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
