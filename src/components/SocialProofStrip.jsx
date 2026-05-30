import { MapPin } from 'lucide-react';
import { socialProof } from '../data/content';
import Reveal, { StaggerGroup, StaggerItem } from './scroll/Reveal';

/** Compact social proof — cities + business types, no fake logos */
export default function SocialProofStrip() {
  return (
    <section className="border-y border-slate-100/80 bg-white/70 py-5 backdrop-blur-sm sm:py-6">
      <div className="container-main">
        <Reveal variant="blur">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MapPin size={18} strokeWidth={2.5} />
              </span>
              <p className="type-body max-w-md font-semibold text-slate-700">{socialProof.headline}</p>
            </div>

            <StaggerGroup className="flex flex-wrap justify-center gap-2 sm:justify-end" stagger={40}>
              {socialProof.cities.map((city) => (
                <StaggerItem key={city}>
                  <span className="type-caption rounded-full border border-slate-200/80 bg-white px-3 py-1.5 font-semibold text-slate-600 shadow-sm">
                    {city}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
