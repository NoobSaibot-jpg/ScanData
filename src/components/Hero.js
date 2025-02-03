import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import main from '../images/main2.png';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 py-2 md:text-5xl text-3xl font-bold text-customGreen">
                                Продовжуємо надавати послуги!
                            </h1>
                            
                            <div className='bg-customYellow rounded-2xl p-4 mb-6'>
                                <span className="text-xl font-semibold tracking-tight text-gray-500">
                                    єднаймося, працюймо - перемога буде за нами!
                                </span>
                            </div>

                            {/* Стилизированный список */}
                            <div className="space-y-3 ml-2 border-l-4 border-customGreen pl-4">
                                <p className="text-lg text-gray-600 font-medium relative before:content-['•'] before:text-customGreen before:mr-2">
                                    Зберігання документів в нашому архівосховищі
                                </p>
                                <p className="text-lg text-gray-600 font-medium relative before:content-['•'] before:text-customGreen before:mr-2">
                                    Архівація та впорядкування документів
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img 
                                alt="card img" 
                                // className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full"    
                                src={main} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;