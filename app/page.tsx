"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSlider from "./components/sections/HeroSlider";
import SponsorSidebar from "./components/common/SponsorSidebar";
import NewsCard from "./components/cards/NewsCard";
import BranchCard from "./components/cards/BranchCard";
import { useGallery, MediaItem } from "@/lib/hooks/useGallery";
import { useNewsList } from "@/lib/hooks/useNews";

// --- Animasyon preset ---
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// --- SECTION HEADER ---
function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10 md:mb-14">
      <motion.div
        variants={fadeUp}
        className="flex items-center justify-center gap-3 md:gap-4"
      >
        <span className="h-[2px] w-8 md:w-10 rounded-full bg-gradient-to-r from-[#eab308] to-[#c2410c]" />

        <motion.h2
          variants={fadeUp}
          className="
            text-2xl md:text-4xl
            font-medium italic
            tracking-[-0.03em]
            bg-gradient-to-r from-[#eab308] to-[#c2410c]
            text-transparent bg-clip-text
            drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]
            pr-1
          "
        >
          {title}
        </motion.h2>

        <span className="h-[2px] w-8 md:w-10 rounded-full bg-gradient-to-r from-[#eab308] to-[#c2410c]" />
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-sm md:text-base max-w-xl mx-auto text-slate-500 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// --- CARD SHELL (şu an sayfada direkt kullanılmıyor ama kalsın ilerisi için)
function CardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563eb]/20 via-[#eab308]/30 to-[#16a34a]/20 shadow-[0_24px_80px_rgba(0,0,0,0.18)] ${className}`}
    >
      <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   MEDIA CAROUSEL
   - Otomatik kayan slider
   - Hover'da next/prev butonu ve info overlay'i çıkıyor
   - Altında nokta indicator'ları var
   ========================================================= */
function MediaCarousel({
  items,
}: {
  items: MediaItem[];
}) {
  // elimizdeki görselleri normalize edelim
  // fileUrl'leri direkt slider görseli olarak kullanıyoruz.
  const slides = useMemo(
    () =>
      items.map((m) => ({
        src: m.fileUrl,
        alt: m.fileName,
      })),
    [items]
  );

  const [index, setIndex] = useState(0);

  // otomatik geçiş
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        return next >= slides.length ? 0 : next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  const goPrev = () => {
    setIndex((prev) => {
      if (prev === 0) return slides.length - 1;
      return prev - 1;
    });
  };

  const goNext = () => {
    setIndex((prev) => {
      const next = prev + 1;
      return next >= slides.length ? 0 : next;
    });
  };

  if (slides.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📸</div>
        <p className="text-slate-600 text-sm font-medium">
          Henüz medya eklenmemiş
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="
        relative
        w-full
        max-w-4xl
        mx-auto
        group
      "
    >
      {/* SLIDE WRAPPER */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          shadow-[0_24px_60px_rgba(0,0,0,0.45)]
          ring-1 ring-black/20
          bg-black
          aspect-[4/3]
        "
      >
        {/* SLIDES */}
        {slides.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-500 ease-in-out
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* ALPHA OVERLAY / BİLGİ BADGE */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            flex flex-col justify-end
            bg-gradient-to-t from-black/50 via-black/0 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity
            p-4
          "
        >
          <div className="flex items-end justify-between gap-2">
            <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg ring-1 ring-white/20">
              Yeni Kadıköy Spor Arşivi
            </span>
            <span className="text-[11px] font-medium text-white/80">
              📷 Medya
            </span>
          </div>
        </div>

        {/* SOL-OK / SAĞ-OK */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="
                absolute left-2 top-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100
                transition-opacity
                inline-flex items-center justify-center
                h-9 w-9 rounded-lg
                bg-black/40 text-white
                ring-1 ring-white/20
                backdrop-blur-sm
                text-xs font-semibold
                hover:bg-black/60
              "
              aria-label="Önceki fotoğraf"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goNext}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100
                transition-opacity
                inline-flex items-center justify-center
                h-9 w-9 rounded-lg
                bg-black/40 text-white
                ring-1 ring-white/20
                backdrop-blur-sm
                text-xs font-semibold
                hover:bg-black/60
              "
              aria-label="Sonraki fotoğraf"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* DOT INDICATORS */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-2 w-2 rounded-full
                ring-1 ring-slate-900/20
                dark:ring-white/20
                ${
                  i === index
                    ? "bg-[#2563eb] shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                    : "bg-slate-300 dark:bg-slate-600"
                }
              `}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* =========================================================
   ANA SAYFA
   ========================================================= */
export default function Home() {
  // Medya verileri
  const { media, isLoading: loadingMedia } = useGallery();

  // Aktif haberler (ilk 3)
  const { news: newsData, isLoading: loadingNews } = useNewsList(
    undefined,
    true,
    1,
    3
  );

  // Hydration guard
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Homepage limitler
  // mediaGallery: carousel gösterimi için tüm liste
  // (istersen burayı slice(0,10) vs yapıp sınırlayabilirsin)
  const mediaGallery = isMounted ? media : [];
  const news = isMounted ? newsData.slice(0, 3) : [];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* HERO */}
      <HeroSlider />

      <div className="w-full py-16 md:py-24">
        {/*
          lg: 12 kolon -> 2 / 8 / 2
          mobilde tek kolon
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* SOL SPONSOR */}
          <aside className="lg:col-span-2 px-4 flex justify-center lg:block">
            <SponsorSidebar maxSponsors={6} />
          </aside>

          {/* ANA İÇERİK */}
          <main className="lg:col-span-8">
            <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6 space-y-20 md:space-y-24">
              {/* HAKKIMIZDA */}
              <section>
                <SectionHeader
                  title="Hakkımızda"
                  subtitle="Gençlerimize sağlıklı bir spor kültürü kazandırmak için buradayız"
                />

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  {/* metin */}
                  <motion.div variants={fadeUp} className="space-y-5">
                    <p className="text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                      Yeni Kadıköy Spor Kulübü olarak hedefimiz; çocuklara ve
                      gençlere spor alışkanlığı kazandırmak, disiplinli ve
                      sağlıklı bir yaşam kültürü oluşturmaktır.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                      Deneyimli antrenörlerimiz eşliğinde voleybol, basketbol ve
                      okçuluk branşlarında sistemli ve gelişime odaklı eğitim
                      sağlıyoruz.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                      Modern tesislerimiz, güvenli ortamımız ve aileyle sürekli
                      iletişim yaklaşımımızla sporcularımızın yanında
                      oluyoruz.
                    </p>

                    <Link
                      href="/hakkimizda"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#1E4FBC] hover:bg-[#183E93] text-white px-5 py-2.5 text-[13px] font-semibold shadow-[0_12px_32px_rgba(30,79,188,0.4)] hover:shadow-[0_16px_40px_rgba(24,62,147,0.6)] hover:-translate-y-0.5 transition"
                    >
                      Devamını Oku
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* başarı / kulüp kartı */}
                  <motion.div variants={fadeUp} className="max-w-sm mx-auto">
                    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#1E4FBC]/50 via-[#eab308]/40 to-[#1E4FBC]/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                      <div
                        className="relative rounded-2xl overflow-hidden text-white flex flex-col items-center text-center px-6 py-8 shadow-[0_32px_80px_rgba(0,0,0,0.8)] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(circle_at_80%_80%,rgba(30,79,188,0.22)_0%,rgba(0,0,0,0)_60%)]"
                        style={{
                          backgroundColor: "#0a1a3a",
                          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(234,179,8,0.18) 0%, rgba(0,0,0,0) 60%),
                            radial-gradient(circle at 80% 80%, rgba(30,79,188,0.22) 0%, rgba(0,0,0,0) 60%)`,
                        }}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.6] mix-blend-screen"
                          style={{
                            background:
                              "radial-gradient(circle at 50% 0%, rgba(0,53,128,0.4) 0%, rgba(0,0,0,0) 70%)",
                          }}
                        />

                        <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[#eab308]/30 blur-3xl opacity-40" />
                        <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#1E4FBC]/30 blur-3xl opacity-30" />

                        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full bg-white ring-2 ring-[#eab308] shadow-[0_20px_40px_rgba(234,179,8,0.5)] flex items-center justify-center overflow-hidden">
                          <img
                            src="/images/logo.png"
                            alt="Yeni Kadıköy Spor Kulübü Logosu"
                            className="object-contain w-16 h-16"
                          />
                        </div>

                        <h3 className="relative z-10 mt-6 text-lg md:text-xl font-semibold italic tracking-[-0.03em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                          Yeni Kadıköy Spor Kulübü
                        </h3>

                        <div className="relative z-10 mt-4 text-[12px] md:text-[13px] text-neutral-200 leading-relaxed font-medium flex flex-col gap-3">
                          <div className="flex flex-col">
                            <span className="text-white font-semibold text-[13px] md:text-[14px] leading-none">
                              500+ Aktif Sporcu
                            </span>
                            <span className="text-neutral-400 text-[11px] leading-snug">
                              Altyapı ve spor okulları dahil
                            </span>
                          </div>

                          <div className="flex flex-col">
                            <span className="text-white font-semibold text-[13px] md:text-[14px] leading-none">
                              50+ Kupa / Kategori Derecesi
                            </span>
                            <span className="text-neutral-400 text-[11px] leading-snug">
                              Yerel ligler ve turnuvalar
                            </span>
                          </div>

                          <div className="flex flex-col">
                            <span className="text-white font-semibold text-[13px] md:text-[14px] leading-none">
                              3 Branş: 🏐 🏀 🎯
                            </span>
                            <span className="text-neutral-400 text-[11px] leading-snug">
                              Voleybol, Basketbol, Okçuluk
                            </span>
                          </div>
                        </div>

                        <Link
                          href="/hakkimizda"
                          className="relative z-10 mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#eab308] hover:text-white transition-colors"
                        >
                          Kulübü Tanı →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </section>

              {/* HABERLER */}
              <section>
                <SectionHeader
                  title="Son Haberler"
                  subtitle="Kulübümüzden en güncel gelişmeler"
                />

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-3 gap-6 md:gap-8"
                >
                  {news.map((n) => (
                    <NewsCard key={n.id} item={n} />
                  ))}
                </motion.div>

                <div className="text-center mt-10">
                  <Link
                    href="/haberler"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1E4FBC] hover:bg-[#183E93] text-white px-5 py-2.5 text-[13px] font-semibold shadow-[0_12px_32px_rgba(30,79,188,0.4)] hover:shadow-[0_16px_40px_rgba(24,62,147,0.6)] hover:-translate-y-0.5 transition"
                  >
                    Tüm Haberleri Gör
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </section>

              {/* MEDYA GALERİSİ */}
              <section>
                <SectionHeader
                  title="Medya Galerisi"
                  subtitle="Antrenmanlardan turnuvalara, sahadaki anlarımız"
                />

                {loadingMedia ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">⏳</div>
                    <p className="text-slate-600 text-sm font-medium">
                      Yükleniyor...
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Carousel */}
                    <MediaCarousel items={mediaGallery} />

                    {/* Tümünü Gör Butonu */}
                    {mediaGallery.length > 0 && (
                      <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mt-10 text-center"
                      >
                        <Link
                          href="/galeri"
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1E4FBC] to-[#183E93] text-white font-semibold shadow-[0_8px_24px_rgba(30,79,188,0.4)] hover:shadow-[0_12px_32px_rgba(24,62,147,0.6)] hover:-translate-y-0.5 transition-all"
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
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          Tüm Galeriyi Gör ({mediaGallery.length} Fotoğraf)
                        </Link>
                      </motion.div>
                    )}
                  </>
                )}
              </section>

              {/* BRANŞLAR */}
              <section>
                <SectionHeader
                  title="Branşlarımız"
                  subtitle="Her yaş grubuna uygun programlarımız var"
                />

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-3 gap-6 md:gap-8"
                >
                  <BranchCard
                    href="/branslar/voleybol"
                    title="Voleybol"
                    stats="4 yaş grubu • 100+ sporcu"
                    emoji="🏐"
                    gradient="bg-gradient-to-br from-[#EAB308] to-[#FACC15]"
                  />
                  <BranchCard
                    href="/branslar/basketbol"
                    title="Basketbol"
                    stats="4 yaş grubu • 120+ sporcu"
                    emoji="🏀"
                    gradient="bg-gradient-to-br from-[#ea580c] to-[#7c2d12]"
                  />
                  <BranchCard
                    href="/branslar/okculuk"
                    title="Okçuluk"
                    stats="4 yaş grubu • 80+ sporcu"
                    emoji="🎯"
                    gradient="bg-gradient-to-br from-[#16a34a] to-[#065f46]"
                  />
                </motion.div>
              </section>
            </div>
          </main>

          {/* SAĞ SPONSOR */}
          <aside className="lg:col-span-2 px-4 flex justify-center lg:block">
            <SponsorSidebar maxSponsors={6} />
          </aside>
        </div>
      </div>
    </div>
  );
}
