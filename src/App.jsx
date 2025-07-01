import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-primary text-white overflow-x-hidden">
        <section id="home" >
          <Hero />
        </section>

        <section id="about" className="py-16 bg-primary">
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
