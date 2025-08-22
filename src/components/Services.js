import React from 'react';
import { Stethoscope, HeartPulse, Brain, Bone, Baby, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    { icon: <Stethoscope size={32} />, title: 'General Medicine', description: 'Comprehensive primary care for all ages.' },
    { icon: <HeartPulse size={32} />, title: 'Cardiology', description: 'Expert heart care and advanced treatment.' },
    { icon: <Brain size={32} />, title: 'Neurology', description: 'Specialized care for brain and nervous system.' },
    { icon: <Bone size={32} />, title: 'Orthopedics', description: 'Treatment for bones, joints, and muscles.' },
    { icon: <Baby size={32} />, title: 'Pediatrics', description: 'Dedicated healthcare for children.' },
    { icon: <ShieldCheck size={32} />, title: 'Emergency Care', description: '24/7 critical care for urgent medical needs.' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Medical Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a wide range of specialized medical services to meet the needs of our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
