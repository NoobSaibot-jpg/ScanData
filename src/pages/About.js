import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import shadowImg from '../images/frame-2-1.png';
import aboutImg from '../images/photo/about.jpg';

const About = () => {
    return (
        <>
            <NavBar />
            {/* Баннер */}
            <div className="relative h-[500px] w-full mt-16 overflow-hidden">
                {/* Основное изображение с эффектами */}
                <div className="absolute inset-0">
                    <img 
                        src={aboutImg} 
                        alt="О компании"
                        className="absolute inset-0 w-full h-full object-cover transform transition duration-500"
                    />
                    {/* PNG картинка с эффектом тени */}
                    <img 
                        src={shadowImg} 
                        alt="Shadow" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    {/* Градиентное наложение */}
                    <div className="absolute inset-0 bg-gradient-to-r from-customGreen/80 via-blue-800/60 to-blue-900/40"></div>
                </div>

                {/* Декоративные элементы */}
                <div className="absolute inset-0 z-[1]">
                    {/* Плавающие круги */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-customGreen/20 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-10 w-40 h-40 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-blue-600/20 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                {/* Контент баннера */}
                <div className="absolute inset-0 flex items-center z-[2]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="text-center relative">
                            {/* Декоративная линия сверху */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-customGreen to-blue-500 rounded-full"></div>
                            
                            <h1 
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                                data-aos="fade-down"
                                data-aos-delay="50"
                                data-aos-duration="800"
                            >
                                Про компанію
                            </h1>
                            <p 
                                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                Ваш надійний партнер у сфері сканування та обробки документів
                            </p>
                            
                            {/* Декоративная линия снизу */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-customGreen rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Телефон в баннере */}
                <div className="absolute top-4 right-4 hidden md:block z-[5]">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        <a href="tel:+380443000408" className="text-xl font-bold text-customGreen hover:text-customGreen/80 transition-colors flex items-center whitespace-nowrap">
                            <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (044)300-04-08
                        </a>
                    </div>
                </div>

                {/* Мобильный телефон */}
                <div className="absolute top-4 right-4 md:hidden z-[5]">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        <a href="tel:+380443000408" className="text-customGreen hover:text-customGreen/80 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="space-y-24">
                        {/* Блок про компанию */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="600"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Про компанію</h2>
                            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                                    <h3 className="text-2xl font-semibold text-customGreen mb-4">15 років на ринку!</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-3xl font-bold text-customGreen">2009</span>
                                            <span className="text-gray-600 text-center">Працюємо з</span>
                                        </div>
                                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-3xl font-bold text-customGreen">5000+</span>
                                            <span className="text-gray-600 text-center">Клієнтів оброблено</span>
                                        </div>
                                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-3xl font-bold text-customGreen">1 000 000+</span>
                                            <span className="text-gray-600 text-center">Справ на зберіганні</span>
                                        </div>
                                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-3xl font-bold text-customGreen">30 000+</span>
                                            <span className="text-gray-600 text-center">Справ палітурки щорічно</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg">
                                    Протягом останніх тринадцяти років Українська Архівна Компанія є чи не єдиною у державі з виключно українським керівництвом, бенефіціарами, співробітниками та головним офісом. Ми – провідна організація, що забезпечує архівне зберігання документів та виконує весь комплекс архівних послуг.
                                </p>

                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Наші основні послуги:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ul className="space-y-3">
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                </svg>
                                                Архівація та обробка документів
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                </svg>
                                                Зберігання документів в архівосховищі
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                </svg>
                                                Сканування та оцифрування документів
                                            </li>
                                        </ul>
                                        <ul className="space-y-3">
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                </svg>
                                                Створення електронних архівів
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                </svg>
                                                Введення та обробка даних
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                </svg>
                                                Обробка програм лояльності
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-lg">
                                    Наша країна зараз переживає складний час через російську навалу, але це згуртовує та об'єднує українську націю. 
                                    Українська Архівна Компанія продовжує роботу, незважаючи на всі складнощі.
                                </p>

                                <div className="bg-customGreen/10 p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Наші переваги:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            Відеоспостереження та цілодобова охорона
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            Штатні фахівці з досвідом робіт з усіма видами документів
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-customGreen mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            Щотижня співпраця з Держархівами
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Блок Переходов на другие сайты компании */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="600"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Наші сайти</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <a 
                                    href="https://www.uac-archive.com.ua" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-customGreen/5 to-blue-50 p-6 hover:shadow-lg transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-customGreen/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-customGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-customGreen transition-colors duration-300">
                                                www.uac-archive.com.ua
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Офіційний сайт Української Архівної Компанії
                                        </p>
                                    </div>
                                </a>

                                <a 
                                    href="https://www.hranenie.com.ua" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-customGreen/5 to-blue-50 p-6 hover:shadow-lg transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-customGreen/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-customGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-customGreen transition-colors duration-300">
                                                www.hranenie.com.ua
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Сайт про зберігання документів
                                        </p>
                                    </div>
                                </a>

                                <a 
                                    href="https://www.spisanie.com.ua" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-customGreen/5 to-blue-50 p-6 hover:shadow-lg transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-customGreen/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-customGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-customGreen transition-colors duration-300">
                                                www.spisanie.com.ua
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Сайт про списання документів
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Блок Информационные материалы */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="150"
                            data-aos-duration="600"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Інформаційні матеріали</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div 
                                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <div className="aspect-w-16 aspect-h-9 relative">
                                        <img 
                                            src="/images/materials/prev-1.png" 
                                            alt="Цифрова обробка інформації" 
                                            className="object-cover w-full h-full rounded-t-xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Цифрова обробка інформації
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Сканування документів, Внесення даних, Аутсорс послуги
                                        </p>
                                        <a 
                                            href="/materials/presentation1.pdf"
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

                                <div 
                                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="aspect-w-16 aspect-h-9 relative">
                                        <img 
                                            src="/images/materials/prev-2.png" 
                                            alt="Введення даних та обробка програм лояльності" 
                                            className="object-cover w-full h-full rounded-t-xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Введення даних та обробка програм лояльності
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Введення даних та обробка програм лояльності
                                        </p>
                                        <a 
                                            href="/materials/presentation2.pdf"
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

                                <div 
                                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="aspect-w-16 aspect-h-9 relative">
                                        <img 
                                            src="/images/materials/prev-3.png" 
                                            alt="Сканування документів та електроний архів" 
                                            className="object-cover w-full h-full rounded-t-xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Сканування документів та електроний архів
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Послуги сканування та створення електронних архівів
                                        </p>
                                        <a 
                                            href="/materials/presentation3.pdf"
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
                            </div>
                        </div>

                        {/* Блок Сделать запрос */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="600"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Зробити запит</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Ім'я
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen focus:border-transparent transition-colors"
                                            placeholder="Введіть ваше ім'я"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen focus:border-transparent transition-colors"
                                            placeholder="Введіть ваш email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Телефон
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen focus:border-transparent transition-colors"
                                            placeholder="Введіть ваш телефон"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Повідомлення
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen focus:border-transparent transition-colors resize-none"
                                            placeholder="Введіть ваше повідомлення"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-customGreen text-white font-medium py-3 px-6 rounded-lg hover:bg-customGreen/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <span>Надіслати запит</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About; 