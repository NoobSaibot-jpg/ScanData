import React from 'react';

const Materials = () => {
    const materials = [
        {
            title: "Цифрова обробка інформації",
            description: "Сканування документів, Внесення даних, Аутсорс послуги",
            pdfUrl: "/materials/presentation1.pdf",
            imageUrl: "/images/materials/prev-1.png"
        },
        {
            title: "Введення даних та обробка програм лояльності",
            description: "Введення даних та обробка програм лояльності",
            pdfUrl: "/materials/presentation2.pdf",
            imageUrl: "/images/materials/prev-2.png"
        },
        {
            title: "Сканування документів та електроний архів",
            description: "Послуги сканування та створення електронних архівів",
            pdfUrl: "/materials/presentation3.pdf",
            imageUrl: "/images/materials/prev-3.png"
        }
    ];

    return (
        <section className="py-16 bg-white" id="materials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 
                        className="text-4xl lg:text-5xl font-bold text-customGreen mb-4"
                        data-aos="fade-up"
                    >
                        Інформаційні матеріали
                    </h2>
                    <div 
                        className="w-24 h-1.5 bg-customGreen mx-auto rounded-full"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    ></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {materials.map((material, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src={material.imageUrl}
                                    alt={material.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {material.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {material.description}
                                </p>
                                <a 
                                    href={material.pdfUrl}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Materials; 