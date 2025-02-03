import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavBar from '../components/Navbar/NavBar'

const ScanningPage = ({ sections = [] }) => {
    // Дефолтные секции, если не переданы пропсы
    const defaultSections = [
        {
            type: 'main',
            title: "СКАНУВАННЯ",
            content: "Українська Архівна Компанія виконає комплекс робіт у сфері сканування...",
            icon: "📑"
        },
        {
            type: 'service',
            title: "ПОТОКОВЕ СКАНУВАННЯ",
            content: "Цей вид сканування відрізняється високою продуктивністю...",
            icon: "⚡"
        },
        // ... другие секции
    ];

    const contentSections = sections.length > 0 ? sections : defaultSections;

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            
            <section className="relative bg-gradient-to-b from-gray-50 to-blue-50 py-20 flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Динамические секции */}
                    {contentSections.map((section, index) => (
                        <SectionRenderer 
                            key={`section-${index}`} 
                            section={section} 
                            index={index}
                        />
                    ))}

                    {/* Фиксированная нижняя секция */}
                    <div className="mt-20" data-aos="fade-up">
                        <div className="bg-gradient-to-r from-customGreen to-blue-600 text-white p-8 rounded-2xl shadow-2xl">
                            <h2 className="text-3xl font-bold mb-4">ЕЛЕКТРОННИЙ АРХІВ</h2>
                            <p className="text-lg mb-6">
                                Створення системи електронного документообігу
                            </p>
                            <HashLink
                                to="/contact#form"
                                smooth
                                className="inline-flex items-center bg-white text-customGreen px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Замовити послугу
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Компонент для рендеринга отдельных секций
const SectionRenderer = ({ section, index }) => {
    switch(section.type) {
        case 'main':
            return (
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600">
                        {section.title}
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-customGreen to-blue-600 mx-auto mt-4 rounded-full"></div>
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg mt-8">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {section.content}
                        </p>
                    </div>
                </div>
            );
            
        case 'service':
            return (
                <div 
                    className="grid lg:grid-cols-3 gap-8 items-start bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg my-8"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <div className="lg:col-span-1 flex flex-col items-center">
                        <span className="text-6xl mb-4">{section.icon}</span>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600 text-center">
                            {section.title}
                        </h2>
                    </div>
                    <p className="lg:col-span-2 text-lg text-gray-600 leading-relaxed">
                        {section.content}
                    </p>
                </div>
            );

        case 'additional':
            return (
                <div className="space-y-8 mt-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600">
                        {section.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {section.items?.map((item, idx) => (
                            <div key={idx} className="bg-white/90 p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-semibold text-customGreen mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default ScanningPage;