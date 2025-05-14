import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import shadowImg from '../../images/frame-2-1.png';  // Импортируем PNG с тенью
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Projects from '../../components/Projects';

// Импорт изображений клиентов
import f from "../../images/clients/1.png";
import s from "../../images/clients/2.jpg";
import t from "../../images/clients/3.jpg";
import fo from "../../images/clients/4.png";
import si from "../../images/clients/6.png";
import se from "../../images/clients/7.jpg";
import e from "../../images/clients/8.png";
import n from "../../images/clients/9.png";
import ten from "../../images/clients/10.png";
import el from "../../images/clients/11.jpg";
import tw from "../../images/clients/12.png";
import tt from "../../images/clients/13.png"
import ft from "../../images/clients/14.png"
import fit from "../../images/clients/15.png"
import st from "../../images/clients/16.png"
import sevh from "../../images/clients/17.png"
import et from "../../images/clients/18.png"
import nt from "../../images/clients/19.jpg"
import twt from "../../images/clients/20.png"
import two from "../../images/clients/21.png"
import twotw from "../../images/clients/22.png"
import twotr from "../../images/clients/23.jpg"
import twof from "../../images/clients/24.png"
import twofi from '../../images/clients/25.png'
import twos from '../../images/clients/26.jpg'

const clientImages = [f, s, t, fo, si, se, e, n, ten, el, tw, tt, ft, fit, st, sevh, et, nt, twt, two, twotw, twotr, twof, twofi, twos];

const ServicePage = ({ 
    title, 
    description, 
    image, 
    features, 
    additionalInfo,
    serviceType 
}) => {
    const getGradientByService = (type) => {
        switch(type) {
            case 'scanning':
                return 'from-customGreen/80 via-emerald-800/60 to-emerald-900/40';
            case 'indexing':
                return 'from-blue-600/80 via-blue-800/60 to-blue-900/40';
            case 'databases':
                return 'from-purple-600/80 via-purple-800/60 to-purple-900/40';
            case 'archive':
                return 'from-cyan-600/80 via-cyan-800/60 to-cyan-900/40';
            case 'data-entry':
                return 'from-teal-600/80 via-teal-800/60 to-teal-900/40';
            case 'loyalty':
                return 'from-indigo-600/80 via-indigo-800/60 to-indigo-900/40';
            default:
                return 'from-customGreen/80 via-black/60 to-black/40';
        }
    };

    // Примеры реализованных проектов (это нужно будет заменить реальными данными)
    const projects = [
        {
            title: "Проект для банка",
            description: "Сканування та індексація архіву документів",
            image: "/path-to-image1.jpg"
        },
        {
            title: "Проект для страховой компании",
            description: "Створення електронного архіву",
            image: "/path-to-image2.jpg"
        }
    ];

    // Логотипы клиентов (это нужно будет заменить реальными данными)
    const clients = [
        { name: "Клиент 1", logo: "/path-to-logo1.png" },
        { name: "Клиент 2", logo: "/path-to-logo2.png" },
        { name: "Клиент 3", logo: "/path-to-logo3.png" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <NavBar />
            
            {/* Баннер услуги */}
            <div className="relative h-[500px] w-full mt-16 overflow-hidden">
                {/* Основное изображение с эффектами */}
                <div className="absolute inset-0">
                    <img 
                        src={image} 
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transform transition duration-500"
                    />
                    {/* PNG картинка с эффектом тени */}
                    <img 
                        src={shadowImg} 
                        alt="Shadow" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    {/* Градиентное наложение */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getGradientByService(serviceType)}`}></div>
                </div>

                {/* Декоративные элементы */}
                <div className="absolute inset-0 z-[1]">
                    {/* Плавающие круги */}
                    <div className={`absolute top-20 left-10 w-32 h-32 ${
                        serviceType === 'scanning' ? 'bg-emerald-500/20' :
                        serviceType === 'indexing' ? 'bg-blue-500/20' :
                        serviceType === 'databases' ? 'bg-purple-500/20' :
                        serviceType === 'archive' ? 'bg-cyan-500/20' :
                        serviceType === 'data-entry' ? 'bg-teal-500/20' :
                        serviceType === 'loyalty' ? 'bg-indigo-500/20' :
                        'bg-customGreen/20'
                    } rounded-full mix-blend-overlay filter blur-xl animate-blob`}></div>
                    <div className={`absolute top-40 right-10 w-40 h-40 ${
                        serviceType === 'scanning' ? 'bg-emerald-600/20' :
                        serviceType === 'indexing' ? 'bg-blue-600/20' :
                        serviceType === 'databases' ? 'bg-purple-600/20' :
                        serviceType === 'archive' ? 'bg-cyan-600/20' :
                        serviceType === 'data-entry' ? 'bg-teal-600/20' :
                        serviceType === 'loyalty' ? 'bg-indigo-600/20' :
                        'bg-blue-500/20'
                    } rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000`}></div>
                    <div className={`absolute bottom-20 left-1/3 w-36 h-36 ${
                        serviceType === 'scanning' ? 'bg-emerald-700/20' :
                        serviceType === 'indexing' ? 'bg-blue-700/20' :
                        serviceType === 'databases' ? 'bg-purple-700/20' :
                        serviceType === 'archive' ? 'bg-cyan-700/20' :
                        serviceType === 'data-entry' ? 'bg-teal-700/20' :
                        serviceType === 'loyalty' ? 'bg-indigo-700/20' :
                        'bg-purple-500/20'
                    } rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000`}></div>
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

                {/* Контент баннера */}
                <div className="absolute inset-0 flex items-center z-[2]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="text-center relative">
                            {/* Декоративные элементы заголовка */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-customGreen to-blue-500 rounded-full"></div>
                            
                            <div className="text-center mb-12">
                                <h1 
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                                    data-aos="fade-down"
                                    data-aos-delay="50"
                                    data-aos-duration="800"
                                >
                                    {title}
                                </h1>
                                <p 
                                    className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="800"
                                >
                                    {description}
                                </p>
                            </div>
                            
                            {/* Декоративные элементы описания */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-customGreen rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основной контент */}
            <div className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="space-y-24">
                        {/* Блок описание услуги */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="600"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Опис послуги</h2>
                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: additionalInfo }} />
                            </div>
                        </div>

                        {/* Блок логотипов Наши клиенты */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="150"
                            data-aos-duration="600"
                        >
                            <div className="text-center mb-12" data-aos="fade-up">
                                <h2 className="text-4xl lg:text-5xl font-bold text-customGreen">
                                    Наші клієнти
                                </h2>
                                <div className="w-24 h-1.5 bg-customGreen mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="relative" data-aos="fade-up" data-aos-delay="200">
                                {/* Градиентные маски */}
                                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={40}
                                    slidesPerView={1}
                                    autoplay={{ 
                                        delay: 2500, 
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        480: { slidesPerView: 2 },
                                        640: { slidesPerView: 3 },
                                        768: { slidesPerView: 3 },
                                        1024: { slidesPerView: 4 },
                                        1280: { slidesPerView: 5 },
                                        1536: { slidesPerView: 6 },
                                    }}
                                    className="py-8"
                                >
                                    {clientImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="relative group">
                                                {/* Фоновая подложка */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-blue-600/10 rounded-2xl shadow-lg transform transition duration-500 group-hover:scale-105"></div>
                                                
                                                {/* Логотип клиента */}
                                                <div className="relative p-6 flex items-center justify-center h-40">
                                                    <img
                                                        src={image}
                                                        alt={`client-${index + 1}`}
                                                        className="max-h-full w-auto object-contain transform transition duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* Блок Реализованные проекты */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="600"
                        >
                            {/* <div className="text-center mb-12" data-aos="fade-up">
                                <h2 className="text-4xl lg:text-5xl font-bold text-customGreen">
                                    Реалізовані проекти
                                </h2>
                                <div className="w-24 h-1.5 bg-customGreen mx-auto mt-4 rounded-full"></div>
                            </div> */}
                            <Projects />
                        </div>

                        {/* Блок Дополнительная информация */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="600"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Додаткова інформація</h2>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li 
                                        key={index} 
                                        className="flex items-start group"
                                        data-aos="fade-left"
                                        data-aos-delay={250 + index * 50}
                                        data-aos-duration="500"
                                    >
                                        <svg 
                                            className="w-6 h-6 text-customGreen mr-3 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-200" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M5 13l4 4L19 7" 
                                            />
                                        </svg>
                                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Блок Сделать запрос */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay="250"
                            data-aos-duration="600"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Зробити запит</h2>
                            <ContactForm serviceType={serviceType} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServicePage; 