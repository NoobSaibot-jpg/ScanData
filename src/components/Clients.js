import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Импорт изображений
import f from "../images/clients/1.jpg";
import s from "../images/clients/2.jpg";
import t from "../images/clients/3.jpg";
import fo from "../images/clients/4.jpg";
import fi from "../images/clients/5.jpg";
import si from "../images/clients/6.jpg";
import se from "../images/clients/7.jpg";
import e from "../images/clients/8.jpg";
import n from "../images/clients/9.jpg";
import ten from "../images/clients/10.jpg";
import el from "../images/clients/11.jpg";
import tw from "../images/clients/12.jpg";

const clientImages = [f, s, t, fo, fi, si, se, e, n, ten, el, tw];

const Clients = () => {
  return (
    <section id="clients" className="relative bg-gradient-to-b from-gray-50 to-blue-50 py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-customGreen/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-customGreen">
            Наші клієнти
          </h2>
          <div className="w-24 h-1.5 bg-customGreen mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Swiper слайдер */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Градиентные маски */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ 
              delay: 2500, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            className="py-8"
          >
            {clientImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  {/* Фоновая подложка */}
                  <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-blue-600/10 rounded-2xl shadow-lg transform transition duration-500 group-hover:scale-105"></div>
                  
                  {/* Логотип клиента */}
                  <div className="relative p-6 flex items-center justify-center h-40">
                    <img
                      src={image}
                      alt={`client-${index + 1}`}
                      className="max-h-full w-auto object-contain transform transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;