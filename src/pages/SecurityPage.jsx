import { ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import LegalDocument from '../components/LegalDocument';
import InnerPageLayout from '../components/InnerPageLayout';
import PageMeta from '../components/PageMeta';
import { securityPolicy } from '../data/legal';

export default function SecurityPage() {
  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      showCta={false}
      hero={
        <PageHero
          badge="Trust"
          title={securityPolicy.title}
          subtitle={`Last updated: ${securityPolicy.updated}`}
        />
      }
    >
      <PageMeta
        title="Security & Compliance"
        description="Encryption, tenant isolation, and security practices for the AutoWave WhatsApp automation platform."
        path="/security"
      />
      <LegalDocument doc={securityPolicy} icon={ShieldCheck} hideHeader />
    </InnerPageLayout>
  );
}
