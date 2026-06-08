import { Link, useParams } from 'react-router-dom';
import PageHero, { ContentCard } from '../components/PageHero';
import { blogPosts } from '../data/content';
import { registerUrl } from '../config';
import InnerPageLayout from '../components/InnerPageLayout';
import ScrollSection from '../components/scroll/ScrollSection';
import Reveal from '../components/scroll/Reveal';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <ScrollSection tone="mint" className="section-y-sm">
        <div className="container-main pt-24">
          <ContentCard className="text-center">
            <p className="type-body text-slate-600">Article not found.</p>
            <Link to="/blog" className="type-body mt-4 inline-block font-semibold text-emerald-600 hover:underline">
              ← Back to blog
            </Link>
          </ContentCard>
        </div>
      </ScrollSection>
    );
  }

  return (
    <InnerPageLayout
      tone="mint"
      className="section-y-sm"
      showCta={false}
      hero={<PageHero badge={post.tag} title={post.title} subtitle={post.date} />}
    >
      <div className="container-main">
        <ContentCard>
          <Reveal variant="up">
            <p className="type-body-lg leading-relaxed text-slate-700">{post.excerpt}</p>
            <p className="type-body mt-6 leading-relaxed text-slate-600">
              This is a preview article on the AutoWave marketing site. Full blog content coming soon.
              In the meantime, start your free trial and explore the guided setup in the app dashboard.
            </p>
            <a href={registerUrl} className="btn-primary mt-8 w-full sm:w-auto">
              Start free trial
            </a>
            <Link to="/blog" className="type-body mt-4 block font-semibold text-emerald-600 hover:underline">
              ← All articles
            </Link>
          </Reveal>
        </ContentCard>
      </div>
    </InnerPageLayout>
  );
}
