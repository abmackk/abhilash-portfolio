import { motion } from 'framer-motion';
import { FileBadge, Download, FileText, Sparkles, Clock, Briefcase } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Resume() {
  return (
    <section id="resume">
      <AnimatedSection>
        <div className="resume-section">
          <div className="resume-glow" />
          <div className="resume-content">
            <div className="resume-icon">
              <FileBadge size={48} />
            </div>
            <div className="resume-text">
              <span className="resume-label">// GET MY RESUME</span>
              <h2>Ready to Explore My Journey?</h2>
              <p>
                Download my comprehensive resume to learn more about my experience, 
                technical skills, certifications, and achievements in cloud engineering and DevOps.
              </p>
            </div>
            <motion.a
              href="/Abhilash_Makode_Resume.pdf"
              download="Abhilash_Makode_Resume.pdf"
              className="resume-download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download Resume</span>
              <FileText size={18} />
            </motion.a>
            <div className="resume-stats">
              <div className="resume-stat">
                <Sparkles size={16} />
                <span>PDF Format</span>
              </div>
              <div className="resume-stat">
                <Clock size={16} />
                <span>Updated 2026</span>
              </div>
              <div className="resume-stat">
                <Briefcase size={16} />
                <span>5+ Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
