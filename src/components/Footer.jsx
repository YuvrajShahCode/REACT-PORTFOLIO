import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <span className="font-extrabold text-base tracking-wider text-white">
                {PERSONAL_INFO.initials}
              </span>
            </div>

            <div>
              <span className="text-base font-bold text-white block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-400">
                {PERSONAL_INFO.role} • {PERSONAL_INFO.company}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-6 text-xs font-medium text-slate-400">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-violet-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white transition-colors group flex items-center gap-2 text-xs font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Built with React, Vite & Tailwind CSS • Designed for {PERSONAL_INFO.company}
          </p>
        </div>

      </div>
    </footer>
  );
}
