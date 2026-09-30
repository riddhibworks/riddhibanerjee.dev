export interface ProfileDto {
  id: number;
  name: string;
  title: string;
  headline: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  leetcodeUrl?: string;
  resumeUrl: string;
  quickFacts: string[];
}

export interface ProjectDto {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  displayOrder: number;
  techStack: string[];
  highlights: string[];
}

export interface ExperienceDto {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  type: 'WORK' | 'EDUCATION';
  startDate: string;
  endDate?: string;
  currentRole: boolean;
  description: string;
  displayOrder: number;
  accomplishments: string[];
  techStack: string[];
}

export interface SkillDto {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  iconName?: string;
  featured: boolean;
  displayOrder: number;
}

export interface SkillCategoryGroupDto {
  category: string;
  skills: SkillDto[];
}

export interface ContactRequestDto {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponseDto {
  success: boolean;
  message: string;
  messageId?: number;
  timestamp?: string;
}

export interface ErrorResponseDto {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  validationErrors?: Record<string, string>;
}
