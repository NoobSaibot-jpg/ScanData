import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
     <main className="pt-20 flex-grow bg-gradient-to-b from-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
        {/* Декоративные круги */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-customGreen/20 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-blue-600/20 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
        <section className="relative z-10 max-w-xl w-full mx-auto bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl text-center">
          <h1 className="text-7xl font-extrabold text-customGreen mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Сторінку не знайдено</h2>
          <p className="text-lg text-gray-600 mb-8">На жаль, такої сторінки не існує або вона була переміщена.</p>
          <Link to="/" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-customGreen rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            На головну
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound; 