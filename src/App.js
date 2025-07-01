import React, { useEffect } from 'react';
import './App.css';
import './components/animations.css';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certificates from'./components/Certifications';



function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.about, .skills, .projects, .hero')
        .forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
          }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
