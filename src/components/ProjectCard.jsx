import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Layers, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl glass-card border-white/[0.08] hover:border-violet-500/40 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300"
    >
      {/* Subtle background gradient wash */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accentGradient || 'from-violet-600/10 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div>
        {/* Top Header: Badge and Action */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/30">
            {project.type}
          </span>

          <button
            type="button"
            onClick={() => onSelect(project)}
            aria-label={`View details for ${project.name}`}
            className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-violet-500/40 group-hover:bg-violet-600/20 transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Project Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
          {project.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-violet-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-[11px] font-medium rounded-lg bg-white/[0.02] text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Interactive Button */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-violet-600/20 hover:text-white border border-white/[0.08] hover:border-violet-500/30 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>Inspect Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
