import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Політика конфіденційності</h1>
                    
                    <div className="space-y-6 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Загальні положення</h2>
                            <p>
                                Ця політика конфіденційності описує, як ScanData збирає, використовує та захищає персональні дані користувачів нашого веб-сайту. 
                                Ми зобов'язуємося захищати вашу конфіденційність та забезпечувати безпеку ваших персональних даних.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Збір інформації</h2>
                            <p>
                                Ми збираємо наступну інформацію:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Ім'я та контактна інформація (email, телефон)</li>
                                <li>Інформація про компанію</li>
                                <li>Дані про використання веб-сайту</li>
                                <li>Інформація про замовлення та послуги</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Використання інформації</h2>
                            <p>
                                Ми використовуємо зібрану інформацію для:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Обробки ваших замовлень</li>
                                <li>Надання послуг та підтримки</li>
                                <li>Покращення нашого веб-сайту</li>
                                <li>Відправки маркетингових матеріалів (з вашої згоди)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Захист даних</h2>
                            <p>
                                Ми впроваджуємо відповідні технічні та організаційні заходи для захисту ваших персональних даних від несанкціонованого доступу, 
                                зміни, розкриття або знищення.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
                            <p>
                                Наш веб-сайт використовує файли cookies для покращення роботи сайту та збору статистики. 
                                Ви можете налаштувати свої браузери для відмови від прийняття cookies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Права користувачів</h2>
                            <p>
                                Ви маєте право:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Отримати доступ до своїх персональних даних</li>
                                <li>Виправити неточні дані</li>
                                <li>Видалити свої дані</li>
                                <li>Обмежити обробку даних</li>
                                <li>Відкликати згоду на обробку даних</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Контакти</h2>
                            <p>
                                Для питань щодо конфіденційності та персональних даних, будь ласка, зв'яжіться з нами:
                            </p>
                            <div className="mt-2">
                                <p>Email: privacy@scandata.ua</p>
                                <p>Телефон: +380 (44) 123-45-67</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Зміни в політиці конфіденційності</h2>
                            <p>
                                Ми залишаємо за собою право вносити зміни до цієї політики конфіденційності. 
                                Будь ласка, регулярно перевіряйте цю сторінку для ознайомлення з оновленнями.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy; 