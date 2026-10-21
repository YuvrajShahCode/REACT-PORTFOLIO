import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, Lightbulb, Compass, Target } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '../constants';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow and Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-violet-500/50" />
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
                {PERSONAL_INFO.aboutStatement}
              </h2>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                As the Founder & CEO of <strong className="text-slate-200 font-semibold">{PERSONAL_INFO.company}</strong>, 
                my mission is centered around building modern digital solutions that balance rigorous engineering with intuitive human-centric product design.
              </p>
            </div>

            {/* Philosophy Glass Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-300">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">Core Objective</h3>
                  <span className="text-xs text-slate-400">Practical execution meets clean design</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic">
                "{PERSONAL_INFO.quote}"
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-violet-400 font-medium">{PERSONAL_INFO.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Narrative & Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-violet-400" />
                Founder Introduction
              </h3>
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
                {PERSONAL_INFO.aboutDescription}
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                By bridging technology architecture, data analysis, and user experience, I focus on delivering scalable web platforms and applications that convert complex challenges into frictionless, durable software.
              </p>
            </div>

            {/* Core Focus Areas */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-violet-400" />
                Areas of Focus
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {FOCUS_AREAS.map((area, idx) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="p-4 rounded-2xl glass-panel-subtle border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
