import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Cpu, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import portraitImg from '../assets/yuvraj-shah.jpg';

export default function Hero() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Subtle 3D mouse parallax for desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const floatCardX1 = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const floatCardY1 = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  const floatCardX2 = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const floatCardY2 = useTransform(springY, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && window.matchMedia('(pointer: fine)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleMouseMove = (e) => {
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-32 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Founder Bio & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Pill & Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/20 text-violet-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>{PERSONAL_INFO.role}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span>{PERSONAL_INFO.status}</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              <span>{PERSONAL_INFO.headline.prefix}</span> <br />
              <span className="text-gradient-accent relative inline-block">
                {PERSONAL_INFO.headline.gradient}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </span> <br />
              <span>{PERSONAL_INFO.headline.suffix}</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-slate-200 glass-button hover:text-white w-full sm:w-auto text-center"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Micro-Trust Information */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Entity</span>
                <span className="text-sm font-medium text-slate-200">{PERSONAL_INFO.company}</span>
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Specialization</span>
                <span className="text-sm font-medium text-slate-200">Full-Stack & Products</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Focus</span>
                <span className="text-sm font-medium text-slate-200">Scalable Systems</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Premium Founder Visual (No 3D computer, elegant portrait + orbit + floating glass tags) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={isDesktop ? { rotateX, rotateY, transformPerspective: 1000 } : {}}
            className="lg:col-span-5 flex items-center justify-center relative will-change-transform"
          >
            <div className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[420px] md:w-[420px] md:h-[460px] flex items-center justify-center">

              {/* Ambient Glow behind Portrait */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-purple-800/20 blur-3xl -z-10 scale-90 animate-pulse-slow" />

              {/* Orbital Ring 1: Outer delicate track */}
              <div className="absolute inset-0 -m-6 sm:-m-8 rounded-full border border-violet-500/15 pointer-events-none animate-spin-slow">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_#a855f7]" />
              </div>

              {/* Orbital Ring 2: Inner dashed track */}
              <div className="absolute inset-0 -m-2 sm:-m-3 rounded-full border border-dashed border-white/10 pointer-events-none" />

              {/* Portrait Frame Container */}
              <div className="relative w-full h-full rounded-[2.5rem] p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 overflow-hidden group">
                
                {/* Subtle Inner Highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Profile Image - strictly preserved aspect ratio & high quality */}
                <img
                  src={portraitImg}
                  alt="Yuvraj Shah, Founder & CEO of Zuptrix Solutions"
                  className="w-full h-full object-cover object-top rounded-[2rem] filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Bottom Card Overlay inside frame */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl glass-panel border-white/10 backdrop-blur-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">{PERSONAL_INFO.name}</p>
                    <p className="text-[11px] font-medium text-slate-400">{PERSONAL_INFO.role} • {PERSONAL_INFO.company}</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Glass Information Card 1 (Top Left) */}
              <motion.div
                style={isDesktop ? { x: floatCardX1, y: floatCardY1 } : {}}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-8 z-30 p-3.5 rounded-2xl glass-panel border-white/15 shadow-xl backdrop-blur-xl hidden sm:flex items-center gap-3 animate-float"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-violet-400 uppercase tracking-wider">Architecture</span>
                  <span className="text-xs font-semibold text-white">Digital Product Builder</span>
                </div>
              </motion.div>

              {/* Floating Glass Information Card 2 (Bottom Right) */}
              <motion.div
                style={isDesktop ? { x: floatCardX2, y: floatCardY2 } : {}}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-8 z-30 p-3.5 rounded-2xl glass-panel border-white/15 shadow-xl backdrop-blur-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enterprise Tech</span>
                  <span className="text-xs font-semibold text-white">React • Python • Modern Web</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
