import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ToTopButton from './components/ToTopButton/ToTopButton';
import './App.css';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Element id='hero' name='hero'>
        <Hero />
      </Element>
      <About />
      <Projects />
      <Contact />
      <ToTopButton />
    </>
  );
}

export default App;
