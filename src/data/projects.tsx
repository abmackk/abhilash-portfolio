import type { Project } from '../types';
import { Zap, Terminal, GraduationCap, Server, Shield, Cloud } from 'lucide-react';

export const projects: Project[] = [
  {
    icon: <Zap size={28} />,
    title: 'AI Powered CRM Tool',
    tagline: 'AI-powered tools to get more customers & give them a better experience',
    color: '#ffb300',
    highlights: [
      'Architected comprehensive infrastructure from ground up - design, implementation, and optimization',
      'Built VPC with public/private subnets, NAT, Network ACL, Security Groups, and Internet Gateway',
      'Managed cluster of 22 PostgreSQL databases with Prisma migrations and PgBouncer optimization',
      'Pioneered Jenkins-driven multi-stack CI/CD strategy optimizing release cycles',
      'Automated cross-region snapshots, database dumps, and environment shutdown/restart via Bash scripts',
      'Led ISO, SOC 2, HIPAA compliance with VAPT assessments and Business Continuity Planning'
    ],
    tech: ['EC2', 'VPC', 'S3', 'RDS', 'Jenkins', 'PostgreSQL', 'PgBouncer', 'IAM', 'CloudWatch', 'WAF', 'Lambda', 'Bash', 'Nginx'],
    liveUrl: '#'
  },
  {
    icon: <Terminal size={28} />,
    title: 'Level 3 AI Chatbot',
    tagline: 'Human-level conversational AI for E-commerce - WhatsApp, Instagram, Messenger',
    color: '#7c4dff',
    highlights: [
      'Designed scalable, highly available, and fault-tolerant system from scratch on AWS',
      'Custom VPCs with multiple public/private subnets distributed across availability zones',
      'Implemented Auto Scaling and ELB for high availability traffic distribution',
      'Configured RabbitMQ for real-time message queuing and Redis for in-memory caching',
      'Facilitated CI/CD pipelines with GitLab integration for automated deployments',
      '10+ chatbot workflows for personalized product recommendations and query handling'
    ],
    tech: ['EC2', 'VPC', 'ALB', 'ASG', 'MongoDB', 'Redis', 'RabbitMQ', 'Route53', 'IAM', 'ACM', 'Prometheus', 'Grafana', 'GitLab'],
    liveUrl: '#'
  },
  {
    icon: <GraduationCap size={28} />,
    title: 'Online Hobby Class Platform',
    tagline: 'Educational platform for children under 12 with professional mentors',
    color: '#ff5252',
    highlights: [
      'Planned and configured VPC infrastructure with public/private subnets and security groups',
      'Created snapshots for EC2 instance backups and launch configurations',
      'Streamlined React/NodeJS deployments with Nginx reverse proxy and PM2 process manager',
      'Configured automated SSL certificates with Certbot renewal',
      'Managed Jenkins build and automation jobs for continuous integration',
      'Implemented FTP, SFTP & AWS Transfer Family for seamless file transfers'
    ],
    tech: ['EC2', 'VPC', 'S3', 'ALB', 'ASG', 'RDS', 'Route53', 'WAF', 'IAM', 'KMS', 'Jenkins', 'Nginx', 'PM2'],
    liveUrl: '#'
  },
  {
    icon: <Server size={28} />,
    title: 'Fintech Trading Platform',
    tagline: 'High-frequency trading infrastructure with real-time data processing',
    color: '#00c853',
    highlights: [
      'Architected low-latency infrastructure for real-time market data processing and analysis',
      'Deployed EKS clusters with horizontal pod autoscaling for peak trading volumes',
      'Implemented Redis clusters for sub-millisecond data caching and session management',
      'Built automated disaster recovery with cross-region failover and data replication',
      'Configured API Gateway with WAF protection and DDoS mitigation',
      'Set up comprehensive monitoring with Datadog for trading metrics and alerts'
    ],
    tech: ['EKS', 'Redis', 'Lambda', 'API Gateway', 'WAF', 'RDS', 'ElastiCache', 'CloudWatch', 'Terraform', 'Docker', 'Datadog'],
    liveUrl: '#'
  },
  {
    icon: <Shield size={28} />,
    title: 'Healthcare Compliance System',
    tagline: 'HIPAA-compliant cloud infrastructure for healthcare data management',
    color: '#00bcd4',
    highlights: [
      'Designed HIPAA-compliant infrastructure with encryption at rest and in transit',
      'Implemented VPC endpoints for secure private connectivity to AWS services',
      'Configured GuardDuty and Security Hub for continuous security monitoring',
      'Built automated compliance reporting and audit trail logging',
      'Deployed multi-layer security with IAM roles, KMS keys, and resource policies',
      'Established automated backup and recovery with RDS snapshots and S3 versioning'
    ],
    tech: ['VPC', 'RDS', 'S3', 'KMS', 'IAM', 'GuardDuty', 'Security Hub', 'CloudTrail', 'WAF', 'Shield', 'Lambda'],
    liveUrl: '#'
  },
  {
    icon: <Cloud size={28} />,
    title: 'Multi-Cloud Migration',
    tagline: 'Enterprise migration from on-premise to AWS with hybrid connectivity',
    color: '#ff6d00',
    highlights: [
      'Led migration of 50+ servers from on-premise datacenter to AWS infrastructure',
      'Implemented Site-to-Site VPN and Direct Connect for hybrid cloud architecture',
      'Deployed AWS Directory Service for seamless AD integration and SSO',
      'Automated server provisioning with Systems Manager and CloudFormation',
      'Configured cost allocation tags and budgets for multi-department billing',
      'Reduced infrastructure costs by 40% through rightsizing and reserved instances'
    ],
    tech: ['EC2', 'VPC', 'Direct Connect', 'VPN', 'Systems Manager', 'CloudFormation', 'S3', 'IAM', 'CloudWatch', 'Cost Explorer'],
    liveUrl: '#'
  }
];
