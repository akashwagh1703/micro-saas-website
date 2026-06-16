import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { mailtoUrl, contact } from '../config';
import Reveal from './scroll/Reveal';

export default function LegalDocument({ doc, icon: Icon = FileText, hideHeader = false }) {
  return (
    <div className="container-main max-w-4xl">
      <Reveal variant="up">
        <div className="trendy-card overflow-hidden">
          {!hideHeader && (
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-6 py-8 text-white sm:px-10">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur sm:h-14 sm:w-14">
                  <Icon size={24} className="sm:hidden" />
                  <Icon size={28} className="hidden sm:block" />
                </div>
                <div className="min-w-0">
                  <h1 className="type-h2 text-white">{doc.title}</h1>
                  <p className="type-body mt-2 text-emerald-50">Last updated: {doc.updated}</p>
                </div>
              </div>
            </div>
          )}

          <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4 sm:px-10">
            <p className="type-body leading-relaxed text-slate-600">{doc.intro}</p>
          </div>

          <nav className="border-b border-slate-100 px-6 py-5 sm:px-10" aria-label="Table of contents">
            <p className="type-overline text-slate-500">Contents</p>
            <ol className="mt-3 columns-1 gap-x-8 sm:columns-2">
              {doc.sections.map((s) => (
                <li key={s.id} className="type-body mb-1.5 break-inside-avoid">
                  <a href={`#${s.id}`} className="font-medium text-emerald-700 hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10 px-6 py-10 sm:px-10">
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="type-h3">{section.title}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="type-body mt-3 leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="type-body flex gap-2 leading-relaxed text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.paragraphsAfter?.map((p, i) => (
                  <p key={`after-${i}`} className="type-body mt-3 leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-6 sm:px-10">
            <p className="type-body text-slate-600">
              Questions?{' '}
              <a href={mailtoUrl} className="break-all font-semibold text-emerald-600 hover:underline">
                {contact.email}
              </a>{' '}
              ·{' '}
              <Link to="/contact" className="font-semibold text-emerald-600 hover:underline">
                Contact us
              </Link>
              {' · '}
              <Link to="/refund" className="font-semibold text-emerald-600 hover:underline">
                Refund policy
              </Link>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
