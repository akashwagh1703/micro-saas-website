import { useScrollProgress } from '../hooks/useScrollProgress';
import { portalScreens } from '../data/content';
import Reveal, { StaggerGroup, StaggerItem } from './scroll/Reveal';

function BrowserFrame({ screen, index, scroll }) {
  const shift = (index - 1.5) * scroll * 18;

  return (
    <StaggerItem>
      <figure
        className="portal-frame group"
        style={{ transform: `translateY(${shift}px)` }}
      >
        <div className="portal-frame-chrome flex items-center gap-1.5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/90" />
          <span className="h-2 w-2 rounded-full bg-amber-400/90" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/70 px-2 py-0.5 text-[9px] text-slate-400">
            portal.autowave.in/{screen.path}
          </span>
        </div>
        <div className="portal-frame-body overflow-hidden bg-slate-100">
          <img
            src={screen.image}
            alt={screen.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <figcaption className="portal-frame-caption">
          <p className="type-caption font-bold text-slate-800">{screen.label}</p>
          <p className="type-caption text-slate-500">{screen.caption}</p>
        </figcaption>
      </figure>
    </StaggerItem>
  );
}

/** Horizontal scroll strip of real portal screenshots with light parallax. */
export default function PortalScreenshotStrip() {
  const scroll = useScrollProgress();
  const parallax = (scroll - 0.35) * 40;

  return (
    <Reveal variant="up" delay={80} className="mt-12 sm:mt-16 lg:mt-20">
      <div className="container-main">
        <p className="type-overline text-center text-violet-600">Inside the portal</p>
        <h3 className="type-h3 mt-2 text-center text-slate-900">Your dashboard — simple & guided</h3>
        <p className="type-body mx-auto mt-2 max-w-lg text-center text-slate-600">
          Real screens from the AutoWave portal: guided setup, auto-replies, inbox, and go-live.
        </p>
      </div>

      <div
        className="portal-strip-outer mt-8 sm:mt-10"
        style={{ transform: `translateY(${Math.max(0, parallax)}px)` }}
      >
        <StaggerGroup
          className="portal-strip-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:gap-5 sm:px-6 lg:grid lg:max-w-6xl lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-8 lg:pb-0 xl:mx-auto"
          stagger={70}
          variant="scale"
        >
          {portalScreens.map((screen, i) => (
            <BrowserFrame key={screen.id} screen={screen} index={i} scroll={scroll} />
          ))}
        </StaggerGroup>
      </div>
    </Reveal>
  );
}
