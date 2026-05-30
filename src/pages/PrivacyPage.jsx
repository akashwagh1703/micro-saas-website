import { Shield } from 'lucide-react';
import PageHero from '../components/PageHero';
import LegalDocument from '../components/LegalDocument';
import InnerPageLayout from '../components/InnerPageLayout';
import { privacyPolicy } from '../data/legal';

export default function PrivacyPage() {
  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      showCta={false}
      hero={
        <PageHero
          badge="Legal"
          title={privacyPolicy.title}
          subtitle={`Last updated: ${privacyPolicy.updated}`}
        />
      }
    >
      <LegalDocument doc={privacyPolicy} icon={Shield} hideHeader />
    </InnerPageLayout>
  );
}
