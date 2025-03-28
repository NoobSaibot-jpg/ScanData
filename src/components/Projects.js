import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { getProjectImage } from '../data/projectImages';

const Projects = () => {
    const { projects } = projectsData;

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
                        <Link 
                            to={`/projects/${project.id}`}
                            key={index}
                            className="group h-full"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img 
                                        src={getProjectImage(project.image)}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-customGreen font-medium mb-2">
                                        {project.client}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-customGreen transition-colors duration-300 line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 