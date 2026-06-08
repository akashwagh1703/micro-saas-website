import PageHero from '../components/PageHero';
import Industries from '../components/Industries';
import InnerPageLayout from '../components/InnerPageLayout';

export default function IndustriesPage() {
  return (
    <InnerPageLayout
      tone="coral"
      hero={
        <PageHero
          badge="Industries"
          title="Templates for every type of business"
          subtitle="Pick your industry at sign-up — AutoWave creates ready-made auto-replies instantly."
        />
      }
    >
      <Industries fullPage />
    </InnerPageLayout>
  );
}
