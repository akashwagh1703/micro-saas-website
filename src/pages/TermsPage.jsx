import { FileText } from 'lucide-react';
import PageHero from '../components/PageHero';
import LegalDocument from '../components/LegalDocument';
import InnerPageLayout from '../components/InnerPageLayout';
import { termsOfUse } from '../data/legal';

export default function TermsPage() {
  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      showCta={false}
      hero={
        <PageHero
          badge="Legal"
          title={termsOfUse.title}
          subtitle={`Last updated: ${termsOfUse.updated}`}
        />
      }
    >
      <LegalDocument doc={termsOfUse} icon={FileText} hideHeader />
    </InnerPageLayout>
  );
}
