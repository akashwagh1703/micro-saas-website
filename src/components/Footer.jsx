import { Link } from 'react-router-dom';
import { ArrowUpRight, Headphones, Mail, Phone, MessageCircle } from 'lucide-react';
import WhatsAppLogo from './WhatsAppLogo';
import { footerProductLinks, footerCompanyLinks } from '../data/content';
import { registerUrl, contact, mailtoUrl, telUrl, whatsappUrl, socialLinks } from '../config';

const contactCards = [
  { icon: Mail, label: 'Email', value: contact.email, href: mailtoUrl, accent: 'text-emerald-600' },
  { icon: Phone, label: 'Call', value: contact.phone, href: telUrl, accent: 'text-sky-600' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: whatsappUrl, accent: 'text-[#25D366]', external: true },
];

export default function Footer() {
  return (
    <footer className="relative mt-4 border-t border-slate-200/80 bg-white">
      {/* CTA strip */}
      <div className="border-b border-emerald-100/80 bg-gradient-to-r from-emerald-50 via-white to-sky-50">
        <div className="container-main flex flex-col items-center justify-between gap-4 py-8 sm:flex-row sm:py-10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20">
              <Headphones size={22} />
            </div>
            <div>
              <p className="type-h3">Questions? We&apos;re one message away.</p>
              <p className="type-body mt-1 text-slate-600">Help with setup, billing, or choosing your industry template.</p>
            </div>
          </div>
          <a href={registerUrl} className="btn-primary shrink-0 whitespace-nowrap">
            Start free trial
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Contact cards */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="container-main grid gap-3 py-8 sm:grid-cols-3 sm:gap-4 sm:py-10">
          {contactCards.map(({ icon: Icon, label, value, href, accent, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="trendy-card group flex items-start gap-3 p-4 transition hover:-translate-y-0.5 sm:p-5"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ${accent}`}>
                <Icon size={18} strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className={`type-overline block ${accent}`}>{label}</span>
                <span className="type-body mt-1 block font-semibold text-slate-800 break-all">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Main links */}
      <div className="container-main py-12 pb-20 sm:pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-emerald-600 text-white shadow-md">
                <WhatsAppLogo />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">WhatsFlow</span>
            </Link>
            <p className="type-body mt-4 max-w-sm text-slate-600">
              WhatsApp and Instagram auto-replies for Indian small businesses — clinics, shops, coaches, and more. Go live in minutes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`type-caption rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-semibold text-slate-600 transition hover:border-emerald-200 hover:shadow-sm ${color}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="type-overline text-slate-400">Product</p>
            <ul className="mt-4 space-y-3">
              {footerProductLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="type-body font-medium text-slate-600 transition hover:text-emerald-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="type-overline text-slate-400">Company</p>
            <ul className="mt-4 space-y-3">
              {footerCompanyLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="type-body font-medium text-slate-600 transition hover:text-emerald-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 text-center sm:flex-row sm:text-left">
          <p className="type-caption text-slate-500">© {new Date().getFullYear()} WhatsFlow · Made for India&apos;s small businesses</p>
          <p className="type-caption text-slate-400">Powered by Meta WhatsApp Cloud API</p>
        </div>
      </div>
    </footer>
  );
}
