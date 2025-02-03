import React from 'react';
import img from '../images/web.svg';
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {
    return (
        <section id="services" className="relative bg-gradient-to-b from-gray-50 to-blue-50 py-20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-customGreen/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Services Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-customGreen">
                        Наші послуги
                    </h2>
                    <p className="mt-4 text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Ми – провідна організація, що забезпечує повний комплекс архівних послуг
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" data-aos="fade-up">
                    {[
                        { 
                            img: img, 
                            title: "Сканування", 
                            text: "УАК пропонує весь комплекс послуг зі сканування документів і подальшої обробки оцифрованих образів..."
                        },
                        { 
                            img: img2, 
                            title: "Введення даних", 
                            text: "Ми осуществляем работы по вводу и обработке данных для крупных и средних компаний..."
                        },
                        { 
                            img: img3, 
                            title: "Аутсорсинг процесів", 
                            text: "Наш комплексний підхід до обробки інформації дозволяє замовникам зосередитися на своїй основній діяльності..."
                        },
                        { 
                            img: img4, 
                            title: "Електронний архів", 
                            text: "Створення системи електронного документообігу та архівування..."
                        }
                    ].map((service, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    alt={service.title} 
                                    src={service.img} 
                                    className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Collaboration Section */}
                {/* <div className="grid lg:grid-cols-2 gap-12 lg:gap-24" data-aos="fade-up">
                    {[
                        {
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                                    <path 
                                        fill="url(#gradient1)" 
                                        d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"
                                    />
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#2A9D8F" />
                                            <stop offset="100%" stopColor="#013289" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ),
                            title: "Ми будуємо",
                            text: "З більш ніж 10-річним досвідом аналізу та проектування..."
                        },
                        {
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                                    <path 
                                        fill="url(#gradient2)" 
                                        d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"
                                    />
                                    <defs>
                                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#013289" />
                                            <stop offset="100%" stopColor="#2A9D8F" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ),
                            title: "Ми співпрацюємо",
                            text: "Ми працюємо з вашими технічними командами для масштабування..."
                        }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default Services;