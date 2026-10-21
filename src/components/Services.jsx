import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Layers, Box, BarChart3, Sparkles, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';

const ICON_MAP = {
  Globe,
  Smartphone,
  Layers,
  Box,
  BarChart3,
  Sparkles
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-violet-500/50" />
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              WHAT I BUILD
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Specialized engineering and product solutions designed to turn vision into scalable, responsive, and durable digital reality.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl glass-card border-white/[0.08] hover:border-violet-500/35 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle hover gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-500 group-hover:text-violet-400 transition-colors">
                      {service.number}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-violet-600/20 group-hover:border-violet-500/30 transition-all duration-300">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Subtle card bottom accent */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span>Founder Specialized</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
