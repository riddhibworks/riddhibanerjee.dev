import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Copy, Check, Sparkles, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { ToastMessage } from './Toast';
import { ProfileDto } from '../types/portfolio';

interface ContactProps {
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  profile?: ProfileDto | null;
}

export const Contact: React.FC<ContactProps> = ({ addToast, profile }) => {
  const [copied, setCopied] = useState(false);

  const userEmail = profile?.email || 'riddhib.works@gmail.com';
  const userLocation = profile?.location || 'Gurugram, India';
  const githubUrl = profile?.githubUrl || 'https://github.com/riddhibworks';
  const linkedinUrl = profile?.linkedinUrl || 'https://www.linkedin.com/in/riddhi-bandyopadhyay/';
  const leetcodeUrl = profile?.leetcodeUrl || 'https://leetcode.com/u/riddhiii065/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    addToast({
      type: 'success',
      title: 'Email Copied!',
      description: `${userEmail} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-[#D8CCC0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#F7F2E9] border border-[#D8CCC0] text-accent-700 font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-3 shadow-xs">
            05 / Inquiry & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3A1F1D]">
            Get In Touch & <span className="text-red-gradient italic font-medium inline-block pr-1.5">Collaborate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#614B47] max-w-xl font-sans">
            Have an engineering opportunity, architecture challenge, or project in mind? Reach out directly via email or connect across developer platforms.
          </p>
          <div className="w-12 h-0.5 bg-accent-600 rounded-full mt-4"></div>
        </div>

        {/* 3 Balanced Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          
          {/* Card 1: Direct Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#F7F2E9] rounded-2xl p-7 border border-[#E5DBD0] shadow-xs hover:border-accent-600/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#D8CCC0] text-accent-700 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#3A1F1D] mb-1.5">
                Direct Email
              </h3>
              <p className="text-xs text-[#614B47] leading-relaxed mb-4 font-sans">
                Fastest channel for full-time opportunities, consulting inquiries, and technical discussions.
              </p>
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#D8CCC0] mb-4">
                <span className="block text-[10px] font-mono text-[#7E664F] uppercase tracking-wider mb-0.5">Primary Inbox</span>
                <span className="text-sm font-semibold text-[#2E1E1C] font-mono break-all select-all">
                  {userEmail}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${userEmail}`}
                className="flex-1 px-4 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs flex items-center justify-center gap-1.5 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFE7DC] border border-[#D8CCC0] text-[#614B47] hover:text-accent-700 transition-colors shadow-xs"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* Card 2: Location & Work Mode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F7F2E9] rounded-2xl p-7 border border-[#E5DBD0] shadow-xs hover:border-accent-600/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#D8CCC0] text-accent-700 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#3A1F1D] mb-1.5">
                Location & Mode
              </h3>
              <p className="text-xs text-[#614B47] leading-relaxed mb-4 font-sans">
                Available for distributed backend & full-stack roles with cross-functional teams.
              </p>
              
              <div className="space-y-2.5 mb-4">
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#D8CCC0]">
                  <span className="block text-[10px] font-mono text-[#7E664F] uppercase tracking-wider mb-0.5">Base Location</span>
                  <span className="text-sm font-semibold text-[#2E1E1C] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-600" />
                    {userLocation}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#D8CCC0] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#7E664F] uppercase tracking-wider">Status</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E5DBD0]/70 flex items-center justify-between text-[11px] font-mono text-[#7E664F]">
              <span>Response Window</span>
              <span className="text-accent-700 font-medium">Within 24 Hours</span>
            </div>
          </motion.div>

          {/* Card 3: Professional Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#F7F2E9] rounded-2xl p-7 border border-[#E5DBD0] shadow-xs hover:border-accent-600/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#D8CCC0] text-accent-700 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#3A1F1D] mb-1.5">
                Profiles & Coding
              </h3>
              <p className="text-xs text-[#614B47] leading-relaxed mb-4 font-sans">
                Explore source repositories, professional credentials, and algorithm practice.
              </p>

              <div className="space-y-2 mb-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFE7DC] border border-[#D8CCC0] text-xs font-medium text-[#2E1E1C] hover:text-accent-700 transition-colors group/link"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#614B47] group-hover/link:text-accent-700" />
                    <span>GitHub (@riddhibworks)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFE7DC] border border-[#D8CCC0] text-xs font-medium text-[#2E1E1C] hover:text-accent-700 transition-colors group/link"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#614B47] group-hover/link:text-accent-700" />
                    <span>LinkedIn (Riddhi)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100" />
                </a>

                <a
                  href={leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFE7DC] border border-[#D8CCC0] text-xs font-medium text-[#2E1E1C] hover:text-accent-700 transition-colors group/link"
                >
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#614B47] group-hover/link:text-accent-700" aria-hidden="true">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.08-2.227A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                    <span>LeetCode (@riddhiii065)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100" />
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E5DBD0]/70 text-[11px] font-mono text-[#7E664F] flex items-center justify-between">
              <span>All Links Verified</span>
              <span className="text-accent-700 font-medium">Public</span>
            </div>
          </motion.div>

        </div>

        {/* Full-Width Bottom Editorial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto bg-[#F7F2E9] rounded-2xl p-8 sm:p-10 border border-[#E5DBD0] shadow-xs relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[11px] font-mono text-accent-700 uppercase tracking-[0.2em] font-semibold">
              Open to Engineering Conversations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3A1F1D]">
              Looking to build high-scale, resilient systems?
            </h3>
            <p className="text-xs sm:text-sm text-[#614B47] font-sans leading-relaxed">
              Drop an email with your project scope or team requirements, and let&apos;s schedule a discussion.
            </p>
          </div>

          <a
            href={`mailto:${userEmail}`}
            className="px-6 py-3.5 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs flex items-center gap-2 transition-all hover:-translate-y-0.5 shrink-0"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
