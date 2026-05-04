import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const colors = [
  { bg: 'rgba(0, 255, 245, 0.15)', border: 'rgba(0, 255, 245, 0.4)', glow: 'rgba(0, 255, 245, 0.3)' },
  { bg: 'rgba(191, 0, 255, 0.15)', border: 'rgba(191, 0, 255, 0.4)', glow: 'rgba(191, 0, 255, 0.3)' },
  { bg: 'rgba(255, 0, 170, 0.15)', border: 'rgba(255, 0, 170, 0.4)', glow: 'rgba(255, 0, 170, 0.3)' },
  { bg: 'rgba(0, 255, 136, 0.15)', border: 'rgba(0, 255, 136, 0.4)', glow: 'rgba(0, 255, 136, 0.3)' },
  { bg: 'rgba(0, 136, 255, 0.15)', border: 'rgba(0, 136, 255, 0.4)', glow: 'rgba(0, 136, 255, 0.3)' },
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
      <span className="skill-badge-dot" style={{ background: color.border }} />
      {skill}
    </motion.div>
  );
}
