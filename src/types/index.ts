export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  desc: string;
}

export interface Project {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  highlights: string[];
  tech: string[];
  liveUrl: string;
}

export interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  experience: Experience[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  skills: string[];
  certifications: Certification[];
  projects: Pick<Project, 'title' | 'tagline' | 'tech'>[];
}

export interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

export interface SkillBadgeProps {
  skill: string;
  index: number;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
