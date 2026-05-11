import type { Article } from '../types';

export const articles: Article[] = [
  {
    title: 'Building a Zero-Downtime Deployment Pipeline on AWS',
    description: 'A comprehensive guide to setting up blue-green deployments with AWS ECS, CodePipeline, and Terraform for zero-downtime releases.',
    url: 'https://medium.com',
    platform: 'Medium',
    date: '2026-03',
    tags: ['AWS', 'CI/CD', 'Terraform', 'ECS']
  },
  {
    title: 'Cost Optimization Strategies for AWS: A Practical Guide',
    description: 'Real-world strategies for reducing AWS costs by 40%+ including reserved instances, right sizing, spot instances, and automated cleanup.',
    url: 'https://medium.com',
    platform: 'Medium',
    date: '2026-01',
    tags: ['AWS', 'Cost Optimization', 'FinOps']
  },
  {
    title: 'Securing Your Cloud Infrastructure: Beyond the Basics',
    description: 'Deep dive into AWS security best practices including IAM policies, VPC design patterns, encryption strategies, and compliance automation.',
    url: 'https://medium.com',
    platform: 'Medium',
    date: '2025-11',
    tags: ['Security', 'AWS', 'IAM', 'Compliance']
  },
  {
    title: 'Kubernetes on EKS: Production Lessons Learned',
    description: 'Key lessons from running production EKS clusters including networking, autoscaling, monitoring, and disaster recovery configurations.',
    url: 'https://medium.com',
    platform: 'Medium',
    date: '2025-08',
    tags: ['Kubernetes', 'EKS', 'Docker', 'DevOps']
  },
  {
    title: 'Automating Compliance: SOC 2 & HIPAA on AWS',
    description: 'How to automate compliance monitoring and reporting using AWS Config, Security Hub, GuardDuty, and custom Lambda functions.',
    url: 'https://medium.com',
    platform: 'Medium',
    date: '2025-05',
    tags: ['Compliance', 'SOC 2', 'HIPAA', 'Automation']
  }
];

export const writingPlatforms = [
  {
    name: 'Medium',
    url: 'https://medium.com/@abhilashmakode',
    icon: 'M'
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/abhilashmakode',
    icon: 'D'
  },
  {
    name: 'Hashnode',
    url: 'https://hashnode.com/@abhilashmakode',
    icon: 'H'
  }
];
