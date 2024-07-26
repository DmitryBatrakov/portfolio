// import React from 'react';
// import './App.css';
// import Skills from './modules/components/Skills/Skills';
// import Greetings from './modules/components/greetings-section/Greetings'
// import WorksData from './modules/components/works-section/worksData/WorksData';
// import AboutMe from './modules/components/about-me/AboutMe';
// import Footer from './modules/components/footer/Footer';
// import { Navigate, Router } from 'react-router';
// // import HomePage from './modules/pages/home-page/HomePage';
// // import WorksList from './modules/components/works-section/worksList/WorksList';
// // import SkillAndTools from './modules/components/Skills/SkillAndTools';

// function App() {
//   return (
//     <div className="App">

//           <Greetings />
//           <WorksData path="/works" />
//           <Skills />
//           <AboutMe />
//           <Footer />

//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import './App.css';
import Skills from './modules/components/Skills/Skills';
import Greetings from './modules/components/greetings-section/Greetings';
import WorksData from './modules/components/works-section/worksData/WorksData';
import AboutMe from './modules/components/about-me/AboutMe';
import Footer from './modules/components/footer/Footer';
import CodeString from './modules/components/greetings-section/greatings-data/CodeString';
import GreetingsData from './modules/components/greetings-section/greatings-data/GreetingsData';
import Header from './modules/components/header/Header';

function App() {
  return (
    <div className="App">
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
