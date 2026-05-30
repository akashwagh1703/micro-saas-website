/** Icon registry — Lucide SVG icons + gradient tokens for consistent UI */

import {
  Stethoscope,
  GraduationCap,
  Store,
  Building2,
  Plane,
  ShieldCheck,
  Sprout,
  MessagesSquare,
  Sparkles,
  GitBranch,
  UserPlus,
  Link2,
  LayoutTemplate,
  Rocket,
  Zap,
  Shield,
  Inbox,
  Bot,
  MessageCircle,
  Clock,
  CheckCircle2,
  Smartphone,
  Headphones,
  BadgeCheck,
} from 'lucide-react';

export const industryIcons = {
  clinic: { Icon: Stethoscope, gradient: 'from-rose-500 to-red-600', bg: 'bg-rose-50', ring: 'ring-rose-100' },
  coaching: { Icon: GraduationCap, gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', ring: 'ring-violet-100' },
  shop: { Icon: Store, gradient: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', ring: 'ring-amber-100' },
  'real-estate': { Icon: Building2, gradient: 'from-sky-500 to-blue-600', bg: 'bg-sky-50', ring: 'ring-sky-100' },
  travel: { Icon: Plane, gradient: 'from-cyan-500 to-teal-600', bg: 'bg-cyan-50', ring: 'ring-cyan-100' },
  insurance: { Icon: ShieldCheck, gradient: 'from-indigo-500 to-blue-600', bg: 'bg-indigo-50', ring: 'ring-indigo-100' },
  agriculture: { Icon: Sprout, gradient: 'from-lime-500 to-green-600', bg: 'bg-lime-50', ring: 'ring-lime-100' },
  general: { Icon: MessagesSquare, gradient: 'from-emerald-500 to-green-600', bg: 'bg-emerald-50', ring: 'ring-emerald-100' },
  ai: { Icon: Sparkles, gradient: 'from-fuchsia-500 to-pink-600', bg: 'bg-fuchsia-50', ring: 'ring-fuchsia-100' },
  custom: { Icon: GitBranch, gradient: 'from-slate-600 to-slate-800', bg: 'bg-slate-50', ring: 'ring-slate-200' },
};

export const stepIcons = {
  1: { Icon: UserPlus, gradient: 'from-sky-500 to-blue-600' },
  2: { Icon: Link2, gradient: 'from-emerald-500 to-teal-600' },
  3: { Icon: LayoutTemplate, gradient: 'from-violet-500 to-purple-600' },
  4: { Icon: Rocket, gradient: 'from-[#25D366] to-emerald-600' },
};

export const featureIcons = {
  Zap: { Icon: Zap, gradient: 'from-amber-400 to-orange-500' },
  Shield: { Icon: Shield, gradient: 'from-sky-400 to-blue-600' },
  Inbox: { Icon: Inbox, gradient: 'from-violet-400 to-purple-600' },
  Bot: { Icon: Bot, gradient: 'from-emerald-400 to-green-600' },
  MessageCircle: { Icon: MessageCircle, gradient: 'from-pink-400 to-rose-500' },
  Clock: { Icon: Clock, gradient: 'from-teal-400 to-cyan-600' },
};

export const trustIcons = [
  { Icon: BadgeCheck, label: '14-day free trial', gradient: 'from-emerald-500 to-green-600' },
  { Icon: Smartphone, label: 'Your WhatsApp number', gradient: 'from-sky-500 to-blue-600' },
  { Icon: Headphones, label: 'Human support', gradient: 'from-violet-500 to-purple-600' },
  { Icon: CheckCircle2, label: 'No credit card', gradient: 'from-amber-500 to-orange-500' },
];
