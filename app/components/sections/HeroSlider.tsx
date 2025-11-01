"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Her slide için içerik
const slides = [
  {
    id: 1,
    title: "YENİ KADIKÖY SPOR KULÜBÜ",
    subtitle: "Geleceğin Şampiyonlarını Yetiştiriyoruz",
    description:
      "Voleybol, Basketbol ve Okçuluk branşlarında disiplinli ve bilimsel temelli spor eğitimi.",
    stats: [
      { label: "Aktif Sporcu", value: "500+" },
      { label: "Kupa / Derece", value: "50+" },
      { label: "Branş", value: "3" },
    ],
    icon: "🏆",
    // koyu mavi → lacivert → mavi geçiş
    bgGradientFrom: "#0a1a3a",
    bgGradientVia: "#1E4FBC",
    bgGradientTo: "#003580",
  },
  {
    id: 2,
    title: "PROFESYONEL EĞİTİM",
    subtitle: "Deneyimli Antrenörler ve Modern Tesisler",
    description:
      "Her yaş grubuna uygun programlar, güvenli ortam ve bireysel takibe dayalı gelişim planları.",
    stats: [
      { label: "Antrenör Kadrosu", value: "Uzman" },
      { label: "Salon & Tesis", value: "Modern" },
      { label: "Takip Sistemi", value: "Birebir" },
    ],
    icon: "⭐",
    bgGradientFrom: "#001937",
    bgGradientVia: "#003580",
    bgGradientTo: "#1E4FBC",
  },
  {
    id: 3,
    title: "TAKIM RUHU • DİSİPLİN • SAYGI",
    subtitle: "Sadece Spor Değil, Karakter Gelişimi",
    description:
      "Sahada mücadele eden, sahada olduğu kadar hayatta da duruşu olan bireyler yetiştiriyoruz.",
    stats: [
      { label: "Odak", value: "Disiplin" },
      { label: "Değer", value: "Saygı" },
      { label: "Ruh", value: "Takım" },
    ],
    icon: "🎯",
    bgGradientFrom: "#0a1a3a",
    bgGradientVia: "#003580",
    bgGradientTo: "#1E4FBC",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Manuel geçiş
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="relative h-[480px] md:h-[560px] overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(234,179,8,0.18) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%)`,
      }}
    >
      {/* Ana degrade arkaplan */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `linear-gradient(135deg, ${slide.bgGradientFrom} 0%, ${slide.bgGradientVia} 40%, ${slide.bgGradientTo} 100%)`,
        }}
      />

      {/* Koyu overlay (okunabilirlik için) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_70%)] mix-blend-multiply" />

      {/* Subtle pattern / ikonlar */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute top-20 left-8 md:left-20 text-[4rem] md:text-[6rem] select-none">
          {slide.icon}
        </div>
        <div className="absolute bottom-20 right-8 md:right-20 text-[4rem] md:text-[6rem] select-none">
          {slide.icon}
        </div>
        {/* ince grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)] mix-blend-screen" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <div className="max-w-5xl w-full text-center mx-auto">
          {/* icon */}
          <div className="text-5xl md:text-6xl mb-6">{slide.icon}</div>

          {/* title */}
          <h1 className="text-2xl md:text-5xl font-semibold italic leading-tight tracking-[-0.03em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {slide.title}
          </h1>

          {/* subtitle */}
          <p className="text-lg md:text-2xl mt-4 font-semibold text-[#eab308] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {slide.subtitle}
          </p>

          {/* description */}
          <p className="text-sm md:text-base mt-3 text-white/80 max-w-2xl mx-auto leading-relaxed">
            {slide.description}
          </p>

          {/* stat bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[11px] md:text-[13px] font-medium">
            {slide.stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-3 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-w-[90px]"
              >
                <span className="text-[#FFD700] text-sm md:text-base font-semibold leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {s.value}
                </span>
                <span className="text-white/80 text-[10px] md:text-[11px] leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap mt-10">
            <Link
              href="/kayit"
              className="inline-flex items-center justify-center rounded-lg bg-[#eab308] text-[#003580] font-semibold text-[13px] md:text-[14px] px-5 py-2.5 shadow-[0_16px_40px_rgba(234,179,8,0.45)] hover:shadow-[0_20px_60px_rgba(234,179,8,0.6)] hover:-translate-y-0.5 transition"
            >
              Hemen Kayıt Ol
            </Link>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium text-[13px] md:text-[14px] px-5 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition backdrop-blur-sm"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 md:w-10 h-2.5 bg-gradient-to-r from-[#eab308] to-[#c2410c] shadow-[0_8px_24px_rgba(234,179,8,0.6)]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
