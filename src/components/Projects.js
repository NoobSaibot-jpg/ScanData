import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Проект для банка",
            description: "Сканування та індексація архіву документів",
            details: "Повна обробка архіву банківських документів з подальшим створенням електронної бази даних",
            image: "/images/project1.jpg"
        },
        {
            title: "Проект для страхової компанії",
            description: "Створення електронного архіву",
            details: "Розробка та впровадження системи електронного архіву для оптимізації роботи з документами",
            image: "/images/project2.jpg"
        }
    ];

    return (
        <section className="py-16 bg-gray-50" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 
                        className="text-4xl lg:text-5xl font-bold text-customGreen mb-4"
                        data-aos="fade-up"
                    >
                        Реалізовані проекти
                    </h2>
                    <div 
                        className="w-24 h-1.5 bg-customGreen mx-auto rounded-full"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    ></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-customGreen font-medium mb-3">
                                    {project.description}
                                </p>
                                <p className="text-gray-600">
                                    {project.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 