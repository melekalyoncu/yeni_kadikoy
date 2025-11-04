'use client';

import { useState } from 'react';
import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';

// Örnek ürünler
const products = [
  {
    id: 1,
    name: 'Yeni Kadıköy Forma (Ev Sahibi)',
    category: 'Forma',
    price: 450,
    image: '/images/product-placeholder.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Resmi ev sahibi forması, nefes alabilen kumaş',
  },
  {
    id: 2,
    name: 'Yeni Kadıköy Forma (Deplasman)',
    category: 'Forma',
    price: 450,
    image: '/images/product-placeholder.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Resmi deplasman forması, nefes alabilen kumaş',
  },
  {
    id: 3,
    name: 'Antrenman Tişörtü',
    category: 'Antrenman',
    price: 250,
    image: '/images/product-placeholder.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Günlük antrenmanlar için rahat tişört',
  },
  {
    id: 4,
    name: 'Antrenman Şortu',
    category: 'Antrenman',
    price: 200,
    image: '/images/product-placeholder.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Esnek ve rahat antrenman şortu',
  },
  {
    id: 5,
    name: 'Eşofman Takımı',
    category: 'Eşofman',
    price: 650,
    image: '/images/product-placeholder.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Kulüp logolu tam eşofman takımı',
  },
  {
    id: 6,
    name: 'Spor Çantası',
    category: 'Aksesuar',
    price: 350,
    image: '/images/product-placeholder.jpg',
    sizes: ['Tek Beden'],
    description: 'Geniş hacimli, dayanıklı spor çantası',
  },
  {
    id: 7,
    name: 'Kulüp Şapkası',
    category: 'Aksesuar',
    price: 150,
    image: '/images/product-placeholder.jpg',
    sizes: ['Tek Beden'],
    description: 'Ayarlanabilir kulüp logolu şapka',
  },
  {
    id: 8,
    name: 'Kulüp Atkısı',
    category: 'Aksesuar',
    price: 180,
    image: '/images/product-placeholder.jpg',
    sizes: ['Tek Beden'],
    description: 'Kulüp renklerinde örme atkı',
  },
];

const categories = ['Tümü', 'Forma', 'Antrenman', 'Eşofman', 'Aksesuar'];

export default function MagazaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredProducts = selectedCategory === 'Tümü' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Mağaza • Resmi Ürünler"
        title="KULÜP MAĞAZASI"
        subtitle="Resmi kulüp ürünleri ve spor malzemeleri"
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Giriş */}
            <section className="mb-8">
              <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 p-6">
                <p className="text-slate-700 leading-relaxed">
                  Yeni Kadıköy Spor Kulübü resmi ürünlerini buradan satın alabilirsiniz. 
                  Tüm ürünler yüksek kaliteli malzemelerden üretilmiştir.
                </p>
              </div>
            </section>

            {/* Kategori Filtreleri */}
            <section className="mb-8">
              <div className="flex gap-3 justify-center flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-lg font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-[#1E4FBC] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* Ürünler */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Ürün Görseli */}
                    <div className="aspect-square bg-slate-100 flex items-center justify-center relative overflow-hidden">
                      <div className="text-8xl group-hover:scale-110 transition-transform">
                        👕
                      </div>
                      <div className="absolute top-3 right-3 bg-[#EAB308] text-white text-xs font-bold px-3 py-1 rounded-full">
                        YENİ
                      </div>
                    </div>
                    
                    {/* Ürün Bilgileri */}
                    <div className="p-5">
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-[#1E4FBC] bg-blue-50 px-2 py-1 rounded">
                          {product.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-slate-600 mb-3">
                        {product.description}
                      </p>
                      
                      <div className="mb-3">
                        <p className="text-xs text-slate-500 mb-1">Bedenler:</p>
                        <div className="flex gap-1 flex-wrap">
                          {product.sizes.map((size) => (
                            <span
                              key={size}
                              className="text-xs border border-slate-300 px-2 py-1 rounded"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                        <div>
                          <span className="text-2xl font-bold text-[#1E4FBC]">
                            ₺{product.price}
                          </span>
                        </div>
                        <button className="bg-[#1E4FBC] hover:bg-[#003580] text-white px-4 py-2 rounded-lg font-semibold transition text-sm">
                          Sepete Ekle
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sipariş Bilgileri */}
            <section className="mb-12">
              <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Sipariş ve Teslimat Bilgileri
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📦</span>
                      Teslimat
                    </h3>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Kargo ücretsiz (500 TL üzeri siparişlerde)</li>
                      <li>• Teslimat süresi: 3-5 iş günü</li>
                      <li>• Tüm Türkiye'ye gönderim</li>
                      <li>• Tesisten teslim alma seçeneği</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💳</span>
                      Ödeme
                    </h3>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Kredi kartı (Taksit seçenekleri mevcut)</li>
                      <li>• Banka havalesi / EFT</li>
                      <li>• Kapıda ödeme</li>
                      <li>• Tesisten alımlarda nakit ödeme</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🔄</span>
                      İade ve Değişim
                    </h3>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• 14 gün içinde iade hakkı</li>
                      <li>• Ücretsiz değişim (beden değişikliği)</li>
                      <li>• Ürün hasarsız ve etiketli olmalı</li>
                      <li>• İade kargo ücreti alıcıya aittir</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📞</span>
                      Destek
                    </h3>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Telefon: 0216 123 45 67</li>
                      <li>• E-posta: magaza@yenikadikoyspor.com</li>
                      <li>• Whatsapp: 0532 123 45 67</li>
                      <li>• Çalışma saatleri: 09:00 - 18:00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Özel Sipariş */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#1E4FBC] to-[#003580] rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                <div className="text-5xl mb-4">✨</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Özel Sipariş ve Toplu Alım
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Takımlar için toplu sipariş veya özel baskı talepleriniz için 
                  bizimle iletişime geçin. Özel fiyat avantajlarından yararlanın!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:magaza@yenikadikoyspor.com"
                    className="inline-block bg-white text-[#1E4FBC] hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition shadow-lg"
                  >
                    TOPLU SİPARİŞ TALEBİ
                  </a>
                  <a
                    href="tel:+902161234567"
                    className="inline-block bg-[#EAB308] text-slate-900 hover:bg-yellow-400 px-8 py-3 rounded-lg font-bold transition shadow-lg"
                  >
                    HEMEN ARAYIN
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

