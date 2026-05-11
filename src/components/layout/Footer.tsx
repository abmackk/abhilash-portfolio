import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="nav-logo">AM</span>
          <p>AWS Cloud Engineer & DevOps Specialist</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/abhilashmakode" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href="https://linkedin.com/in/abhilashmakode" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:abhilash.makode@outlook.com"><Mail size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span className="gradient-text">Abhilash Makode</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
