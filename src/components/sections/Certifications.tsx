import { Award } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { certifications } from '../../data/certifications';

export function Certifications() {
  return (
    <section id="certifications">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// CREDENTIALS</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-desc">Professional certifications that validate my expertise.</p>
        </div>
      </AnimatedSection>

      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1}>
            <div className="cert-card glass-card">
              <div className="cert-icon">
                <Award size={32} />
              </div>
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
              <span className="cert-year">{cert.year}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
