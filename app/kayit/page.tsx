'use client';

import { useState } from 'react';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';
import HeroBand from '@/app/components/sections/HeroBand';
import CTAButton from '@/app/components/ui/CTAButton';

export default function KayitPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    birthDate: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    branch: '',
    ageGroup: '',
    program: '',
    healthInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Kayıt başvurunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.');
    setFormData({
      studentName: '',
      birthDate: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      branch: '',
      ageGroup: '',
      program: '',
      healthInfo: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <HeroBand
        pill="Kayıt • 2025 Dönemi"
        title="KAYIT OL"
        subtitle="Modern tesislerde profesyonel eğitim."
        actions={
          <>
            <CTAButton href="/kayit" variant="primary" size="md">
              KAYIT OL
            </CTAButton>
            <CTAButton href="/iletisim" variant="secondary" size="md">
              BİLGİ AL
            </CTAButton>
          </>
        }
      />

      {/* DIŞ SARMA: tam genişlik + 12 kolon GRID */}
      <div className="w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Sol Sponsor — lg ve üzeri göster, kenara yakın görünüm için sadece iç padding */}
          <aside className="lg:col-span-2 px-4 hidden lg:block">
            <div className="lg:sticky lg:top-6">
              <SponsorSidebar maxSponsors={6} />
            </div>
          </aside>

          {/* Orta içerik — okunabilirlik için max width */}
          <main className="lg:col-span-8">
            <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
              {/* Bilgilendirme */}
              <div className="bg-blue-50 border-l-4 border-[var(--primary-yellow)] p-5 md:p-6 mb-8 rounded-r-xl shadow-sm">
                <h3 className="font-bold text-base md:text-lg text-slate-800 mb-2">📋 Kayıt Bilgilendirmesi</h3>
                <ul className="text-slate-700 space-y-1.5 md:space-y-2 text-sm">
                  <li>• Kayıt formunu eksiksiz doldurunuz</li>
                  <li>• Başvurunuz onaylandıktan sonra sizinle iletişime geçilecektir</li>
                  <li>• Sağlık raporu ve nüfus cüzdanı fotokopisi gereklidir</li>
                  <li>• Kayıt ücreti ilk antrenman öncesi ödenmelidir</li>
                </ul>
              </div>

              {/* Form kartı */}
              <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8">Kayıt Formu</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Sporcu Bilgileri */}
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">Sporcu Bilgileri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="studentName" className="block text-sm font-medium text-slate-700 mb-2">
                          Ad Soyad *
                        </label>
                        <input
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="birthDate" className="block text-sm font-medium text-slate-700 mb-2">
                          Doğum Tarihi *
                        </label>
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Veli Bilgileri */}
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">Veli Bilgileri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-slate-700 mb-2">
                          Veli Ad Soyad *
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          inputMode="tel"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                          Adres *
                        </label>
                        <input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Seçimi */}
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">Program Seçimi</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="branch" className="block text-sm font-medium text-slate-700 mb-2">
                          Branş *
                        </label>
                        <select
                          id="branch"
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        >
                          <option value="">Seçiniz</option>
                          <option value="voleybol">🏐 Voleybol</option>
                          <option value="basketbol">🏀 Basketbol</option>
                          <option value="okculuk">🎯 Okçuluk</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="ageGroup" className="block text-sm font-medium text-slate-700 mb-2">
                          Yaş Grubu *
                        </label>
                        <select
                          id="ageGroup"
                          name="ageGroup"
                          value={formData.ageGroup}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        >
                          <option value="">Seçiniz</option>
                          <option value="u12">U12 (10–12)</option>
                          <option value="u14">U14 (12–14)</option>
                          <option value="u16">U16 (14–16)</option>
                          <option value="u18">U18 (16–18)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-slate-700 mb-2">
                          Program Türü *
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                        >
                          <option value="">Seçiniz</option>
                          <option value="takim">Takım Antrenmanı</option>
                          <option value="yaz">Yaz Spor Okulu</option>
                          <option value="haftasonu">Hafta Sonu Okulu</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Sağlık Bilgileri */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">Sağlık Bilgileri</h3>
                    <label htmlFor="healthInfo" className="block text-sm font-medium text-slate-700 mb-2">
                      Sağlık Durumu / Özel Notlar
                    </label>
                    <textarea
                      id="healthInfo"
                      name="healthInfo"
                      value={formData.healthInfo}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Alerjiler, düzenli ilaç kullanımı vb."
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-transparent transition"
                    />
                  </div>

                  {/* Gönder */}
                  <div className="pt-4 md:pt-6">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-white text-slate-900 font-bold rounded-lg px-6 py-3 border border-slate-300 hover:shadow-md transition-all"
                      aria-label="Kayıt başvurusunu gönder"
                    >
                      KAYIT BAŞVURUSU GÖNDER
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>

          {/* Sağ Sponsor — lg ve üzeri göster */}
          <aside className="lg:col-span-2 px-4 hidden lg:block">
            <div className="lg:sticky lg:top-6">
              <SponsorSidebar maxSponsors={6} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
