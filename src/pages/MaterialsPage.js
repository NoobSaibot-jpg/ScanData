import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const MaterialsPage = () => {
    // Данные для буклетов
    const materials = [
        {
            title: "Цифрова обробка інформації",
            description: "Сканування документів, Внесення даних, Аутсорс послуги",
            pdfUrl: "/materials/presentation1.pdf",
            imageUrl: "/images/materials/prev-1.png"
        },
        {
            title: "Введення даних та обробка програм лояльності",
            description: "Введення даних та обробка програм лояльності",
            pdfUrl: "/materials/presentation2.pdf",
            imageUrl: "/images/materials/prev-2.png"
        },
        {
            title: "Сканування документів та електроний архів",
            description: "Послуги сканування та створення електронних архівів",
            pdfUrl: "/materials/presentation3.pdf",
            imageUrl: "/images/materials/prev-3.png"
        }
    ];

    // Данные для полезных сайтов
    const usefulSites = [
        {
            title: "www.uac-archive.com.ua",
            url: "https://www.uac-archive.com.ua",
            description: "Офіційний сайт Української Архівної Компанії"
        },
        {
            title: "www.hranenie.com.ua",
            url: "https://www.hranenie.com.ua",
            description: "Сайт про зберігання документів"
        },
        {
            title: "www.spisanie.com.ua",
            url: "https://www.spisanie.com.ua",
            description: "Сайт про списання документів"
        }
    ];

    return (
        <>
            <NavBar />
            <div className="pt-24 pb-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Заголовок страницы */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h1 className="text-4xl lg:text-5xl font-bold text-customGreen mb-4">
                            Інформаційні матеріали
                        </h1>
                        <div className="w-24 h-1.5 bg-customGreen mx-auto rounded-full"></div>
                    </div>

                    {/* Секция с буклетами */}
                    <section className="mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Буклети та каталоги</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {materials.map((material, index) => (
                                <div 
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={100 * (index + 1)}
                                >
                                    <div className="aspect-w-16 aspect-h-9 relative">
                                        <img 
                                            src={material.imageUrl} 
                                            alt={material.title}
                                            className="object-cover w-full h-full rounded-t-xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {material.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {material.description}
                                        </p>
                                        <a 
                                            href={material.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-customGreen hover:text-customGreen/80 font-medium transition-colors duration-300"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Завантажити PDF
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Секция с полезными сайтами */}
                    <section 
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="600"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Наші сайти</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {usefulSites.map((site, index) => (
                                <a 
                                    key={index}
                                    href={site.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-customGreen/5 to-blue-50 p-6 hover:shadow-lg transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={100 * (index + 1)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-customGreen/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-customGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-customGreen transition-colors duration-300">
                                                {site.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            {site.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Секция с контактами */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Контакти</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Адреса</h3>
                                <div className="flex items-start space-x-4">
                                    <svg className="w-6 h-6 text-customGreen mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-gray-600">м. Київ, вул. Прикладна, 1</p>
                                        <p className="text-gray-600">Бізнес-центр "Скандата"</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Контактні дані</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <svg className="w-6 h-6 text-customGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <a href="tel:+380441234567" className="text-gray-600 hover:text-customGreen transition-colors">
                                            +380 (44) 123-45-67
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <svg className="w-6 h-6 text-customGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:info@scandata.ua" className="text-gray-600 hover:text-customGreen transition-colors">
                                            info@scandata.ua
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Форма обратной связи */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Напишіть нам</h3>
                            <ContactForm />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MaterialsPage; 