import { resumeData } from '../data/resume';

export function generateResumeHTML(): string {
  const { personalInfo, experience, education, skills, certifications, projects } = resumeData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Abhilash Makode - Resume</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; background: white; padding: 40px; max-width: 800px; margin: 0 auto; }
        h1 { font-size: 2.5rem; color: #00fff5; margin-bottom: 0.5rem; }
        h2 { font-size: 1.5rem; color: #0a0a1f; border-bottom: 2px solid #00fff5; padding-bottom: 0.5rem; margin-top: 2rem; margin-bottom: 1rem; }
        h3 { font-size: 1.2rem; color: #333; margin-top: 1rem; }
        .contact-info { display: flex; gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem; color: #666; }
        .contact-info span { display: flex; align-items: center; gap: 0.5rem; }
        .section { margin-bottom: 2rem; }
        .item { margin-bottom: 1.5rem; }
        .item-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }
        .item-title { font-weight: 600; color: #333; }
        .item-date { color: #00fff5; font-size: 0.9rem; }
        .item-subtitle { color: #666; font-size: 0.95rem; margin-bottom: 0.5rem; }
        .item-desc { color: #555; font-size: 0.95rem; }
        .skills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill-tag { background: #f0f0f0; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.85rem; }
        .cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .cert-item { background: #f9f9f9; padding: 1rem; border-radius: 8px; }
        ul { margin-left: 1.5rem; }
        li { margin-bottom: 0.3rem; }
        @media print { body { padding: 20px; } }
      </style>
    </head>
    <body>
      <header>
        <h1>${personalInfo.name}</h1>
        <p style="font-size: 1.2rem; color: #666;">${personalInfo.title}</p>
        <div class="contact-info">
          <span>📧 ${personalInfo.email}</span>
          <span>📞 ${personalInfo.phone}</span>
          <span>📍 ${personalInfo.location}</span>
        </div>
      </header>

      <section class="section">
        <h2>Professional Summary</h2>
        <p>${personalInfo.summary}</p>
      </section>

      <section class="section">
        <h2>Experience</h2>
        ${experience.map(exp => `
          <div class="item">
            <div class="item-header">
              <div>
                <div class="item-title">${exp.title}</div>
                <div class="item-subtitle">${exp.company} • ${exp.location}</div>
              </div>
              <div class="item-date">${exp.duration}</div>
            </div>
            <p class="item-desc">${exp.desc}</p>
          </div>
        `).join('')}
      </section>

      <section class="section">
        <h2>Education</h2>
        ${education.map(edu => `
          <div class="item">
            <div class="item-header">
              <div class="item-title">${edu.degree}</div>
              <div class="item-date">${edu.year}</div>
            </div>
            <p class="item-subtitle">${edu.institution}</p>
          </div>
        `).join('')}
      </section>

      <section class="section">
        <h2>Skills</h2>
        <div class="skills">
          ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </section>

      <section class="section">
        <h2>Certifications</h2>
        <div class="cert-grid">
          ${certifications.map(cert => `
            <div class="cert-item">
              <div style="font-weight: 600;">${cert.name}</div>
              <div style="font-size: 0.9rem; color: #666;">${cert.issuer}</div>
              <div style="font-size: 0.85rem; color: #00fff5; margin-top: 0.3rem;">${cert.year}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="section">
        <h2>Key Projects</h2>
        ${projects.map(proj => `
          <div class="item">
            <div class="item-title">${proj.title}</div>
            <p class="item-subtitle">${proj.tagline}</p>
            <div class="skills">
              ${proj.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </section>
    </body>
    </html>
  `;
}

export function downloadResumeAsHTML(): void {
  const html = generateResumeHTML();
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Abhilash_Makode_Resume.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
