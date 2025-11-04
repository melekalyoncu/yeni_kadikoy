'use client';

import { useState } from 'react';
import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';

// Örnek basın haberleri
const pressNews = [
  {
    id: 1,
    title: 'Yeni Kadıköy Spor Kulübü Ulusal Şampiyonada Altın Madalya Kazandı',
    source: 'Spor Gazetesi',
    date: '15 Ocak 2025',
    excerpt: 'Voleybol takımımız, ulusal şampiyonada büyük bir başarıya imza atarak altın madalya kazandı.',
    image: '/images/news-placeholder.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Dezavantajlı Çocuklara Ücretsiz Spor Eğitimi Projesi Başladı',
    source: 'Yerel Haber',
    date: '10 Ocak 2025',
    excerpt: 'Kulübümüz, ekonomik imkanları kısıtlı ailelerin çocuklarına ücretsiz spor eğitimi sunmaya başladı.',
    image: '/images/news-placeholder.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Basketbol Takımı Bölge Finallerinde',
    source: 'Spor Haberleri',
    date: '5 Ocak 2025',
    excerpt: 'Basketbol takımımız, bölge finallerine yükselmeyi başardı ve büyük bir coşkuyla karşılandı.',
    image: '/images/news-placeholder.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Okçuluk Branşında Yeni Rekorlar',
    source: 'Spor Dünyası',
    date: '28 Aralık 2024',
    excerpt: 'Okçuluk sporcularımız, ulusal yarışmalarda yeni rekorlar kırarak dikkat çekti.',
    image: '/images/news-placeholder.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'Yeni Kadıköy Spor Kulübü Çevre Dostu Tesisleriyle Örnek Oluyor',
    source: 'Çevre ve Yaşam',
    date: '20 Aralık 2024',
    excerpt: 'Kulübümüzün sürdürülebilirlik projeleri ve çevre dostu uygulamaları medyada geniş yankı buldu.',
    image: '/images/news-placeholder.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'Genç Sporcular Milli Takım Kampına Davet Edildi',
    source: 'Milli Spor',
    date: '15 Aralık 2024',
    excerpt: 'Kulübümüzden 3 genç sporcu, milli takım seçmelerine davet edildi.',
    image: '/images/news-placeholder.jpg',
    link: '#',
  },
];

export default function BasindaBizPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  
  const years = ['2025', '2024', '2023'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Hakkımızda • Medya"
        title="BASINDA BİZ"
        subtitle="Basında yer alan haberlerimiz ve medya yansımalarımız"
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Giriş */}
            <section className="mb-8">
              <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 p-6">
                <p className="text-slate-700 leading-relaxed">
                  Yeni Kadıköy Spor Kulübü'nün başarıları, sosyal sorumluluk projeleri ve 
                  etkinlikleri basında geniş yer buluyor. Aşağıda kulübümüz hakkında çıkan 
                  haberleri bulabilirsiniz.
                </p>
              </div>
            </section>

            {/* Yıl Filtresi */}
            <section className="mb-8">
              <div className="flex gap-3 justify-center flex-wrap">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-2 rounded-lg font-semibold transition ${
                      selectedYear === year
                        ? 'bg-[#1E4FBC] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </section>

            {/* Haberler */}
            <section className="mb-12">
              <div className="space-y-6">
                {pressNews.map((news) => (
                  <div
                    key={news.id}
                    className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="md:flex">
                      {/* Görsel */}
                      <div className="md:w-1/3 bg-slate-200 h-48 md:h-auto flex items-center justify-center">
                        <div className="text-6xl">📰</div>
                      </div>
                      
                      {/* İçerik */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-white bg-[#1E4FBC] px-3 py-1 rounded-full">
                            {news.source}
                          </span>
                          <span className="text-xs text-slate-500">{news.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-[#1E4FBC] transition">
                          <a href={news.link} target="_blank" rel="noopener noreferrer">
                            {news.title}
                          </a>
                        </h3>
                        
                        <p className="text-slate-700 leading-relaxed mb-4">
                          {news.excerpt}
                        </p>
                        
                        <a
                          href={news.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#1E4FBC] font-semibold hover:text-[#003580] transition"
                        >
                          Haberi Oku
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Basın İletişim */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Basın İletişim
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Kulübümüz hakkında haber yapmak, röportaj talebi veya basın bülteni almak 
                  için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">E-posta</h3>
                      <a href="mailto:basin@yenikadikoyspor.com" className="text-[#1E4FBC] hover:underline">
                        basin@yenikadikoyspor.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📱</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Telefon</h3>
                      <a href="tel:+902161234567" className="text-[#1E4FBC] hover:underline">
                        +90 (216) 123 45 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Medya Kiti */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Medya Kiti
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Kulübümüzün logosu, görselleri ve basın bültenleri için medya kitimizi 
                  indirebilirsiniz.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-[#1E4FBC] hover:bg-blue-50 transition"
                  >
                    <div className="text-3xl">🖼️</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Logo Paketi</h3>
                      <p className="text-xs text-slate-600">PNG, SVG, EPS</p>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-[#1E4FBC] hover:bg-blue-50 transition"
                  >
                    <div className="text-3xl">📸</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Fotoğraf Arşivi</h3>
                      <p className="text-xs text-slate-600">Yüksek çözünürlük</p>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-[#1E4FBC] hover:bg-blue-50 transition"
                  >
                    <div className="text-3xl">📄</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Basın Bültenleri</h3>
                      <p className="text-xs text-slate-600">PDF formatında</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

          </div>
        </main>
      </GridShell>
    </div>
  );
}

