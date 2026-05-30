import { Check, Rocket, ArrowUpRight, ListChecks } from 'lucide-react';
import { setupItems } from '../data/content';
import { registerUrl } from '../config';
import IconBox from './icons/IconBox';
import Reveal, { StaggerGroup, StaggerItem } from './scroll/Reveal';
import ScrollFill from './scroll/ScrollFill';

import PortalScreenshotStrip from './PortalScreenshotStrip';

export default function SetupShowcase() {
  const done = setupItems.filter((i) => i.done).length;
  const pct = (done / setupItems.length) * 100;

  return (
    <section className="section-y">
      <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal variant="left">
          <p className="type-overline text-violet-600">04 — Setup</p>
          <span className="badge-glow-violet type-badge mt-3 inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50/90 px-3.5 py-1 text-violet-700 backdrop-blur-sm">
            <ListChecks size={14} />
            Setup checklist
          </span>
          <h2 className="type-h2 mt-4 text-slate-900 sm:mt-5">Your dashboard guides you every step</h2>
          <p className="type-body-lg mt-4 text-slate-600">
            A simple 4-step checklist — no manuals, no support calls. Just click and go.
          </p>
          <a href={registerUrl} className="btn-primary mt-7 w-full sm:mt-8 sm:w-auto !from-violet-600 !to-purple-600 !shadow-violet-500/25">
            See the dashboard
            <ArrowUpRight size={18} />
          </a>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="trendy-card trendy-card-featured p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <p className="type-h3 text-sm sm:text-base">Setup progress</p>
              <span className="type-caption rounded-full bg-emerald-100 px-2.5 py-1 font-bold text-emerald-700">
                {done}/{setupItems.length} complete
              </span>
            </div>
            <ScrollFill target={pct} className="mb-5 h-2 sm:mb-6 sm:h-2.5" />
            <StaggerGroup className="space-y-0.5" stagger={90}>
              {setupItems.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex items-start gap-3 rounded-xl px-2 py-3 transition hover:bg-white/60 sm:gap-4">
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${
                        item.done ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                      }`}
                    >
                      {item.done ? <Check size={17} strokeWidth={2.5} /> : <Rocket size={16} strokeWidth={2.5} />}
                    </span>
                    <div className="min-w-0">
                      <p className="type-body font-bold text-slate-800">{item.title}</p>
                      <p className="type-caption mt-0.5 text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>

      <PortalScreenshotStrip />
    </section>
  );
}
