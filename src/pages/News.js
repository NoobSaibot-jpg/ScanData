import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import shadowImg from '../images/frame-2-1.png';

const News = () => {
    const news = [
        {
            id: 1,
            title: "Державна казначейська служба України",
            date: "02.05.2024",
            description: "24.04.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на електронному майданчику SmartTender укладено Договір, як з переможцем, на виконання послуг – послуги з науково-технічного опрацювання та архівування документів...",
            image: "https://storage.googleapis.com/svoi-upload/137/90298/64477d6fa219e__2018-11-14-101425.008507DKSU.jpg",
            fullText: "24.04.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на електронному майданчику SmartTender укладено Договір, як з переможцем, на виконання послуг – послуги з науково-технічного опрацювання та архівування документів. Це важливий крок у розвитку співпраці з державними органами та підтвердження високої якості наших послуг."
        },
        {
            id: 2,
            title: 'Державна установа "Національний інститут фтизіатрії і пульмонології ім. Ф.Г. Яновського Національної академії медичних наук України"',
            date: "02.05.2024",
            description: "11.03.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на електронному майданчику SmartTender укладено Договір, як з переможцем, на виконання послуг – послуги з науково-технічного опрацювання та архівування документів...",
            image: "https://www.stoptb.org.ua/wp-content/uploads/2023/05/1-1.jpg",
            fullText: "11.03.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на електронному майданчику SmartTender укладено Договір, як з переможцем, на виконання послуг – послуги з науково-технічного опрацювання та архівування документів (деталізований код послуги за дк 021:2015 – 92510000-9 ПОСЛУГИ БІБЛІОТЕК І АРХІВІВ) (номер у Prozorro UA-2024-02-23-010706-a)."
        },
        {
            id: 3,
            title: "СП «КИЇВСЬКІ ТЕЦ», СП «ЗАВОД «ЕНЕРГІЯ», СП «ЕНЕРГОЗБУТ» КП «КИЇВТЕПЛОЕНЕРГО»",
            date: "02.05.2024",
            description: "21.03.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на майданчику SmartTender укладено Договори зі структурними підрозділами, як з переможцем..",
            image: "https://kte.kmda.gov.ua/wp-content/uploads/2021/06/DJI_0152_edit.jpg?x91075",
            fullText: "21.03.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на майданчику SmartTender укладено Договори зі структурними підрозділами, як з переможцем. Це підтверджує нашу репутацію надійного партнера для великих підприємств."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <NavBar />
            
            {/* Баннер */}
            <div className="relative h-[400px] w-full mt-16 overflow-hidden">
                {/* Основное изображение с эффектами */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/photo/news-banner.jpg" 
                        alt="Новини"
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
                                Новини
                            </h1>
                            <p 
                                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                Останні події та досягнення компанії
                            </p>
                            
                            {/* Декоративная линия снизу */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-customGreen rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Список новостей */}
            <div className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <Link 
                                to={`/news/${item.id}`}
                                key={item.id}
                                className="group"
                                data-aos="fade-up"
                                data-aos-delay={100 * item.id}
                            >
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-customGreen font-medium mb-2">
                                            {item.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-customGreen transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default News; 