import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectDto } from '../types/portfolio';
import { ProjectCardSkeleton } from './Skeletons';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: ProjectDto[];
  loading: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, loading }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDto | null>(null);

  if (loading) {
    return (
      <div className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    );
  }

  const isSingle = projects.length === 1;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern border-y border-[#D8CCC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#F7F2E9] border border-[#D8CCC0] text-accent-700 font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-3 shadow-xs">
            04 / Selected Works
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3A1F1D]">
            Featured Projects & <span className="text-red-gradient italic font-medium inline-block pr-1.5">Architecture</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#614B47] max-w-xl font-sans">
            A curated showcase of platforms, developer tooling, and distributed systems.
          </p>
          <div className="w-12 h-0.5 bg-accent-600 rounded-full mt-4"></div>
        </div>

        {/* Single Project Showcase Layout */}
        {isSingle ? (
          <div className="max-w-5xl mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedProject(project)}
                className="bg-[#F7F2E9] rounded-2xl overflow-hidden border border-[#E5DBD0] shadow-xs hover:border-accent-600/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
              >
                {/* Left Media Container */}
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-[#F4EFE9]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E1E1C]/30 via-transparent to-transparent pointer-events-none" />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-600 text-white text-[10px] font-mono tracking-wider uppercase font-medium shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      Featured Project
                    </div>
                  )}

                  <div className="absolute top-4 right-4 p-2.5 rounded-lg bg-accent-700/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Right Details Panel */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[11px] font-mono text-accent-700 font-semibold tracking-wider uppercase">
                      {project.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#3A1F1D] mt-1 group-hover:text-accent-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#614B47] mt-3 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#5C3D38]">
                            <span className="text-accent-600 font-bold mt-0.5">✦</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills & Direct CTAs */}
                  <div className="pt-4 border-t border-[#E5DBD0] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#F7F2E9] text-[#2E1E1C] border border-[#D8CCC0] text-[11px] font-mono shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-700 hover:text-accent-800 transition-colors"
                      >
                        <span>View Architecture Specs &rarr;</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F2E9] hover:bg-[#FAF7F2] text-[#2E1E1C] hover:text-accent-700 border border-[#D8CCC0] text-xs font-mono transition-colors shadow-xs"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white text-xs font-mono transition-colors shadow-xs"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Multi-Project Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="bg-[#F7F2E9] rounded-xl overflow-hidden border border-[#E5DBD0] flex flex-col group cursor-pointer hover:border-accent-600/50 hover:-translate-y-1 transition-all duration-300 shadow-xs"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F4EFE9]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F1D]/80 via-transparent to-transparent"></div>

                  {project.featured && (
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-600 text-white text-[10px] font-mono tracking-wider uppercase font-medium shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}

                  <div className="absolute top-3.5 right-3.5 p-2 rounded-lg bg-accent-700/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-accent-700 font-medium tracking-wider uppercase">
                      {project.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#3A1F1D] mt-1 group-hover:text-accent-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#614B47] mt-2.5 line-clamp-4 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5DBD0]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#F7F2E9] text-[#2E1E1C] border border-[#D8CCC0] text-[11px] font-mono shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack && project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-[#F7F2E9] text-[#5C3D38] border border-[#D8CCC0] text-[11px] font-mono shadow-xs">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-medium text-accent-700">
                      <span className="group-hover:translate-x-0.5 transition-transform">View Details & Specs &rarr;</span>
                      <div className="flex items-center gap-2 text-[#8C6E66]" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-700 p-1 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-700 p-1 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Overlay Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
