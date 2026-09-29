import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Building, ExternalLink } from 'lucide-react';
import { ExperienceDto } from '../types/portfolio';
import { ExperienceSkeleton } from './Skeletons';

interface ExperienceProps {
  experiences: ExperienceDto[];
  loading: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ experiences, loading }) => {
  const [filter, setFilter] = useState<'ALL' | 'WORK' | 'EDUCATION'>('ALL');

  if (loading) {
    return (
      <div className="py-24 max-w-7xl mx-auto px-4">
        <ExperienceSkeleton />
      </div>
    );
  }

  const filteredExperiences = experiences.filter((e) => {
    if (filter === 'ALL') return true;
    return e.type === filter;
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-[#D8CCC0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="px-3.5 py-1 rounded-full bg-[#F7F2E9] border border-[#D8CCC0] text-accent-700 font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-3 shadow-xs">
            03 / Timeline
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3A1F1D]">
            Experience & <span className="text-red-gradient italic font-medium">Education</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#614B47] max-w-xl font-sans">
            My professional timeline building engineering systems, scaling teams, and academic milestones.
          </p>
          <div className="w-12 h-0.5 bg-accent-600 rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2.5 mb-16">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all border shadow-xs ${
              filter === 'ALL'
                ? 'bg-accent-600 text-white border-accent-600 shadow-sm font-semibold'
                : 'bg-[#F7F2E9] text-[#2E1E1C] hover:text-accent-700 border-[#D8CCC0] hover:border-accent-600 hover:bg-[#FAF7F2]'
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilter('WORK')}
            className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border shadow-xs ${
              filter === 'WORK'
                ? 'bg-accent-600 text-white border-accent-600 shadow-sm font-semibold'
                : 'bg-[#F7F2E9] text-[#2E1E1C] hover:text-accent-700 border-[#D8CCC0] hover:border-accent-600 hover:bg-[#FAF7F2]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Work History
          </button>
          <button
            onClick={() => setFilter('EDUCATION')}
            className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border shadow-xs ${
              filter === 'EDUCATION'
                ? 'bg-accent-600 text-white border-accent-600 shadow-sm font-semibold'
                : 'bg-[#F7F2E9] text-[#2E1E1C] hover:text-accent-700 border-[#D8CCC0] hover:border-accent-600 hover:bg-[#FAF7F2]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#E5DBD0] ml-6 sm:ml-52 space-y-12 pl-6 sm:pl-10">
          {filteredExperiences.map((exp, idx) => {
            const isWork = exp.type === 'WORK';
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Milestone Node Marker with Icon */}
                <div className="absolute -left-[38px] sm:-left-[54px] top-1.5 w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-[#F7F2E9] border-2 border-accent-600 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                  <span className="text-accent-600">
                    {isWork ? <Briefcase className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
                  </span>
                </div>

                {/* Left Date Label (Desktop) */}
                <div className="hidden sm:block absolute -left-[200px] top-2 text-right w-32 pr-4 text-xs font-mono font-medium text-accent-700 tracking-wider">
                  {exp.startDate} &mdash; {exp.currentRole ? 'Present' : exp.endDate}
                </div>

                {/* Content Card */}
                <div className="bg-[#F7F2E9] rounded-xl p-6 border border-[#E5DBD0] shadow-xs hover:border-accent-600/50 transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-[#F7F2E9] text-accent-700 border border-[#D8CCC0] shadow-xs">
                          {isWork ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                        </span>
                        <h3 className="font-serif text-xl font-normal text-[#3A1F1D]">
                          {exp.role}
                        </h3>
                        {exp.currentRole && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FBE8E8] text-accent-700 border border-accent-600/30 text-[10px] font-mono tracking-wider uppercase font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#614B47] mt-1.5">
                        <span className="font-semibold text-[#3A1F1D] flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-[#8C6E66]" />
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent-700 underline decoration-[#E5DBD0] underline-offset-2 flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-[#8C6E66]">
                            <MapPin className="w-3.5 h-3.5 text-[#8C6E66]" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Mobile Date Label */}
                    <div className="sm:hidden text-xs font-mono text-accent-700 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent-600" />
                      <span>{exp.startDate} &mdash; {exp.currentRole ? 'Present' : exp.endDate}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-xs sm:text-sm text-[#614B47] leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  )}

                  {/* Accomplishments Bullet Points */}
                  {exp.accomplishments && exp.accomplishments.length > 0 && (
                    <div className="space-y-2 mb-4">
                      {exp.accomplishments.map((acc, accIdx) => (
                        <div key={accIdx} className="flex items-start gap-2.5 text-xs text-[#5C3D38]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                          <span>{acc}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E5DBD0]">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#F7F2E9] text-[#2E1E1C] border border-[#D8CCC0] text-[11px] font-mono shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
