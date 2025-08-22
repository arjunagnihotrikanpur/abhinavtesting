import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, avatar }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
        <div className="flex-grow mb-4">
            <div className="flex mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-gray-600 italic">"{quote}"</p>
        </div>
        <div className="flex items-center">
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4"/>
            <div>
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        { quote: "The care I received at MediCare was exceptional. The doctors and nurses were incredibly supportive and professional throughout my recovery.", name: "Sarah L.", role: "Cardiology Patient", avatar: "https://placehold.co/100x100/E9F5FF/3B82F6?text=SL" },
        { quote: "My son was treated in the pediatrics department, and the staff made a scary experience comfortable and reassuring for him. Thank you, MediCare!", name: "Michael B.", role: "Parent", avatar: "https://placehold.co/100x100/E9F5FF/3B82F6?text=MB" },
        { quote: "From the emergency room to the follow-up appointments, every step was handled with utmost efficiency and compassion. Highly recommend this hospital.", name: "Jessica T.", role: "Orthopedics Patient", avatar: "https://placehold.co/100x100/E9F5FF/3B82F6?text=JT" },
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Patients Say</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Real stories from people we've had the privilege to care for.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
