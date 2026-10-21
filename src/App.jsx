import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import FounderStatement from './components/FounderStatement';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-charcoal-950 text-slate-100 font-sans selection:bg-violet-600/30 selection:text-white">
      {/* Ambient background particles, radial glows and technical grid */}
      <BackgroundCanvas />

      {/* Desktop trailing custom cursor */}
      <CustomCursor />

      {/* Fixed glass navigation */}
      <Navbar />

      {/* Main website sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <TechStack />
        <FounderStatement />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
