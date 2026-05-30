import PageHero, { ContentCard } from '../components/PageHero';
import { aboutPoints } from '../data/content';
import { registerUrl } from '../config';
import { CheckCircle2 } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';
import Reveal, { StaggerGroup, StaggerItem } from '../components/scroll/Reveal';

export default function AboutPage() {
  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      hero={
        <PageHero
          badge="About us"
          title="WhatsApp automation made simple for India"
          subtitle="We built WhatsFlow so clinic owners, shopkeepers, and coaches can reply to customers instantly — without hiring developers."
        />
      }
    >
      <div className="container-main">
        <ContentCard>
          <StaggerGroup className="space-y-4" stagger={80}>
            {aboutPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="flex gap-3 text-slate-700">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-emerald-500" strokeWidth={2} />
                  <span className="type-body leading-relaxed">{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal variant="blur" delay={200}>
            <p className="type-body mt-8 leading-relaxed text-slate-600">
              WhatsFlow is a platform — you bring your WhatsApp number and optional AI keys. We host the
              automation engine, dashboard, and inbox.
            </p>
            <a href={registerUrl} className="btn-primary mt-6 w-full sm:w-auto">
              Join WhatsFlow today
            </a>
          </Reveal>
        </ContentCard>
      </div>
    </InnerPageLayout>
  );
}
