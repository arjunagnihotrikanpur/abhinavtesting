import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { db, Timestamp } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.department) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError("Please enter a valid email address.");
        return;
    }
    setError(null);
    setIsSubmitting(true);
    
    try {
      if (!db) {
        throw new Error("Database is not initialized.");
      }
      await addDoc(collection(db, "appointments"), {
        ...formData,
        submittedAt: Timestamp.fromDate(new Date()),
        status: "Pending"
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error adding document: ", err);
      if (err.code === 'unavailable') {
        setError("Cannot connect to the server. Please check your internet connection and try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
        <section id="contact" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg text-center">
                    <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Appointment Request Sent!</h2>
                    <p className="text-gray-600">
                        Thank you, {formData.name}. Your request has been received. We will contact you at {formData.email} or {formData.phone} shortly.
                    </p>
                </div>
            </div>
        </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Book an Appointment</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                We're here to help. Fill out the form below.
            </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                    <select name="department" value={formData.department} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-500">
                        <option value="">Select Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Pediatrics">Pediatrics</option>
                    </select>
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message (Optional)" rows="5" className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
                {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg text-center mb-4">{error}</p>}
                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Booking...' : 'Submit Request'}
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
