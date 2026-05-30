import { steps } from '../data/content';
import { Link } from 'react-router-dom';
import IconBox from './icons/IconBox';
import { stepIcons } from './icons/iconMaps';
import { StaggerGroup, StaggerItem } from './scroll/Reveal';
import Reveal from './scroll/Reveal';
import StickyStepsStory from './scroll/StickyStepsStory';

export default function HowItWorks({ compact = false }) {
  if (compact) {
    return (
      <section className="pb-4">
        <StickyStepsStory />
      </section>
    );
  }

  const regularSteps = steps.filter((s) => !s.highlight);
  const highlightStep = steps.find((s) => s.highlight);

  return (
    <section id="how-it-works" className="section-y">
      <div className="container-main">
        <StaggerGroup className="grid gap-4 sm:grid-cols-3 sm:gap-5" stagger={110}>
          {regularSteps.map((step) => {
            const { Icon, gradient } = stepIcons[step.num];
            return (
              <StaggerItem key={step.num}>
                <div className="card-shine trendy-card h-full p-5 sm:p-6">
                  <IconBox gradient={gradient} size="md">
                    <Icon strokeWidth={2} aria-hidden />
                  </IconBox>
                  <p className="type-overline mt-4 text-slate-400">Step {step.num}</p>
                  <h3 className="type-h3 mt-1">{step.title}</h3>
                  <p className="type-body mt-2 text-slate-600">{step.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {highlightStep && (() => {
          const { Icon, gradient } = stepIcons[highlightStep.num];
          return (
            <Reveal variant="scale" delay={200}>
              <div className="trendy-card trendy-card-featured mt-5 flex flex-col gap-5 border-2 border-emerald-300/40 p-5 sm:flex-row sm:items-center sm:p-8">
                <IconBox gradient={gradient} size="lg">
                  <Icon strokeWidth={2} aria-hidden />
                </IconBox>
                <div>
                  <p className="type-overline text-emerald-600">Step {highlightStep.num}</p>
                  <h3 className="type-h3 mt-1 text-lg sm:text-xl">{highlightStep.title}</h3>
                  <p className="type-body mt-2 text-slate-600">{highlightStep.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })()}

        <div className="mt-10 text-center">
          <Link to="/how-it-works" className="type-body font-semibold text-emerald-600 hover:underline">
            Full walkthrough →
          </Link>
        </div>
      </div>
    </section>
  );
}
