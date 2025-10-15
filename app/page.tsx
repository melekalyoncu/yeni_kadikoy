import Link from 'next/link';
import HeroSlider from './components/HeroSlider';
import SponsorSidebar from './components/SponsorSidebar';

export default function Home() {
  const news = [
    {
      id: 1,
      title: 'Voleybol Takımımız Şampiyonlukta',
      date: '15 Ekim 2025',
      excerpt: 'U16 voleybol takımımız bölge şampiyonluğunu kazandı...',
      image: '🏐',
    },
    {
      id: 2,
      title: 'Yeni Basketbol Sahası Açıldı',
      date: '12 Ekim 2025',
      excerpt: 'Modern basketbol sahamız sporcularımızın hizmetine açıldı...',
      image: '🏀',
    },
    {
      id: 3,
      title: 'Okçuluk Branşında Başarı',
      date: '10 Ekim 2025',
      excerpt: 'Sporcularımız ulusal yarışmada derece aldı...',
      image: '🎯',
    },
  ];

  const mediaGallery = [
    { id: 1, type: 'image', emoji: '📸' },
    { id: 2, type: 'image', emoji: '🏆' },
    { id: 3, type: 'image', emoji: '⚽' },
    { id: 4, type: 'image', emoji: '🎖️' },
    { id: 5, type: 'image', emoji: '🏅' },
    { id: 6, type: 'image', emoji: '🥇' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Sponsors */}
          <aside className="lg:col-span-2 order-2 lg:order-1">
            <SponsorSidebar />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 order-1 lg:order-2">
            {/* About Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">HAKKIMIZDA</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kadıköy Spor Kulübü olarak, gençlerimize spor yapma imkanı sunuyor ve
                    sağlıklı nesiller yetiştirmeyi hedefliyoruz. Deneyimli antrenörlerimiz
                    eşliğinde voleybol, basketbol ve okçuluk branşlarında profesyonel eğitim
                    veriyoruz.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Modern tesislerimiz ve kaliteli eğitim anlayışımızla sporcularımızın
                    gelişimine katkı sağlıyoruz. Her yaş grubuna uygun programlarımızla
                    geleceğin şampiyonlarını yetiştiriyoruz.
                  </p>
                  <Link
                    href="/hakkimizda"
                    className="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-yellow-400 transition"
                  >
                    DEVAMINI OKU
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <p className="text-xl font-bold">Başarı Hikayemiz</p>
                  </div>
                </div>
              </div>
            </section>

            {/* News Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">HABERLER</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {news.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48 flex items-center justify-center text-6xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                      <Link href={`/haberler/${item.id}`} className="text-blue-600 font-medium hover:underline">
                        Devamını Oku →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/haberler"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition"
                >
                  TÜM HABERLER
                </Link>
              </div>
            </section>

            {/* Media Gallery */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">MEDYA</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mediaGallery.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg aspect-square flex items-center justify-center text-6xl hover:scale-105 transition cursor-pointer"
                  >
                    {item.emoji}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-6">
                <button className="w-3 h-3 rounded-full bg-yellow-500"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              </div>
            </section>

            {/* Sports Branches */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">BRANŞLAR</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/branslar/voleybol" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center text-7xl">
                      🏐
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition">
                        VOLEYBOL
                      </h3>
                    </div>
                  </div>
                </Link>

                <Link href="/branslar/basketbol" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-48 flex items-center justify-center text-7xl">
                      🏀
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition">
                        BASKETBOL
                      </h3>
                    </div>
                  </div>
                </Link>

                <Link href="/branslar/okculuk" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-green-600 to-green-800 h-48 flex items-center justify-center text-7xl">
                      🎯
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition">
                        OKÇULUK
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </main>

          {/* Right Sidebar - Sponsors */}
          <aside className="lg:col-span-2 order-3">
            <SponsorSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
