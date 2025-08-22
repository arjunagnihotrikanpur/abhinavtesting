import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { Shield, LogIn, User, Mail, Phone, Download } from 'lucide-react';

// NOTE: This is a simple, hardcoded password for demonstration purposes.
const ADMIN_PASSWORD = "password123";

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    const handleExportCSV = () => {
        if (appointments.length === 0) {
            alert("No appointments to export.");
            return;
        }

        const headers = ['Patient Name', 'Email', 'Phone', 'Department', 'Message', 'Status', 'Submitted On'];
        
        const csvRows = appointments.map(appt => {
            const escapeCsv = (str) => `"${String(str).replace(/"/g, '""')}"`;
            return [
                escapeCsv(appt.name),
                escapeCsv(appt.email),
                escapeCsv(appt.phone),
                escapeCsv(appt.department),
                escapeCsv(appt.message),
                escapeCsv(appt.status),
                escapeCsv(appt.submittedAt)
            ].join(',');
        });

        const csvString = [headers.join(','), ...csvRows].join('\n');

        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `appointments_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            const fetchAppointments = async () => {
                setIsLoading(true);
                setFetchError('');
                try {
                    const querySnapshot = await getDocs(collection(db, "appointments"));
                    const appointmentsData = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                        submittedAt: doc.data().submittedAt.toDate().toLocaleString()
                    }));
                    setAppointments(appointmentsData);
                } catch (err) {
                    console.error("Error fetching appointments: ", err);
                    setFetchError('Failed to load appointments. Please check your connection and try again.');
                } finally {
                    setIsLoading(false);
                }
            };
            fetchAppointments();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <section id="admin" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
                        <div className="text-center mb-6">
                            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
                            <p className="text-gray-500">Please enter the password to view appointments.</p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                            {error && <p className="text-red-500 text-sm text-center mt-3">{error}</p>}
                            <button
                                type="submit"
                                className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                            >
                                <LogIn className="w-5 h-5 mr-2" />
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="admin-dashboard" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Appointment Dashboard</h2>
                        <p className="text-lg text-gray-600 mt-2">Viewing all submitted appointment requests.</p>
                    </div>
                    <button
                        onClick={handleExportCSV}
                        className="bg-green-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center shadow-md"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Export to CSV
                    </button>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    {isLoading && <p className="text-center text-gray-600">Loading appointments...</p>}
                    {fetchError && <p className="text-center text-red-600 bg-red-100 p-3 rounded-lg">{fetchError}</p>}
                    
                    {!isLoading && !fetchError && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted On</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {appointments.length > 0 ? appointments.map(appt => (
                                        <tr key={appt.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <User className="w-5 h-5 text-gray-400 mr-2" />
                                                    <span className="text-sm font-medium text-gray-900">{appt.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 flex items-center mb-1"><Mail className="w-4 h-4 mr-2 text-gray-400"/>{appt.email}</div>
                                                <div className="text-sm text-gray-500 flex items-center"><Phone className="w-4 h-4 mr-2 text-gray-400"/>{appt.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appt.department}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appt.submittedAt}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    {appt.status}
                                                </span>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No appointments found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Admin;
