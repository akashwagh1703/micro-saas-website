export const PORTAL_URL = (import.meta.env.VITE_PORTAL_URL || 'https://app.autowave.playltp.in').replace(
  /\/$/,
  '',
);

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://autowave.in').replace(/\/$/, '');

export const loginUrl = `${PORTAL_URL}/login`;
export const registerUrl = `${PORTAL_URL}/register`;

/** Registered business details — shown on Contact, legal pages, and Razorpay merchant profile. */
export const company = {
  legalName: import.meta.env.VITE_COMPANY_LEGAL_NAME || 'AutoWave Technologies',
  address:
    import.meta.env.VITE_COMPANY_ADDRESS ||
    'Office 204, Baner Business Park, Baner, Pune, Maharashtra 411045, India',
  gstin: import.meta.env.VITE_COMPANY_GSTIN || '',
  cin: import.meta.env.VITE_COMPANY_CIN || '',
  supportHours: 'Mon–Sat, 10:00 AM – 6:00 PM IST',
};

export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@autowave.in',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+91 70205 27719',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '918446571703',
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
