import { PageLoader } from './components/layout/PageLoader';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Resume } from './components/sections/Resume';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import './App.css';

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
        <Resume />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
