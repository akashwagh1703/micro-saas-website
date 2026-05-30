import { Check, ArrowUpRight } from 'lucide-react';
import { plans } from '../data/content';
import { registerUrl } from '../config';
import Reveal, { StaggerGroup, StaggerItem } from './scroll/Reveal';
import { useInView } from '../hooks/useInView';
import { useCountUp, parsePriceAmount, formatInr } from '../hooks/useCountUp';

function PriceDisplay({ price, period, featured }) {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const amount = parsePriceAmount(price);
  const counted = useCountUp(amount, inView);

  return (
    <p ref={ref} className="mt-2">
      <span className={`text-3xl font-extrabold sm:text-4xl ${featured ? 'text-gradient' : 'text-slate-900'}`}>
        {formatInr(counted)}
      </span>
      <span className="type-body text-slate-500">{period}</span>
    </p>
  );
}

export default function Pricing({ compact = false }) {
  return (
    <section id={compact ? undefined : 'pricing'} className={compact ? '' : 'section-y'}>
      <div className="container-main">
        <StaggerGroup className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2 sm:gap-6" stagger={140} variant="scale">
          {plans.map((plan) => (
            <StaggerItem key={plan.id}>
              <div
                className={`card-shine trendy-card flex h-full flex-col p-6 sm:p-7 ${
                  plan.featured ? 'trendy-card-featured border-2 border-emerald-300/50' : ''
                }`}
              >
                {plan.badge && (
                  <span className="type-caption mb-4 inline-flex w-fit rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1 font-bold text-amber-800">
                    {plan.badge}
                  </span>
                )}
                <p className="type-h3">{plan.name}</p>
                <PriceDisplay price={plan.price} period={plan.period} featured={plan.featured} />
                <ul className="mt-5 flex flex-1 flex-col gap-2.5 sm:mt-6 sm:gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="type-body flex items-start gap-2.5 text-slate-600">
                      <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={registerUrl}
                  className={`mt-6 flex items-center justify-center gap-1.5 rounded-2xl py-3.5 text-sm font-bold transition sm:mt-8 ${
                    plan.featured
                      ? 'btn-primary !w-full !shadow-emerald-500/25'
                      : 'btn-secondary !w-full'
                  }`}
                >
                  {plan.featured ? 'Start free trial' : 'Get started free'}
                  {plan.featured && <ArrowUpRight size={16} />}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {!compact && (
          <Reveal variant="blur" delay={200}>
            <p className="type-body mx-auto mt-8 max-w-lg text-center text-slate-500">
              WhatsApp fees billed by Meta. Smart AI uses your OpenRouter or OpenAI key.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
