import PageHero from '../components/PageHero';
import { blogPosts } from '../data/content';
import InnerPageLayout from '../components/InnerPageLayout';
import { StaggerGroup, StaggerItem } from '../components/scroll/Reveal';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <InnerPageLayout
      tone="sky"
      className="section-y-sm"
      showCta={false}
      hero={
        <PageHero
          badge="Blog"
          title="Tips for WhatsApp automation"
          subtitle="Guides and tutorials for clinic owners, shops, coaches, and more."
        />
      }
    >
      <div className="container-main max-w-4xl">
        <StaggerGroup className="grid gap-6" stagger={80}>
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="trendy-card card-shine p-6 sm:p-8">
                <span className="type-caption rounded-full bg-sky-100 px-2.5 py-0.5 font-bold text-sky-700">{post.tag}</span>
                <h2 className="type-h3 mt-3">{post.title}</h2>
                <p className="type-caption mt-2 text-slate-500">{post.date}</p>
                <p className="type-body mt-3 leading-relaxed text-slate-600">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="type-body mt-4 inline-block font-bold text-emerald-600 hover:underline">
                  Read more →
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </InnerPageLayout>
  );
}
