import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import WhatsAppLogo from './WhatsAppLogo';
import { navLinks } from '../data/content';
import { loginUrl, registerUrl } from '../config';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navLinkClass = ({ isActive }) =>
    `type-caption relative px-1 py-2 font-semibold transition-colors sm:text-sm ${
      isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
    }`;

  return (
    <header className="safe-top-nav pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`pointer-events-auto relative mx-auto max-w-6xl transition-all duration-500 ${
          scrolled ? 'nav-pill nav-scrolled px-3 py-2 sm:px-4 sm:py-2.5' : 'px-1 py-1 sm:px-2'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-emerald-500 text-white shadow-md shadow-emerald-500/30 sm:h-10 sm:w-10">
              <WhatsAppLogo />
            </span>
            <span className="truncate text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">WhatsFlow</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} className={navLinkClass}>
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-1 sm:gap-2 md:flex">
            <a href={loginUrl} className="btn-ghost">Login</a>
            <a href={registerUrl} className="btn-primary !px-4 !py-2.5 !text-sm shadow-emerald-500/20">
              Start free trial
              <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="rounded-xl p-2.5 text-slate-700 transition hover:bg-slate-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {scrolled && (
          <div className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent sm:inset-x-4" aria-hidden />
        )}
      </div>

      {open && (
        <>
          <button
            type="button"
            className="pointer-events-auto fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="pointer-events-auto fixed inset-x-4 top-[calc(4.75rem+env(safe-area-inset-top))] z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xl md:hidden">
            <nav className="flex flex-col gap-0.5">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 active:bg-slate-50'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <hr className="my-2 border-slate-100" />
              <a href={loginUrl} className="rounded-xl px-4 py-3 text-base font-medium text-slate-600">Login</a>
              <a href={registerUrl} className="btn-primary mt-1 w-full !rounded-xl">
                Start free trial
                <ArrowUpRight size={16} />
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
