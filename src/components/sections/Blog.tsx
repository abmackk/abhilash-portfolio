import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { articles, writingPlatforms } from '../../data/articles';

export function Blog() {
  return (
    <section id="blog">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// ARTICLES</div>
          <h2 className="section-title">Latest Writings</h2>
          <p className="section-desc">Thoughts on cloud architecture, DevOps practices, and infrastructure automation.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="blog-platforms">
          {writingPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-platform-link"
            >
              <span className="blog-platform-icon">{platform.icon}</span>
              <span>{platform.name}</span>
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </AnimatedSection>

      <div className="blog-grid">
        {articles.map((article, idx) => (
          <AnimatedSection key={idx} delay={0.1 + idx * 0.08}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <div className="blog-card-top">
                <div className="blog-meta">
                  <Calendar size={12} />
                  <span>{article.date}</span>
                </div>
                <span className="blog-platform-tag">{article.platform}</span>
              </div>
              <h3 className="blog-title">{article.title}</h3>
              <p className="blog-desc">{article.description}</p>
              <div className="blog-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog-read-more">
                <span>Read Article</span>
                <ExternalLink size={14} />
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
