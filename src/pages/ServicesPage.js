import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import img1 from '../images/photo/1 Сканирование.JPG';
import img5 from '../images/photo/5 Ввод даних.JPG';
import img2 from '../images/photo/2 Индексирование.JPG';
import img4 from '../images/photo/4 электронный архив.JPG';
import img3 from '../images/photo/3 Базы.JPG';
import img6 from '../images/photo/6 Обробка програм лояльності.png';
import shadowImg from '../images/frame-2-1.png';

const ServicesPage = () => {
    const services = [
        {
            img: img1,
            title: "Сканування документів",
            text: "Професійне сканування документів будь-якого формату та об'єму. Ми використовуємо сучасне обладнання для отримання високоякісних цифрових копій.",
            gradient: "bg-gradient-to-t from-purple-900/80 to-transparent",
            link: "/services/scanning"
        },
        {
            img: img2,
            title: "Індексування та створення полів пошуку",
            text: "Створення структурованих баз даних з можливістю швидкого пошуку. Ми розробляємо спеціальні поля індексації під потреби вашого бізнесу.",
            gradient: "bg-gradient-to-t from-green-900/80 to-transparent",
            link: "/services/indexing"
        },
        {
            img: img3,
            title: "Створення електронних баз даних",
            text: "Розробка та впровадження спеціалізованих баз даних для зберігання та управління документами. Інтеграція з існуючими системами.",
            gradient: "bg-gradient-to-t from-red-900/80 to-transparent",
            link: "/services/databases"
        },
        {
            img: img4,
            title: "Розробка та створення електронного архіву",
            text: "Комплексне рішення для організації електронного архівування. Включає налаштування системи зберігання, пошуку та управління документами.",
            gradient: "bg-gradient-to-t from-blue-900/80 to-transparent",
            link: "/services/archive"
        },
        {
            img: img5,
            title: "Введення даних",
            text: "Професійне введення даних з будь-яких носіїв у електронні системи. Ми забезпечуємо високу точність та швидкість обробки інформації.",
            gradient: "bg-gradient-to-t from-blue-900/80 to-transparent",
            link: "/services/data-entry"
        },
        {
            img: img6,
            title: "Обробка програм лояльності та персональних даних",
            text: "Безпечна обробка та зберігання персональних даних відповідно до законодавства. Розробка та обробка програм лояльності для клієнтів.",
            gradient: "bg-gradient-to-t from-blue-900/80 to-transparent",
            link: "/services/loyalty"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />
            
            {/* Баннер */}
            <div className="relative h-[400px] w-full mt-16 overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={img1} 
                        alt="Services Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <img 
                        src={shadowImg} 
                        alt="Shadow" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-customGreen/80 via-black/60 to-black/40"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                            data-aos="fade-down"
                        >
                            Наші послуги
                        </h1>
                        <p 
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Ми – провідна організація, що забезпечує повний комплекс архівних послуг
                        </p>
                    </div>
                </div>
            </div>

            {/* Основной контент */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link 
                            to={service.link}
                            key={index}
                            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    alt={service.title} 
                                    src={service.img} 
                                    className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-105" 
                                />
                                <img 
                                    src={shadowImg} 
                                    alt="Shadow" 
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-10 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                            <div className="p-6 transform transition-all duration-300 group-hover:scale-105">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 transition-all duration-300 group-hover:text-customGreen">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                                    {service.text}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServicesPage; 