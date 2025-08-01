import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main className="bg-background text-foreground overflow-x-hidden">
        <section id="home" >
          <Hero />
        </section>

        <section id="about" className="py-16 bg-background">
          <About />
        </section>

        <section id="projects" >
          <Projects />
        </section>

        <section id="skills" >
          <Skills />
        </section>

        <section id="resume" >
          <Resume />
        </section>

        <section id="contact" >
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
