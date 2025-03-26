import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import shadowImg from '../images/frame-2-1.png';
import newsData from '../data/news.json';

const NewsItem = () => {
    const { id } = useParams();
    const { news } = newsData;
    const newsItem = news.find(item => item.id === parseInt(id));

    if (!newsItem) {
        return (
            <>
                <NavBar />
                <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Новину не знайдено</h1>
                        <p className="text-gray-600 mb-8">Вибачте, але така новина не існує.</p>
                        <Link 
                            to="/news"
                            className="inline-flex items-center text-customGreen hover:text-customGreen/80 transition-colors duration-300"
                        >
                            <span>Повернутися до новин</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavBar />
            {/* Баннер */}
            <div className="relative h-[500px] w-full mt-16 overflow-hidden">
                {/* Основное изображение с эффектами */}
                <div className="absolute inset-0">
                    <img 
                        src={newsItem.image} 
                        alt={newsItem.title}
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
                                {newsItem.title}
                            </h1>
                            <p 
                                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                {newsItem.date}
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
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700">
                                {newsItem.fullText}
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link 
                            to="/news"
                            className="inline-flex items-center text-customGreen hover:text-customGreen/80 transition-colors duration-300"
                        >
                            <span>Повернутися до новин</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsItem; 