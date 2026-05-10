import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Footer from './components/Layout/Footer';
import ParticleBackground from './components/Layout/ParticleBackground';
import LoadingScreen from './components/Layout/LoadingScreen';

// Lazy load sections
const About = lazy(() => import('./components/Sections/About'));
const Skills = lazy(() => import('./components/Sections/Skills'));
const Experience = lazy(() => import('./components/Sections/Experience'));
const Projects = lazy(() => import('./components/Sections/Projects'));
const Education = lazy(() => import('./components/Sections/Education'));
const Contact = lazy(() => import('./components/Sections/Contact'));

const App: React.FC = (): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-light font-sans selection:bg-primary/30 selection:text-primary">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Footer />

      {/* Loading overlay — sits above everything */}
      {loading && <LoadingScreen onDismiss={() => setLoading(false)} />}
    </div>
  );
};

export default App;
