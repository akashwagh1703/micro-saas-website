import { Briefcase, FileText, MessageCircle, Sparkles, Target, Users } from 'lucide-react';
import PageHero, { ContentCard } from '../components/PageHero';
import InnerPageLayout from '../components/InnerPageLayout';
import PageMeta from '../components/PageMeta';
import IconBox from '../components/icons/IconBox';
import Reveal, { StaggerGroup, StaggerItem } from '../components/scroll/Reveal';
import { careerAiFeatures } from '../data/content';
import { registerUrl } from '../config';

export default function CareerAIPage() {
  const icons = { Briefcase, FileText, Target, Sparkles, MessageCircle, Users };

  return (
    <InnerPageLayout
      tone="violet"
      className="section-y-sm"
      hero={
        <PageHero
          badge="Product"
          title="CareerAI — job matching on WhatsApp"
          subtitle="A dedicated module for HR consultancies, placement agencies, and career coaches. Job seekers onboard via WhatsApp; you manage matches from the portal."
        />
      }
    >
      <PageMeta
        title="CareerAI"
        description="WhatsApp-based job seeker onboarding, resume parsing, job matching, and candidate portal — built into AutoWave."
        path="/career-ai"
      />

      <div className="container-main">
        <ContentCard>
          <p className="type-body leading-relaxed text-slate-600">
            CareerAI is included in AutoWave when you select the <strong>CareerAI</strong> business type
            during setup. Candidates message your WhatsApp number, upload resumes, answer onboarding
            questions, and receive matched jobs — while you control job sources, billing, and analytics
            from the operator dashboard.
          </p>
        </ContentCard>

        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={70} variant="scale">
          {careerAiFeatures.map(({ icon, title, desc }) => {
            const Icon = icons[icon] || Briefcase;
            return (
              <StaggerItem key={title}>
                <div className="trendy-card h-full p-5">
                  <IconBox gradient="from-violet-500 to-indigo-600" size="md">
                    <Icon strokeWidth={2} aria-hidden />
                  </IconBox>
                  <h2 className="type-h3 mt-4 text-lg">{title}</h2>
                  <p className="type-body mt-2 text-slate-600">{desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal variant="up" delay={120}>
          <ContentCard className="mt-10">
            <h2 className="type-h3">Who is it for?</h2>
            <ul className="type-body mt-4 space-y-2 text-slate-600">
              <li>• Placement agencies and HR consultancies</li>
              <li>• Career coaches offering job-search support</li>
              <li>• Training institutes with placement cells</li>
              <li>• Recruiters who want WhatsApp-first candidate engagement</li>
            </ul>
            <a href={registerUrl} className="btn-primary mt-6 inline-flex">
              Start with CareerAI
            </a>
          </ContentCard>
        </Reveal>
      </div>
    </InnerPageLayout>
  );
}
