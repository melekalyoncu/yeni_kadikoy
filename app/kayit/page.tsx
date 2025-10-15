'use client';

import { useState } from 'react';
import SponsorSidebar from '@/app/components/SponsorSidebar';

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
    // Form submission logic here
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
          <h1 className="text-5xl font-bold mb-4">KAYIT OL</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Kadıköy Spor Kulübü ailesine katılın, spor yolculuğunuza başlayın
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
            {/* Info Section */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">📋 Kayıt Bilgilendirmesi</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Kayıt formunu eksiksiz doldurunuz</li>
                <li>• Başvurunuz onaylandıktan sonra sizinle iletişime geçilecektir</li>
                <li>• Sağlık raporu ve nüfus cüzdanı fotokopisi gereklidir</li>
                <li>• Kayıt ücreti ilk antrenman öncesi ödenmelidir</li>
              </ul>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Kayıt Formu</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Information */}
                <div className="border-b pb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sporcu Bilgileri</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Doğum Tarihi *
                      </label>
                      <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent Information */}
                <div className="border-b pb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Veli Bilgileri</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                        Veli Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Adres *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Program Selection */}
                <div className="border-b pb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Program Seçimi</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                        Branş *
                      </label>
                      <select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Seçiniz</option>
                        <option value="voleybol">🏐 Voleybol</option>
                        <option value="basketbol">🏀 Basketbol</option>
                        <option value="okculuk">🎯 Okçuluk</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-2">
                        Yaş Grubu *
                      </label>
                      <select
                        id="ageGroup"
                        name="ageGroup"
                        value={formData.ageGroup}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Seçiniz</option>
                        <option value="u12">U12 (10-12 Yaş)</option>
                        <option value="u14">U14 (12-14 Yaş)</option>
                        <option value="u16">U16 (14-16 Yaş)</option>
                        <option value="u18">U18 (16-18 Yaş)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                        Program Türü *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Seçiniz</option>
                        <option value="takim">Takım Antrenmanı</option>
                        <option value="yaz">Yaz Spor Okulu</option>
                        <option value="haftasonu">Hafta Sonu Okulu</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Health Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sağlık Bilgileri</h3>
                  
                  <div>
                    <label htmlFor="healthInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Sağlık Durumu / Özel Notlar
                    </label>
                    <textarea
                      id="healthInfo"
                      name="healthInfo"
                      value={formData.healthInfo}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Bilmemiz gereken sağlık durumu, alerji, ilaç kullanımı vb. varsa belirtiniz"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition"
                  >
                    KAYIT BAŞVURUSU GÖNDER
                  </button>
                </div>
              </form>
            </div>

            {/* Pricing Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Aylık Ücret</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₺XXX</p>
                <p className="text-sm text-gray-600">Takım antrenmanları için</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-3">☀️</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Yaz Okulu</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₺XXX</p>
                <p className="text-sm text-gray-600">3 aylık program</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Hafta Sonu</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₺XXX</p>
                <p className="text-sm text-gray-600">Aylık ücret</p>
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

