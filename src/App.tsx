import { useState } from 'react';
import Header from './components/Header.tsx';
import Home from './components/sections/Home.tsx';
import About from './components/sections/About.tsx';
import Skills from './components/sections/Skills.tsx';
import Projects from './components/sections/Projects.tsx';
import Experience from './components/sections/Experience.tsx';
import Education from './components/sections/Education.tsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home/>;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pt-16">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}

export default App;