import { useMemo } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { skillCategories } from '../../data/skillCategories';

const RESUME_SKILLS = new Set([
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins',
  'GitHub Actions', 'Linux', 'Python', 'Go', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Redis', 'Prometheus', 'Grafana', 'Ansible', 'Helm', 'CloudWatch',
  'EC2', 'VPC', 'S3', 'RDS', 'IAM', 'Lambda', 'WAF', 'Route53',
  'Elasticsearch', 'Vault', 'Aurora', 'ECS', 'EKS', 'CloudFormation',
  'Datadog', 'GuardDuty', 'Security Hub', 'SOC 2', 'ISO 27001',
  'ACM', 'KMS', 'Shield', 'PgBouncer', 'Bash', 'GitLab CI',
]);

export function Skills() {
  const categories = useMemo(() =>
    skillCategories
      .map(cat => ({
        ...cat,
        skills: cat.skills.filter(s => RESUME_SKILLS.has(s.name)),
      }))
      .filter(cat => cat.skills.length > 0),
  []);

  return (
    <section id="skills">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// EXPERTISE</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">Technologies and tools I work with to build robust solutions.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="skill-rows">
          {categories.map((category, idx) => (
            <div key={idx} className="skill-row">
              <div className="skill-row-left">
                <span className="skill-row-icon">{category.icon}</span>
                <span className="skill-row-title">{category.title}</span>
              </div>
              <div className="skill-row-badges">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-row-badge">
                    <span className="skill-row-badge-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
