import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/content';
import { StaggerGroup, StaggerItem } from './scroll/Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="section-y-sm">
      <div className="container-main max-w-3xl">
        <StaggerGroup className="space-y-3" stagger={60}>
          {faqItems.map(({ q, a }, i) => {
            const open = openIndex === i;
            return (
              <StaggerItem key={q}>
                <div
                  className={`trendy-card overflow-hidden transition-all duration-300 ${
                    open ? 'ring-2 ring-emerald-200/60 shadow-lg' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span className="type-body font-bold text-slate-800 sm:text-base">{q}</span>
                    <ChevronDown
                      size={20}
                      className={`mt-0.5 shrink-0 text-emerald-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="type-body border-t border-slate-100 px-5 pb-5 pt-0 text-slate-600 sm:px-6 sm:pb-6">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </div>
  );
}
