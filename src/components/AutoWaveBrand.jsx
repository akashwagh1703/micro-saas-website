const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export const AUTO_WAVE_ICON = `${base}autowave-icon.png`;
export const AUTO_WAVE_LOGO = `${base}autowave-logo.png`;
export const AUTO_WAVE_NAME = 'AutoWave';
export const AUTO_WAVE_TAGLINE = 'WhatsApp & Instagram auto-replies for Indian small businesses';

export function AutoWaveIcon({ className = 'h-9 w-9 object-contain', alt = '' }) {
  return <img src={AUTO_WAVE_ICON} alt={alt} className={className} draggable={false} />;
}

export function AutoWaveLogo({ className = 'h-10 object-contain', alt = 'AutoWave' }) {
  return <img src={AUTO_WAVE_LOGO} alt={alt} className={className} draggable={false} />;
}

export function AutoWaveMark({ className = '', showTagline = false, compact = false }) {
  return (
    <div className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <AutoWaveIcon className={compact ? 'h-8 w-8 shrink-0 sm:h-9 sm:w-9' : 'h-9 w-9 shrink-0 sm:h-10 sm:w-10'} />
      <div className="min-w-0">
        <span className={`truncate font-extrabold tracking-tight text-slate-900 ${compact ? 'text-base sm:text-lg' : 'text-base sm:text-lg'}`}>
          {AUTO_WAVE_NAME}
        </span>
        {showTagline && (
          <p className="type-caption mt-0.5 hidden text-slate-500 sm:block">{AUTO_WAVE_TAGLINE}</p>
        )}
      </div>
    </div>
  );
}

export function AutoWaveLogoDark({ className = 'h-11 object-contain sm:h-12' }) {
  return <AutoWaveLogo className={className} alt={AUTO_WAVE_NAME} />;
}
