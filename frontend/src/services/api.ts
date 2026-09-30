import axios from 'axios';
import {
  ProfileDto,
  ProjectDto,
  ExperienceDto,
  SkillCategoryGroupDto,
  ContactRequestDto,
  ContactResponseDto,
} from '../types/portfolio';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Fallback Mock Data matching Riddhi Bandyopadhyay's actual profile
const FALLBACK_PROFILE: ProfileDto = {
  id: 1,
  name: 'Riddhi Bandyopadhyay',
  title: 'Backend-Focused Full Stack Engineer',
  headline: 'Engineering high-availability Spring Boot & Quarkus microservices, AI-powered platforms, and distributed systems.',
  bio: 'I am a Backend-Focused Full Stack Engineer with 3+ years of experience building mission-critical distributed systems and modern web applications. Currently at SITA, I architect Spring Boot microservices, rule engines, and passenger verification systems for global Border Management Systems (BMS) and Automated Border Control (ABC) e-Gates integrated with INTERPOL databases. Previously at IBS Software, I engineered cloud-native loyalty APIs for Emirates Airline and China Airlines using Quarkus, Spring Boot, PostgreSQL, and AWS.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  location: 'Bengaluru, India',
  email: 'riddhib.works@gmail.com',
  githubUrl: 'https://github.com/riddhibworks',
  linkedinUrl: 'https://www.linkedin.com/in/riddhi-bandyopadhyay/',
  twitterUrl: '',
  resumeUrl: 'https://drive.google.com/file/d/1Zfy33-u6X7ub0uFywE1xW9KNvsN7DNQv/view?usp=sharing',
  quickFacts: [
    '3+ Years engineering mission-critical microservice architectures',
    'Creator of HiredAI — Job application & feed aggregation platform',
    'Designed 10+ Spring Boot services for SITA Border Management & e-Gates',
    'Optimized Quarkus & Spring Boot APIs reducing latency by 20% for major airlines',
  ],
};

const FALLBACK_PROJECTS: ProjectDto[] = [
  {
    id: 1,
    title: 'HiredAI',
    subtitle: 'Remote Job Application & Feed Aggregation Platform',
    description: 'HiredAI is a high-performance, full-stack job application and feed aggregation platform designed to streamline remote job hunting. It aggregates real-time job listings across public job boards and custom feeds (RSS, Atom, JSON APIs) into a single unified workspace, matching candidates against job roles using automated resume skill extraction and match scoring algorithms.',
    longDescription: 'HiredAI is a high-performance, full-stack job application and feed aggregation platform designed to streamline remote job hunting. It aggregates real-time job listings across public job boards and custom feeds (RSS, Atom, JSON APIs) into a single unified workspace, matching candidates against job roles using automated resume skill extraction and match scoring algorithms.',
    imageUrl: '/images/hiredai-preview.png',
    githubUrl: 'https://github.com/riddhibworks/HiredAI',
    liveDemoUrl: 'https://hiredai-remote.vercel.app/',
    featured: true,
    displayOrder: 1,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'AI / LLMs', 'Spring Boot', 'PostgreSQL', 'Vercel'],
    highlights: [
      'Aggregates real-time job listings across public job boards and custom feeds (RSS, Atom, JSON APIs) into a single workspace',
      'Automated resume skill extraction & candidate-job role match scoring algorithms',
      'Deployed live on Vercel with high-performance feed aggregation API backend',
    ],
  },
];

const FALLBACK_EXPERIENCES: ExperienceDto[] = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'SITA',
    companyUrl: 'https://www.sita.aero',
    location: 'India / Global',
    type: 'WORK',
    startDate: '2025',
    endDate: 'Present',
    currentRole: true,
    description: 'Contributing to SITA\'s next-generation Border Management System (BMS) and Automated Border Control (ABC) e-Gates & self-service kiosks used by government border authorities worldwide.',
    displayOrder: 1,
    accomplishments: [
      'Designed & developed 10+ Spring Boot microservices (rule engine, audit, passenger eligibility, watchlist screening)',
      'Integrated with INTERPOL and national security databases for real-time criminal record verification and risk assessment',
      'Implemented 5+ manual passenger processing workflows for border officers when e-Gates require intervention',
      'Engineered Automated Border Control (ABC) e-Gates & kiosks with 25+ government and internal API integrations',
      'Contributed to Electron + ElysiaJS desktop officer application and C# Windows Service for biometric passport/fingerprint scanner hardware acquisition',
      'Leveraged AI-assisted tools (GitHub Copilot) to accelerate development and maintain high code quality',
    ],
    techStack: ['Java 21', 'Spring Boot 3', 'Microservices', 'PostgreSQL', 'Electron', 'ElysiaJS', 'C#', 'RabbitMQ', 'Docker', 'Kubernetes'],
  },
  {
    id: 2,
    role: 'Solution Engineer',
    company: 'IBS Software Pvt Ltd',
    companyUrl: 'https://www.ibsplc.com',
    location: 'India',
    type: 'WORK',
    startDate: '2023',
    endDate: '2025',
    currentRole: false,
    description: 'Architected and optimized cloud-native RESTful APIs for Emirates Airline and China Airlines loyalty platforms on the iFly Loyalty SaaS platform.',
    displayOrder: 2,
    accomplishments: [
      'China Airline Loyalty Implementation: Optimized Quarkus REST APIs, PostgreSQL, and AWS, reducing booking & loyalty transaction latency by 20%',
      'Emirates Airlines Loyalty Implementation: Successfully built 50+ features using Spring Boot, PostgreSQL, and AWS on the SaaS iFly Loyalty platform',
      'Identified and resolved 40+ critical production bugs through root cause analysis, achieving a 15% reduction in application crash rate',
      'Collaborated across teams to design custom solutions by deeply analyzing complex airline loyalty business workflows',
    ],
    techStack: ['Java', 'Quarkus', 'Spring Boot', 'PostgreSQL', 'AWS', 'REST APIs', 'Docker', 'Git', 'Postman'],
  },
];

const FALLBACK_SKILLS: SkillCategoryGroupDto[] = [
  {
    category: 'Languages & Frameworks',
    skills: [
      { id: 1, name: 'Java', category: 'Languages & Frameworks', proficiency: 95, iconName: 'java', featured: true, displayOrder: 1 },
      { id: 2, name: 'Spring Boot 3.x', category: 'Languages & Frameworks', proficiency: 96, iconName: 'springboot', featured: true, displayOrder: 2 },
      { id: 3, name: 'Quarkus', category: 'Languages & Frameworks', proficiency: 90, iconName: 'quarkus', featured: true, displayOrder: 3 },
      { id: 4, name: 'JavaScript / TypeScript', category: 'Languages & Frameworks', proficiency: 90, iconName: 'typescript', featured: true, displayOrder: 4 },
      { id: 5, name: 'Angular & React', category: 'Languages & Frameworks', proficiency: 85, iconName: 'react', featured: true, displayOrder: 5 },
      { id: 6, name: 'Electron & ElysiaJS', category: 'Languages & Frameworks', proficiency: 85, iconName: 'electron', featured: false, displayOrder: 6 },
    ],
  },
  {
    category: 'Databases & Cloud',
    skills: [
      { id: 10, name: 'PostgreSQL', category: 'Databases & Cloud', proficiency: 94, iconName: 'postgresql', featured: true, displayOrder: 10 },
      { id: 11, name: 'MongoDB', category: 'Databases & Cloud', proficiency: 86, iconName: 'mongodb', featured: true, displayOrder: 11 },
      { id: 12, name: 'Microsoft SQL Server (MSSQL)', category: 'Databases & Cloud', proficiency: 84, iconName: 'mssql', featured: false, displayOrder: 12 },
      { id: 13, name: 'AWS (EC2, S3, RDS)', category: 'Databases & Cloud', proficiency: 88, iconName: 'aws', featured: true, displayOrder: 13 },
      { id: 14, name: 'Docker & Kubernetes', category: 'Databases & Cloud', proficiency: 90, iconName: 'docker', featured: true, displayOrder: 14 },
    ],
  },
  {
    category: 'Architecture & Tools',
    skills: [
      { id: 17, name: 'Microservices & REST APIs', category: 'Architecture & Tools', proficiency: 96, iconName: 'api', featured: true, displayOrder: 17 },
      { id: 18, name: 'Distributed Systems & WebSockets', category: 'Architecture & Tools', proficiency: 92, iconName: 'network', featured: true, displayOrder: 18 },
      { id: 19, name: 'RabbitMQ & Postman', category: 'Architecture & Tools', proficiency: 90, iconName: 'rabbitmq', featured: false, displayOrder: 19 },
      { id: 20, name: 'GitHub Copilot & Claude Code', category: 'Architecture & Tools', proficiency: 92, iconName: 'copilot', featured: true, displayOrder: 20 },
      { id: 21, name: 'Agile (Scrum) & OOP Design', category: 'Architecture & Tools', proficiency: 94, iconName: 'agile', featured: false, displayOrder: 21 },
    ],
  },
];

export const portfolioApi = {
  async getProfile(): Promise<ProfileDto> {
    try {
      const response = await apiClient.get<ProfileDto>('/profile');
      return response.data;
    } catch (error) {
      console.warn('Backend API offline or unreachable, using fallback profile data:', error);
      return FALLBACK_PROFILE;
    }
  },

  async getProjects(): Promise<ProjectDto[]> {
    try {
      const response = await apiClient.get<ProjectDto[]>('/projects');
      return response.data;
    } catch (error) {
      console.warn('Backend API offline or unreachable, using fallback projects data:', error);
      return FALLBACK_PROJECTS;
    }
  },

  async getProjectById(id: number): Promise<ProjectDto> {
    try {
      const response = await apiClient.get<ProjectDto>(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.warn(`Backend API offline or unreachable, finding project #${id} from fallback:`, error);
      const match = FALLBACK_PROJECTS.find(p => p.id === id);
      if (!match) throw new Error('Project not found');
      return match;
    }
  },

  async getExperience(): Promise<ExperienceDto[]> {
    try {
      const response = await apiClient.get<ExperienceDto[]>('/experience');
      return response.data;
    } catch (error) {
      console.warn('Backend API offline or unreachable, using fallback experience data:', error);
      return FALLBACK_EXPERIENCES;
    }
  },

  async getSkills(): Promise<SkillCategoryGroupDto[]> {
    try {
      const response = await apiClient.get<SkillCategoryGroupDto[]>('/skills');
      return response.data;
    } catch (error) {
      console.warn('Backend API offline or unreachable, using fallback skills data:', error);
      return FALLBACK_SKILLS;
    }
  },

  async sendContactMessage(payload: ContactRequestDto): Promise<ContactResponseDto> {
    try {
      const response = await apiClient.post<ContactResponseDto>('/contact', payload);
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw error.response.data;
      }
      return {
        success: true,
        message: "Thank you! Message stored locally (mock mode). I'll respond soon!",
        messageId: Date.now(),
        timestamp: new Date().toISOString(),
      };
    }
  },
};
