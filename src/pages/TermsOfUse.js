import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Умови використання</h1>
                    
                    <div className="space-y-6 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Загальні положення</h2>
                            <p>
                                Використовуючи веб-сайт ScanData, ви погоджуєтесь з цими умовами використання. 
                                Якщо ви не згодні з будь-якими умовами, будь ласка, не використовуйте наш веб-сайт.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Використання послуг</h2>
                            <p>
                                Наші послуги надаються на наступних умовах:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Ви маєте бути старше 18 років</li>
                                <li>Ви надаєте точну та повну інформацію</li>
                                <li>Ви зобов'язуєтесь не порушувати законодавство</li>
                                <li>Ви відповідаєте за безпеку свого облікового запису</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Інтелектуальна власність</h2>
                            <p>
                                Весь контент на нашому веб-сайті, включаючи текст, графіку, логотипи, зображення та 
                                програмне забезпечення, є власністю ScanData та захищений законодавством про 
                                інтелектуальну власність.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Обмеження відповідальності</h2>
                            <p>
                                ScanData не несе відповідальності за:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Будь-які перерви в роботі веб-сайту</li>
                                <li>Втрату даних або інформації</li>
                                <li>Шкоду, заподіяну через використання нашого веб-сайту</li>
                                <li>Дії третіх осіб</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Зміни в умовах використання</h2>
                            <p>
                                Ми залишаємо за собою право змінювати ці умови використання в будь-який час. 
                                Зміни набувають чинності з моменту їх публікації на веб-сайті.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Припинення використання</h2>
                            <p>
                                Ми маємо право припинити або обмежити доступ до нашого веб-сайту в будь-який час 
                                без попереднього повідомлення, якщо ви порушуєте ці умови використання.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Примірний закон</h2>
                            <p>
                                Ці умови використання регулюються законодавством України. Будь-які суперечки 
                                будуть вирішуватися в судах України.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Контакти</h2>
                            <p>
                                Для питань щодо умов використання, будь ласка, зв'яжіться з нами:
                            </p>
                            <div className="mt-2">
                                <p>Email: legal@scandata.ua</p>
                                <p>Телефон: +380 (44) 123-45-67</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsOfUse; 