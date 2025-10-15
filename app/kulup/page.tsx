import Link from 'next/link';
import SponsorSidebar from '@/app/components/SponsorSidebar';

export default function KulupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">KULÜP</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tesislerimiz, Branşlarımız ve Faaliyetlerimiz
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
            {/* Facilities Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Tesislerimiz</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center text-7xl">
                    🏐
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Voleybol Salonu</h3>
                    <p className="text-gray-600 mb-4">
                      Uluslararası standartlarda voleybol salonu, modern ekipmanlar ve 
                      profesyonel zemin kaplama.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ 2 adet profesyonel saha</li>
                      <li>✓ 500 kişilik seyirci kapasitesi</li>
                      <li>✓ Soyunma odaları ve duşlar</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-48 flex items-center justify-center text-7xl">
                    🏀
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Basketbol Sahası</h3>
                    <p className="text-gray-600 mb-4">
                      Kapalı ve açık basketbol sahaları, profesyonel potalar ve 
                      antrenman ekipmanları.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ 1 kapalı, 1 açık saha</li>
                      <li>✓ LED aydınlatma sistemi</li>
                      <li>✓ Antrenman ekipmanları</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-br from-green-600 to-green-800 h-48 flex items-center justify-center text-7xl">
                    🎯
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Okçuluk Alanı</h3>
                    <p className="text-gray-600 mb-4">
                      Uluslararası standartlarda okçuluk atış alanı, güvenlik önlemleri 
                      ve profesyonel ekipmanlar.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ 20 atış hattı</li>
                      <li>✓ 18m - 70m mesafe seçenekleri</li>
                      <li>✓ Profesyonel yaylar ve oklar</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48 flex items-center justify-center text-7xl">
                    💪
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Fitness Salonu</h3>
                    <p className="text-gray-600 mb-4">
                      Sporcularımızın kondisyon çalışmaları için modern fitness salonu 
                      ve ekipmanlar.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Kardio ekipmanları</li>
                      <li>✓ Ağırlık çalışma alanı</li>
                      <li>✓ Kişisel antrenör desteği</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Branches Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Branşlarımız</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/branslar/voleybol" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 h-40 flex items-center justify-center text-6xl">
                      🏐
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition mb-2">
                        VOLEYBOL
                      </h3>
                      <p className="text-sm text-gray-600">4 yaş grubu, 100+ sporcu</p>
                    </div>
                  </div>
                </Link>

                <Link href="/branslar/basketbol" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-40 flex items-center justify-center text-6xl">
                      🏀
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition mb-2">
                        BASKETBOL
                      </h3>
                      <p className="text-sm text-gray-600">4 yaş grubu, 120+ sporcu</p>
                    </div>
                  </div>
                </Link>

                <Link href="/branslar/okculuk" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-green-600 to-green-800 h-40 flex items-center justify-center text-6xl">
                      🎯
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition mb-2">
                        OKÇULUK
                      </h3>
                      <p className="text-sm text-gray-600">4 yaş grubu, 80+ sporcu</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Activities Section */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Faaliyetlerimiz</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">🏆 Turnuvalar</h3>
                  <p className="text-gray-600 text-sm">
                    Düzenli olarak bölgesel ve ulusal turnuvalara katılım sağlıyoruz. 
                    Sporcularımız yarışma deneyimi kazanıyor.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">🏕️ Kamplar</h3>
                  <p className="text-gray-600 text-sm">
                    Yaz ve kış dönemlerinde yoğun antrenman kampları düzenliyoruz. 
                    Takım ruhu ve dayanışma güçleniyor.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">📚 Seminerler</h3>
                  <p className="text-gray-600 text-sm">
                    Sporcularımız ve velilerimiz için beslenme, spor psikolojisi ve 
                    sağlık konularında seminerler düzenliyoruz.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">🎉 Sosyal Etkinlikler</h3>
                  <p className="text-gray-600 text-sm">
                    Kulüp üyelerimiz için piknikler, geziler ve kutlamalar organize 
                    ediyoruz. Aile ortamı oluşturuyoruz.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Kulübümüze Katılın!</h2>
              <p className="text-xl mb-6">
                Modern tesislerimizde profesyonel eğitim alın
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link 
                  href="/kayit"
                  className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition"
                >
                  KAYIT OL
                </Link>
                <Link 
                  href="/iletisim"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition"
                >
                  BİLGİ AL
                </Link>
              </div>
            </section>
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

