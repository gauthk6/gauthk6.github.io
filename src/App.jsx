import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ResearchInterests from './components/ResearchInterests';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Header />
      <main>
        <About />
        <ResearchInterests />
        <Experience />
        <Publications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
