import type { SkillCategory } from '../types';
import { Cloud, Server, Database, Lock, GitBranch, Container, Terminal, Code, Monitor, Shield } from 'lucide-react';

export const skillCategories: SkillCategory[] = [
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: <Cloud size={16} /> },
      { name: 'Azure', icon: <Cloud size={16} /> },
      { name: 'GCP', icon: <Cloud size={16} /> },
      { name: 'EC2', icon: <Server size={16} /> },
      { name: 'VPC', icon: <Cloud size={16} /> },
      { name: 'S3', icon: <Database size={16} /> },
      { name: 'Lambda', icon: <Code size={16} /> },
      { name: 'ECS', icon: <Container size={16} /> },
      { name: 'EKS', icon: <Container size={16} /> },
      { name: 'Route53', icon: <Cloud size={16} /> },
      { name: 'IAM', icon: <Shield size={16} /> },
      { name: 'CloudFront', icon: <Cloud size={16} /> },
      { name: 'RDS', icon: <Database size={16} /> },
      { name: 'SQS', icon: <GitBranch size={16} /> },
      { name: 'SNS', icon: <GitBranch size={16} /> },
    ]
  },
  {
    icon: <Terminal size={24} />,
    title: 'Infrastructure as Code',
    skills: [
      { name: 'Terraform', icon: <Terminal size={16} /> },
      { name: 'CloudFormation', icon: <Cloud size={16} /> },
      { name: 'Pulumi', icon: <Code size={16} /> },
      { name: 'Ansible', icon: <Terminal size={16} /> },
      { name: 'Chef', icon: <Terminal size={16} /> },
      { name: 'Puppet', icon: <Terminal size={16} /> },
      { name: 'Vault', icon: <Lock size={16} /> },
      { name: 'Consul', icon: <GitBranch size={16} /> },
      { name: 'Nomad', icon: <Container size={16} /> },
      { name: 'SAM', icon: <Code size={16} /> },
      { name: 'CDK', icon: <Code size={16} /> },
    ]
  },
  {
    icon: <GitBranch size={24} />,
    title: 'CI/CD & DevOps',
    skills: [
      { name: 'Git', icon: <GitBranch size={16} /> },
      { name: 'GitHub Actions', icon: <GitBranch size={16} /> },
      { name: 'Jenkins', icon: <Terminal size={16} /> },
      { name: 'GitLab CI', icon: <GitBranch size={16} /> },
      { name: 'ArgoCD', icon: <GitBranch size={16} /> },
      { name: 'Tekton', icon: <GitBranch size={16} /> },
      { name: 'Spinnaker', icon: <GitBranch size={16} /> },
      { name: 'Docker', icon: <Container size={16} /> },
      { name: 'Helm', icon: <Container size={16} /> },
      { name: 'Kustomize', icon: <Code size={16} /> },
      { name: 'Bitbucket', icon: <GitBranch size={16} /> },
    ]
  },
  {
    icon: <Container size={24} />,
    title: 'Containers & K8s',
    skills: [
      { name: 'Docker', icon: <Container size={16} /> },
      { name: 'Kubernetes', icon: <Container size={16} /> },
      { name: 'Helm', icon: <Container size={16} /> },
      { name: 'Kustomize', icon: <Code size={16} /> },
      { name: 'Istio', icon: <Container size={16} /> },
      { name: 'Linkerd', icon: <Container size={16} /> },
      { name: 'Harbor', icon: <Container size={16} /> },
      { name: 'Nexus', icon: <Database size={16} /> },
      { name: 'Artifactory', icon: <Database size={16} /> },
      { name: 'ECS', icon: <Container size={16} /> },
      { name: 'Fargate', icon: <Container size={16} /> },
      { name: 'EKS', icon: <Container size={16} /> },
    ]
  },
  {
    icon: <Database size={24} />,
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <Database size={16} /> },
      { name: 'MySQL', icon: <Database size={16} /> },
      { name: 'MongoDB', icon: <Database size={16} /> },
      { name: 'Redis', icon: <Database size={16} /> },
      { name: 'Elasticsearch', icon: <Database size={16} /> },
      { name: 'DynamoDB', icon: <Database size={16} /> },
      { name: 'Aurora', icon: <Database size={16} /> },
      { name: 'Cassandra', icon: <Database size={16} /> },
      { name: 'Neo4j', icon: <Database size={16} /> },
      { name: 'PgBouncer', icon: <Database size={16} /> },
      { name: 'RDS', icon: <Database size={16} /> },
    ]
  },
  {
    icon: <Monitor size={24} />,
    title: 'Monitoring & Observability',
    skills: [
      { name: 'CloudWatch', icon: <Monitor size={16} /> },
      { name: 'Datadog', icon: <Monitor size={16} /> },
      { name: 'Prometheus', icon: <Monitor size={16} /> },
      { name: 'Grafana', icon: <Monitor size={16} /> },
      { name: 'Splunk', icon: <Monitor size={16} /> },
      { name: 'ELK Stack', icon: <Monitor size={16} /> },
      { name: 'Jaeger', icon: <Monitor size={16} /> },
      { name: 'PagerDuty', icon: <Monitor size={16} /> },
      { name: 'ThousandEyes', icon: <Monitor size={16} /> },
      { name: 'New Relic', icon: <Monitor size={16} /> },
    ]
  },
  {
    icon: <Shield size={24} />,
    title: 'Security & Compliance',
    skills: [
      { name: 'WAF', icon: <Shield size={16} /> },
      { name: 'Shield', icon: <Shield size={16} /> },
      { name: 'GuardDuty', icon: <Shield size={16} /> },
      { name: 'KMS', icon: <Lock size={16} /> },
      { name: 'ACM', icon: <Shield size={16} /> },
      { name: 'SOC 2', icon: <Shield size={16} /> },
      { name: 'ISO 27001', icon: <Shield size={16} /> },
      { name: 'HIPAA', icon: <Shield size={16} /> },
      { name: 'PCI-DSS', icon: <Shield size={16} /> },
      { name: 'VAPT', icon: <Shield size={16} /> },
      { name: 'Security Hub', icon: <Shield size={16} /> },
      { name: 'Macie', icon: <Shield size={16} /> },
    ]
  },
  {
    icon: <Code size={24} />,
    title: 'Programming',
    skills: [
      { name: 'Bash', icon: <Terminal size={16} /> },
      { name: 'Python', icon: <Code size={16} /> },
      { name: 'Go', icon: <Code size={16} /> },
      { name: 'TypeScript', icon: <Code size={16} /> },
      { name: 'JavaScript', icon: <Code size={16} /> },
      { name: 'YAML', icon: <Code size={16} /> },
      { name: 'HCL', icon: <Code size={16} /> },
      { name: 'PowerShell', icon: <Terminal size={16} /> },
      { name: 'Node.js', icon: <Code size={16} /> },
      { name: 'Rust', icon: <Code size={16} /> },
      { name: 'Ruby', icon: <Code size={16} /> },
    ]
  },
];
