'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'YENİ KADIKÖY SPOR KULÜBÜ',
    subtitle: 'Geleceğin Şampiyonlarını Yetiştiriyoruz',
    description: 'Voleybol, Basketbol ve Okçuluk branşlarında profesyonel eğitim',
    bgColor: 'from-[#0047AB] via-[#0056D2] to-[#003580]',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'PROFESYONEL EĞİTİM',
    subtitle: 'Deneyimli Antrenörler ve Modern Tesisler',
    description: 'Uzman kadromuz ve son teknoloji ekipmanlarımızla yanınızdayız',
    bgColor: 'from-[#003580] via-[#0047AB] to-[#0056D2]',
    icon: '⭐',
  },
  {
    id: 3,
    title: 'BAŞARIYA ULAŞIN',
    subtitle: 'Takım Ruhu ve Disiplin',
    description: 'Sporda ve hayatta başarılı bireyler yetiştiriyoruz',
    bgColor: 'from-[#0056D2] via-[#0047AB] to-[#003580]',
    icon: '🎯',
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
    <div className="relative h-[450px] md:h-[550px] overflow-hidden bg-gradient-to-br from-[#0047AB] to-[#003580] dark:from-gray-900 dark:to-gray-800">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-full flex items-center justify-center text-white relative">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 text-9xl">{slide.icon}</div>
              <div className="absolute bottom-20 right-20 text-9xl">{slide.icon}</div>
            </div>

            {/* Content */}
            <div className="text-center px-6 relative z-10 max-w-4xl">
              <div className="text-6xl mb-8">{slide.icon}</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-4 font-semibold text-[#FFD700]">{slide.subtitle}</p>
              <p className="text-base md:text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">{slide.description}</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/kayit"
                  className="bg-[#FFD700] text-[#0047AB] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all shadow-lg"
                >
                  Hemen Kayıt Ol
                </Link>
                <Link
                  href="/hakkimizda"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
                >
                  Hakkımızda
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-3 bg-[#FFD700]'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

