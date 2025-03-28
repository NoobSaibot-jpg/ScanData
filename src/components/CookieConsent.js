import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Проверяем, было ли уже показано уведомление
        const consentShown = localStorage.getItem('cookieConsentShown');
        if (!consentShown) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsentShown', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div 
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200"
            data-aos="fade-up"
            data-aos-duration="500"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-customGreen/10 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-customGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">
                                Ми використовуємо файли cookie для покращення вашого досвіду на нашому сайті. 
                                Продовжуючи використовувати сайт, ви погоджуєтесь з нашим використанням файлів cookie.
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={handleAccept}
                            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-customGreen hover:bg-customGreen/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customGreen transition-colors duration-300"
                        >
                            Зрозуміло
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent; 