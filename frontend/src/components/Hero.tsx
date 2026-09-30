import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Server, Cpu, Database, Layers, Eye } from 'lucide-react';
import { ProfileDto } from '../types/portfolio';

interface HeroProps {
  profile: ProfileDto | null;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  const title = profile?.title || 'Backend-Focused Full Stack Engineer';
  const headline = profile?.headline || 'Engineering high-availability Spring Boot & Quarkus microservices, AI-powered platforms, and distributed systems.';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Ambient Warm Red Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-600/8 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent-700/6 blur-[100px] rounded-full pointer-events-none -z-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F2E9] border border-[#E5DBD0] text-accent-700 text-xs font-mono tracking-widest uppercase mb-8 shadow-xs"
          >
            <span className="text-accent-600 text-[10px]">✦</span>
            <span>3+ Years Exp • Spring Boot, Quarkus, Microservices & AWS</span>
            <span className="text-accent-600 text-[10px]">✦</span>
          </motion.div>

          {/* Main Title / Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-normal text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#3A1F1D] leading-[1.1]"
          >
            Hi, I am <span className="text-red-gradient italic font-medium inline-block pr-2 sm:pr-3.5">Riddhi</span>.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-xl sm:text-2xl md:text-3xl font-serif text-[#5C3D38] tracking-tight font-normal"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-[#614B47] max-w-2xl leading-relaxed font-sans"
          >
            {headline}
          </motion.p>

          {/* CTA Buttons - Pure Vermilion & Paper Beige */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-mono text-xs tracking-wider uppercase font-medium shadow-xs transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#F7F2E9] hover:bg-[#FAF7F2] text-accent-700 font-mono text-xs tracking-wider uppercase font-medium border border-accent-600/40 shadow-xs transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-3.5 h-3.5 text-accent-600" />
              <span>Get In Touch</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F7F2E9] text-[#2E1E1C] hover:text-accent-700 border border-[#D8CCC0] shadow-xs font-mono text-xs tracking-wider uppercase font-medium transition-all hover:bg-[#FAF7F2] hover:-translate-y-0.5"
            >
              <Eye className="w-3.5 h-3.5 text-accent-600" />
              <span>Preview Resume</span>
            </button>
          </motion.div>

          {/* Quick Core Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-[#E5DBD0] grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl"
          >
            <div className="bg-[#F7F2E9] p-4 rounded-xl text-left border border-[#E5DBD0] hover:border-accent-600/50 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-accent-700 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                <Server className="w-3.5 h-3.5 text-accent-600" />
                Core Backend
              </div>
              <p className="text-xs text-[#614B47] leading-relaxed">Java 21, Spring Boot 3, Quarkus, REST & WebSockets</p>
            </div>

            <div className="bg-[#F7F2E9] p-4 rounded-xl text-left border border-[#E5DBD0] hover:border-accent-600/50 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-accent-700 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                <Layers className="w-3.5 h-3.5 text-accent-600" />
                Microservices
              </div>
              <p className="text-xs text-[#614B47] leading-relaxed">Distributed Rule Engines, SITA BMS, e-Gates, RabbitMQ</p>
            </div>

            <div className="bg-[#F7F2E9] p-4 rounded-xl text-left border border-[#E5DBD0] hover:border-accent-600/50 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-accent-700 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                <Database className="w-3.5 h-3.5 text-accent-600" />
                Databases & Cloud
              </div>
              <p className="text-xs text-[#614B47] leading-relaxed">PostgreSQL, MongoDB, MSSQL, AWS, Docker, K8s</p>
            </div>

            <div className="bg-[#F7F2E9] p-4 rounded-xl text-left border border-[#E5DBD0] hover:border-accent-600/50 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-accent-700 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent-600" />
                Frontend & Systems
              </div>
              <p className="text-xs text-[#614B47] leading-relaxed">Angular, React, Electron, ElysiaJS, C# Integration</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
