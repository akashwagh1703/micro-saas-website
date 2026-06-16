import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import InnerPageLayout from '../components/InnerPageLayout';
import { registerUrl } from '../config';

export default function NotFoundPage() {
  return (
    <InnerPageLayout tone="sky" className="section-y-sm" showCta={false}>
      <PageMeta title="Page not found" description="The page you requested could not be found." path="/404" />
      <div className="container-main max-w-xl text-center">
        <p className="type-display text-6xl font-extrabold text-emerald-500 sm:text-8xl">404</p>
        <h1 className="type-h2 mt-4">Page not found</h1>
        <p className="type-body mt-3 text-slate-600">
          The link may be outdated or the page may have moved. Try the homepage or start your free trial.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home size={18} />
            Go home
          </Link>
          <a href={registerUrl} className="btn-secondary inline-flex items-center gap-2">
            Start free trial
            <ArrowLeft size={18} className="rotate-180" />
          </a>
        </div>
      </div>
    </InnerPageLayout>
  );
}
