import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import shadowImg from '../images/frame-2-1.png';
import newsData from '../data/news.json';
import aboutImg from '../images/photo/about.jpg';

const NewsPage = () => {
    const { news } = newsData;

    return (
        <>
            <NavBar />
            {/* Баннер */}
            <div className="relative h-[500px] w-full mt-16 overflow-hidden">
                {/* Основное изображение с эффектами */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/photo/news-banner.jpg" 
                        alt="Новини"
                        className="absolute inset-0 w-full h-full object-cover transform transition duration-500"
                        onError={(e) => {
                            e.target.src = aboutImg;
                        }}
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
                                Новини
                            </h1>
                            <p 
                                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                Останні новини та події компанії
                            </p>
                            
                            {/* Декоративная линия снизу */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-customGreen rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основной контент */}
            <div className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <Link 
                                to={`/news/${item.id}`}
                                key={index}
                                className="group h-full"
                                data-aos="fade-up"
                                data-aos-delay={100 * (index + 1)}
                            >
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                e.target.src = aboutImg;
                                            }}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-sm text-customGreen font-medium mb-2">
                                            {item.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-customGreen transition-colors duration-300 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 line-clamp-3 flex-grow">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsPage; 