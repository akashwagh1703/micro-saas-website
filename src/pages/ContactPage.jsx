import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import PageHero, { ContentCard } from '../components/PageHero';
import IconBox from '../components/icons/IconBox';
import { contact, mailtoUrl, telUrl, whatsappUrl, socialLinks } from '../config';
import InnerPageLayout from '../components/InnerPageLayout';
import { StaggerGroup, StaggerItem } from '../components/scroll/Reveal';
import Reveal from '../components/scroll/Reveal';

const channels = [
  {
    icon: Mail,
    label: 'Email us',
    value: contact.email,
    href: mailtoUrl,
    desc: 'For support, billing, and partnerships',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: contact.phone,
    href: telUrl,
    desc: 'Mon–Sat, 10am–6pm IST',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp us',
    value: 'Chat on WhatsApp',
    href: whatsappUrl,
    desc: 'Fastest way to get help going live',
    gradient: 'from-[#25D366] to-emerald-600',
  },
];

export default function ContactPage() {
  return (
    <InnerPageLayout
      tone="sky"
      className="section-y-sm"
      hero={
        <PageHero
          badge="Contact"
          title="We'd love to hear from you"
          subtitle="Questions about setup, pricing, or your industry? Reach out — we reply quickly."
        />
      }
    >
      <div className="container-main">
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" stagger={90} variant="scale">
          {channels.map(({ icon: Icon, label, value, href, desc, gradient }) => (
            <StaggerItem key={label}>
              <a
                href={href}
                target={label === 'WhatsApp us' ? '_blank' : undefined}
                rel="noreferrer"
                className="group trendy-card card-shine flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <IconBox gradient={gradient} size="md">
                  <Icon strokeWidth={2} aria-hidden />
                </IconBox>
                <p className="type-overline mt-4 text-slate-500">{label}</p>
                <p className="type-h3 mt-1 text-lg">{value}</p>
                <p className="type-body mt-2 flex-1 text-slate-600">{desc}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal variant="up" delay={150}>
          <ContentCard className="mt-10">
            <h2 className="type-h3">Follow us</h2>
            <p className="type-body mt-2 text-slate-600">Tips, tutorials, and product updates.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`type-caption rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition ${color}`}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <MapPin className="mt-0.5 shrink-0 text-slate-400" size={20} />
              <div>
                <p className="type-body font-semibold text-slate-800">WhatsFlow</p>
                <p className="type-body text-slate-600">Built for small businesses across India · Remote-first team</p>
              </div>
            </div>
          </ContentCard>
        </Reveal>
      </div>
    </InnerPageLayout>
  );
}
