import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { 
  Mail, Github, Linkedin, 
  ArrowRight, Server, Cloud, Database, Shield,
  Terminal, Zap, Briefcase, GraduationCap, Award,
  Phone, MapPin, Send, ChevronDown, Menu, X,
  ExternalLink, Clock, CheckCircle2,
  Monitor, Database as DbIcon, Lock, Code, Layers, Cpu, GitBranch
} from 'lucide-react';
import './App.css';

const roles = [
  'AWS Cloud Architect',
  'DevOps Engineer', 
  'SRE Specialist',
  'Cloud Consultant',
  'Platform Engineer',
  'Infrastructure Expert',
  'Kubernetes Admin',
  'CI/CD Pipeline Builder',
  'Freelancer'
];

const techStack = [
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions',
  'Linux', 'Python', 'Go', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
  'Prometheus', 'Grafana', 'Ansible', 'Helm', 'Vault', 'CloudWatch', 'Datadog', 'Lambda',
  'ECS', 'EKS', 'VPC', 'IAM', 'Lambda', 'S3', 'RDS', 'Aurora', 'Route53', 'WAF', 'Shield'
];

function useTextScramble(text: string, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrambling(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!isScrambling) return;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let iteration = 0;
    const maxIterations = text.length;
    
    const interval = setInterval(() => {
      setDisplayText(
        text.split('').map((_, index) => {
          if (index < Math.floor(iteration / 2)) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      iteration += 0.5;
      
      if (iteration >= maxIterations * 2) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [isScrambling, text]);
  
  return displayText;
}

function useTypewriter(words: string[], typingSpeed: number = 100, deletingSpeed: number = 50, pauseDuration: number = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);
  
  return text;
}

function useAnimatedCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasAnimated.current) return;
    
    hasAnimated.current = true;
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isInView, startOnView]);
  
  return { count, ref };
}

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return mousePosition;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const mouseRef = useRef(mousePosition);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = [];
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
        
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 200)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef(mousePosition);

  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const animate = () => {
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.1;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.1;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  useEffect(() => {
    targetRef.current = { x: mousePosition.x, y: mousePosition.y };
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => setIsHovering(false);
    
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hovering' : ''}`} />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="loader-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="loader-logo">AM</div>
            <motion.div 
              className="loader-bar"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MagneticButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}

function TechMarquee() {
  const duplicatedTechs = [...techStack, ...techStack, ...techStack];
  
  return (
    <div className="tech-marquee">
      <div className="marquee-content">
        {duplicatedTechs.map((tech, idx) => (
          <span key={idx} className="marquee-item">
            <span className="marquee-dot" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return <motion.div className="progress-bar" style={{ scaleX }} />;
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#home" className="nav-logo">AM</a>
        
        <div className="nav-links-desktop">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
        
        <motion.button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-content">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const scrambledName = useTextScramble('Abhilash Makode', 500);
  const typedRole = useTypewriter(roles);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <ParticleCanvas />
      
      <motion.div 
        className="hero-content"
        style={{ y: y ? `translateY(${y.get() * 100}px)` : undefined }}
      >
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="badge-dot" />
          <span>Available for Projects</span>
          <span className="badge-pulse" />
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hi, I'm{' '}
          <span className="gradient name-text">{scrambledName}</span>
        </motion.h1>

        <motion.div 
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="role-prefix">I am</span>
          <span className="role-text">{typedRole}</span>
          <span className="role-cursor">|</span>
        </motion.div>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          AWS Cloud Engineer & DevOps Specialist with 5+ years of experience 
          designing scalable, secure, and high-performance infrastructure architectures.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <MagneticButton>
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} />
              <span>Hire Me</span>
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <StatCounter value={5} suffix="+" label="Years Experience" />
          <StatCounter value={30} suffix="+" label="EC2 Instances" />
          <StatCounter value={22} suffix="+" label="Databases" />
          <StatCounter value={15} suffix="+" label="Projects" />
        </motion.div>

        <motion.button 
          className="scroll-indicator"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useAnimatedCounter(value);
  
  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function About() {
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

function Experience() {
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

const experiences = [
  {
    title: 'AWS Cloud Engineer / DevOps',
    company: 'Mindtrail Technology Pvt. Ltd.',
    duration: 'Jan 2021 – Present',
    location: 'Hyderabad, India',
    desc: 'Led IT Roadmap and Cloud Strategy for various startups. Managed 30+ EC2 instances, built CI/CD pipelines with Jenkins, and automated Postgres backups using Bash and lifecycle manager.'
  },
  {
    title: 'AWS Cloud Engineer (Freelancer)',
    company: 'Product Based Start-ups',
    duration: 'May 2022 – Present',
    location: 'Remote',
    desc: 'Developed technically compliant cloud-native architectures for Education and Fintech sectors. Focused on high availability, DR, and ISO/SOC2/HIPAA compliance.'
  }
];

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) * 0.1;
    const y = -(e.clientX - rect.left - rect.width / 2) * 0.1;
    setRotation({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card ${isHovering ? 'hovering' : ''} ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.02 : 1})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

function Projects() {
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

const projects = [
  {
    icon: <Zap size={28} />,
    title: 'AI Powered CRM Tool',
    tagline: 'AI-powered tools to get more customers & give them a better experience',
    highlights: [
      'Architected comprehensive infrastructure from ground up - design, implementation, and optimization',
      'Built VPC with public/private subnets, NAT, Network ACL, Security Groups, and Internet Gateway',
      'Managed cluster of 22 PostgreSQL databases with Prisma migrations and PgBouncer optimization',
      'Pioneered Jenkins-driven multi-stack CI/CD strategy optimizing release cycles',
      'Automated cross-region snapshots, database dumps, and environment shutdown/restart via Bash scripts',
      'Led ISO, SOC 2, HIPAA compliance with VAPT assessments and Business Continuity Planning'
    ],
    tech: ['EC2', 'VPC', 'S3', 'RDS', 'Jenkins', 'PostgreSQL', 'PgBouncer', 'IAM', 'CloudWatch', 'WAF', 'Lambda', 'Bash', 'Nginx'],
    liveUrl: '#'
  },
  {
    icon: <Terminal size={28} />,
    title: 'Level 3 AI Chatbot',
    tagline: 'Human-level conversational AI for E-commerce - WhatsApp, Instagram, Messenger',
    highlights: [
      'Designed scalable, highly available, and fault-tolerant system from scratch on AWS',
      'Custom VPCs with multiple public/private subnets distributed across availability zones',
      'Implemented Auto Scaling and ELB for high availability traffic distribution',
      'Configured RabbitMQ for real-time message queuing and Redis for in-memory caching',
      'Facilitated CI/CD pipelines with GitLab integration for automated deployments',
      '10+ chatbot workflows for personalized product recommendations and query handling'
    ],
    tech: ['EC2', 'VPC', 'ALB', 'ASG', 'MongoDB', 'Redis', 'RabbitMQ', 'Route53', 'IAM', 'ACM', 'Prometheus', 'Grafana', 'GitLab'],
    liveUrl: '#'
  },
  {
    icon: <GraduationCap size={28} />,
    title: 'Online Hobby Class Platform',
    tagline: 'Educational platform for children under 12 with professional mentors',
    highlights: [
      'Planned and configured VPC infrastructure with public/private subnets and security groups',
      'Created snapshots for EC2 instance backups and launch configurations',
      'Streamlined React/NodeJS deployments with Nginx reverse proxy and PM2 process manager',
      'Configured automated SSL certificates with Certbot renewal',
      'Managed Jenkins build and automation jobs for continuous integration',
      'Implemented FTP, SFTP & AWS Transfer Family for seamless file transfers'
    ],
    tech: ['EC2', 'VPC', 'S3', 'ALB', 'ASG', 'RDS', 'Route53', 'WAF', 'IAM', 'KMS', 'Jenkins', 'Nginx', 'PM2'],
    liveUrl: '#'
  }
];

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  const colors = [
    { bg: 'rgba(0, 255, 245, 0.15)', border: 'rgba(0, 255, 245, 0.4)', glow: 'rgba(0, 255, 245, 0.3)' },
    { bg: 'rgba(191, 0, 255, 0.15)', border: 'rgba(191, 0, 255, 0.4)', glow: 'rgba(191, 0, 255, 0.3)' },
    { bg: 'rgba(255, 0, 170, 0.15)', border: 'rgba(255, 0, 170, 0.4)', glow: 'rgba(255, 0, 170, 0.3)' },
    { bg: 'rgba(0, 255, 136, 0.15)', border: 'rgba(0, 255, 136, 0.4)', glow: 'rgba(0, 255, 136, 0.3)' },
    { bg: 'rgba(0, 136, 255, 0.15)', border: 'rgba(0, 136, 255, 0.4)', glow: 'rgba(0, 136, 255, 0.3)' },
  ];
  const color = colors[index % colors.length];
  
  return (
    <motion.div
      className="skill-badge"
      style={{
        background: color.bg,
        borderColor: color.border,
        boxShadow: `0 0 15px ${color.glow}`,
      }}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: `0 0 25px ${color.glow}, 0 0 50px ${color.glow}`
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <span className="skill-badge-dot" style={{ background: color.border }} />
      {skill}
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// EXPERTISE</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">Technologies and tools I work with to build robust solutions.</p>
        </div>
      </AnimatedSection>

      <TechMarquee />

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.08}>
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-badges">
                {cat.skills.map((skill, i) => (
                  <SkillBadge key={skill} skill={skill} index={i} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

const skillCategories = [
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Platforms',
    skills: ['AWS', 'Azure', 'GCP', 'EC2', 'VPC', 'S3', 'Lambda', 'ECS', 'EKS', 'Route53', 'IAM', 'CloudFront']
  },
  {
    icon: <Layers size={24} />,
    title: 'Infrastructure as Code',
    skills: ['Terraform', 'CloudFormation', 'Pulumi', 'Ansible', 'Chef', 'Puppet', 'Vault', 'Consul', 'Nomad']
  },
  {
    icon: <GitBranch size={24} />,
    title: 'CI/CD & DevOps',
    skills: ['Git', 'GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD', 'Tekton', 'Spinnaker', 'Docker', 'Helm']
  },
  {
    icon: <Monitor size={24} />,
    title: 'Containers & K8s',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Kustomize', 'Istio', 'Linkerd', 'Harbor', 'Nexus', 'Artifactory']
  },
  {
    icon: <DbIcon size={24} />,
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Aurora', 'Cassandra', 'Neo4j']
  },
  {
    icon: <Cpu size={24} />,
    title: 'Monitoring & Observability',
    skills: ['CloudWatch', 'Datadog', 'Prometheus', 'Grafana', 'Splunk', 'ELK Stack', 'Jaeger', 'PagerDuty']
  },
  {
    icon: <Lock size={24} />,
    title: 'Security & Compliance',
    skills: ['WAF', 'Shield', 'GuardDuty', 'KMS', 'ACM', 'SOC 2', 'ISO 27001', 'HIPAA', 'PCI-DSS', 'VAPT']
  },
  {
    icon: <Code size={24} />,
    title: 'Programming',
    skills: ['Bash', 'Python', 'Go', 'TypeScript', 'JavaScript', 'YAML', 'HCL', 'PowerShell', 'Node.js']
  }
];

function Certifications() {
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

const certifications = [
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'AWS Developer Associate', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
  { name: 'DevOps Engineer', issuer: 'HashiCorp Terraform', year: '2022' },
];

function Contact() {
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

      <div className="contact-grid">
        <AnimatedSection delay={0.1}>
          <div className="glass-card contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to 
              be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-item">
              <div className="contact-icon"><Mail size={22} /></div>
              <div className="contact-details">
                <span>Email</span>
                <small>abhilash.makode@outlook.com</small>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Phone size={22} /></div>
              <div className="contact-details">
                <span>Phone</span>
                <small>+91 8767543039</small>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><MapPin size={22} /></div>
              <div className="contact-details">
                <span>Location</span>
                <small>Hyderabad, India (Open to Remote)</small>
              </div>
            </div>

            <div className="availability-badge">
              <span className="availability-dot" />
              <span>Available for hire</span>
            </div>

            <div className="social-links">
              <motion.a 
                href="https://github.com/abhilashmakode" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={22} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/abhilashmakode" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a 
                href="mailto:abhilash.makode@outlook.com" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="full-time">Full-time Position</option>
                  <option value="contract">Contract Work</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', justifyContent: 'center' }}
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
              </motion.button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
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

function App() {
  return (
    <div className="app">
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      <div className="bg-gradient" />
      <div className="bg-grid" />
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
