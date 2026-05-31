import { ShieldCheck } from 'lucide-react';

/** Meta WhatsApp Cloud API + Instagram Messaging trust badge */
export default function MetaTrustBadge({ className = '' }) {
  return (
    <span
      className={`type-caption inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1.5 font-semibold text-slate-600 shadow-sm backdrop-blur-sm ${className}`}
    >
      <ShieldCheck size={14} className="shrink-0 text-[#25D366]" strokeWidth={2.5} />
      Powered by Meta WhatsApp & Instagram APIs
    </span>
  );
}
