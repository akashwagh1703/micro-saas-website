import HeroGraphic from './icons/HeroGraphic';
import Reveal from './scroll/Reveal';

export default function PageHero({ badge, title, subtitle, children }) {
  return (
    <section className="page-hero dot-pattern">
      <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-emerald-100/60 blur-3xl sm:h-64 sm:w-64" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-sky-100/60 blur-3xl sm:h-56 sm:w-56" aria-hidden />
      <div className="container-main relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal variant="left">
            <div className="min-w-0">
              {badge && (
                <span className="type-badge inline-flex rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-emerald-700 shadow-sm">
                  {badge}
                </span>
              )}
              <h1 className="type-display mt-3 sm:mt-4">{title}</h1>
              {subtitle && <p className="type-body-lg mt-3 text-slate-600 sm:mt-4">{subtitle}</p>}
              {children}
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="hidden justify-center pb-8 lg:flex lg:pb-0">
            <HeroGraphic />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PageShell({ children }) {
  return <div className="section-y-sm min-h-[40vh]">{children}</div>;
}

export function ContentCard({ children, className = '' }) {
  return (
    <div className={`elevated-card mx-auto max-w-3xl rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

export function BackHome() {
  return (
    <a href="/" className="type-body font-medium text-emerald-600 hover:underline">
      ← Back to home
    </a>
  );
}
