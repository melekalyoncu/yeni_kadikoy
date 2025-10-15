import SponsorSidebar from '@/app/components/SponsorSidebar';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">HAKKIMIZDA</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Kadıköy Spor Kulübü - Geleceğin Şampiyonlarını Yetiştiriyoruz
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
            {/* Mission Section */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Misyonumuz</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kadıköy Spor Kulübü olarak, gençlerimize spor yapma imkanı sunarak sağlıklı 
                nesiller yetiştirmeyi hedefliyoruz. Voleybol, basketbol ve okçuluk branşlarında 
                profesyonel eğitim vererek sporcularımızın hem fiziksel hem de zihinsel gelişimlerine 
                katkı sağlıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Modern tesislerimiz, deneyimli antrenör kadromuz ve kaliteli eğitim anlayışımızla 
                gençlerimizin spor kariyerlerinde başarılı olmalarını destekliyoruz. Fair play, 
                takım ruhu ve disiplin değerlerini benimseyen bireyler yetiştirmeyi amaçlıyoruz.
              </p>
            </section>

            {/* Vision Section */}
            <section className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Vizyonumuz</h2>
              <p className="text-gray-700 leading-relaxed">
                Türkiye'nin önde gelen spor kulüplerinden biri olmak ve yetiştirdiğimiz sporcularla 
                ulusal ve uluslararası arenada başarılar elde etmek. Gençlerimize sadece spor eğitimi 
                değil, aynı zamanda hayata dair değerler kazandırarak topluma faydalı bireyler 
                yetiştirmek en büyük hedefimizdir.
              </p>
            </section>

            {/* Values Section */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Değerlerimiz</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Başarı</h3>
                    <p className="text-gray-600 text-sm">
                      Sporcularımızın her alanda başarılı olmalarını destekliyoruz
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Takım Ruhu</h3>
                    <p className="text-gray-600 text-sm">
                      Birlikte çalışma ve dayanışma değerlerini önemsiyoruz
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚖️</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Fair Play</h3>
                    <p className="text-gray-600 text-sm">
                      Dürüst ve adil oyun anlayışını benimsiyoruz
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📚</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Eğitim</h3>
                    <p className="text-gray-600 text-sm">
                      Sürekli gelişim ve öğrenmeyi destekliyoruz
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* History Section */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tarihçemiz</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">2020</h3>
                  <p className="text-gray-700">
                    Kadıköy Spor Kulübü kuruldu ve ilk branş olarak voleybol eğitimine başlandı.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">2021</h3>
                  <p className="text-gray-700">
                    Basketbol branşı açıldı ve modern basketbol sahası hizmete girdi.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">2022</h3>
                  <p className="text-gray-700">
                    Okçuluk branşı eklendi ve ilk ulusal yarışmada derece alındı.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">2023-2025</h3>
                  <p className="text-gray-700">
                    Tüm branşlarda başarılar elde edildi ve kulüp üye sayısı 500'ü aştı.
                  </p>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Yönetim Kadromuz</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                    👤
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Ahmet Yılmaz</h3>
                  <p className="text-gray-600 text-sm">Kulüp Başkanı</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                    👤
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Mehmet Demir</h3>
                  <p className="text-gray-600 text-sm">Genel Koordinatör</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                    👤
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Ayşe Kaya</h3>
                  <p className="text-gray-600 text-sm">Spor Direktörü</p>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="mb-12">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="text-sm">Aktif Sporcu</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <p className="text-sm">Deneyimli Antrenör</p>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">3</div>
                  <p className="text-sm">Spor Branşı</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-sm">Kazanılan Ödül</p>
                </div>
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

