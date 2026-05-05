import type { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Abhilash Makode',
    title: 'AWS Cloud Engineer & DevOps Specialist',
    email: 'abhilash.makode@outlook.com',
    phone: '+91 8767543039',
    location: 'Nagpur, India',
    github: 'https://github.com/abhilashmakode',
    linkedin: 'https://linkedin.com/in/abhilashmakode',
    summary: 'AWS Cloud Engineer with 5+ years of experience designing scalable, secure, and high-performance infrastructure architectures. Proven track record in defining IT Roadmaps, Cloud strategies, and Enterprise architectures with expertise in DevOps practices, automation, and infrastructure as code.'
  },
  experience: [
    {
      title: 'AWS Cloud Engineer / DevOps',
      company: 'Mindtrail Technology Pvt. Ltd.',
      duration: 'Jan 2021 – Present',
      location: 'Nagpur, India',
      desc: 'Led IT Roadmap and Cloud Strategy for various startups. Managed 30+ EC2 instances, built CI/CD pipelines with Jenkins, and automated Postgres backups using Bash and lifecycle manager.'
    },
    {
      title: 'AWS Cloud Engineer (Freelancer)',
      company: 'Product Based Start-ups',
      duration: 'May 2022 – Present',
      location: 'Remote',
      desc: 'Developed technically compliant cloud-native architectures for Education and Fintech sectors. Focused on high availability, DR, and ISO/SOC2/HIPAA compliance.'
    },
    {
      title: 'Support Engineer',
      company: 'Hexaware Technologies Limited',
      duration: 'March 2018 – July 2019',
      location: 'Nagpur, India',
      desc: 'Designed E-Learning courses for clients teaching various policies required to work in corporate environments. Provided technical support and maintained learning management systems.'
    },
    {
      title: 'Java Developer',
      company: 'VanraSoft Technologies Pvt Limited',
      duration: 'Feb 2017 – Feb 2018',
      location: 'Nagpur, India',
      desc: 'Developed online classifieds platform for city-based buyer-seller connections with secure transactions. Built job consultancy software for employers, consultants, institutions and jobseekers to share ideas and search jobs.'
    }
  ],
  education: [
    {
      degree: 'B.E. in Information Technology',
      institution: 'University of Mumbai',
      year: '2020'
    }
  ],
  skills: [
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions',
    'Linux', 'Python', 'Go', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis',
    'Prometheus', 'Grafana', 'Ansible', 'Helm', 'CloudWatch', 'CI/CD', 'SOC2', 'ISO 27001'
  ],
  certifications: [
    { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'AWS Developer Associate', issuer: 'Amazon Web Services', year: '2022' },
    { name: 'Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
    { name: 'DevOps Engineer', issuer: 'HashiCorp Terraform', year: '2022' }
  ],
  projects: [
    { title: 'AI Powered CRM Tool', tagline: 'AI-powered tools for customer acquisition and experience', tech: ['AWS', 'Jenkins', 'PostgreSQL', 'VPC'] },
    { title: 'Level 3 AI Chatbot', tagline: 'Human-level conversational AI for E-commerce', tech: ['AWS', 'MongoDB', 'Redis', 'GitLab'] },
    { title: 'Fintech Trading Platform', tagline: 'High-frequency trading infrastructure', tech: ['EKS', 'Redis', 'Lambda', 'Terraform'] }
  ]
};
