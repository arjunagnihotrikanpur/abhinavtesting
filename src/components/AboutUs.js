import React from 'react';
import { ShieldCheck, Stethoscope, HeartPulse } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="about" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                        <img 
                            src="https://placehold.co/550x450/D1E7FF/3B82F6?text=Our+Hospital" 
                            alt="MediCare Hospital Building"
                            className="rounded-3xl shadow-2xl w-full"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-lg">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About MediCare: A Legacy of Healing
                            </h2>
                            <p className="text-gray-600 mb-4">
                                For over 25 years, MediCare has been a cornerstone of health in our community. Our mission is to provide exceptional, patient-centered care with a commitment to compassion and innovation.
                            </p>
                            <p className="text-gray-600 mb-6">
                                We believe in a holistic approach to healthcare, combining state-of-the-art technology with a human touch. Our dedicated team of professionals works tirelessly to ensure the best possible outcomes for every patient.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                    <span><span className="font-semibold">Patient-First Philosophy:</span> Your needs and comfort are at the heart of everything we do.</span>
                                </li>
                                <li className="flex items-start">
                                    <Stethoscope className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                    <span><span className="font-semibold">Expert Medical Team:</span> Board-certified specialists and compassionate nursing staff.</span>
                                </li>
                                <li className="flex items-start">
                                    <HeartPulse className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                    <span><span className="font-semibold">Advanced Technology:</span> Utilizing the latest medical equipment for accurate diagnosis and treatment.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
