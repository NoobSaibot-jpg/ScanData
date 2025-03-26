import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';

const News = () => {
    const { news } = newsData;

    return (
        <section className="py-16 bg-gray-50" id="news">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 
                        className="text-4xl lg:text-5xl font-bold text-customGreen mb-4"
                        data-aos="fade-up"
                    >
                        Новини
                    </h2>
                    <div 
                        className="w-24 h-1.5 bg-customGreen mx-auto rounded-full"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    ></div>
                </div>
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
                <div className="text-center mt-12">
                    <Link 
                        to="/news"
                        className="inline-flex items-center text-customGreen hover:text-customGreen/80 transition-colors duration-300"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <span>Всі новини</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default News; 