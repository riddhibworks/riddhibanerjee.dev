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

            <a
              href={profile?.leetcodeUrl || "https://leetcode.com/u/riddhiii065/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF6F0] flex items-center gap-1.5 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.08-2.227A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
              <span>LeetCode</span>
            </a>

            <span className="text-[#EDE4D8]/60">
              {profile?.location || 'Gurugram, India'}
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
