import React, { useState } from 'react';

// Import all the components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header onNavClick={handleNavClick} />
      <main>
        <Hero onNavClick={handleNavClick} />
        <Services />
        <AboutUs />
        <Testimonials />
        <Doctors />
        <Contact />
        <Admin />
      </main>
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;
