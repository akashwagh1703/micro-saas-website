import { useScrollSpy } from '../../hooks/useScrollSpy';
import { steps } from '../../data/content';
import IconBox from '../icons/IconBox';
import { stepIcons } from '../icons/iconMaps';
import { registerUrl } from '../../config';
import { ArrowUpRight } from 'lucide-react';

const panelIds = steps.map((s) => `step-${s.num}`);

/**
 * Sticky scroll story — left panel pins while step cards scroll on the right (desktop).
 * Mobile: stacked panels with active highlight.
 */
export default function StickyStepsStory() {
  const activeRaw = useScrollSpy(panelIds, 100, '-40%');
  const activeNum = Number(activeRaw?.replace('step-', '') || 1);
  const activeStep = steps.find((s) => s.num === activeNum) ?? steps[0];
  const progress = (activeNum / steps.length) * 100;

  return (
    <div className="sticky-steps container-main">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Pinned left panel — desktop */}
        <div className="sticky-steps-pin mb-8 lg:mb-0">
          <p className="type-overline text-sky-600">Scroll to explore</p>
          <h3 className="type-h2 mt-2 text-slate-900">4 steps to go live</h3>
          <p className="type-body mt-3 text-slate-600">
            Your dashboard walks you through each step — most owners finish in under 15 minutes.
          </p>

          <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="sticky-steps-progress h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-500 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ol className="mt-6 space-y-2" aria-label="Setup steps">
            {steps.map((step) => {
              const isActive = step.num === activeNum;
              const isPast = step.num < activeNum;
              const { Icon, gradient } = stepIcons[step.num];
              return (
                <li key={step.num}>
                  <a
                    href={`#step-${step.num}`}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300 ${
                      isActive
                        ? 'bg-white shadow-md ring-1 ring-emerald-200/60'
                        : isPast
                          ? 'opacity-70 hover:opacity-100'
                          : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <IconBox gradient={gradient} size="sm">
                      <Icon strokeWidth={2} aria-hidden />
                    </IconBox>
                    <span className="min-w-0">
                      <span className={`type-caption block font-bold ${isActive ? 'text-emerald-600' : 'text-slate-400'}`}>
                        Step {step.num}
                      </span>
                      <span className={`type-body block truncate font-semibold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {step.title}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>

          <a href={registerUrl} className="btn-primary mt-8 hidden w-full sm:inline-flex lg:w-auto">
            Start free trial
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Scrolling step panels */}
        <div className="sticky-steps-panels space-y-6 lg:space-y-0">
          {steps.map((step) => {
            const isActive = step.num === activeNum;
            const { Icon, gradient } = stepIcons[step.num];
            return (
              <article
                key={step.num}
                id={`step-${step.num}`}
                className={`sticky-steps-panel scroll-mt-28 lg:min-h-[72vh] lg:py-10 ${
                  step.highlight ? 'lg:min-h-[60vh]' : ''
                }`}
              >
                <div
                  className={`card-shine trendy-card h-full p-6 transition-all duration-500 sm:p-8 ${
                    isActive
                      ? 'trendy-card-featured scale-[1.02] shadow-xl ring-2 ring-emerald-300/40'
                      : 'opacity-80 lg:opacity-60 lg:scale-[0.98]'
                  } ${step.highlight ? 'border-2 border-emerald-200/60' : ''}`}
                >
                  <IconBox gradient={gradient} size="lg">
                    <Icon strokeWidth={2} aria-hidden />
                  </IconBox>
                  <p className="type-overline mt-5 text-slate-400">Step {step.num} of {steps.length}</p>
                  <h4 className="type-h3 mt-1 text-xl sm:text-2xl">{step.title}</h4>
                  <p className="type-body-lg mt-3 text-slate-600">{step.desc}</p>
                  {step.highlight && (
                    <p className="type-caption mt-4 font-semibold text-emerald-600">
                      You&apos;re live — customers get instant replies 24/7
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <a href={registerUrl} className="btn-primary mt-8 w-full sm:hidden">
        Start free trial
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
