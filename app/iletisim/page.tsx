'use client';

import { useState } from 'react';
import SponsorSidebar from '@/app/components/SponsorSidebar';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">İLETİŞİM</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bizimle iletişime geçin, sorularınızı yanıtlayalım
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-2">
            <SponsorSidebar />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Bize Ulaşın</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Seçiniz</option>
                      <option value="kayit">Kayıt Bilgisi</option>
                      <option value="voleybol">Voleybol Branşı</option>
                      <option value="basketbol">Basketbol Branşı</option>
                      <option value="okculuk">Okçuluk Branşı</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition"
                  >
                    GÖNDER
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📍</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Adres</h3>
                      <p className="text-gray-600">
                        Kadıköy Spor Kulübü<br />
                        Kadıköy, İstanbul<br />
                        Türkiye
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📞</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Telefon</h3>
                      <p className="text-gray-600">
                        +90 XXX XXX XX XX<br />
                        +90 XXX XXX XX XX
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">✉️</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">E-posta</h3>
                      <p className="text-gray-600">
                        info@kadikoysporkulubu.com<br />
                        kayit@kadikoysporkulubu.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🕐</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Çalışma Saatleri</h3>
                      <p className="text-gray-600">
                        Pazartesi - Cuma: 09:00 - 20:00<br />
                        Cumartesi: 09:00 - 18:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-lg mb-4">Sosyal Medya</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <span className="text-2xl">f</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <span className="text-2xl">t</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <span className="text-2xl">i</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <span className="text-2xl">y</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Konum</h2>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-lg">Harita buraya eklenecek</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-2">
            <SponsorSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}

