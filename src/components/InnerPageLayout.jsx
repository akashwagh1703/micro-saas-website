import ScrollSection from './scroll/ScrollSection';
import CtaBanner from './CtaBanner';

/**
 * Shared inner-page shell — PageHero + scroll section + optional CTA.
 */
export default function InnerPageLayout({
  hero,
  children,
  tone = 'emerald',
  className = 'section-y',
  sectionAlt = false,
  showCta = true,
}) {
  return (
    <>
      {hero}
      <ScrollSection tone={tone} className={`${sectionAlt ? 'section-alt ' : ''}${className}`}>
        {children}
      </ScrollSection>
      {showCta && <CtaBanner />}
    </>
  );
}
