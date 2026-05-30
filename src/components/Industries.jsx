import { useState, useMemo } from 'react';
import { industries, demoScrollIndustries, resolveDemoIndustry } from '../data/content';
import { registerUrl } from '../config';
import IconBox from './icons/IconBox';
import { industryIcons } from './icons/iconMaps';
import { StaggerGroup, StaggerItem } from './scroll/Reveal';
import LiveChatDemo from './LiveChatDemo';
import { useScrollSpy } from '../hooks/useScrollSpy';

const spyIds = demoScrollIndustries.map((s) => `industry-${s}`);

function IndustryCard({
  icon,
  title,
  desc,
  slug,
  isActive,
  demoCard,
  href,
  onHover,
}) {
  const cfg = industryIcons[icon];
  const { Icon, gradient, bg, ring } = cfg;

  return (
    <a
      href={href}
      id={demoCard ? `industry-${slug}` : undefined}
      onMouseEnter={() => demoCard && onHover(slug)}
      onMouseLeave={() => demoCard && onHover(null)}
      onFocus={() => demoCard && onHover(slug)}
      onBlur={() => demoCard && onHover(null)}
      className={`group trendy-card flex h-full scroll-mt-28 flex-col items-center p-4 text-center ring-1 transition hover:-translate-y-1 sm:p-5 ${ring} ${bg} ${
        isActive && demoCard ? 'ring-2 ring-emerald-400 shadow-lg shadow-emerald-500/15' : ''
      }`}
    >
      <IconBox gradient={gradient} size="md">
        <Icon strokeWidth={2} aria-hidden />
      </IconBox>
      <h4 className="type-caption mt-2 font-bold text-slate-800 sm:mt-3 sm:text-sm">{title}</h4>
      <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-[11px]">{desc}</p>
      {isActive && demoCard ? (
        <span className="type-caption mt-2 font-semibold text-emerald-600">Live preview →</span>
      ) : (
        <span className="type-caption mt-2 font-semibold text-emerald-600 opacity-0 transition group-hover:opacity-100">
          Start with template →
        </span>
      )}
    </a>
  );
}

export default function Industries({ compact = false, fullPage = false }) {
  const [hoverIndustry, setHoverIndustry] = useState(null);
  const spiedRaw = useScrollSpy(spyIds, 100, '-42%');
  const spiedIndustry = spiedRaw?.replace('industry-', '') || 'clinic';

  const activeIndustry = useMemo(
    () => resolveDemoIndustry(hoverIndustry ?? spiedIndustry),
    [hoverIndustry, spiedIndustry],
  );

  const isDemoIndustry = (slug) => demoScrollIndustries.includes(slug);
  const withDemo = compact || fullPage;
  const cardHref = fullPage ? registerUrl : '/industries';

  const gridCols = compact
    ? 'grid-cols-2 sm:grid-cols-3'
    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';

  const grid = (
    <StaggerGroup className={`grid gap-3 ${gridCols} lg:gap-4`} stagger={50} variant="scale">
      {industries.map(({ icon, title, desc, slug }) => {
        const isActive = activeIndustry === resolveDemoIndustry(slug);
        const demoCard = isDemoIndustry(slug);

        return (
          <StaggerItem key={slug}>
            <IndustryCard
              icon={icon}
              title={title}
              desc={desc}
              slug={slug}
              isActive={isActive}
              demoCard={demoCard}
              href={cardHref}
              onHover={setHoverIndustry}
            />
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );

  if (withDemo) {
    return (
      <section className={fullPage ? 'section-y' : 'pb-4'}>
        <div className="container-main">
          <p className="type-caption mb-4 text-center font-semibold text-slate-500 lg:hidden">
            Scroll industries — demo updates below
          </p>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>{grid}</div>

            <div className="lg:sticky lg:top-28">
              <p className="type-caption mb-3 hidden text-center font-semibold text-emerald-600 lg:block">
                Live preview — scroll or hover an industry
              </p>
              <LiveChatDemo industry={activeIndustry} templateLabel />
            </div>
          </div>

          {fullPage && (
            <div className="mt-10 text-center">
              <a href={registerUrl} className="btn-primary w-full sm:w-auto">
                Start with your industry
              </a>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id="industries" className="section-y">
      <div className="container-main">
        {grid}
        <div className="mt-10 text-center">
          <a href={registerUrl} className="btn-primary !text-sm">
            Start with your industry →
          </a>
        </div>
      </div>
    </section>
  );
}
