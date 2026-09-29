import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin, CheckCircle2, UserCheck, Layers, Zap, Award, FileText } from 'lucide-react';
import { ProfileDto } from '../types/portfolio';
import { ProfileSkeleton } from './Skeletons';

interface AboutProps {
  profile: ProfileDto | null;
  loading: boolean;
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, loading, onOpenResume }) => {
  if (loading) return <ProfileSkeleton />;
  if (!profile) return null;

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Zap },
    { label: 'Microservices Built', value: '15+', icon: Layers },
    { label: 'API Endpoints Integrated', value: '25+', icon: UserCheck },
    { label: 'Latency Reduction', value: '20%', icon: Award },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern border-y border-[#D8CCC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#F7F2E9] border border-[#D8CCC0] text-accent-700 font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-3 shadow-xs">
            01 / About
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3A1F1D]">
            Engineering with <span className="text-red-gradient italic font-medium">Craft & Precision</span>
          </h2>
          <div className="w-12 h-0.5 bg-accent-600 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group">
              {/* Subtle Red Shadow / Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-accent-600/10 blur-sm group-hover:bg-accent-600/20 transition duration-500"></div>
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-[#D8CCC0] shadow-xs bg-[#E8DED1]">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#F7F2E9] px-4 py-1.5 rounded-full border border-[#D8CCC0] shadow-xs flex items-center gap-2 text-xs font-mono text-[#3A1F1D] whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Social Links & Resume Button */}
            <div className="mt-9 flex items-center gap-3">
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#F7F2E9] text-[#614B47] hover:text-accent-700 hover:border-accent-600/60 transition-all border border-[#E5DBD0] shadow-xs"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#F7F2E9] text-[#614B47] hover:text-accent-700 hover:border-accent-600/60 transition-all border border-[#E5DBD0] shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              <a
                href={`mailto:${profile.email || 'riddhib.works@gmail.com'}`}
                className="p-2.5 rounded-lg bg-[#F7F2E9] text-[#614B47] hover:text-accent-700 hover:border-accent-600/60 transition-all border border-[#E5DBD0] shadow-xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-mono text-xs uppercase tracking-wider font-medium shadow-xs flex items-center gap-1.5 transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Bio & Quick Facts Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif text-[#3A1F1D] mb-3">
                Backend-Focused Full Stack Engineer
              </h3>
              <p className="text-[#614B47] text-base leading-relaxed font-sans">
                {profile.bio}
              </p>
            </div>

            {/* Quick Facts List */}
            {profile.quickFacts && profile.quickFacts.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#7E664F]">
                  Key Milestones & Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.quickFacts.map((fact, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F7F2E9] p-3.5 rounded-lg border border-[#E5DBD0] flex items-start gap-3 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-[#614B47] leading-snug">
                        {fact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F7F2E9] p-4 rounded-xl text-center border border-[#E5DBD0] hover:border-accent-600/50 transition-colors shadow-xs"
                  >
                    <IconComponent className="w-4 h-4 text-accent-600 mx-auto mb-2" />
                    <div className="font-serif font-bold text-3xl text-[#3A1F1D]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#7E664F] tracking-wider mt-1 uppercase">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
