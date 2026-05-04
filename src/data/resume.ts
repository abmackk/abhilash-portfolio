import type { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Abhilash Makode',
    title: 'AWS Cloud Engineer & DevOps Specialist',
    email: 'abhilash.makode@outlook.com',
    phone: '+91 8767543039',
    location: 'Hyderabad, India',
    github: 'https://github.com/abhilashmakode',
    linkedin: 'https://linkedin.com/in/abhilashmakode',
    summary: 'AWS Cloud Engineer with 5+ years of experience designing scalable, secure, and high-performance infrastructure architectures. Proven track record in defining IT Roadmaps, Cloud strategies, and Enterprise architectures with expertise in DevOps practices, automation, and infrastructure as code.'
  },
  experience: [
    {
      title: 'AWS Cloud Engineer / DevOps',
      company: 'Mindtrail Technology Pvt. Ltd.',
      duration: 'Jan 2021 – Present',
      location: 'Hyderabad, India',
      desc: 'Led IT Roadmap and Cloud Strategy for various startups. Managed 30+ EC2 instances, built CI/CD pipelines with Jenkins, and automated Postgres backups using Bash and lifecycle manager.'
    },
    {
      title: 'AWS Cloud Engineer (Freelancer)',
      company: 'Product Based Start-ups',
      duration: 'May 2022 – Present',
      location: 'Remote',
      desc: 'Developed technically compliant cloud-native architectures for Education and Fintech sectors. Focused on high availability, DR, and ISO/SOC2/HIPAA compliance.'
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
