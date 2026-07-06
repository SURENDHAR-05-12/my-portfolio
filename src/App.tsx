import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div>
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
