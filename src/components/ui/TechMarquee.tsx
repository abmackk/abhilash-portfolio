import { techStack } from '../../data/techStack';

export function TechMarquee() {
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
