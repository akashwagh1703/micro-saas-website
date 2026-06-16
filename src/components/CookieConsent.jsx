import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'autowave_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'essential_only');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-4 sm:pb-4"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="pointer-events-auto mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:gap-4 sm:p-5">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Cookie size={20} aria-hidden />
          </span>
          <p className="type-body text-slate-600">
            We use essential cookies and local storage to run this site and the AutoWave portal.{' '}
            <Link to="/cookies" className="font-semibold text-emerald-600 hover:underline">
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          <button type="button" onClick={decline} className="btn-secondary type-caption px-4 py-2">
            Essential only
          </button>
          <button type="button" onClick={accept} className="btn-primary type-caption px-4 py-2">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
