/** Detailed Privacy Policy & Terms of Use for AutoWave */

export const privacyPolicy = {
  title: 'Privacy Policy',
  updated: 'June 8, 2026',
  intro:
    'AutoWave ("we", "us", "our") operates the AutoWave platform at autowave.in and related applications (the "Service"). This Privacy Policy explains how we collect, use, store, and protect your information when you use our Service. By registering or using AutoWave, you agree to this policy.',
  sections: [
    {
      id: 'who-we-are',
      title: '1. Who we are',
      paragraphs: [
        'AutoWave is a software platform that helps small businesses automate WhatsApp and Instagram customer conversations using auto-reply workflows, an inbox, and contact management.',
        'For privacy-related questions, contact us at hello@autowave.in or through the Contact page on our website.',
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Information we collect',
      paragraphs: [
        'We collect information necessary to provide the Service:',
      ],
      list: [
        'Account information: name, email address, and password (stored as a secure hash, never plain text).',
        'Business profile: industry category and use cases you select during setup.',
        'WhatsApp configuration: access tokens, phone number IDs, business account IDs, verify tokens, and app secrets that you voluntarily provide to connect Meta WhatsApp Cloud API. These are encrypted at rest.',
        'Instagram configuration: page access tokens, page IDs, verify tokens, and app secrets that you provide to connect Instagram Business messaging. These are encrypted at rest.',
        'Message data: incoming and outgoing WhatsApp and Instagram message content, timestamps, contact identifiers, and conversation metadata processed to power your inbox and auto-replies.',
        'Workflow data: auto-reply definitions, execution logs, and automation settings you create.',
        'Billing information: subscription status, trial dates, Razorpay customer/subscription IDs when billing is enabled. Payment card details are handled by Razorpay — we do not store full card numbers.',
        'Technical data: IP address, browser type, device information, and usage logs for security and troubleshooting.',
        'AI integration keys (optional): OpenRouter or OpenAI API keys you provide for smart reply features, encrypted at rest.',
      ],
    },
    {
      id: 'how-we-use',
      title: '3. How we use your information',
      paragraphs: [
        'We use collected information solely to operate and improve AutoWave:',
      ],
      list: [
        'Authenticate your account and maintain your session.',
        'Connect to Meta WhatsApp Cloud API and Instagram Messaging API on your behalf to receive and send messages.',
        'Execute auto-reply workflows when customers message your WhatsApp number or Instagram account.',
        'Display your inbox, contacts, and dashboard analytics.',
        'Process subscription payments and manage trial/billing status.',
        'Send service-related communications (e.g. trial expiry, payment confirmations).',
        'Detect abuse, fraud, and security incidents.',
        'Improve product features and fix bugs (using aggregated, non-identifiable data where possible).',
      ],
    },
    {
      id: 'legal-basis',
      title: '4. Legal basis & purpose limitation',
      paragraphs: [
        'We process your data based on: (a) performance of our contract with you (providing the Service); (b) your consent (e.g. connecting WhatsApp, providing AI keys); and (c) legitimate interests (security, fraud prevention, product improvement).',
        'We do not sell, rent, or trade your personal information or your customers\' contact lists to third parties for marketing purposes.',
      ],
    },
    {
      id: 'sharing',
      title: '5. How we share information',
      paragraphs: [
        'We share data only when necessary to run the Service:',
      ],
      list: [
        'Meta (Facebook): WhatsApp and Instagram message delivery requires transmitting message content and identifiers through Meta APIs under your configured credentials.',
        'Razorpay: Payment processing when you subscribe to a paid plan.',
        'Cloud infrastructure providers (e.g. Render, PostgreSQL hosting): encrypted database storage and application hosting.',
        'AI providers (OpenRouter/OpenAI): Only when you enable smart reply nodes and provide your own API keys — message content may be sent to generate responses.',
        'Legal requirements: If required by law, court order, or to protect rights, safety, and security.',
      ],
      paragraphsAfter: [
        'All subprocessors are selected for security standards appropriate to the data they handle. We require contractual protections where applicable.',
      ],
    },
    {
      id: 'retention',
      title: '6. Data retention',
      paragraphs: [
        'We retain your account data and message history while your account is active and as needed to provide the Service.',
        'If you delete your account or request deletion, we will remove or anonymize personal data within 30 days, except where retention is required by law or for legitimate dispute resolution.',
        'Encrypted backups may persist for up to 90 days before permanent deletion.',
      ],
    },
    {
      id: 'security',
      title: '7. Security measures',
      paragraphs: [
        'We implement industry-standard safeguards including:',
      ],
      list: [
        'TLS/HTTPS encryption for all data in transit.',
        'AES-256-GCM encryption for WhatsApp credentials and AI API keys at rest.',
        'bcrypt password hashing with configurable cost factor.',
        'Bearer token authentication with hashed session tokens.',
        'Webhook signature verification for Meta and Razorpay events.',
        'Tenant isolation — each user\'s data is scoped by account ID in all database queries.',
      ],
      paragraphsAfter: [
        'No method of transmission or storage is 100% secure. You are responsible for keeping your login credentials and Meta tokens confidential.',
      ],
    },
    {
      id: 'your-rights',
      title: '8. Your rights',
      paragraphs: [
        'Depending on applicable law (including India\'s Digital Personal Data Protection Act where applicable), you may have the right to:',
      ],
      list: [
        'Access the personal data we hold about you.',
        'Correct inaccurate account information via Settings or by contacting us.',
        'Delete your account and associated data.',
        'Export your contacts and message history (on request).',
        'Withdraw consent for optional features (e.g. disconnect WhatsApp, remove AI keys).',
        'Object to processing or lodge a complaint with a supervisory authority.',
      ],
      paragraphsAfter: [
        'To exercise these rights, email hello@autowave.in with your registered email address. We will respond within 30 days.',
      ],
    },
    {
      id: 'customer-data',
      title: '9. Your customers\' data (end users)',
      paragraphs: [
        'When you use AutoWave, you may process personal data of your WhatsApp and Instagram customers (phone numbers, usernames, names, message content). You are the data controller for that data; AutoWave acts as a data processor on your instructions to deliver auto-replies and inbox features.',
        'You must have a lawful basis to message your customers and comply with Meta WhatsApp Business Policy, Instagram messaging policies, and applicable privacy laws — including obtaining consent where required and honouring opt-out requests.',
      ],
    },
    {
      id: 'career-ai',
      title: '10. CareerAI job seeker data',
      paragraphs: [
        'If you enable the CareerAI business type, job seekers who message your WhatsApp number may upload resumes (PDF/DOCX), share salary and location preferences, and receive AI-generated career content.',
        'As the business operator, you are the data controller for your job seekers\' data. AutoWave stores resumes in object storage (MinIO/S3 when configured), parses resume text with your configured AI provider, and applies configurable retention for extracted text in the database.',
        'Job seekers can reply DELETE MY DATA on WhatsApp to permanently erase their CareerAI profile. Operators can also delete profiles from the CareerAI portal. Deletion removes database records and stored resume files.',
        'You must provide job seekers with a clear privacy notice explaining what you collect, how long you keep it, and how they can request deletion.',
      ],
    },
    {
      id: 'cookies',
      title: '11. Cookies & local storage',
      paragraphs: [
        'The AutoWave web application (portal) uses local storage and session tokens to keep you logged in. Our marketing website may use essential cookies for basic functionality.',
        'We do not use third-party advertising cookies on the Service.',
      ],
    },
    {
      id: 'children',
      title: '12. Children\'s privacy',
      paragraphs: [
        'AutoWave is a business tool not intended for users under 18. We do not knowingly collect data from children. Contact us if you believe a minor has registered an account.',
      ],
    },
    {
      id: 'international',
      title: '13. International data transfers',
      paragraphs: [
        'Your data may be processed on servers located in India or other countries where our cloud providers operate. By using the Service, you consent to such transfers subject to appropriate safeguards.',
      ],
    },
    {
      id: 'changes',
      title: '14. Changes to this policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will post the revised policy on this page with an updated "Last updated" date. Material changes will be notified via email or in-app notice where appropriate.',
        'Continued use of the Service after changes constitutes acceptance of the updated policy.',
      ],
    },
    {
      id: 'contact',
      title: '15. Contact us',
      paragraphs: [
        'For privacy questions, data requests, or complaints:',
        'Email: hello@autowave.in',
        'Website: Contact page at autowave.in/contact',
      ],
    },
  ],
};

export const termsOfUse = {
  title: 'Terms of Use',
  updated: 'May 30, 2026',
  intro:
    'These Terms of Use ("Terms") govern your access to and use of the AutoWave platform, website, and related services ("Service") operated by AutoWave. Please read them carefully. By creating an account or using the Service, you agree to these Terms.',
  sections: [
    {
      id: 'acceptance',
      title: '1. Acceptance of terms',
      paragraphs: [
        'If you do not agree to these Terms, do not use the Service. If you are using AutoWave on behalf of a business, you represent that you have authority to bind that business to these Terms.',
      ],
    },
    {
      id: 'service-description',
      title: '2. Description of service',
      paragraphs: [
        'AutoWave provides a cloud-based platform for:',
      ],
      list: [
        'Connecting a WhatsApp Business number via Meta WhatsApp Cloud API.',
        'Connecting an Instagram Business account for direct-message automation.',
        'Creating and running automated message workflows (auto-replies).',
        'Managing customer conversations in an inbox.',
        'Storing contacts and workflow execution logs.',
        'Optional AI-powered smart replies using your own third-party API keys.',
      ],
      paragraphsAfter: [
        'AutoWave is a technology platform. We do not provide WhatsApp accounts, Instagram accounts, phone numbers, or AI services directly — you obtain those from Meta and AI providers separately.',
      ],
    },
    {
      id: 'account',
      title: '3. Account registration & security',
      paragraphs: [
        'You must provide accurate registration information and keep your password secure. You are responsible for all activity under your account.',
        'Notify us immediately at hello@autowave.in if you suspect unauthorized access. We may suspend accounts with suspicious activity.',
        'One person or business entity per account unless otherwise agreed in writing.',
      ],
    },
    {
      id: 'trial-billing',
      title: '4. Free trial, subscription & billing',
      paragraphs: [
        'New accounts may receive a 14-day free trial with full platform access when billing is enabled.',
        'After the trial, a paid subscription (monthly or yearly platform fee) is required to keep auto-replies active. Pricing is displayed on our website and in-app.',
        'Payments are processed by Razorpay. By subscribing, you also agree to Razorpay\'s terms where applicable.',
        'Subscriptions renew automatically until cancelled. You may cancel at any time from Settings → Plan & billing in the portal, or by emailing hello@autowave.in. Cancellation takes effect at the end of your current billing period — see our Refund & Cancellation Policy.',
        'We may change pricing with at least 30 days\' notice to existing subscribers. Continued use after the effective date constitutes acceptance.',
        'Refunds are governed by our Refund & Cancellation Policy. Platform fees are generally non-refundable for partial billing periods unless required by applicable law or explicitly approved by AutoWave.',
        'WhatsApp conversation charges from Meta and AI API usage from OpenRouter/OpenAI are billed separately by those providers — not included in the AutoWave platform fee.',
      ],
    },
    {
      id: 'your-responsibilities',
      title: '5. Your responsibilities',
      paragraphs: [
        'You agree to:',
      ],
      list: [
        'Comply with Meta WhatsApp Business Policy, Commerce Policy, and all applicable Indian laws (including IT Act, consumer protection, and telecom regulations).',
        'Obtain proper consent before messaging customers and honour opt-out requests promptly.',
        'Not use AutoWave for spam, harassment, fraud, illegal goods/services, or misleading content.',
        'Maintain valid Meta WhatsApp API credentials and keep webhook configuration current.',
        'Ensure message content (including AI-generated replies) is accurate and appropriate for your business.',
        'Back up critical business data — while we maintain database backups, you should not rely solely on us for archival.',
      ],
    },
    {
      id: 'whatsapp-meta',
      title: '6. WhatsApp, Instagram & Meta third-party terms',
      paragraphs: [
        'WhatsApp and Instagram messaging are provided by Meta Platforms, Inc. Your use through AutoWave is subject to Meta\'s terms, policies, and pricing for each channel.',
        'AutoWave is not affiliated with, endorsed by, or sponsored by Meta. Service interruptions caused by Meta API changes, outages, or account restrictions are outside our control.',
        'You are solely responsible for Meta account status, quality rating, and message compliance on both WhatsApp and Instagram.',
      ],
    },
    {
      id: 'acceptable-use',
      title: '7. Acceptable use policy',
      paragraphs: [
        'Prohibited uses include but are not limited to:',
      ],
      list: [
        'Sending unsolicited bulk messages or spam.',
        'Phishing, impersonation, or distributing malware.',
        'Collecting data without consent or violating privacy laws.',
        'Reverse engineering, scraping, or attempting to bypass security.',
        'Reselling the Service without authorization.',
        'Overloading infrastructure or abusing API rate limits.',
      ],
      paragraphsAfter: [
        'We may warn, restrict, or terminate accounts that violate this policy without refund.',
      ],
    },
    {
      id: 'ip',
      title: '8. Intellectual property',
      paragraphs: [
        'AutoWave owns all rights to the platform software, design, templates, documentation, and branding. You receive a limited, non-exclusive, non-transferable license to use the Service during your subscription.',
        'You retain ownership of your business content, customer lists, and custom workflow definitions. You grant us a license to process this content solely to provide the Service.',
      ],
    },
    {
      id: 'availability',
      title: '9. Service availability & modifications',
      paragraphs: [
        'We aim for high uptime but do not guarantee uninterrupted access. Maintenance, updates, or third-party outages may cause temporary downtime.',
        'We may modify, add, or remove features with reasonable notice. Material adverse changes to paid features will be communicated in advance where feasible.',
      ],
    },
    {
      id: 'disclaimer',
      title: '10. Disclaimer of warranties',
      paragraphs: [
        'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
        'We do not warrant that auto-replies will be error-free, that messages will always deliver, or that AI-generated content will be accurate.',
      ],
    },
    {
      id: 'liability',
      title: '11. Limitation of liability',
      paragraphs: [
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTOWAVE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST CUSTOMERS, OR BUSINESS INTERRUPTION.',
        'Our total liability for any claim arising from the Service shall not exceed the amount you paid to AutoWave in the twelve (12) months preceding the claim, or ₹5,000, whichever is greater.',
        'Some jurisdictions do not allow certain limitations — in those cases, our liability is limited to the fullest extent permitted by law.',
      ],
    },
    {
      id: 'indemnification',
      title: '12. Indemnification',
      paragraphs: [
        'You agree to indemnify and hold AutoWave harmless from claims, damages, and expenses (including reasonable legal fees) arising from: (a) your use of the Service; (b) your message content or auto-replies; (c) violation of these Terms or Meta policies; or (d) infringement of third-party rights.',
      ],
    },
    {
      id: 'termination',
      title: '13. Termination',
      paragraphs: [
        'You may stop using the Service and request account deletion at any time by contacting hello@autowave.in.',
        'We may suspend or terminate your account for Terms violations, non-payment after trial, or extended inactivity.',
        'Upon termination, your right to use the Service ends. Provisions that by nature should survive (liability limits, indemnification, governing law) will survive termination.',
      ],
    },
    {
      id: 'governing-law',
      title: '14. Governing law & disputes',
      paragraphs: [
        'These Terms are governed by the laws of India. Courts in Pune, Maharashtra shall have exclusive jurisdiction, subject to applicable consumer protection laws that may provide otherwise.',
        'We encourage resolving disputes amicably by contacting hello@autowave.in before pursuing legal action.',
      ],
    },
    {
      id: 'general',
      title: '15. General provisions',
      paragraphs: [
        'These Terms, together with our Privacy Policy, constitute the entire agreement between you and AutoWave.',
        'If any provision is found unenforceable, the remaining provisions remain in effect.',
        'Our failure to enforce a right does not waive that right.',
        'You may not assign your account without our consent. We may assign our rights in connection with a merger or acquisition.',
      ],
    },
    {
      id: 'contact',
      title: '16. Contact',
      paragraphs: [
        'Questions about these Terms:',
        'Email: hello@autowave.in',
        'Website: autowave.in/contact',
      ],
    },
  ],
};

export const refundPolicy = {
  title: 'Refund & Cancellation Policy',
  updated: 'June 13, 2026',
  intro:
    'This Refund & Cancellation Policy explains how subscriptions, trials, and payments work for the AutoWave platform (autowave.in). It applies to platform subscriptions billed through Razorpay. CareerAI seeker subscriptions (if enabled by your operator) are billed separately under that operator\'s Razorpay account.',
  sections: [
    {
      id: 'overview',
      title: '1. Overview',
      paragraphs: [
        'AutoWave offers a 14-day free trial on new accounts when billing is enabled. After the trial, a paid monthly or yearly subscription is required to keep auto-replies active.',
        'All prices are in Indian Rupees (INR) and are displayed on our Pricing page before checkout.',
      ],
    },
    {
      id: 'cancellation',
      title: '2. How to cancel',
      paragraphs: [
        'You may cancel your subscription at any time using one of these methods:',
      ],
      list: [
        'Self-service: Settings → Plan & billing in the AutoWave portal → Cancel subscription.',
        'Email: hello@autowave.in from your registered account email with subject "Cancel subscription".',
      ],
      paragraphsAfter: [
        'When you cancel, your subscription is scheduled to end at the close of your current billing period. You retain full access until that date — we do not cut access immediately upon cancellation.',
      ],
    },
    {
      id: 'refunds',
      title: '3. Refund eligibility',
      paragraphs: [
        'AutoWave platform fees are generally non-refundable once a billing period has started, because the Service is delivered continuously (cloud hosting, automation engine, inbox).',
        'We may issue a refund or credit in the following situations, at our sole discretion:',
      ],
      list: [
        'Duplicate or erroneous charges caused by a technical fault on our side.',
        'Extended Service outage (more than 24 consecutive hours) attributable to AutoWave infrastructure, not Meta or third-party APIs.',
        'Cancellation within 7 days of your first paid charge if you have not published any live auto-reply workflow — contact us within that window.',
        'Where a refund is required by applicable Indian consumer protection law.',
      ],
      paragraphsAfter: [
        'Refund requests must be emailed to hello@autowave.in within 14 days of the charge with your registered email, Razorpay payment ID, and reason. Approved refunds are processed to the original payment method within 7–10 business days via Razorpay.',
      ],
    },
    {
      id: 'non-refundable',
      title: '4. Non-refundable items',
      list: [
        'Partial months or years after a billing period has begun.',
        'Meta WhatsApp or Instagram messaging fees billed directly by Meta.',
        'AI API usage billed by OpenRouter, OpenAI, or other providers you connect.',
        'CareerAI seeker subscriptions billed through a third-party operator\'s Razorpay account.',
        'Accounts terminated for Terms violations or abuse.',
      ],
    },
    {
      id: 'trial',
      title: '5. Free trial',
      paragraphs: [
        'The 14-day trial provides full platform access without charge. No payment method is required to start a trial unless you choose to subscribe early.',
        'If you do not subscribe before the trial ends, auto-replies pause until you activate a paid plan. Your account data is retained for a reasonable period so you can reactivate.',
      ],
    },
    {
      id: 'chargebacks',
      title: '6. Chargebacks & disputes',
      paragraphs: [
        'If you dispute a charge with your bank without contacting us first, we may suspend your account pending investigation. Please email hello@autowave.in — we resolve most billing issues within 2 business days.',
      ],
    },
    {
      id: 'contact',
      title: '7. Contact',
      paragraphs: [
        'Billing questions and refund requests: hello@autowave.in',
        'Include your registered email and Razorpay payment or subscription ID for faster resolution.',
      ],
    },
  ],
};

export const deliveryPolicy = {
  title: 'Shipping & Delivery Policy',
  updated: 'June 13, 2026',
  intro:
    'AutoWave is a 100% digital SaaS product. We do not ship physical goods. This policy describes how digital access to the Service is delivered after purchase.',
  sections: [
    {
      id: 'digital-delivery',
      title: '1. Digital delivery',
      paragraphs: [
        'Upon successful registration, you receive immediate access to the AutoWave web portal at the URL provided during signup (typically app.autowave.in or your operator-configured portal domain).',
        'No physical shipment, courier, or postal delivery is involved.',
      ],
    },
    {
      id: 'activation',
      title: '2. Subscription activation',
      paragraphs: [
        'After completing Razorpay checkout for a paid plan, your subscription is activated within minutes. You will see "Active" status under Settings → Plan & billing.',
        'If activation does not reflect within 30 minutes, email hello@autowave.in with your Razorpay payment ID.',
      ],
    },
    {
      id: 'service-delivery',
      title: '3. What is delivered',
      list: [
        'Cloud-hosted automation platform (workflows, inbox, contacts, leads).',
        'WhatsApp and Instagram webhook integration once you connect your Meta credentials.',
        'Industry workflow templates and dashboard analytics.',
        'Optional CareerAI module when that business type is selected.',
      ],
    },
    {
      id: 'access-requirements',
      title: '4. Access requirements',
      paragraphs: [
        'You need a modern web browser and internet connection. You must connect your own Meta WhatsApp and/or Instagram Business credentials to send and receive messages — AutoWave does not provide phone numbers or social accounts.',
      ],
    },
    {
      id: 'support',
      title: '5. Support & onboarding',
      paragraphs: [
        'Setup guidance is available in the portal (guided business wizard) and on our How it works page. For help going live, contact hello@autowave.in or WhatsApp us from the Contact page.',
      ],
    },
  ],
};

export const cookiePolicy = {
  title: 'Cookie Policy',
  updated: 'June 13, 2026',
  intro:
    'This Cookie Policy explains how AutoWave uses cookies and similar technologies on autowave.in (marketing website) and the AutoWave operator portal.',
  sections: [
    {
      id: 'what-are-cookies',
      title: '1. What are cookies?',
      paragraphs: [
        'Cookies are small text files stored on your device. Local storage and session storage serve similar purposes in web applications.',
      ],
    },
    {
      id: 'marketing-site',
      title: '2. Marketing website (autowave.in)',
      list: [
        'Essential: cookie consent preference (stores your accept/decline choice).',
        'Analytics (optional): we may enable privacy-friendly analytics in future — you will be asked before non-essential cookies are set.',
      ],
      paragraphsAfter: [
        'We do not use third-party advertising or retargeting cookies on the marketing site.',
      ],
    },
    {
      id: 'portal',
      title: '3. Operator portal',
      list: [
        'Authentication token (localStorage): keeps you logged in to the dashboard.',
        'User preferences: UI state such as sidebar and onboarding progress.',
      ],
      paragraphsAfter: [
        'These are strictly necessary to operate the Service. They are not used for advertising.',
      ],
    },
    {
      id: 'manage',
      title: '4. Managing cookies',
      paragraphs: [
        'You can clear cookies and local storage through your browser settings. Clearing portal storage will log you out.',
        'Declining non-essential cookies on our marketing site (via the consent banner) limits optional analytics only — essential site functionality remains available.',
      ],
    },
    {
      id: 'contact',
      title: '5. Contact',
      paragraphs: ['Questions: hello@autowave.in · See also our Privacy Policy.'],
    },
  ],
};

export const securityPolicy = {
  title: 'Security & Compliance',
  updated: 'June 13, 2026',
  intro:
    'AutoWave is built for business operators who trust us with customer conversations and credentials. This page summarizes our security practices. For full details, see our Privacy Policy.',
  sections: [
    {
      id: 'encryption',
      title: '1. Encryption',
      list: [
        'TLS 1.2+ for all data in transit (HTTPS everywhere).',
        'AES-256-GCM encryption for WhatsApp, Instagram, and AI API credentials at rest.',
        'bcrypt password hashing — we never store plain-text passwords.',
        'Bearer tokens stored as SHA-256 hashes in the database.',
      ],
    },
    {
      id: 'access-control',
      title: '2. Access control & isolation',
      list: [
        'Multi-tenant isolation: every database query is scoped by account ID.',
        'Role-based super-admin access for platform operations only.',
        'Webhook signature verification for Meta and Razorpay events.',
        'Fail-closed webhook handling when app secrets are not configured.',
      ],
    },
    {
      id: 'infrastructure',
      title: '3. Infrastructure',
      paragraphs: [
        'The Service runs on reputable cloud providers with encrypted PostgreSQL databases and object storage for CareerAI documents (when configured).',
        'Production deployments require strong encryption keys and queue-based message processing to avoid webhook timeouts.',
      ],
    },
    {
      id: 'data-retention',
      title: '4. Data retention & deletion',
      list: [
        'Account deletion requests processed within 30 days.',
        'CareerAI resume text retention with configurable purge schedules.',
        'Job seekers can reply DELETE MY DATA on WhatsApp for profile erasure.',
      ],
    },
    {
      id: 'incident',
      title: '5. Incident response',
      paragraphs: [
        'We investigate security reports promptly. Report vulnerabilities responsibly to hello@autowave.in with subject "Security report". Do not publicly disclose before we acknowledge.',
      ],
    },
    {
      id: 'compliance',
      title: '6. Compliance',
      paragraphs: [
        'We design for compliance with India\'s Digital Personal Data Protection Act (DPDPA) principles: purpose limitation, data minimization, and user rights.',
        'Business operators using AutoWave remain responsible for their end-customer consent and Meta platform policies.',
      ],
    },
  ],
};
