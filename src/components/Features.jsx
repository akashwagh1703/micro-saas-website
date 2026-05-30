import { featureList } from '../data/content';
import { Link } from 'react-router-dom';
import IconBox from './icons/IconBox';
import { featureIcons } from './icons/iconMaps';
import { StaggerGroup, StaggerItem } from './scroll/Reveal';

export default function Features({ compact = false, hideFooterLink = false }) {
  return (
    <section id={compact ? undefined : 'features'} className={compact ? '' : 'section-y'}>
      <div className="container-main">
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={80}>
          {featureList.map(({ icon, title, desc }, i) => {
            const { Icon, gradient } = featureIcons[icon];
            const featured = i === 0;
            return (
              <StaggerItem key={title}>
                <div className={`card-shine trendy-card h-full p-5 sm:p-6 ${featured ? 'trendy-card-featured' : ''}`}>
                  <IconBox gradient={gradient} size={featured ? 'lg' : 'md'}>
                    <Icon strokeWidth={2} aria-hidden />
                  </IconBox>
                  <h3 className={`type-h3 mt-4 ${featured ? 'sm:text-xl' : ''}`}>{title}</h3>
                  <p className="type-body mt-2 text-slate-600">{desc}</p>
                  {featured && (
                    <p className="type-caption mt-3 font-semibold text-emerald-600">Most popular with new users →</p>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {!compact && !hideFooterLink && (
          <div className="mt-10 text-center">
            <Link to="/features" className="type-body font-semibold text-emerald-600 hover:underline">
              Explore all features →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
