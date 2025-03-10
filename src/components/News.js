import React from 'react';

const News = () => {
    const news = [
        {
            title: "Державна казначейська служба України",
            date: "02.05.2024",
            description: "24.04.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на електронному майданчику SmartTender укладено Договір, як з переможцем, на виконання послуг – послуги з науково-технічного опрацювання та архівування документів...",
            image: "https://storage.googleapis.com/svoi-upload/137/90298/64477d6fa219e__2018-11-14-101425.008507DKSU.jpg"
        },
        {
            title: 'Державна установа "Національний інститут фтизіатрії і пульмонології ім. Ф.Г. Яновського Національної академії медичних наук України"',
            date: "02.05.2024",
            description: "11.03.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на електронному майданчику SmartTender укладено Договір, як з переможцем, на виконання послуг – послуги з науково-технічного опрацювання та архівування документів (деталізований код послуги за дк 021:2015 – 92510000-9 ПОСЛУГИ БІБЛІОТЕК І АРХІВІВ) (номер у Prozorro UA-2024-02-23-010706-a)...",
            image: "https://www.stoptb.org.ua/wp-content/uploads/2023/05/1-1.jpg"
        },
        {
            title: "СП «КИЇВСЬКІ ТЕЦ», СП «ЗАВОД «ЕНЕРГІЯ», СП «ЕНЕРГОЗБУТ» КП «КИЇВТЕПЛОЕНЕРГО»",
            date: "02.05.2024",
            description: "21.03.2024 – З Українською Архівною Компанією за результатами відкритих торгів з особливостями на майданчику SmartTender укладено Договори зі структурними підрозділами, як з переможцем..",
            image: "https://kte.kmda.gov.ua/wp-content/uploads/2021/06/DJI_0152_edit.jpg?x91075"
        }
    ];

    return (
        <section className="py-16 bg-gray-50" id="news">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 
                        className="text-4xl lg:text-5xl font-bold text-customGreen mb-4"
                        data-aos="fade-up"
                    >
                        Новини
                    </h2>
                    <div 
                        className="w-24 h-1.5 bg-customGreen mx-auto rounded-full"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    ></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-customGreen font-medium mb-2">
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News; 