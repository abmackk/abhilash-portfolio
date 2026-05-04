import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { TechMarquee } from '../ui/TechMarquee';
import { SkillBadge } from '../ui/SkillBadge';
import { skillCategories } from '../../data/skillCategories';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

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

      <AnimatedSection>
        <div className="skills-tabs">
          {skillCategories.map((cat, idx) => (
            <motion.button
              key={idx}
              className={`skill-tab ${activeCategory === idx ? 'active' : ''}`}
              onClick={() => setActiveCategory(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="skill-tab-icon">{cat.icon}</span>
              <span className="skill-tab-title">{cat.title}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="skills-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="skills-panel-header">
            <span className="skill-tab-icon large">{skillCategories[activeCategory].icon}</span>
            <h3>{skillCategories[activeCategory].title}</h3>
          </div>
          <div className="skills-panel-grid">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <SkillBadge key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
