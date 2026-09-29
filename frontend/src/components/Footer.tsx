import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { ProfileDto } from '../types/portfolio';

interface FooterProps {
  profile: ProfileDto | null;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const email = profile?.email || 'riddhib.works@gmail.com';

  return (
    <footer className="bg-[#8A1B10] text-[#FAF6F0] border-t border-[#70150C] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#9E2014]/40 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#FAF6F0]/15 items-start">
          
          {/* Brand & Title */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FAF6F0] text-[#8A1B10] flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                RB
              </div>
              <span className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] tracking-tight">
                Riddhi Bandyopadhyay
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#EDE4D8]/80 max-w-md font-sans leading-relaxed">
              {profile?.headline || 'Engineering high-availability Spring Boot & Quarkus microservices, distributed rule engines, and cloud-native systems.'}
            </p>
          </div>

          {/* Quick Direct Connect CTA */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#EDE4D8]/70">
              Inquiries & Opportunities
            </span>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#FAF6F0] hover:bg-[#EDE4D8] text-[#8A1B10] font-mono text-xs uppercase tracking-wider font-semibold shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#8A1B10]" />
              <span>{email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Metadata & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#EDE4D8]/80">
          
          <div className="flex flex-wrap items-center gap-6">
            {profile?.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF6F0] flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {profile?.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF6F0] flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            )}

            <span className="text-[#EDE4D8]/60">
              Bengaluru, India
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#EDE4D8]/60">
              &copy; {new Date().getFullYear()} Riddhi Bandyopadhyay
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 text-[#FAF6F0] border border-[#FAF6F0]/20 shadow-xs transition-all hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
