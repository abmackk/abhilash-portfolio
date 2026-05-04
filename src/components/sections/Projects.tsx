import { ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { TiltCard } from '../ui/TiltCard';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// MY WORK</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">Showcasing some of my key technical projects and achievements.</p>
        </div>
      </AnimatedSection>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1}>
            <TiltCard className="project-card-full">
              <div className="project-icon">{project.icon}</div>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="project-tagline">{project.tagline}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="project-meta">
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
