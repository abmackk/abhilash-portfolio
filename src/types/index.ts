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
  color: string;
}

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: SkillItem[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Article {
  title: string;
  description: string;
  url: string;
  platform: string;
  date: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
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

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
