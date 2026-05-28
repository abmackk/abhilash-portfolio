import { Clock, Briefcase } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { experiences } from '../../data/experiences';

export function Experience() {
  return (
    <section id="experience">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// MY JOURNEY</div>
          <h2 className="section-title">Career Path</h2>
          <p className="section-desc">A timeline of my professional experience in cloud engineering and DevOps.</p>
        </div>
      </AnimatedSection>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1}>
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-date">
                <Clock size={14} />
                {exp.duration} • {exp.location}
              </div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">
                <Briefcase size={14} />
                {exp.company}
              </div>
              <p className="timeline-desc">{exp.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
