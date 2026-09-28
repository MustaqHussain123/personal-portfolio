import { useState } from 'react';
import LiquidBackground from './components/LiquidBackground.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Cursor from './components/Cursor.jsx';
import Preloader from './components/Preloader.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import StoryBand from './components/StoryBand.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Engineering from './components/Engineering.jsx';
import Projects from './components/Projects.jsx';
import EduLang from './components/EduLang.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const portrait = '/assets/portrait.jpg';

export default function App() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      <LiquidBackground />
      <ProgressBar />
      <Cursor />
      <Preloader onDone={() => setHeroReady(true)} />
      <Nav />
      <main>
        <Hero portraitSrc={portrait} ready={heroReady} />
        <About />
        <StoryBand />
        <Skills />
        <Experience />
        <Engineering />
        <Projects />
        <EduLang />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
