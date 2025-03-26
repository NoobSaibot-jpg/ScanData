import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import shadowImg from '../images/frame-2-1.png';
import newsData from '../data/news.json';
import aboutImg from '../images/photo/about.jpg';

const NewsDetail = () => {
    const { id } = useParams();
    const news = newsData.news.find(item => item.id === id);

    if (!news) {
        return (
            <>
                <NavBar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Новину не знайдено</h1>
                        <p className="text-gray-600">Вибачте, але така новина не існує.</p>
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
                        src={news.image} 
                        alt={news.title}
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
                                {news.title}
                            </h1>
                            <p 
                                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                {news.description}
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
                            <div dangerouslySetInnerHTML={{ __html: news.content }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsDetail; 