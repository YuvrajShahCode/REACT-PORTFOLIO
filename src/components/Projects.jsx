import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Code2, ShieldCheck, Terminal } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = PROJECTS.find((p) => p.featured);
  const remainingProjects = PROJECTS.filter((p) => !p.featured);

  const filteredProjects = remainingProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.type.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="projects" className="relative py-24 lg:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-violet-500/50" />
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Engineered digital platforms, scalable web applications, and technology solutions built with modern architectural standards.
          </p>
        </div>

        {/* PRIMARY FEATURED PROJECT: Zuptrix Solutions */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 relative rounded-3xl p-8 sm:p-12 glass-card border-white/15 bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-950 overflow-hidden group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-600/25 transition-all duration-700" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {featuredProject.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship Platform
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                  {featuredProject.name}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl font-normal">
                  {featuredProject.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {featuredProject.keyHighlights.map((hl, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300">
                      {hl}
                    </div>
                  ))}
                </div>

                {/* Tech Tags & CTA */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-lg shadow-violet-900/30 hover:shadow-violet-900/50 hover:scale-[1.02] transition-all"
                  >
                    <span>Inspect Platform Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex flex-wrap gap-2 ml-0 sm:ml-4 mt-2 sm:mt-0">
                    {featuredProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Graphical Technical Pillar */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="w-full aspect-square max-w-[280px] rounded-3xl bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-charcoal-900 border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover:border-violet-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <Terminal className="w-6 h-6 text-violet-400" />
                    <span className="text-[10px] font-mono uppercase text-slate-400">STATUS: ACTIVE</span>
                  </div>

                  <div className="space-y-2">
                    <div className="h-1.5 w-3/4 rounded-full bg-violet-500/40" />
                    <div className="h-1.5 w-1/2 rounded-full bg-indigo-500/30" />
                    <div className="h-1.5 w-5/6 rounded-full bg-purple-500/20" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-white block">Zuptrix Core Architecture</span>
                    <span className="text-[11px] text-slate-400">Modern Scalable Foundation</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Project Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.06]">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
            Filter by Type:
          </span>
          {PROJECT_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'text-white bg-violet-600/30 border border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Architectural Modal View */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
