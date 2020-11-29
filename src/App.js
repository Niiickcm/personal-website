import React from 'react';
import Start from './Componets/Pages/Start'
import Skills from './Componets/Pages/Skills'
import Projects from './Componets/Pages/Projects'
import Formation from './Componets/Pages/Formation'
import Scroll from './Componets/Scroll'
import About from './Componets/Pages/About';


function App() {
  return (
    <>
      <Scroll/>
      <Start />
      <Skills />
      <Formation />
      <Projects />
      <About/>
  
    </>
  );
}

export default App;
