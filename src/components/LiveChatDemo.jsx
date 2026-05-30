import { useState, useEffect, useCallback, useMemo } from 'react';
import { User, Bot, Sparkles, Zap } from 'lucide-react';
import {
  chatDemosByIndustry,
  demoProfiles,
  demoPickerOptions,
  resolveDemoIndustry,
} from '../data/content';
import { industryIcons } from './icons/iconMaps';

function TypingIndicator() {
  return (
    <div className="ml-auto max-w-[82%] animate-fade-up">
      <div className="rounded-2xl rounded-br-md bg-emerald-100/95 px-3 py-2 shadow-sm">
        <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wide text-emerald-700">Bot typing…</p>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              style={{
                animation: 'typing-bounce 1.2s ease-in-out infinite',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ msg, visible, isNew }) {
  const isOut = msg.type === 'out';
  if (!visible) return null;

  return (
    <div className={`max-w-[85%] ${isOut ? 'ml-auto' : ''} ${isNew ? 'animate-message-in' : ''}`}>
      <div
        className={`rounded-2xl px-3 py-2 text-[11px] leading-snug shadow-sm sm:text-xs sm:leading-relaxed ${
          isOut
            ? 'rounded-br-sm bg-gradient-to-br from-[#25D366] to-emerald-600 text-white'
            : 'rounded-bl-sm border border-slate-200/80 bg-white text-slate-800'
        }`}
      >
        <div className={`mb-1 flex items-center gap-1 ${isOut ? 'text-emerald-100' : 'text-slate-500'}`}>
          {isOut ? <Bot size={10} /> : <User size={10} />}
          <span className="text-[9px] font-bold uppercase tracking-wide">{msg.label}</span>
        </div>
        <p className="whitespace-pre-line break-words">{msg.text}</p>
        <p className={`mt-1 text-right text-[9px] ${isOut ? 'text-emerald-100/90' : 'text-slate-400'}`}>
          {msg.time}
        </p>
      </div>
    </div>
  );
}

/**
 * Animated WhatsApp phone demo.
 * @param industry — slug key for chat script (clinic, shop, …)
 * @param showPicker — hero tabs to switch industry
 * @param templateLabel — show "Clinic template" under badge
 */
export default function LiveChatDemo({
  industry: industryProp = 'clinic',
  showPicker = false,
  templateLabel = false,
  onIndustryChange,
}) {
  const industry = resolveDemoIndustry(industryProp);
  const profile = demoProfiles[industry] ?? demoProfiles.general;
  const messages = useMemo(
    () => chatDemosByIndustry[industry] ?? chatDemosByIndustry.general,
    [industry],
  );
  const HeaderIcon = industryIcons[profile.iconKey]?.Icon ?? industryIcons.general.Icon;

  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [flash, setFlash] = useState(false);
  const [lastNewIndex, setLastNewIndex] = useState(-1);
  const [picked, setPicked] = useState(industry);

  const reset = useCallback(() => {
    setVisibleCount(0);
    setTyping(false);
    setLastNewIndex(-1);
  }, []);

  useEffect(() => {
    setPicked(industry);
  }, [industry]);

  useEffect(() => {
    reset();
    setCycle((c) => c + 1);
  }, [industry, reset]);

  useEffect(() => {
    reset();
  }, [cycle, reset]);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      const t = setTimeout(() => setCycle((c) => c + 1), 3200);
      return () => clearTimeout(t);
    }

    const current = messages[visibleCount];
    const isBotReply = current.type === 'out';

    if (isBotReply) {
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        setVisibleCount((c) => c + 1);
        setLastNewIndex(visibleCount);
        setFlash(true);
        setTimeout(() => setFlash(false), 450);
      }, 1400);
      return () => clearTimeout(t);
    }

    const delay = visibleCount === 0 ? 500 : 750;
    const t = setTimeout(() => {
      setVisibleCount((c) => c + 1);
      setLastNewIndex(visibleCount);
    }, delay);
    return () => clearTimeout(t);
  }, [visibleCount, cycle, messages]);

  const handlePick = (slug) => {
    const resolved = resolveDemoIndustry(slug);
    setPicked(resolved);
    onIndustryChange?.(resolved);
  };

  return (
    <div className="live-demo-wrap mx-auto">
      {showPicker && (
        <div className="mb-3 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {demoPickerOptions.map(({ slug, label }) => (
            <button
              key={slug}
              type="button"
              onClick={() => handlePick(slug)}
              className={`type-caption rounded-full px-3 py-1.5 font-bold transition ${
                picked === slug
                  ? 'bg-gradient-to-r from-[#25D366] to-emerald-600 text-white shadow-md'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-emerald-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="live-demo-badge relative z-10 mx-auto mb-3 flex">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
        <Sparkles size={13} className="shrink-0 text-amber-500" />
        <span className="text-[10px] font-extrabold leading-tight tracking-tight text-slate-800 sm:text-xs">
          <span className="sm:hidden">Live demo — bot replies</span>
          <span className="hidden sm:inline">Live demo — watch the bot reply</span>
        </span>
        <Zap size={12} className="shrink-0 text-emerald-500 animate-bounce-soft" />
      </div>

      {templateLabel && (
        <p className="type-caption mb-2 text-center font-semibold text-emerald-600">{profile.templateLabel}</p>
      )}

      <div className="relative mx-auto w-full">
        <div
          className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/30 via-teal-300/20 to-sky-400/25 blur-2xl transition-opacity duration-500"
          aria-hidden
        />

        <div className="live-demo-phone relative overflow-hidden rounded-[1.65rem] border-[3px] border-slate-900 bg-slate-900 shadow-2xl shadow-emerald-500/20">
          <div className="flex h-5 shrink-0 items-center justify-center bg-slate-900 sm:h-6">
            <div className="h-1 w-14 rounded-full bg-slate-700 sm:h-1.5 sm:w-16" />
          </div>

          <div className="flex shrink-0 items-center gap-2.5 bg-[#075e54] px-3 py-2 text-white sm:py-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 ring-2 ring-emerald-300/40 sm:h-9 sm:w-9">
              <HeaderIcon size={16} className="text-white sm:hidden" />
              <HeaderIcon size={17} className="hidden text-white sm:block" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold">{profile.name}</p>
              <p className="flex items-center gap-1 text-[10px] text-emerald-100">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                </span>
                Bot online
              </p>
            </div>
            {visibleCount > 0 && (
              <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 px-1 text-[10px] font-bold text-emerald-950 animate-message-in">
                {Math.min(visibleCount, 9)}
              </span>
            )}
          </div>

          <div
            className={`live-demo-chat relative overflow-hidden transition-colors duration-300 ${flash ? 'bg-emerald-100/40' : ''}`}
            style={{
              backgroundColor: '#e5ddd5',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c4bc' fill-opacity='0.22'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#e5ddd5] to-transparent sm:h-10"
              aria-hidden
            />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 px-2 pb-2.5 pt-6 sm:px-2.5 sm:pb-3 sm:pt-8">
              {messages.map((msg, i) => (
                <ChatBubble
                  key={`${cycle}-${industry}-${i}`}
                  msg={msg}
                  visible={i < visibleCount}
                  isNew={i === lastNewIndex}
                />
              ))}
              {typing && <TypingIndicator key={`typing-${cycle}-${visibleCount}`} />}
            </div>

            {flash && (
              <div className="pointer-events-none absolute inset-0 animate-ping-once bg-emerald-400/15" aria-hidden />
            )}
          </div>

          <div className="flex h-6 shrink-0 items-center justify-center bg-[#e5ddd5] sm:h-8">
            <div className="h-1 w-16 rounded-full bg-slate-400/50 sm:w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
