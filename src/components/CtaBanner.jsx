import { ArrowUpRight, Sparkles } from 'lucide-react';
import { registerUrl } from '../config';
import Reveal from './scroll/Reveal';

export default function CtaBanner() {
  return (
    <section id="final-cta" className="section-y-sm">
      <div className="container-main max-w-4xl">
        <Reveal variant="scale">
          <div className="cta-scroll-glow relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-7 text-center shadow-2xl shadow-emerald-500/25 sm:rounded-3xl sm:p-10 md:p-14">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-sky-300/20 blur-2xl" aria-hidden />
            <div className="relative">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-lg backdrop-blur sm:h-14 sm:w-14">
                <Sparkles size={26} className="text-white" />
              </div>
              <h2 className="type-h2 text-white">Start your free 14-day trial today</h2>
              <p className="type-body-lg mx-auto mt-3 max-w-md text-emerald-50/95 sm:mt-4">
                Full access, all features, no credit card. Cancel anytime.
              </p>
              <a
                href={registerUrl}
                className="mt-6 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-emerald-700 shadow-xl transition hover:scale-[1.03] hover:shadow-2xl sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Start free trial — no card needed
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
