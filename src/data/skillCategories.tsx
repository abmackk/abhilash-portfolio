import type { SkillCategory } from '../types';
import { Cloud, Server, Database, Lock, GitBranch, Container, Terminal, Code, Monitor, Shield, Globe, Layers, Cog, Zap, GitCommit, BarChart3, Bell, Search, ShieldCheck, Key, FileText, Braces, Eye } from 'lucide-react';

// Custom SVG icon components for brand-specific skills
function AWSIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.23 16.26c-1.07 0-2.04-.28-2.89-.84-.85-.56-1.55-1.44-2.1-2.64l2.42-1.05c.35.79.72 1.36 1.12 1.71.4.35.85.52 1.35.52.55 0 .98-.18 1.29-.53.31-.35.47-.79.47-1.32 0-.61-.18-1.12-.55-1.52-.37-.4-.95-.79-1.74-1.18l-1.2-.56c-1.16-.54-1.97-1.17-2.43-1.89-.46-.72-.69-1.57-.69-2.56 0-1.16.35-2.17 1.04-3.03.69-.86 1.94-1.29 3.76-1.29 1.05 0 2.03.21 2.94.64.91.43 1.63 1.04 2.16 1.83l-2.23 1.42c-.29-.5-.63-.88-1.03-1.14-.4-.26-.87-.39-1.41-.39-.6 0-1.06.18-1.39.53-.33.35-.49.79-.49 1.32 0 .54.17.99.52 1.36.35.37.9.73 1.65 1.08l1.2.56c1.16.54 1.97 1.19 2.43 1.95.46.76.69 1.65.69 2.67 0 1.08-.33 2.04-.99 2.88-.66.84-1.87 1.26-3.64 1.26z" fill="currentColor"/>
      <path d="M8.54 19.33c-1.64 0-3.05-.53-4.23-1.58C3.13 16.7 2.5 15.16 2.5 13.4c0-1.14.24-2.22.72-3.24.48-1.02 1.19-1.92 2.13-2.69l1.96 1.43c-.6.54-1.08 1.14-1.44 1.8-.36.66-.54 1.38-.54 2.15 0 1.04.32 1.93.95 2.68.63.75 1.53 1.12 2.7 1.12 1.08 0 1.95-.37 2.62-1.12l1.96 1.43c-.85.79-1.85 1.18-3.02 1.18z" fill="currentColor"/>
      <path d="M21.5 13.4c0 1.76-.63 3.3-1.88 4.62-1.25 1.32-2.66 1.98-4.23 1.98-1.17 0-2.17-.39-3.02-1.18l1.96-1.43c.67.75 1.54 1.12 2.62 1.12 1.17 0 2.07-.37 2.7-1.12.63-.75.95-1.64.95-2.68 0-.77-.18-1.49-.54-2.15-.36-.66-.84-1.26-1.44-1.8l1.96-1.43c.94.77 1.65 1.67 2.13 2.69.48 1.02.72 2.1.72 3.24z" fill="currentColor"/>
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.23 9.87L12.5 2.14c-.35-.26-.83-.26-1.18 0L2.77 9.87c-.26.2-.36.54-.26.85.1.31.38.52.71.52h18.56c.33 0 .61-.21.71-.52.1-.31 0-.65-.26-.85z" fill="currentColor"/>
      <path d="M12 22.14L22.23 12.4c.26-.2.36-.54.26-.85-.1-.31-.38-.52-.71-.52H2.22c-.33 0-.61.21-.71.52-.1.31 0 .65.26.85L12 22.14z" fill="currentColor"/>
    </svg>
  );
}

function GCPIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 9.63h-2.636V7h-2.182v2.63H14.68V7H12.5v2.63H10.318V7H8.136v2.63H5.954V7H3.773v2.63H1.59V17.5c0 .827.671 1.5 1.5 1.5h17.82c.829 0 1.5-.673 1.5-1.5V9.63zM5.136 15.25H3.773v-2.62h1.363v2.62zm3.273 0H7.046v-2.62h1.363v2.62zm0-3.5H7.046V9.13h1.363v2.62zm3.273 3.5h-1.363v-2.62h1.363v2.62zm0-3.5h-1.363V9.13h1.363v2.62zm3.273 3.5h-1.363v-2.62h1.363v2.62zm0-3.5h-1.363V9.13h1.363v2.62zm3.273 3.5h-1.363v-2.62h1.363v2.62z" fill="currentColor"/>
    </svg>
  );
}

function KubernetesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
      <path d="M12 7l-1.5 1.5L12 10l1.5-1.5L12 7zm-3 5l-1.5-1.5L7 10l1.5 1.5L12 16l3.5-4.5L17 10l-1.5 1.5L12 13l-3-1z" fill="currentColor"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
    </svg>
  );
}

function JenkinsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.236L20 9l-8 4-8-4 8-4.764zM4 16.5V9.236L12 13.5v7.764l-8-4z" fill="currentColor"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C10.5 2 9.5 3 9.5 4.5v3h-3C5 7.5 4 8.5 4 10v8c0 1.5 1 2.5 2.5 2.5h8c1.5 0 2.5-1 2.5-2.5v-3h3c1.5 0 2.5-1 2.5-2.5v-8C23 3 22 2 20.5 2h-8.5z" fill="currentColor"/>
      <circle cx="9" cy="13" r="1" fill="white"/>
      <circle cx="15" cy="7" r="1" fill="white"/>
    </svg>
  );
}

function NodeJSIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM9 14.5c0 .828-.672 1.5-1.5 1.5S6 15.328 6 14.5 6.672 13 7.5 13s1.5.672 1.5 1.5zm4.5 1.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3-3c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" fill="currentColor"/>
    </svg>
  );
}

function GoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
      <path d="M8 11h8v2H8z" fill="currentColor"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  );
}

function RustIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM9 14.5l-2-2 1.5-1.5L9 11.5l-1.5 1.5L9 14.5zm3-3l-2-2 1.5-1.5L12 8.5l-1.5 1.5L12 11.5zm3-3l-2-2 1.5-1.5L15 5.5l-1.5 1.5L15 8.5z" fill="currentColor"/>
    </svg>
  );
}

function RubyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
      <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
      <path d="M8 14c0 2.21 1.79 4 4 4s4-1.79 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function PostgreSQLIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
      <path d="M8 8h8v2h-2v6H10v-6H8V8z" fill="currentColor"/>
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor"/>
      <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function RedisIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
      <path d="M8 8h8v8H8z" fill="currentColor"/>
      <path d="M10 10h4v4h-4z" fill="white"/>
    </svg>
  );
}

function PrometheusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function GrafanaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="currentColor"/>
      <path d="M12 7v10M7 9.5v5M17 9.5v5" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

export const skillCategories: SkillCategory[] = [
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: <AWSIcon /> },
      { name: 'Azure', icon: <AzureIcon /> },
      { name: 'GCP', icon: <GCPIcon /> },
      { name: 'EC2', icon: <Server size={16} /> },
      { name: 'VPC', icon: <Globe size={16} /> },
      { name: 'S3', icon: <Database size={16} /> },
      { name: 'Lambda', icon: <Zap size={16} /> },
      { name: 'ECS', icon: <Layers size={16} /> },
      { name: 'EKS', icon: <Container size={16} /> },
      { name: 'Route53', icon: <Globe size={16} /> },
      { name: 'IAM', icon: <Shield size={16} /> },
      { name: 'CloudFront', icon: <Zap size={16} /> },
      { name: 'RDS', icon: <Database size={16} /> },
      { name: 'SQS', icon: <GitCommit size={16} /> },
      { name: 'SNS', icon: <Bell size={16} /> },
    ]
  },
  {
    icon: <Terminal size={24} />,
    title: 'Infrastructure as Code',
    skills: [
      { name: 'Terraform', icon: <Cog size={16} /> },
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
      { name: 'Git', icon: <GitHubIcon /> },
      { name: 'GitHub Actions', icon: <GitHubIcon /> },
      { name: 'Jenkins', icon: <JenkinsIcon /> },
      { name: 'GitLab CI', icon: <GitBranch size={16} /> },
      { name: 'ArgoCD', icon: <GitBranch size={16} /> },
      { name: 'Tekton', icon: <GitBranch size={16} /> },
      { name: 'Spinnaker', icon: <GitBranch size={16} /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'Helm', icon: <Container size={16} /> },
      { name: 'Kustomize', icon: <Code size={16} /> },
      { name: 'Bitbucket', icon: <GitBranch size={16} /> },
    ]
  },
  {
    icon: <Container size={24} />,
    title: 'Containers & K8s',
    skills: [
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'Kubernetes', icon: <KubernetesIcon /> },
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
      { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
      { name: 'MySQL', icon: <Database size={16} /> },
      { name: 'MongoDB', icon: <MongoIcon /> },
      { name: 'Redis', icon: <RedisIcon /> },
      { name: 'Elasticsearch', icon: <Search size={16} /> },
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
      { name: 'Datadog', icon: <BarChart3 size={16} /> },
      { name: 'Prometheus', icon: <PrometheusIcon /> },
      { name: 'Grafana', icon: <GrafanaIcon /> },
      { name: 'Splunk', icon: <Search size={16} /> },
      { name: 'ELK Stack', icon: <Search size={16} /> },
      { name: 'Jaeger', icon: <GitCommit size={16} /> },
      { name: 'PagerDuty', icon: <Bell size={16} /> },
      { name: 'ThousandEyes', icon: <Eye size={16} /> },
      { name: 'New Relic', icon: <BarChart3 size={16} /> },
    ]
  },
  {
    icon: <Shield size={24} />,
    title: 'Security & Compliance',
    skills: [
      { name: 'WAF', icon: <Shield size={16} /> },
      { name: 'Shield', icon: <ShieldCheck size={16} /> },
      { name: 'GuardDuty', icon: <Search size={16} /> },
      { name: 'KMS', icon: <Key size={16} /> },
      { name: 'ACM', icon: <ShieldCheck size={16} /> },
      { name: 'SOC 2', icon: <FileText size={16} /> },
      { name: 'ISO 27001', icon: <FileText size={16} /> },
      { name: 'HIPAA', icon: <FileText size={16} /> },
      { name: 'PCI-DSS', icon: <FileText size={16} /> },
      { name: 'VAPT', icon: <Search size={16} /> },
      { name: 'Security Hub', icon: <Shield size={16} /> },
      { name: 'Macie', icon: <Shield size={16} /> },
    ]
  },
  {
    icon: <Code size={24} />,
    title: 'Programming',
    skills: [
      { name: 'Bash', icon: <Terminal size={16} /> },
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'Go', icon: <GoIcon /> },
      { name: 'TypeScript', icon: <Braces size={16} /> },
      { name: 'JavaScript', icon: <Code size={16} /> },
      { name: 'YAML', icon: <Code size={16} /> },
      { name: 'HCL', icon: <Code size={16} /> },
      { name: 'PowerShell', icon: <Terminal size={16} /> },
      { name: 'Node.js', icon: <NodeJSIcon /> },
      { name: 'Rust', icon: <RustIcon /> },
      { name: 'Ruby', icon: <RubyIcon /> },
    ]
  },
];
