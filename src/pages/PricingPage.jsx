import PageHero from '../components/PageHero';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import InnerPageLayout from '../components/InnerPageLayout';
import SectionHeader from '../components/SectionHeader';
import ScrollSection from '../components/scroll/ScrollSection';
import CtaBanner from '../components/CtaBanner';

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="One platform fee. Full access."
        subtitle="₹499/month or ₹4,999/year after 14-day trial. WhatsApp & AI billed separately."
      />
      <InnerPageLayout tone="emerald" showCta={false}>
        <Pricing />
      </InnerPageLayout>
      <ScrollSection tone="mint" className="section-alt section-y-sm">
        <div className="container-main">
          <SectionHeader
            badge="Questions"
            title="Pricing FAQ"
            subtitle="Quick answers before you start your trial."
            badgeColor="emerald"
          />
        </div>
        <FAQ />
      </ScrollSection>
      <CtaBanner />
    </>
  );
}
