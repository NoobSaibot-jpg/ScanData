import React, { useState } from 'react';

const ContactForm = ({ serviceType }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        serviceType: serviceType
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Будь ласка, введіть ваше ім\'я';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Будь ласка, введіть ваш email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Будь ласка, введіть коректний email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Будь ласка, введіть ваш телефон';
        } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
            newErrors.phone = 'Будь ласка, введіть коректний номер телефону';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Будь ласка, введіть ваше повідомлення';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Очищаем ошибку при вводе
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Здесь будет логика отправки формы
            // Например, отправка на API или email
            await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация отправки
            
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
                serviceType: serviceType
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Ім'я *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                    } focus:border-customGreen focus:ring-customGreen sm:text-sm`}
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                    } focus:border-customGreen focus:ring-customGreen sm:text-sm`}
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Телефон *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                    } focus:border-customGreen focus:ring-customGreen sm:text-sm`}
                />
                {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Компанія
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customGreen focus:ring-customGreen sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Повідомлення *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                    } focus:border-customGreen focus:ring-customGreen sm:text-sm`}
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-customGreen hover:bg-customGreen/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customGreen'
                    }`}
                >
                    {isSubmitting ? 'Відправка...' : 'Відправити'}
                </button>
            </div>

            {submitStatus === 'success' && (
                <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">
                                Дякуємо! Ваше повідомлення успішно відправлено.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-red-800">
                                Вибачте, сталася помилка. Будь ласка, спробуйте ще раз.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
};

export default ContactForm; 