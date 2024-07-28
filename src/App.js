import React from 'react';
import './App.css';
import './modules/components/animations/animations.scss';
import Skills from './modules/components/Skills/Skills';
import Greetings from './modules/components/greetings-section/Greetings';
import WorksData from './modules/components/works-section/worksData/WorksData';
import AboutMe from './modules/components/about-me/AboutMe';
import Footer from './modules/components/footer/Footer';
import Header from './modules/components/header/Header';


function App() {
  return (
    <div className="App">
      <section id="header" className="sectionApp">
        <Header />
      </section>
      <section id="greetings" className="sectionApp">
        <Greetings />
      </section>
      <section id="works" className="sectionApp">
        <WorksData />
      </section>
      <section id="skills" className="sectionApp">
        <Skills />
      </section>
      <section id="about" className="sectionApp">
        <AboutMe />
      </section>
      <section id="contact" className="sectionApp">
        <Footer />
      </section>
    </div>
  );
}

export default App;
