import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const servicesMenuRef = useRef(null);

    const servicesItems = [
        { text: 'Сканування', anchor: '/scanning' },
        { text: 'Введення даних', anchor: '/data-entry' },
        { text: 'Аутсорсинг процесів', anchor: '/outsourcing' },
        { text: 'Електронний архів', anchor: '/e-archive' }
    ];

    const handleMenuToggle = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
            setIsOpen(false);
        }
        if (servicesMenuRef.current && !servicesMenuRef.current.contains(e.target)) {
            setServicesOpen(false);
        }
    };

    useEffect(() => {
        const scrollHandler = () => setTop(window.pageYOffset <= 10);
        window.addEventListener('scroll', scrollHandler);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const NavLinks = ({ mobile = false }) => (
        <>
            <HashLink 
                smooth 
                to="/#about" 
                className={mobile ? 
                    "block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-xl font-medium transition-colors duration-300" : 
                    "text-gray-600 hover:text-customGreen transition-colors duration-300 font-medium text-lg"
                }
            >
                Про нас
            </HashLink>
            
            <HashLink 
                smooth 
                to="/news" 
                className={mobile ? 
                    "block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-xl font-medium transition-colors duration-300" : 
                    "text-gray-600 hover:text-customGreen transition-colors duration-300 font-medium text-lg"
                }
            >
                Новини
            </HashLink>
            
            <HashLink 
                smooth 
                to="/#contact" 
                className={mobile ? 
                    "block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-xl font-medium transition-colors duration-300" : 
                    "text-gray-600 hover:text-customGreen transition-colors duration-300 font-medium text-lg"
                }
            >
                Контакти
            </HashLink>
        </>
    );

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${!top ? 'bg-white/90 shadow-xl' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Логотип */}
                    <HashLink 
                        smooth 
                        to="/#hero" 
                        className="flex items-center space-x-2 group"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-customGreen to-blue-600 rounded-full blur-lg opacity-30 animate-pulse" />
                            <svg 
                                className="w-14 h-14 transform transition-transform duration-500 group-hover:rotate-[30deg]"
                                viewBox="0 0 64 64"
                                fill="none"
                            >
                                <path 
                                    d="M12 12H52V52H12V12Z" 
                                    stroke="url(#logoGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z" />
                                <circle cx="32" cy="32" r="3" fill="url(#logoGradient)" className="animate-pulse">
                                    <animate 
                                        attributeName="r" 
                                        values="3;5;3" 
                                        dur="1.5s" 
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#2A9D8F" />
                                        <stop offset="100%" stopColor="#013289" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customGreen to-blue-600 bg-[length:200%_200%] animate-gradientFlow">
                            ScanData
                        </span>
                    </HashLink>

                    {/* Десктопное меню */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div 
                            className="relative group"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                            ref={servicesMenuRef}
                        >
                            <button className="flex items-center text-gray-600 hover:text-customGreen transition-colors duration-300 font-medium text-lg">
                                Послуги
                                <svg 
                                    className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" 
                                    />
                                </svg>
                            </button>
                            
                            <div 
                                className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                                    servicesOpen 
                                        ? "opacity-100 visible translate-y-0" 
                                        : "opacity-0 invisible -translate-y-2"
                                }`}
                            >
                                {servicesItems.map((item, index) => (
                                    <HashLink
                                        key={index}
                                        to={item.anchor}
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        {item.text}
                                    </HashLink>
                                ))}
                            </div>
                        </div>
                        
                        <NavLinks />
                    </div>

                    {/* Кнопка мобильного меню */}
                    <div className="lg:hidden" ref={buttonRef}>
                        <button
                            onClick={handleMenuToggle}
                            className="p-2 rounded-lg text-gray-600 hover:text-customGreen focus:outline-none focus:ring-2 focus:ring-customGreen/50"
                            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                        >
                            <svg 
                                className="h-8 w-8 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path 
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path 
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Мобильное меню */}
                <div 
                    ref={menuRef}
                    className={`lg:hidden fixed left-0 w-full bg-white/95 backdrop-blur-sm shadow-2xl transition-all duration-300 ease-in-out transform z-50 ${
                        isOpen 
                            ? "translate-y-0 opacity-100 top-16" 
                            : "-translate-y-full opacity-0 -top-full"
                    }`}
                >
                    <div className="px-4 pt-2 pb-8 space-y-6">
                        <div className="space-y-4">
                            <button
                                onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                                className="w-full flex justify-between items-center px-4 py-2 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                            >
                                <span className="text-lg font-bold text-customGreen">Послуги</span>
                                <svg 
                                    className={`w-5 h-5 transform transition-transform duration-300 ${servicesMobileOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" 
                                    />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${servicesMobileOpen ? 'max-h-96' : 'max-h-0'}`}>
                                {servicesItems.map((item, index) => (
                                    <HashLink
                                        key={index}
                                        to={item.anchor}
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-xl font-medium transition-colors duration-300 ml-4"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setServicesMobileOpen(false);
                                        }}
                                    >
                                        {item.text}
                                    </HashLink>
                                ))}
                            </div>
                        </div>
                        <NavLinks mobile />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;