import { useState } from 'react';
import { Sparkles, ArrowUpRight, Play } from 'lucide-react';
import { registerUrl } from '../config';
import { Link } from 'react-router-dom';
import { socialProof } from '../data/content';
import LiveChatDemo from './LiveChatDemo';
import MetaTrustBadge from './MetaTrustBadge';
import Reveal from './scroll/Reveal';
import ScrollHint from './scroll/ScrollHint';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { trustIcons } from './icons/iconMaps';

export default function Hero() {
  const scroll = useScrollProgress();
  const parallax = scroll * 120;
  const [heroIndustry, setHeroIndustry] = useState('clinic');

  return (
    <section className="relative overflow-hidden pb-12 pt-[5.5rem] sm:pb-16 sm:pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-16 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl sm:-right-24 sm:h-80 sm:w-80"
        style={{ transform: `translateY(${parallax * 0.4}px)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-6 h-48 w-48 rounded-full bg-emerald-200/35 blur-3xl sm:-left-20 sm:h-64 sm:w-64"
        style={{ transform: `translateY(${-parallax * 0.25}px)` }}
        aria-hidden
      />

      <div className="container-main relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <div className="type-badge mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-200/80 bg-white/90 px-3.5 py-1.5 text-emerald-700 shadow-sm backdrop-blur sm:mb-6">
            <Sparkles size={14} className="shrink-0 text-emerald-500" />
            <span>India&apos;s WhatsApp automation for small business</span>
          </div>

          <h1 className="type-display">
            Auto-reply on <span className="text-gradient">WhatsApp</span>
            <br />
            24/7 — no code needed
          </h1>

          <p className="type-body-lg mt-4 max-w-lg text-slate-600 sm:mt-5">
            Connect your WhatsApp Business number. Pick your industry. Go live in minutes — customers get instant replies while you focus on your business.
          </p>

          <p className="type-caption mt-3 max-w-lg font-medium text-slate-500 italic">
            Namaste — appointment chahiye? Shop open hai? Demo class hai? Your bot handles it.
          </p>

          <p className="type-body mt-3 max-w-lg font-semibold text-emerald-700">
            {socialProof.roiLine}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6">
            <MetaTrustBadge />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
            <a href={registerUrl} className="btn-primary w-full sm:w-auto">
              Start 14-day free trial
              <ArrowUpRight size={18} />
            </a>
            <Link to="/how-it-works" className="btn-secondary w-full sm:w-auto">
              <Play size={16} className="fill-emerald-500 text-emerald-500" />
              See how it works
            </Link>
          </div>

          <ul className="mt-7 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-4 sm:gap-2.5">
            {trustIcons.map(({ Icon, label, gradient }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-xl border border-slate-100/80 bg-white/80 px-2.5 py-2 shadow-sm backdrop-blur-sm sm:px-3 sm:py-2.5"
              >
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-white shadow-sm sm:h-8 sm:w-8`}>
                  <Icon size={14} strokeWidth={2.5} aria-hidden />
                </span>
                <span className="type-caption leading-tight font-semibold text-slate-700">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="right" delay={150} className="flex justify-center lg:justify-end">
          <LiveChatDemo
            industry={heroIndustry}
            showPicker
            templateLabel
            onIndustryChange={setHeroIndustry}
          />
        </Reveal>
      </div>

      <ScrollHint />
    </section>
  );
}
