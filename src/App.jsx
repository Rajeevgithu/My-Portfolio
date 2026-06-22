import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';
import HireMeButton from './components/HireMeButton';
import ScrollToSectionOnRoute from './components/ScrollToSectionOnRoute';

import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function Portfolio() {
  return (
    <>
      <ScrollToSectionOnRoute />
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main-content')?.focus();
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#7C6CF6] focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>
      <ParallaxBackground />
      <Navbar />
      <HireMeButton />

      <main id="main-content" tabIndex={-1} className="bg-background text-foreground overflow-x-hidden outline-none">
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/:section" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
