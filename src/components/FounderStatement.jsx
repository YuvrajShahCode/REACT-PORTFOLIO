import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function FounderStatement() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-white/[0.06] overflow-hidden">
      
      {/* Cinematic Background Gradient & Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 mask-radial -z-10" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-violet-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Subtle Quote Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-8 shadow-lg shadow-violet-950/40">
            <Quote className="w-5 h-5" />
          </div>

          {/* Large Quote */}
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-10 max-w-4xl">
            "{PERSONAL_INFO.quote}"
          </blockquote>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-8" />

          {/* Founder Attribution */}
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold text-white tracking-wide mb-1">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-violet-400 uppercase">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.company}
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
