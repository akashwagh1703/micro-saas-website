export const socialProof = {
  headline: 'Built for clinics, shops & coaches across India',
  cities: ['Nashik', 'Pune', 'Mumbai', 'Bengaluru', 'Delhi'],
  roiLine: '1 missed WhatsApp lead can cost ₹500–₹5,000 — reply instantly, 24/7.',
};

export const steps = [
  {
    num: 1,
    title: 'Sign up & pick industry',
    desc: 'Create your account and tell WhatsFlow your business type — clinic, shop, coaching, real estate, and more.',
  },
  {
    num: 2,
    title: 'Connect WhatsApp',
    desc: 'Paste your Meta WhatsApp Business credentials. WhatsFlow sets up the webhook automatically — no coding.',
  },
  {
    num: 3,
    title: 'Get ready-made bots',
    desc: 'Instant pre-built auto-reply flows for appointments, FAQs, lead capture, product info, and more.',
  },
  {
    num: 4,
    title: 'Click "Go live" — done!',
    desc: 'Your bots run 24/7. Customers get instant replies; you manage chats from the inbox.',
    highlight: true,
  },
];

export const industries = [
  { icon: 'clinic', title: 'Clinic / Hospital', desc: 'Appointments, timings, follow-ups', slug: 'clinic' },
  { icon: 'coaching', title: 'Coaching / Tuition', desc: 'Fee queries, demo booking', slug: 'coaching' },
  { icon: 'shop', title: 'Local Shop', desc: 'Product enquiries, store hours', slug: 'shop' },
  { icon: 'real-estate', title: 'Real Estate', desc: 'Lead capture, site visits', slug: 'real-estate' },
  { icon: 'travel', title: 'Travel Agency', desc: 'Trip planning, itineraries', slug: 'travel' },
  { icon: 'insurance', title: 'Insurance / CA', desc: 'Plan info, documents', slug: 'insurance' },
  { icon: 'agriculture', title: 'Agriculture', desc: 'Crop queries, price updates', slug: 'agriculture' },
  { icon: 'general', title: 'Any Business', desc: 'Support, leads, AI chat', slug: 'general' },
  { icon: 'ai', title: 'Smart AI replies', desc: 'Open-ended conversations', slug: 'ai' },
  { icon: 'custom', title: 'Custom workflows', desc: 'Visual editor for power users', slug: 'custom' },
];

export const setupItems = [
  { done: true, title: 'Account created', desc: 'Welcome to WhatsFlow' },
  { done: true, title: 'Business type selected', desc: 'Clinic — appointment booking, FAQ' },
  { done: true, title: 'WhatsApp connected', desc: '+91 98765 43210 · Verified' },
  { done: false, title: 'Go live on first bot', desc: 'Click "Go live" on Auto-replies page' },
];

export const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '₹499',
    period: '/ month',
    featured: false,
    features: [
      'Unlimited auto-replies',
      'All industries & templates',
      'Visual workflow editor',
      'Customer inbox & contacts',
      'Smart AI replies (BYOK)',
      '14-day free trial included',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '₹4,999',
    period: '/ year',
    badge: 'Best value — save ₹989',
    featured: true,
    features: [
      'Everything in monthly',
      'Priority support',
      'Early access to new features',
      '₹416/mo effective cost',
      '14-day free trial included',
    ],
  },
];

export const featureList = [
  { icon: 'Zap', title: 'Go live in 15 min', desc: 'Guided 4-step setup — no developers needed' },
  { icon: 'Shield', title: 'Your number, your keys', desc: 'BYOK for WhatsApp & AI — you stay in control' },
  { icon: 'Inbox', title: 'Unified inbox', desc: 'All customer chats in one clean dashboard' },
  { icon: 'Bot', title: 'Industry templates', desc: 'Pre-built bots for 10+ business types' },
  { icon: 'MessageCircle', title: 'Smart auto-replies', desc: 'Keyword triggers + AI-powered conversations' },
  { icon: 'Clock', title: 'Always on', desc: 'Reply at 2 AM while you sleep — bots never rest' },
];

export const navLinks = [
  { label: 'Features', to: '/features' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Industries', to: '/industries' },
  { label: 'Pricing', to: '/pricing' },
];

export const footerProductLinks = [
  { label: 'Features', to: '/features' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Industries', to: '/industries' },
  { label: 'Pricing', to: '/pricing' },
];

export const footerCompanyLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Contact us', to: '/contact' },
  { label: 'Privacy policy', to: '/privacy' },
  { label: 'Terms of use', to: '/terms' },
];

export const chatDemo = [
  {
    type: 'in',
    label: 'Customer',
    text: 'Appointment chahiye kal ke liye? Timings kya hai?',
    time: '10:32 AM',
  },
  {
    type: 'out',
    label: 'WhatsFlow Bot',
    text: 'Namaste! Welcome to Ramesh Clinic.\nMon–Sat, 9am–7pm\n\nReply: 1 Morning · 2 Afternoon · 3 Evening',
    time: '10:32 AM ✓✓',
  },
  { type: 'in', label: 'Customer', text: '2', time: '10:33 AM' },
  {
    type: 'out',
    label: 'WhatsFlow Bot',
    text: 'Perfect! Please share your name and preferred date.',
    time: '10:33 AM ✓✓',
  },
];

/** Per-industry demo scripts for live phone mockup */
export const chatDemosByIndustry = {
  clinic: chatDemo,
  shop: [
    { type: 'in', label: 'Customer', text: 'Sugar 1kg kitna hai? Shop open hai?', time: '6:15 PM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Namaste! Sharma General Store.\nSugar 1kg — ₹52\n\nOpen: 8am–9pm daily\n\nReply 1 to order · 2 for full price list',
      time: '6:15 PM ✓✓',
    },
    { type: 'in', label: 'Customer', text: '1', time: '6:16 PM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Great! Share your address — we will confirm delivery time.',
      time: '6:16 PM ✓✓',
    },
  ],
  coaching: [
    { type: 'in', label: 'Parent', text: 'Class 10 maths batch fees? Demo class hai?', time: '11:02 AM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Hi! Bright Minds Coaching.\nClass 10 Maths — ₹3,500/month\nSat–Sun demo available\n\nReply: 1 Book demo · 2 Fee details',
      time: '11:02 AM ✓✓',
    },
    { type: 'in', label: 'Parent', text: '1', time: '11:03 AM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Please share student name + preferred Saturday or Sunday.',
      time: '11:03 AM ✓✓',
    },
  ],
  'real-estate': [
    { type: 'in', label: 'Customer', text: '2BHK Nashik mein available hai? Budget 45L', time: '4:20 PM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Namaste! Green Homes Realty.\n3 matching 2BHK listings in Nashik\n\nReply 1 for photos · 2 to schedule site visit',
      time: '4:20 PM ✓✓',
    },
    { type: 'in', label: 'Customer', text: '2', time: '4:21 PM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Share your name and preferred visit date — our agent will confirm.',
      time: '4:21 PM ✓✓',
    },
  ],
  travel: [
    { type: 'in', label: 'Customer', text: 'Goa trip package 4 log ke liye?', time: '9:10 AM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Hi! Wander India Travels.\nGoa 4N/5D from ₹18,999/person\n\nReply 1 for itinerary · 2 to talk to agent',
      time: '9:10 AM ✓✓',
    },
    { type: 'in', label: 'Customer', text: '1', time: '9:11 AM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Sending full itinerary PDF… Share travel dates when ready!',
      time: '9:11 AM ✓✓',
    },
  ],
  general: [
    { type: 'in', label: 'Customer', text: 'Are you open today? Need quick info.', time: '2:45 PM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Hello! Thanks for messaging.\nWe are open today 9am–7pm.\n\nReply 1 for FAQs · 2 to leave your query',
      time: '2:45 PM ✓✓',
    },
    { type: 'in', label: 'Customer', text: '1', time: '2:46 PM' },
    {
      type: 'out',
      label: 'WhatsFlow Bot',
      text: 'Here are our top FAQs — or type your question anytime.',
      time: '2:46 PM ✓✓',
    },
  ],
};

export const demoProfiles = {
  clinic: { name: 'Ramesh Clinic', iconKey: 'clinic', templateLabel: 'Clinic template' },
  shop: { name: 'Sharma General Store', iconKey: 'shop', templateLabel: 'Shop template' },
  coaching: { name: 'Bright Minds Coaching', iconKey: 'coaching', templateLabel: 'Coaching template' },
  'real-estate': { name: 'Green Homes Realty', iconKey: 'real-estate', templateLabel: 'Real estate template' },
  travel: { name: 'Wander India Travels', iconKey: 'travel', templateLabel: 'Travel template' },
  general: { name: 'Your Business', iconKey: 'general', templateLabel: 'General template' },
};

/** Hero industry picker tabs */
export const demoPickerOptions = [
  { slug: 'clinic', label: 'Clinic' },
  { slug: 'shop', label: 'Shop' },
  { slug: 'coaching', label: 'Coaching' },
];

/** Industries with scroll-synced demos (order = scroll priority) */
export const demoScrollIndustries = ['clinic', 'coaching', 'shop', 'real-estate', 'travel'];

export function resolveDemoIndustry(slug) {
  return chatDemosByIndustry[slug] ? slug : 'general';
}

/** Portal dashboard screenshot strip (Setup section) */
export const portalScreens = [
  {
    id: 'setup',
    path: 'workflows',
    image: '/portal/guided-setup.png',
    alt: 'WhatsFlow guided setup — pick your business type',
    label: 'Guided setup',
    caption: 'Pick your business — we create auto-replies for you',
  },
  {
    id: 'workflows',
    path: 'workflows',
    image: '/portal/auto-replies.png',
    alt: 'WhatsFlow auto-replies dashboard with live bots',
    label: 'Auto-replies',
    caption: 'Turn bots on or off — live when you are ready',
  },
  {
    id: 'inbox',
    path: 'inbox',
    image: '/portal/inbox.png',
    alt: 'WhatsFlow customer inbox with WhatsApp conversations',
    label: 'Customer inbox',
    caption: 'Every WhatsApp chat in one place',
  },
  {
    id: 'live',
    path: 'dashboard',
    image: '/portal/go-live.png',
    alt: 'WhatsFlow home dashboard after going live',
    label: 'Go live',
    caption: "You're all set — stats at a glance",
  },
];

export const faqItems = [
  {
    q: 'Do I need a developer to set up WhatsFlow?',
    a: 'No. WhatsFlow is built for business owners. A guided 4-step checklist walks you through sign-up, connecting WhatsApp, picking your industry template, and going live — usually in under 15 minutes.',
  },
  {
    q: 'Can I use my existing WhatsApp Business number?',
    a: 'Yes. You connect your own number via Meta WhatsApp Cloud API credentials. Your customers message the same number they already know — WhatsFlow runs the auto-replies behind it.',
  },
  {
    q: 'What does the ₹499/month cover?',
    a: 'The platform fee covers WhatsFlow dashboard, auto-replies, inbox, contacts, industry templates, and the visual workflow editor. WhatsApp conversation charges from Meta and optional AI usage (OpenRouter/OpenAI) are billed separately in your own accounts.',
  },
  {
    q: 'Is there really a free trial without a credit card?',
    a: 'Yes — 14 days of full access, all features, no credit card required. You can cancel anytime from your dashboard.',
  },
  {
    q: 'Which industries have ready-made bot templates?',
    a: 'Clinic, coaching, local shop, real estate, travel, insurance, agriculture, and general business — plus smart AI replies and custom workflows for power users.',
  },
  {
    q: 'What happens when my trial ends?',
    a: 'You subscribe to the monthly or yearly plan to keep bots running and publishing new flows. Without an active plan, auto-replies pause until you subscribe.',
  },
];

export const blogPosts = [
  {
    slug: 'whatsapp-auto-reply-small-business',
    title: 'Why every small business needs WhatsApp auto-replies in 2026',
    date: 'May 15, 2026',
    excerpt: 'Customers expect instant replies. Here is how automation helps clinics, shops, and coaches without hiring extra staff.',
    tag: 'Guide',
  },
  {
    slug: 'meta-whatsapp-setup-10-minutes',
    title: 'Connect Meta WhatsApp Cloud API in 10 minutes',
    date: 'May 8, 2026',
    excerpt: 'Step-by-step walkthrough for non-technical owners — credentials, webhook, and test message.',
    tag: 'Tutorial',
  },
  {
    slug: 'clinic-appointment-bot',
    title: 'How clinics use WhatsFlow for appointment booking',
    date: 'Apr 28, 2026',
    excerpt: 'Real workflow examples: timings FAQ, slot selection, and follow-up messages patients love.',
    tag: 'Industry',
  },
];

export const aboutPoints = [
  'Built for Indian small businesses who live on WhatsApp',
  'Plain language — no developer jargon in the dashboard',
  'Platform fee only — you bring your own WhatsApp & AI keys',
  '14-day free trial with full access, no credit card',
];
