import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('UAC | Контакти')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors([]);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Завантаження...';

        const fData = new FormData();
        Object.entries(formData).forEach(([key, value]) => fData.append(key, value));

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response => {
            Notiflix.Report.success('Успіх', response.data.message, 'OK');
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        })
        .catch(error => {
            const { response } = error;
            if(response?.data?.errors) setErrors(response.data.errors);
            Notiflix.Report.failure('Помилка', response?.data?.message || 'Сталася помилка', 'OK');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Надіслати повідомлення';
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            
            <main className="flex-grow bg-gradient-to-b from-gray-50 to-blue-50">
                <section id='contact' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24" data-aos="fade-up">
                        {/* Контактная форма */}
                        <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-xl">
                            <h2 className="text-3xl lg:text-4xl font-bold text-customGreen mb-8">
                                Напишіть нам
                            </h2>
                            
                            <form onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { name: 'firstName', label: "Ім'я", type: 'text' },
                                        { name: 'lastName', label: 'Прізвище', type: 'text' },
                                        { name: 'email', label: 'Email', type: 'email' },
                                        { name: 'phone', label: 'Телефон', type: 'tel' },
                                    ].map((field) => (
                                        <div key={field.name}>
                                            <input
                                                name={field.name}
                                                type={field.type}
                                                placeholder={`${field.label}*`}
                                                className="w-full bg-gray-100/50 focus:bg-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-customGreen/50 transition-all duration-300"
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                            />
                                            {errors[field.name] && (
                                                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Повідомлення*"
                                        className="w-full bg-gray-100/50 focus:bg-white px-4 py-3 rounded-xl h-40 focus:ring-2 focus:ring-customGreen/50 transition-all duration-300"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full lg:w-auto px-8 py-4 text-lg font-semibold text-white bg-customGreen rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Надіслати повідомлення
                                </button>
                            </form>
                        </div>

                        {/* Контактная информация */}
                        <div className="bg-gradient-to-br from-customGreen to-blue-600 text-white p-8 lg:p-12 rounded-2xl shadow-xl h-fit">
                            <div className="space-y-8">
                                <h3 className="text-2xl lg:text-3xl font-bold">Контактна інформація</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium">Адреса</p>
                                            <p className="opacity-90">04112 м.Київ вулиця Дегтярівська буд.62, корпус А</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium">Телефони</p>
                                            <p className="opacity-90">(044)300-04-08</p>
                                            <p className="opacity-90">(044)207-43-32</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium">Email</p>
                                            <p className="opacity-90">info@uac-archive.com.ua</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-4 pt-4">
                                    {[
                                        {
                                            icon: 'M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z',
                                            url: 'https://www.facebook.com'
                                        },
                                        {
                                            icon: 'M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z',
                                            url: 'https://www.linkedin.com'
                                        }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                                        >
                                            <svg 
                                                className="w-6 h-6" 
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d={social.icon} />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;