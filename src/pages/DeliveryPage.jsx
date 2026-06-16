import { Package } from 'lucide-react';
import PageHero from '../components/PageHero';
import LegalDocument from '../components/LegalDocument';
import InnerPageLayout from '../components/InnerPageLayout';
import PageMeta from '../components/PageMeta';
import { deliveryPolicy } from '../data/legal';

export default function DeliveryPage() {
  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      showCta={false}
      hero={
        <PageHero
          badge="Legal"
          title={deliveryPolicy.title}
          subtitle={`Last updated: ${deliveryPolicy.updated}`}
        />
      }
    >
      <PageMeta
        title="Shipping & Delivery Policy"
        description="AutoWave is a digital SaaS product. Learn how platform access is delivered after purchase."
        path="/delivery"
      />
      <LegalDocument doc={deliveryPolicy} icon={Package} hideHeader />
    </InnerPageLayout>
  );
}
