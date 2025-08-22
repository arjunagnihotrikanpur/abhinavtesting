import React, { useState, useEffect } from 'react';
import { HeartPulse } from 'lucide-react';

const Header = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'services', title: 'Services' },
    { id: 'about', title: 'About Us' },
    { id: 'doctors', title: 'Doctors' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={() => onNavClick('home')} className="flex items-center text-2xl font-bold text-blue-600">
              <HeartPulse className="w-8 h-8 mr-2" />
              <span>MediCare</span>
            </a>
          </div>
          
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); onNavClick(link.id); }}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
             <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}
              className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm"
            >
              Appointment
            </a>
            <div className="md:hidden ml-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onNavClick(link.id); }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {link.title}
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-200">
             <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onNavClick('contact'); }}
              className="w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm"
            >
              Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
