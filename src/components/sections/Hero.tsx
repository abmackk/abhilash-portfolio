import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';

import { useTextScramble } from '../../hooks/useTextScramble';
import { useTypewriter } from '../../hooks/useTypewriter';
import { roles } from '../../data/roles';
import { MagneticButton } from '../ui/MagneticButton';
import { StatCounter } from '../ui/StatCounter';
import { ParticleCanvas } from '../ui/ParticleCanvas';

export function Hero() {
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
          AWS Cloud Engineer & DevOps Specialist with 5+ years of experience{' '}
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
