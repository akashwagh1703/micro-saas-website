import { RotateCcw } from 'lucide-react';
import PageHero from '../components/PageHero';
import LegalDocument from '../components/LegalDocument';
import InnerPageLayout from '../components/InnerPageLayout';
import PageMeta from '../components/PageMeta';
import { refundPolicy } from '../data/legal';

export default function RefundPage() {
  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      showCta={false}
      hero={
        <PageHero
          badge="Legal"
          title={refundPolicy.title}
          subtitle={`Last updated: ${refundPolicy.updated}`}
        />
      }
    >
      <PageMeta
        title="Refund & Cancellation Policy"
        description="AutoWave subscription cancellation, refund eligibility, and billing terms for Razorpay payments."
        path="/refund"
      />
      <LegalDocument doc={refundPolicy} icon={RotateCcw} hideHeader />
    </InnerPageLayout>
  );
}
