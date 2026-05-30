import PageHero from '../components/PageHero';
import Features from '../components/Features';
import InnerPageLayout from '../components/InnerPageLayout';

export default function FeaturesPage() {
  return (
    <InnerPageLayout
      tone="violet"
      hero={
        <PageHero
          badge="Features"
          title="Everything you need to automate WhatsApp"
          subtitle="Full platform access — auto-replies, inbox, contacts, guided setup, and visual workflow editor."
        />
      }
    >
      <Features hideFooterLink />
    </InnerPageLayout>
  );
}
