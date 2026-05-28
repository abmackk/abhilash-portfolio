# Graph Report - .  (2026-05-11)

## Corpus Check
- 43 files · ~80,310 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 198 nodes · 269 edges · 26 communities (18 shown, 8 thin omitted)
- Extraction: 90% EXTRACTED · 9% INFERRED · 1% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core Layout & Sections|Core Layout & Sections]]
- [[_COMMUNITY_Project Docs & Design System|Project Docs & Design System]]
- [[_COMMUNITY_Portfolio Content Types|Portfolio Content Types]]
- [[_COMMUNITY_Tech Stack Icons|Tech Stack Icons]]
- [[_COMMUNITY_Page Section Abstractions|Page Section Abstractions]]
- [[_COMMUNITY_Site Entry Points & SEO|Site Entry Points & SEO]]
- [[_COMMUNITY_Hero & Animation Hooks|Hero & Animation Hooks]]
- [[_COMMUNITY_Data Layer Imports|Data Layer Imports]]
- [[_COMMUNITY_AWS Architecture Diagram|AWS Architecture Diagram]]
- [[_COMMUNITY_Profile Image|Profile Image]]
- [[_COMMUNITY_Resume Generator|Resume Generator]]
- [[_COMMUNITY_Blog Articles|Blog Articles]]
- [[_COMMUNITY_UI Component Hooks|UI Component Hooks]]
- [[_COMMUNITY_App Entry Points|App Entry Points]]
- [[_COMMUNITY_Architecture Subgraph|Architecture Subgraph]]
- [[_COMMUNITY_Tech Stack Data|Tech Stack Data]]
- [[_COMMUNITY_Resume Section|Resume Section]]
- [[_COMMUNITY_Vitest Config Node|Vitest Config Node]]
- [[_COMMUNITY_ESLint Config Node|ESLint Config Node]]
- [[_COMMUNITY_Vite Config Node|Vite Config Node]]
- [[_COMMUNITY_Roles Data|Roles Data]]
- [[_COMMUNITY_Certifications Section|Certifications Section]]
- [[_COMMUNITY_Testimonials Section|Testimonials Section]]

## God Nodes (most connected - your core abstractions)
1. `AnimatedSection()` - 11 edges
2. `Navigation Bar` - 8 edges
3. `Type Definitions` - 7 edges
4. `Skill Section Layout Options` - 7 edges
5. `Complete Project Reference` - 7 edges
6. `Hero Section` - 5 edges
7. `Footer Section` - 5 edges
8. `Color Palette Previews` - 5 edges
9. `HTML Entry Point` - 5 edges
10. `Agent Guidelines` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Resume Skills Section` --semantically_similar_to--> `Data Layer`  [INFERRED] [semantically similar]
  public/Abhilash_Makode_Resume.pdf → PROJECT.md
- `Tech Stack Reference` --semantically_similar_to--> `Complete Project Reference`  [INFERRED] [semantically similar]
  AGENTS.md → PROJECT.md
- `Midnight Ember (Option 04)` --semantically_similar_to--> `Midnight Ember Palette (Chosen)`  [INFERRED] [semantically similar]
  color-palettes.html → PROJECT.md
- `Neon Multicolor Theme` --semantically_similar_to--> `Midnight Ember Palette (Chosen)`  [INFERRED] [semantically similar]
  AGENTS.md → PROJECT.md
- `Docker Setup` --conceptually_related_to--> `Git Branch Rule: Use opencode`  [AMBIGUOUS]
  PROJECT.md → AGENTS.md

## Hyperedges (group relationships)
- **Portfolio Data Layer** — src_types_index, src_data_skillcategories, src_data_resume, src_data_techstack, src_data_certifications, src_data_roles, src_data_projects, src_data_testimonials, src_data_experiences, src_data_articles [INFERRED 0.85]
- **Animation System** — src_hooks_useanimatedcounter, src_hooks_usetypewriter, src_components_ui_statcounter, src_components_ui_animatedsection, src_components_ui_scrollprogress [INFERRED 0.80]
- **Build Toolchain** — vitest_config, eslint_config, vite_config [INFERRED 0.90]
- **Portfolio Section Components** — hero_heroSection, about_aboutSection, experience_experienceSection, projects_projectsSection, blog_blogSection, skills_skillsSection, certifications_certificationsSection, testimonials_testimonialsSection, contact_contactSection, resume_resumeSection, architecture_architectureSection [INFERRED 0.90]
- **Navigation Link System** — navigation_navigationBar, navigation_sectionObservers, footer_footerSection, hero_heroSection, about_aboutSection, experience_experienceSection, projects_projectsSection, blog_blogSection, skills_skillsSection, contact_contactSection [INFERRED 0.85]
- **AWS Cloud Architecture Diagram** — architecture_architectureSection, architecture_serviceNode, architecture_awsServices [EXTRACTED 1.00]
- **Color Palette Design Exploration** — color_palettes_synthwave_sunset, color_palettes_matrix_green, color_palettes_ocean_depths, color_palettes_midnight_ember [EXTRACTED 1.00]
- **Skill Section Layout Alternatives** — skill_layouts_hero_grid, skill_layouts_big_card_badge_grid, skill_layouts_category_row_stripes, skill_layouts_hub_spoke, skill_layouts_sectioned_groups, skill_layouts_tree_view [EXTRACTED 1.00]
- **Portfolio Core Documents** — index_html_entry, AGENTS_agents_guidelines, PROJECT_project_reference [INFERRED 0.85]
- **Profile Photo Usage in Portfolio** — profile_abhilash_makode, profile_usage_about, profile_usage_portfolio [EXTRACTED 1.00]

## Communities (26 total, 8 thin omitted)

### Community 0 - "Core Layout & Sections"
Cohesion: 0.11
Nodes (16): experiences, skillCategories, Footer(), Navigation(), navItems, About(), Contact(), contactMethods (+8 more)

### Community 1 - "Project Docs & Design System"
Cohesion: 0.08
Nodes (24): Agent Guidelines, Design Preferences, Git Branch Rule: Use opencode, Tech Stack Reference, CI/CD Pipeline, Data Layer, Design System (Midnight Ember), Docker Setup (+16 more)

### Community 2 - "Portfolio Content Types"
Cohesion: 0.13
Nodes (13): certifications, projects, testimonials, Certifications(), Projects(), Testimonials(), Certification, Project (+5 more)

### Community 3 - "Tech Stack Icons"
Cohesion: 0.2
Nodes (17): AWSIcon(), AzureIcon(), DockerIcon(), GCPIcon(), GitHubIcon(), GoIcon(), GrafanaIcon(), JenkinsIcon() (+9 more)

### Community 4 - "Page Section Abstractions"
Cohesion: 0.2
Nodes (14): About Section, Blog Section, Contact Section, Formspree API Endpoint, Experience Section, Footer Section, Hero Section, Stat Counter Component (+6 more)

### Community 5 - "Site Entry Points & SEO"
Cohesion: 0.15
Nodes (10): Custom 404 Error Page, 404 Page Gradient Design, Abhilash Makode (Person Schema), HTML Entry Point, JSON-LD Structured Data, SEO Meta Tags, Resume Certifications Section, Resume Education Section (+2 more)

### Community 6 - "Hero & Animation Hooks"
Cohesion: 0.26
Nodes (6): roles, useAnimatedCounter(), useTypewriter(), Hero(), StatCounter(), StatCounterProps

### Community 7 - "Data Layer Imports"
Cohesion: 0.2
Nodes (11): CustomIcons Component, Articles Data, Certifications Data, Experiences Data, Projects Data, Resume Data, Skill Categories Data, Tech Stack Data (+3 more)

### Community 8 - "AWS Architecture Diagram"
Cohesion: 0.22
Nodes (7): Architecture(), initialEdges, initialNodes, nodeColors, NodeData, nodeTypes, serviceIcons

### Community 9 - "Profile Image"
Cohesion: 0.29
Nodes (7): Abhilash Makode Profile Photo, Professional Attire, Portrait Background Setting, Portrait Subject (Abhilash Makode), Profile Image Properties (PNG, favicon, OG), About Section Profile Display, Favicon & Social Share Image

### Community 10 - "Resume Generator"
Cohesion: 0.47
Nodes (4): resumeData, ResumeData, downloadResumeAsHTML(), generateResumeHTML()

### Community 11 - "Blog Articles"
Cohesion: 0.47
Nodes (4): articles, writingPlatforms, Blog(), Article

### Community 12 - "UI Component Hooks"
Cohesion: 0.5
Nodes (4): AnimatedSection Component, StatCounter Component, useAnimatedCounter Hook, useTypewriter Hook

### Community 13 - "App Entry Points"
Cohesion: 0.67
Nodes (3): App Root Component, ScrollProgress Component, App Entry Point

### Community 14 - "Architecture Subgraph"
Cohesion: 0.67
Nodes (3): Architecture Section, AWS Service Topology (Route53→CloudFront→WAF→ALB→ECS/Lambda→RDS/ElastiCache/S3/CloudWatch + IAM + CodePipeline), Custom Service Node

## Ambiguous Edges - Review These
- `Git Branch Rule: Use opencode` → `Docker Setup`  [AMBIGUOUS]
  PROJECT.md · relation: conceptually_related_to
- `Portrait Subject (Abhilash Makode)` → `Professional Attire`  [AMBIGUOUS]
  public/profile.png · relation: conceptually_related_to
- `Portrait Subject (Abhilash Makode)` → `Portrait Background Setting`  [AMBIGUOUS]
  public/profile.png · relation: conceptually_related_to

## Knowledge Gaps
- **60 isolated node(s):** `techStack`, `StatCounterProps`, `AnimatedSectionProps`, `serviceIcons`, `nodeColors` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Git Branch Rule: Use opencode` and `Docker Setup`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Portrait Subject (Abhilash Makode)` and `Professional Attire`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Portrait Subject (Abhilash Makode)` and `Portrait Background Setting`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `AnimatedSection()` connect `Core Layout & Sections` to `AWS Architecture Diagram`, `Portfolio Content Types`, `Blog Articles`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `Type Definitions` (e.g. with `Skill Categories Data` and `Resume Data`) actually correct?**
  _`Type Definitions` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `techStack`, `StatCounterProps`, `AnimatedSectionProps` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Core Layout & Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._