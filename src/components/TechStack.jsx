import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Component,
  Globe,
  FileCode,
  Palette,
  Wind,
  Terminal,
  Server,
  Database,
  GitBranch,
  Cpu,
  Layers
} from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ICON_COMPONENTS = {
  Code2,
  Component,
  Globe,
  FileCode,
  Palette,
  Wind,
  Terminal,
  Server,
  Database,
  GitBranch,
  Github: GithubIcon
};

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24 lg:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-violet-500/50" />
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Tooling & Ecosystem
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              TECHNOLOGY
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Modern development stack powering reliable applications, structured data analysis, and scalable digital solutions.
          </p>
        </div>

        {/* Central Architecture Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Central Hub Card */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl glass-card border-violet-500/30 bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-violet-950/20 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300 mb-6">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                Tech Stack Architecture
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Engineered for rapid iteration, clean state management, modular component design, and production reliability.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-medium text-slate-400">
                <span>Zuptrix Solutions Stack</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Technology Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {TECHNOLOGIES.map((tech, index) => {
                const IconComponent = ICON_COMPONENTS[tech.icon] || Code2;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-4 rounded-2xl glass-panel-subtle border-white/[0.08] hover:border-violet-500/40 hover:bg-violet-950/10 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-violet-300 group-hover:border-violet-500/30 group-hover:bg-violet-600/20 transition-all mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                        {tech.name}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-400">
                        {tech.level}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
