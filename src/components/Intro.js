import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <section className="relative bg-gray-50 py-16 overflow-hidden" id='about'>
            <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative group" data-aos="fade-right">
                        <div className="absolute -inset-2 bg-gradient-to-r from-customGreen/20 to-blue-200/50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition duration-500"></div>
                        <img 
                            alt="Web Developer" 
                            className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500" 
                            src={img} 
                        />
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="text-customGreen">
                            Шановні клієнти та партнери!
                        </span>
                    </h3>

                        <div className="space-y-6">
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                Наша країна зараз переживає складний час через російську навалу, але це згуртовує та об'єднує українську націю. 
                                Українська Архівна Компанія продовжує роботу, незважаючи на всі складнощі.
                            </p>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">Наші послуги:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                        </svg>
                                        Зберігання документів в нашому архівосховищі
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                        </svg>
                                        Архівація та впорядкування документів
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                З 2010 року ми є провідною архівною компанією з повним циклом послуг. 
                                Всі кошти залишаються в Україні та спрямовуються на розвиток економіки.
                            </p>
                        </div>

                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-customGreen rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Зв'язатися з нами
                            <svg className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>
    )
}

export default Intro;