import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

const contactMethods = [
  { icon: <Mail size={24} />, label: 'Email', value: 'abhilash.makode@outlook.com', href: 'mailto:abhilash.makode@outlook.com' },
  { icon: <Phone size={24} />, label: 'Phone', value: '+91 8767543039', href: 'tel:+918767543039' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'Nagpur, India', href: '#' },
  { icon: <MessageCircle size={24} />, label: 'WhatsApp', value: '+91 8767543039', href: 'https://wa.me/918767543039' },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: 'full-time' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '', service: 'full-time' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// GET IN TOUCH</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">Have a project in mind? Let's discuss how I can help.</p>
        </div>
      </AnimatedSection>

      <div className="contact-container">
        <AnimatedSection delay={0.1}>
          <div className="contact-left">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-avatar">AM</div>
                <div>
                  <h3>Abhilash Makode</h3>
                  <p>AWS Cloud Engineer & DevOps Specialist</p>
                </div>
              </div>
              <div className="availability-badge large">
                <span className="availability-dot" />
                <span>Available for new opportunities</span>
              </div>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  className="contact-method-item"
                >
                  <div className="contact-method-icon">{method.icon}</div>
                  <div className="contact-method-info">
                    <span className="contact-method-label">{method.label}</span>
                    <span className="contact-method-value">{method.value}</span>
                  </div>
                  <ArrowRight size={18} className="contact-method-arrow" />
                </a>
              ))}
            </div>

            <div className="contact-socials">
              <h4>Connect With Me</h4>
              <div className="social-links large">
                <a 
                  href="https://github.com/abhilashmakode" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/abhilashmakode" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:abhilash.makode@outlook.com" 
                  className="social-link"
                >
                  <Mail size={24} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>I'm interested in</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="full-time">Full-time Position</option>
                  <option value="contract">Contract Work</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="consulting">Cloud Consulting</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea 
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading-spinner" />
                ) : submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
