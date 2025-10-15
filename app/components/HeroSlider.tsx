'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Kadıköy Spor Kulübü',
    subtitle: 'Geleceğin Şampiyonlarını Yetiştiriyoruz',
    image: '/images/hero1.jpg',
  },
  {
    id: 2,
    title: 'Profesyonel Eğitim',
    subtitle: 'Deneyimli Antrenörler Eşliğinde',
    image: '/images/hero2.jpg',
  },
  {
    id: 3,
    title: 'Modern Tesisler',
    subtitle: 'En İyi Spor Ortamı',
    image: '/images/hero3.jpg',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-full flex items-center justify-center">
            {/* Placeholder for image - you can add actual images later */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900" />
            
            <div className="relative z-20 text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition">
                DAHA FAZLA BİLGİ
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
      >
        ›
      </button>
    </div>
  );
}

