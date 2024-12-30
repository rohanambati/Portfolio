import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications/Certifications';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;