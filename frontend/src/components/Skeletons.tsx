import React from 'react';

export const ProfileSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-6 max-w-4xl mx-auto py-12">
    <div className="h-6 w-32 bg-[#F4EFE9] rounded-full"></div>
    <div className="h-12 w-3/4 bg-[#E5DBD0] rounded-xl"></div>
    <div className="h-20 w-full bg-[#F4EFE9] rounded-xl"></div>
    <div className="flex gap-4">
      <div className="h-10 w-36 bg-[#E5DBD0] rounded-lg"></div>
      <div className="h-10 w-36 bg-[#F4EFE9] rounded-lg"></div>
    </div>
  </div>
);

export const ProjectCardSkeleton: React.FC = () => (
  <div className="animate-pulse bg-[#F7F2E9] rounded-2xl overflow-hidden border border-[#E5DBD0] p-4 space-y-4">
    <div className="h-48 bg-[#F4EFE9] rounded-xl w-full"></div>
    <div className="h-6 w-2/3 bg-[#E5DBD0] rounded-lg"></div>
    <div className="h-12 w-full bg-[#F4EFE9] rounded-lg"></div>
    <div className="flex gap-2">
      <div className="h-6 w-16 bg-[#F4EFE9] rounded-full"></div>
      <div className="h-6 w-20 bg-[#F4EFE9] rounded-full"></div>
      <div className="h-6 w-14 bg-[#F4EFE9] rounded-full"></div>
    </div>
  </div>
);

export const SkillCategorySkeleton: React.FC = () => (
  <div className="animate-pulse space-y-4 p-6 bg-[#F7F2E9] rounded-2xl border border-[#E5DBD0]">
    <div className="h-6 w-40 bg-[#E5DBD0] rounded-lg"></div>
    <div className="space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between">
            <div className="h-4 w-28 bg-[#F4EFE9] rounded"></div>
            <div className="h-4 w-10 bg-[#F4EFE9] rounded"></div>
          </div>
          <div className="h-2 w-full bg-[#F4EFE9] rounded-full"></div>
        </div>
      ))}
    </div>
  </div>
);

export const ExperienceSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-6 max-w-3xl mx-auto">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex gap-6">
        <div className="w-12 h-12 bg-[#E5DBD0] rounded-full shrink-0"></div>
        <div className="flex-1 space-y-3 bg-[#F7F2E9] p-6 rounded-2xl border border-[#E5DBD0]">
          <div className="h-5 w-1/3 bg-[#E5DBD0] rounded"></div>
          <div className="h-4 w-1/4 bg-[#F4EFE9] rounded"></div>
          <div className="h-12 w-full bg-[#F4EFE9] rounded"></div>
        </div>
      </div>
    ))}
  </div>
);
