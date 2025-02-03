import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-gray-50 to-blue-50 border-t border-gray-200/50">

            {/* Анимированные волны */}
            {/* Анимированные волны */}
            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-40 z-0"> */}
                {/* Первый слой волн */}
                {/* <svg 
                    viewBox="0 0 1440 320" 
                    className="absolute bottom-0 w-full h-full animate-wave"
                    style={{ 
                        opacity: 0.2,
                        animationDelay: '0.5s'
                    }}
                >
                    <path 
                        fill="url(#waveGradient1)"
                        d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,170.7C672,160,768,96,864,90.7C960,85,1056,139,1152,165.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    <defs>
                        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2A9D8F" />
                            <stop offset="100%" stopColor="#013289" />
                        </linearGradient>
                    </defs>
                </svg> */}

                {/* Второй слой волн */}
                {/* <svg 
                    viewBox="0 0 1440 240" 
                    className="absolute bottom-0 w-full h-full animate-wave-reverse"
                    style={{ 
                        opacity: 0.15,
                        animationDelay: '0s'
                    }}
                >
                    <path 
                        fill="url(#waveGradient2)"
                        d="M0,128L60,112C120,96,240,64,360,58.7C480,53,600,75,720,101.3C840,128,960,160,1080,154.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                    <defs>
                        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#013289" />
                            <stop offset="100%" stopColor="#2A9D8F" />
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* 1st block - Address */}
                    {/* <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600 mb-4">
                                ScanData
                            </h3>
                            <div className="space-y-2 text-gray-600"> */}
                                {/* <p className="font-medium">Molad e Konsult</p> */}
                                {/* <p>Ilo Awela,</p>
                                <p>Ota,</p>
                                <p>Ogun State.</p>
                            </div>
                        </div>
                    </div> */}

                    {/* 2nd block - Links */}
                    <div className="space-y-4">
                        <h6 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600">
                            Навігація
                        </h6>
                        <ul className="space-y-3">
                            {[
                                { text: 'Про нас', anchor: '/#about' },
                                { text: 'Послуги', anchor: '/#services' },
                                { text: 'Контакти', anchor: '/contact#contact' }
                            ].map((link, index) => (
                                <li key={index}>
                                <HashLink
                                    to={link.anchor}
                                    smooth
                                    className="text-gray-600 hover:text-customGreen transition-colors duration-300"
                                >
                                    {link.text}
                                </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3rd block - Services */}
                    <div className="space-y-4">
                        <h6 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600">
                            Послуги
                        </h6>
                        <ul className="space-y-3">
                            {[
                                'Сканування',
                                'Введення даних',
                                'Аутсорсинг процесів',
                                'Електронний архів'
                            ].map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to="#"
                                        className="text-gray-600 hover:text-customGreen transition-colors duration-300"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4th block - Social */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h6 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600">
                                Соціальні мережі
                            </h6>
                            <div className="flex space-x-4">
                                {[
                                    {
                                        icon: 'M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z',
                                        label: 'linkedin'
                                    }
                                ].map((social, index) => (
                                    <a
                                        href="https://www.linkedin.com/company/2671335?trk=NUS_CMPY_TWIT"
                                        className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                        aria-label="LinkedIn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="w-6 h-6 fill-current text-gray-600 hover:text-customGreen transition-colors duration-300"
                                            viewBox="0 0 32 32"
                                        >
                                            <path d="M26.37 26.36h-4.52v-7.1c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75v7.23h-4.53V12.5h4.35v1.99h.06c.6-1.15 2.08-2.36 4.3-2.36 4.6 0 5.45 3.03 5.45 6.97v8.26zM8.1 10.4a2.6 2.6 0 11-.02-5.2 2.6 2.6 0 01.02 5.2zM10.6 26.36H5.6V12.5h5v13.86z"/>
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200/50 text-center">
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} Українська Архівна Компанія. Всі права захищені .
                    </p>
                </div>
            </div>

             {/* Дополнительная волна */}
            {/* <div className="absolute bottom-5 left-0 w-full overflow-hidden">
                <svg 
                    viewBox="0 0 1440 120" 
                    className="relative block"
                >
                    <path 
                        fill="url(#waveGradient2)"
                        fillOpacity="0.15" 
                        d="M0,64L60,85.3C120,107,240,149,360,149.3C480,149,600,107,720,112C840,117,960,171,1080,170.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    >
                    </path>
                    <defs>
                        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#013289" />
                            <stop offset="100%" stopColor="#2A9D8F" />
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}

        </footer>
    );
};

export default Footer;