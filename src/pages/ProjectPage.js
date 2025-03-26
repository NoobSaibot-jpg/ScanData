import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import shadowImg from '../images/frame-2-1.png';
import projectsData from '../data/projects.json';

const ProjectPage = () => {
    const { id } = useParams();
    const { projects } = projectsData;
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <>
                <NavBar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Проект не знайдено</h1>
                        <p className="text-gray-600">Вибачте, але проект з таким ID не існує.</p>
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
                        src={project.image} 
                        alt={project.title}
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
                                {project.title}
                            </h1>
                            <p 
                                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                {project.client}
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
                    <div className="space-y-16">
                        {/* Описание проекта */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Опис проекту</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </div>

                        {/* Детали проекта */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Деталі проекту</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Основні характеристики</h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-6 h-6 text-customGreen mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Результати</h3>
                                    <ul className="space-y-3">
                                        {project.results.map((result, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-6 h-6 text-customGreen mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Галерея изображений */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div 
                                className="bg-white rounded-2xl p-8 shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Галерея</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {project.gallery.map((image, index) => (
                                        <div 
                                            key={index}
                                            className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                                        >
                                            <img 
                                                src={image} 
                                                alt={`${project.title} - фото ${index + 1}`}
                                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectPage; 