import React from 'react';

const DoctorCard = ({ name, specialty, image }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
        <div className="relative">
            <img src={image} alt={`Dr. ${name}`} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-blue-200">{specialty}</p>
            </div>
        </div>
    </div>
);

const Doctors = () => {
    const doctors = [
        { name: 'Dr. Emily Carter', specialty: 'Chief Cardiologist', image: 'https://placehold.co/400x500/E9F5FF/3B82F6?text=Dr.+Carter' },
        { name: 'Dr. Ben Adams', specialty: 'Lead Neurologist', image: 'https://placehold.co/400x500/D1E7FF/3B82F6?text=Dr.+Adams' },
        { name: 'Dr. Olivia Chen', specialty: 'Head of Pediatrics', image: 'https://placehold.co/400x500/E9F5FF/3B82F6?text=Dr.+Chen' },
        { name: 'Dr. Marcus Reid', specialty: 'Senior Orthopedic Surgeon', image: 'https://placehold.co/400x500/D1E7FF/3B82F6?text=Dr.+Reid' },
    ];

    return (
        <section id="doctors" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Expert Doctors</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our team of highly skilled and experienced doctors is here to provide you with the best care.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <DoctorCard key={index} {...doctor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
