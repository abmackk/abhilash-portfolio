import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// RECOMMENDATIONS</div>
          <h2 className="section-title">What People Say</h2>
          <p className="section-desc">Endorsements from colleagues and leaders I've worked with.</p>
        </div>
      </AnimatedSection>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1}>
            <motion.div
              className="testimonial-card"
              whileHover={{ translateY: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Quote size={24} className="testimonial-quote-icon" />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
