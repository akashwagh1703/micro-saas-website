import PageHero from '../components/PageHero';
import HowItWorks from '../components/HowItWorks';
import InnerPageLayout from '../components/InnerPageLayout';
import { registerUrl } from '../config';
import { ArrowUpRight } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <InnerPageLayout
      tone="sky"
      sectionAlt
      hero={
        <PageHero
          badge="How it works"
          title="From sign-up to live bot in 15 minutes"
          subtitle="No coding. No agency. Just connect WhatsApp, pick your business, and go live."
        >
          <a href={registerUrl} className="btn-primary mt-6 w-full sm:w-auto">
            Start free trial
            <ArrowUpRight size={18} />
          </a>
        </PageHero>
      }
    >
      <HowItWorks compact />
    </InnerPageLayout>
  );
}
