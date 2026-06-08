import Hero from '../components/Hero';
import SocialProofStrip from '../components/SocialProofStrip';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import SetupShowcase from '../components/SetupShowcase';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CtaBanner from '../components/CtaBanner';
import SectionHeader from '../components/SectionHeader';
import ScrollSection from '../components/scroll/ScrollSection';
import ScrollChapterNav from '../components/scroll/ScrollChapterNav';
import WaveDivider from '../components/scroll/WaveDivider';

export default function HomePage() {
  return (
    <main>
      <ScrollChapterNav />
      <Hero />
      <SocialProofStrip />

      <ScrollSection tone="violet" id="features" className="section-y">
        <div className="container-main">
          <SectionHeader
            chapter="01 — Features"
            badge="Why AutoWave"
            title="Built for owners, not developers"
            subtitle="Plain language, guided setup, and automation that works for Indian small businesses."
            badgeColor="violet"
          />
        </div>
        <Features compact />
      </ScrollSection>

      <WaveDivider />

      <ScrollSection tone="sky" id="how-it-works" className="section-alt section-y">
        <div className="container-main">
          <SectionHeader
            chapter="02 — How it works"
            badge="4 easy steps"
            title="Live in under 15 minutes"
            subtitle="Scroll through each step — your dashboard guides you the whole way."
            badgeColor="sky"
          />
        </div>
        <HowItWorks compact />
      </ScrollSection>

      <ScrollSection tone="coral" id="industries" className="section-y">
        <div className="container-main">
          <SectionHeader
            chapter="03 — Industries"
            badge="10+ templates"
            title="Built for every Indian small business"
            subtitle="Scroll or hover an industry — watch the bot reply change in real time."
            badgeColor="coral"
          />
        </div>
        <Industries compact />
      </ScrollSection>

      <ScrollSection tone="violet" id="setup">
        <SetupShowcase />
      </ScrollSection>

      <ScrollSection tone="mint" id="faq" className="section-alt section-y-sm">
        <div className="container-main">
          <SectionHeader
            chapter="05 — FAQ"
            badge="Questions"
            title="Got questions? We've got answers"
            subtitle="Common questions from clinic owners, shopkeepers, and coaches before they go live."
            badgeColor="emerald"
          />
        </div>
        <FAQ />
      </ScrollSection>

      <WaveDivider flip />

      <ScrollSection tone="emerald" id="pricing" className="section-y">
        <div className="container-main">
          <SectionHeader
            chapter="06 — Pricing"
            badge="Simple pricing"
            title="One honest platform fee"
            subtitle="Meta WhatsApp and AI costs stay in your own accounts — you stay in control."
            badgeColor="emerald"
          />
        </div>
        <Pricing compact />
      </ScrollSection>

      <CtaBanner />
    </main>
  );
}
