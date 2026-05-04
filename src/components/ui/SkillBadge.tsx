import { motion } from 'framer-motion';
import type { SkillItem } from '../../types';

interface SkillBadgeProps {
  skill: SkillItem;
  index: number;
}

const colors = [
  { bg: 'rgba(0, 212, 255, 0.15)', border: 'rgba(0, 212, 255, 0.4)', glow: 'rgba(0, 212, 255, 0.3)' },
  { bg: 'rgba(155, 92, 246, 0.15)', border: 'rgba(155, 92, 246, 0.4)', glow: 'rgba(155, 92, 246, 0.3)' },
  { bg: 'rgba(224, 64, 160, 0.15)', border: 'rgba(224, 64, 160, 0.4)', glow: 'rgba(224, 64, 160, 0.3)' },
  { bg: 'rgba(0, 204, 112, 0.15)', border: 'rgba(0, 204, 112, 0.4)', glow: 'rgba(0, 204, 112, 0.3)' },
  { bg: 'rgba(0, 112, 224, 0.15)', border: 'rgba(0, 112, 224, 0.4)', glow: 'rgba(0, 112, 224, 0.3)' },
];

export function SkillBadge({ skill, index }: SkillBadgeProps) {
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
      <span className="skill-badge-icon">{skill.icon}</span>
      {skill.name}
    </motion.div>
  );
}
