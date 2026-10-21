import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { EXPERIENCE_AREAS } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-violet-500/50" />
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Professional Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Foundational experience areas across data analysis, spatial research, media production, and modern web application development.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Center/Left Line */}
          <div className="absolute top-4 bottom-8 left-4 md:left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-violet-500/40 via-indigo-500/20 to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCE_AREAS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12`}
                >
                  {/* Timeline Central Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-charcoal-900 border border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
                  </div>

                  {/* Empty Spacer Column on opposite side for desktop layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content Column */}
                  <div className="pl-12 md:pl-0 w-full md:w-1/2">
                    <div className="group p-6 sm:p-8 rounded-3xl glass-card border-white/[0.08] hover:border-violet-500/35 transition-all duration-300">
                      
                      {/* Top Meta: Index Number & Category */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-xs font-mono font-bold tracking-widest text-violet-400 bg-violet-950/40 px-2.5 py-1 rounded-md border border-violet-500/20">
                          AREA {item.number}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Core Practice
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                        {item.title}
                      </h3>

                      {/* Professional Narrative */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        "{item.description}"
                      </p>

                      {/* Skills Tags */}
                      <div className="pt-4 border-t border-white/[0.06]">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                          Domain Skills & Competencies
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.06] group-hover:border-violet-500/20 group-hover:text-violet-200 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
