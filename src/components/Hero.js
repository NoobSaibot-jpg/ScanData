import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import main from '../images/main2.png';

const Hero = () => {
    return (
        <>
            <div className="hero relative" id='hero'>
                <div>
                    <NavBar />
                </div>

                {/* Телефон */}
                <div className="absolute top-20 right-4 z-[15] hidden md:block">
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
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 py-2 md:text-5xl text-3xl font-bold text-customGreen">
                                Продовжуємо надавати послуги!
                            </h1>
                            
                            <div className='bg-customYellow rounded-2xl p-4 mb-6'>
                                <span className="text-xl font-semibold tracking-tight text-gray-500">
                                    єднаймося, працюймо - перемога буде за нами!
                                </span>
                            </div>

                            {/* Стилизированный список */}
                            <div className="space-y-3 ml-2 border-l-4 border-customGreen pl-4">
                                <p className="text-lg text-gray-600 font-medium relative before:content-['•'] before:text-customGreen before:mr-2">
                                    Зберігання документів в нашому архівосховищі
                                </p>
                                <p className="text-lg text-gray-600 font-medium relative before:content-['•'] before:text-customGreen before:mr-2">
                                    Архівація та впорядкування документів
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex lg:justify-end w-full lg:w-1/2 relative z-8" data-aos="fade-up" data-aos-delay="700">
                            <img 
                                alt="card img" 
                                src={main} 
                                className="relative"
                            />
                        </div>
                    </div>
                </div>

                {/* Блок с цифрами преимуществ */}
                <div className="bg-white py-12 mt-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Преимущество 1 */}
                            <div 
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="text-4xl font-bold text-customGreen mb-2">15+</div>
                                <div className="text-lg font-medium text-gray-600">Років досвіду</div>
                            </div>

                            {/* Преимущество 2 */}
                            <div 
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="text-4xl font-bold text-customGreen mb-2">1000+</div>
                                <div className="text-lg font-medium text-gray-600">Успішних проектів</div>
                            </div>

                            {/* Преимущество 3 */}
                            <div 
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="text-4xl font-bold text-customGreen mb-2">500+</div>
                                <div className="text-lg font-medium text-gray-600">Задоволених клієнтів</div>
                            </div>

                            {/* Преимущество 4 */}
                            <div 
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="text-4xl font-bold text-customGreen mb-2">24/7</div>
                                <div className="text-lg font-medium text-gray-600">Підтримка клієнтів</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;