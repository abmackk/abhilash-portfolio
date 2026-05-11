import type { SkillCategory } from '../types';
import { Cloud, Server, Database, Lock, GitBranch, Container, Terminal, Code, Monitor, Shield, Globe, Layers, Cog, Zap, GitCommit, BarChart3, Bell, Search, ShieldCheck, Key, FileText, Braces, Eye } from 'lucide-react';
import { AWSIcon, AzureIcon, GCPIcon, DockerIcon, KubernetesIcon, GitHubIcon, JenkinsIcon, PythonIcon, NodeJSIcon, GoIcon, RustIcon, RubyIcon, PostgreSQLIcon, MongoIcon, RedisIcon, PrometheusIcon, GrafanaIcon } from '../components/icons/CustomIcons';

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
      { name: 'Linux', icon: <Terminal size={16} /> },
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
