import { useEffect } from 'react';
import { SITE_URL } from '../config';

const DEFAULT_TITLE = 'AutoWave — WhatsApp & Instagram auto-replies for small business';
const DEFAULT_DESCRIPTION =
  'Connect WhatsApp and Instagram, pick your industry, go live in 15 minutes. 14-day free trial. Built for clinics, shops & coaches across India.';

function setMeta(name, content, isProperty = false) {
  if (!content) return;
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Updates document title and core SEO / Open Graph tags per route. */
export default function PageMeta({ title, description = DEFAULT_DESCRIPTION, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} · AutoWave` : DEFAULT_TITLE;
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', `${SITE_URL}${path}`, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path || '/'}`);
  }, [title, description, path]);

  return null;
}
