import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Palette, Cpu, CheckCircle } from 'lucide-react';
import { SkillCategoryGroupDto } from '../types/portfolio';
import { SkillCategorySkeleton } from './Skeletons';

interface SkillsProps {
  skillGroups: SkillCategoryGroupDto[];
  loading: boolean;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Languages & Frameworks': <Code2 className="w-5 h-5 text-accent-600" />,
  'Databases & Cloud': <Server className="w-5 h-5 text-accent-700" />,
  'Architecture & Tools': <Wrench className="w-5 h-5 text-accent-800" />,
  'Frontend': <Code2 className="w-5 h-5 text-accent-600" />,
  'Backend & APIs': <Server className="w-5 h-5 text-accent-700" />,
  'Tools & DevOps': <Wrench className="w-5 h-5 text-accent-800" />,
  'UI/UX & Architecture': <Palette className="w-5 h-5 text-accent-600" />,
};

export const Skills: React.FC<SkillsProps> = ({ skillGroups, loading }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (loading) {
    return (
      <div className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCategorySkeleton />
        <SkillCategorySkeleton />
      </div>
    );
  }

  const categories = ['All', ...skillGroups.map(g => g.category)];

  const filteredGroups = selectedCategory === 'All'
    ? skillGroups
    : skillGroups.filter(g => g.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="px-3.5 py-1 rounded-full bg-[#F7F2E9] border border-[#E5DBD0] text-accent-700 font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-3">
            02 / Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3A1F1D]">
            Technical Proficiency & <span className="text-red-gradient italic font-medium inline-block pr-1.5">Tooling</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#614B47] max-w-xl font-sans">
            A comprehensive overview of frameworks, languages, databases, and architectural methodologies I work with daily.
          </p>
          <div className="w-12 h-0.5 bg-accent-600 rounded-full mt-4"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 border shadow-xs ${
                  isSelected
                    ? 'bg-accent-600 text-white border-accent-600 shadow-sm font-semibold'
                    : 'bg-[#F7F2E9] text-[#2E1E1C] hover:text-accent-700 border-[#D8CCC0] hover:border-accent-600 hover:bg-[#FAF7F2]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-[#F7F2E9] rounded-xl p-6 sm:p-8 border border-[#E5DBD0] relative group overflow-hidden shadow-xs hover:border-accent-600/50 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-600 opacity-60 group-hover:opacity-100 transition-opacity"></div>

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5DBD0]">
                <div className="p-2.5 rounded-lg bg-[#F7F2E9] border border-[#D8CCC0] shadow-xs">
                  {CATEGORY_ICONS[group.category] || <Cpu className="w-5 h-5 text-accent-600" />}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#3A1F1D]">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-[#7E664F] tracking-wider uppercase">
                    {group.skills.length} core technologies
                  </span>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.id} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-medium">
                      <span className="text-[#3A1F1D] flex items-center gap-2">
                        {skill.featured && (
                          <CheckCircle className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                        )}
                        {skill.name}
                      </span>
                      <span className="font-mono text-accent-700 font-semibold">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-[#F4EFE9] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-accent-600"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
