import { ScrollProgress } from './components/ui/ScrollProgress';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Architecture } from './components/sections/Architecture';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';
import { Resume } from './components/sections/Resume';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navigation />

      <div className="bg-gradient" />
      <div className="bg-grid" />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Architecture />
        <Testimonials />
        <Blog />
        <Resume />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
