import type { SkillCategory } from '../types';
import { Cloud, Layers, GitBranch, Monitor, Database, Cpu, Lock, Code } from 'lucide-react';

export const skillCategories: SkillCategory[] = [
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Platforms',
    skills: ['AWS', 'Azure', 'GCP', 'EC2', 'VPC', 'S3', 'Lambda', 'ECS', 'EKS', 'Route53', 'IAM', 'CloudFront', 'RDS', 'SQS', 'SNS']
  },
  {
    icon: <Layers size={24} />,
    title: 'Infrastructure as Code',
    skills: ['Terraform', 'CloudFormation', 'Pulumi', 'Ansible', 'Chef', 'Puppet', 'Vault', 'Consul', 'Nomad', 'SAM', 'CDK']
  },
  {
    icon: <GitBranch size={24} />,
    title: 'CI/CD & DevOps',
    skills: ['Git', 'GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD', 'Tekton', 'Spinnaker', 'Docker', 'Helm', 'Kustomize', 'Bitbucket']
  },
  {
    icon: <Monitor size={24} />,
    title: 'Containers & K8s',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Kustomize', 'Istio', 'Linkerd', 'Harbor', 'Nexus', 'Artifactory', 'ECS', 'Fargate', 'EKS']
  },
  {
    icon: <Database size={24} />,
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Aurora', 'Cassandra', 'Neo4j', 'PgBouncer', 'RDS']
  },
  {
    icon: <Cpu size={24} />,
    title: 'Monitoring & Observability',
    skills: ['CloudWatch', 'Datadog', 'Prometheus', 'Grafana', 'Splunk', 'ELK Stack', 'Jaeger', 'PagerDuty', 'ThousandEyes', 'New Relic']
  },
  {
    icon: <Lock size={24} />,
    title: 'Security & Compliance',
    skills: ['WAF', 'Shield', 'GuardDuty', 'KMS', 'ACM', 'SOC 2', 'ISO 27001', 'HIPAA', 'PCI-DSS', 'VAPT', 'Security Hub', 'Macie']
  },
  {
    icon: <Code size={24} />,
    title: 'Programming',
    skills: ['Bash', 'Python', 'Go', 'TypeScript', 'JavaScript', 'YAML', 'HCL', 'PowerShell', 'Node.js', 'Rust', 'Ruby']
  }
];
