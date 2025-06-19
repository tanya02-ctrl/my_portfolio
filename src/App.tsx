// File: src/App.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-smooth">
        <Navbar />
        <main>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="certifications">
            <Certifications />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
