import { AnimatedSection } from '../ui/AnimatedSection';
import { Cloud, Server, Shield, Database } from 'lucide-react';

export function About() {
  return (
    <section id="about">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// ABOUT ME</div>
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-desc">Get to know more about my background, expertise, and passion for cloud infrastructure.</p>
        </div>
      </AnimatedSection>

      <div className="about-grid">
        <AnimatedSection className="about-image-col" delay={0.1}>
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
              alt="Abhilash Makode" 
              className="about-image"
            />
            <div className="image-glow" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="about-content-col" delay={0.2}>
          <div className="about-content">
            <h3>Cloud Architect & DevOps Expert</h3>
            <p>
              I'm a highly experienced AWS Cloud Engineer with a proven track record of defining IT Roadmaps, 
              Cloud strategies, and Enterprise architectures. B.E. in Information Technology graduate with 
              extensive hands-on experience in managing production servers, implementing CI/CD pipelines, 
              and ensuring rigorous security compliance (SOC 2, ISO, HIPAA).
            </p>
            <p>
              I specialize in designing and implementing scalable, fault-tolerant systems on AWS, with deep 
              expertise in DevOps practices, automation, and infrastructure as code. My passion lies in building 
              robust cloud solutions that drive business growth and operational excellence.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"><Cloud size={20} /></div>
                <div className="highlight-text">
                  <span>AWS Expert</span>
                  <small>Certified Solutions Architect</small>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><Server size={20} /></div>
                <div className="highlight-text">
                  <span>DevOps</span>
                  <small>CI/CD & Automation</small>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><Shield size={20} /></div>
                <div className="highlight-text">
                  <span>Security</span>
                  <small>SOC2, ISO, HIPAA</small>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><Database size={20} /></div>
                <div className="highlight-text">
                  <span>Database</span>
                  <small>Postgres, MongoDB, Redis</small>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
