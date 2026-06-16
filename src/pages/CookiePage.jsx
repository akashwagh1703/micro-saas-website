import { Cookie } from 'lucide-react';
import PageHero from '../components/PageHero';
import LegalDocument from '../components/LegalDocument';
import InnerPageLayout from '../components/InnerPageLayout';
import PageMeta from '../components/PageMeta';
import { cookiePolicy } from '../data/legal';

export default function CookiePage() {
  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      showCta={false}
      hero={
        <PageHero
          badge="Legal"
          title={cookiePolicy.title}
          subtitle={`Last updated: ${cookiePolicy.updated}`}
        />
      }
    >
      <PageMeta
        title="Cookie Policy"
        description="How AutoWave uses cookies and local storage on the marketing site and operator portal."
        path="/cookies"
      />
      <LegalDocument doc={cookiePolicy} icon={Cookie} hideHeader />
    </InnerPageLayout>
  );
}
