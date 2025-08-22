import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Hero = ({ onNavClick }) => {
  return (
    <section id="home" className="relative bg-blue-50 pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health, Our Priority.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Providing compassionate, high-quality healthcare for our community. Our expert team is dedicated to your well-being, offering advanced medical treatments and personalized care.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Book an Appointment
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); onNavClick('services'); }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg border border-blue-200 transform hover:scale-105"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
                <img 
                    src="https://placehold.co/600x500/E9F5FF/3B82F6?text=Dedicated+Doctors" 
                    alt="Doctors providing care" 
                    className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-lg animate-pulse">
                    <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-3 rounded-full">
                            <ShieldCheck className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">100% Safe</p>
                            <p className="text-sm text-gray-500">Trusted Care</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
