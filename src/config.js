export const PORTAL_URL = (import.meta.env.VITE_PORTAL_URL || 'https://micro-saas-portal.onrender.com').replace(
  /\/$/,
  '',
);

export const loginUrl = `${PORTAL_URL}`;
export const registerUrl = `${PORTAL_URL}`;

export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@autowave.in',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+91 98765 43210',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210',
};

export const mailtoUrl = `mailto:${contact.email}`;
export const telUrl = `tel:${contact.phone.replace(/\s/g, '')}`;
export const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi AutoWave! I have a question about your platform.')}`;

export const socialLinks = [
  {
    label: 'Instagram',
    href: import.meta.env.VITE_SOCIAL_INSTAGRAM || 'https://instagram.com/autowave',
    color: 'hover:bg-pink-500/15 hover:text-pink-600',
  },
  {
    label: 'LinkedIn',
    href: import.meta.env.VITE_SOCIAL_LINKEDIN || 'https://linkedin.com/company/autowave',
    color: 'hover:bg-sky-500/15 hover:text-sky-600',
  },
  {
    label: 'YouTube',
    href: import.meta.env.VITE_SOCIAL_YOUTUBE || 'https://youtube.com/@autowave',
    color: 'hover:bg-red-500/15 hover:text-red-600',
  },
  {
    label: 'X (Twitter)',
    href: import.meta.env.VITE_SOCIAL_TWITTER || 'https://x.com/autowave',
    color: 'hover:bg-slate-500/15 hover:text-slate-800',
  },
];
