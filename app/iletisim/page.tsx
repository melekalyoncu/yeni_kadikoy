'use client';

import { useState } from 'react';
import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';

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
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero (daha kompakt) */}
      <HeroBand
        pill="İletişim • Yanıt Süresi: Kısa"
        title="İLETİŞİM"
        subtitle="Soruların için bize yaz—en kısa sürede dönüş yapalım."
      />

      <GridShell>

        {/* Orta içerik: max width ile sınırlı */}
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6 space-y-10">
            {/* Form Kartı */}
            <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">Bize Ulaşın</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">E-posta *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Konu *</label>
                  <select
                    name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 transition"
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mesajınız *</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows={4} required
                    className="w-full px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 transition"
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-block bg-gradient-to-r from-slate-800 to-slate-700 hover:shadow-lg text-white font-medium py-2 px-6 rounded-lg transition-all hover:-translate-y-0.5"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>

            {/* Bilgi Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Adres', text: 'Kadıköy Spor Kulübü\nKadıköy / İstanbul' },
                { title: 'Telefon', text: '+90 XXX XXX XX XX' },
                { title: 'E-posta', text: 'info@kadikoysporkulubu.com' },
                { title: 'Çalışma Saatleri', text: 'Hafta içi: 09:00 - 20:00\nCumartesi: 09:00 - 18:00\nPazar: Kapalı' },
              ].map(({ title, text }, i) => (
                <div key={i} className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <p className="text-sm font-semibold text-slate-800 mb-2">{title}</p>
                  <p className="text-sm whitespace-pre-line text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            {/* Harita Placeholder */}
            <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-500 font-medium">
              Harita buraya eklenecek
            </div>
          </div>
        </main>

      </GridShell>
    </div>
  );
}
