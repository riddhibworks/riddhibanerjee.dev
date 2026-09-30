import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { ProjectDto } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectDto | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D1412]/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#F7F2E9] rounded-2xl border border-[#E5DBD0] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          
          {/* Header Banner / Image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#F4EFE9] shrink-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1412] via-[#2D1412]/40 to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#2D1412]/60 text-white hover:bg-accent-700 backdrop-blur-md transition-colors border border-accent-600/30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-600 text-white text-[10px] font-mono mb-2 uppercase tracking-wider font-medium shadow-xs">
                {project.subtitle}
              </span>
              <h2 className="font-serif font-normal text-3xl sm:text-4xl text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C6E66] mb-2">
                Project Overview & Architecture
              </h3>
              <p className="text-sm sm:text-base text-[#5C3D38] leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Accomplishments / Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C6E66] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-600" />
                  Engineering Highlights & Metrics
                </h3>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F4EFE9] border border-[#E5DBD0] flex items-start gap-3 text-xs sm:text-sm text-[#3A1F1D]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C6E66] mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-accent-600" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#FBE8E8] text-accent-800 border border-[#F7D0D0] text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer / Actions */}
          <div className="p-6 bg-[#F4EFE9] border-t border-[#E5DBD0] flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F2E9] hover:bg-[#FAF7F2] text-[#3A1F1D] font-medium text-xs border border-[#E5DBD0] transition-colors"
                >
                  <Github className="w-4 h-4 text-accent-600" />
                  <span>Source Code</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-medium text-xs shadow-md shadow-accent-600/30 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#F7F2E9] text-[#3A1F1D] hover:bg-[#FAF7F2] border border-[#E5DBD0] font-medium text-xs transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
