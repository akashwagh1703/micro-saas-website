import Reveal from './scroll/Reveal';

const badgeStyles = {
  emerald: 'badge-glow-emerald border-emerald-200/80 bg-emerald-50/90 text-emerald-700',
  sky: 'badge-glow-sky border-sky-200/80 bg-sky-50/90 text-sky-700',
  coral: 'badge-glow-coral border-rose-200/80 bg-rose-50/90 text-rose-700',
  violet: 'badge-glow-violet border-violet-200/80 bg-violet-50/90 text-violet-700',
};

const lineGradients = {
  emerald: 'from-emerald-400 via-teal-400 to-sky-400',
  sky: 'from-sky-400 via-cyan-400 to-emerald-400',
  coral: 'from-rose-400 via-amber-400 to-orange-400',
  violet: 'from-violet-400 via-fuchsia-400 to-sky-400',
};

export default function SectionHeader({ badge, title, subtitle, badgeColor = 'emerald', chapter }) {
  return (
    <div className="section-header mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      {chapter && (
        <Reveal variant="scale" delay={0}>
          <p className="type-overline mb-3 text-slate-400">{chapter}</p>
        </Reveal>
      )}
      {badge && (
        <Reveal variant="scale" delay={chapter ? 40 : 0}>
          <span className={`type-badge mb-4 inline-flex items-center rounded-full border px-3.5 py-1 backdrop-blur-sm ${badgeStyles[badgeColor]}`}>
            {badge}
          </span>
        </Reveal>
      )}
      <Reveal variant="up" delay={80}>
        <h2 className="type-h2 text-slate-900">{title}</h2>
        <div className={`section-line mx-auto mt-5 h-1 w-0 rounded-full bg-gradient-to-r ${lineGradients[badgeColor]}`} />
      </Reveal>
      {subtitle && (
        <Reveal variant="blur" delay={160}>
          <p className="type-body-lg mx-auto mt-5 max-w-xl text-slate-600">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
