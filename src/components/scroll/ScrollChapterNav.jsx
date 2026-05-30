import { useScrollSpy } from '../../hooks/useScrollSpy';

const chapters = [
  { id: 'features', label: 'Features', num: '01' },
  { id: 'how-it-works', label: 'Steps', num: '02' },
  { id: 'industries', label: 'Industries', num: '03' },
  { id: 'setup', label: 'Setup', num: '04' },
  { id: 'faq', label: 'FAQ', num: '05' },
  { id: 'pricing', label: 'Pricing', num: '06' },
];

/** Desktop side nav — lights up as you scroll through homepage sections */
export default function ScrollChapterNav() {
  const activeId = useScrollSpy(chapters.map((c) => c.id));

  return (
    <nav
      className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Page sections"
    >
      <ol className="pointer-events-auto space-y-1">
        {chapters.map(({ id, label, num }) => {
          const active = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`group flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-3 transition-all duration-300 ${
                  active ? 'bg-white/90 shadow-md shadow-emerald-500/10 ring-1 ring-emerald-200/60' : 'hover:bg-white/60'
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold transition-all ${
                    active
                      ? 'bg-gradient-to-br from-[#25D366] to-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600'
                  }`}
                >
                  {num}
                </span>
                <span
                  className={`type-caption max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[5rem] ${
                    active ? 'max-w-[5rem] font-semibold text-emerald-700' : 'text-slate-500'
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
