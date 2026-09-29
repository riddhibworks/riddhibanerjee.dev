import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';
import { ResumeModal } from './components/ResumeModal';
import { useActiveSection } from './hooks/useActiveSection';
import { portfolioApi } from './services/api';
import { ProfileDto, ProjectDto, ExperienceDto, SkillCategoryGroupDto } from './types/portfolio';

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

export const App: React.FC = () => {
  const activeSection = useActiveSection(SECTION_IDS);

  const [profile, setProfile] = useState<ProfileDto | null>(null);
  const [projects, setProjects] = useState<ProjectDto[]>([]);
  const [experiences, setExperiences] = useState<ExperienceDto[]>([]);
  const [skills, setSkills] = useState<SkillCategoryGroupDto[]>([]);
  
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingExperience, setLoadingExperience] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);

  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      dismissToast(id);
    }, 5000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [profileData, projectsData, expData, skillsData] = await Promise.all([
          portfolioApi.getProfile(),
          portfolioApi.getProjects(),
          portfolioApi.getExperience(),
          portfolioApi.getSkills(),
        ]);

        setProfile(profileData);
        setProjects(projectsData);
        setExperiences(expData);
        setSkills(skillsData);
      } catch (err) {
        console.error('Failed to load portfolio data:', err);
      } finally {
        setLoadingProfile(false);
        setLoadingProjects(false);
        setLoadingExperience(false);
        setLoadingSkills(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="min-h-screen bg-[#EFE7DC] text-[#3A1F1D] flex flex-col font-sans relative selection:bg-[#FBE8E5] selection:text-[#C72C1B]">
      
      {/* Vermillion Signature Left Marginal Strip */}
      <div className="hidden 2xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none items-center gap-5">
        <div className="w-px h-16 bg-[#D8CCC0]" />
        <span className="font-serif text-[11px] tracking-[0.35em] uppercase text-[#6E5853] [writing-mode:vertical-rl] rotate-180 select-none">
          RIDDHI BANDYOPADHYAY • 2026
        </span>
        <div className="w-px h-16 bg-[#D8CCC0]" />
      </div>

      {/* Vermillion Signature Right Marginal Strip */}
      <div className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none items-center gap-5">
        <div className="w-px h-16 bg-[#D8CCC0]" />
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent-700/80 [writing-mode:vertical-rl] select-none">
          DISTRIBUTED SYSTEMS • SPRING BOOT
        </span>
        <div className="w-px h-16 bg-[#D8CCC0]" />
      </div>

      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />
      
      <main className="flex-1">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About
          profile={profile}
          loading={loadingProfile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <Skills skillGroups={skills} loading={loadingSkills} />
        <Experience experiences={experiences} loading={loadingExperience} />
        <Projects projects={projects} loading={loadingProjects} />
        <Contact addToast={addToast} profile={profile} />
      </main>

      <Footer profile={profile} />

      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        driveViewUrl={profile?.resumeUrl || 'https://drive.google.com/file/d/1Zfy33-u6X7ub0uFywE1xW9KNvsN7DNQv/view?usp=sharing'}
      />
    </div>
  );
};

export default App;
