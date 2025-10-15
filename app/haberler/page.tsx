import Link from 'next/link';
import SponsorSidebar from '@/app/components/SponsorSidebar';

export default function HaberlerPage() {
  const allNews = [
    {
      id: 1,
      title: 'Voleybol Takımımız Şampiyonlukta',
      date: '15 Ekim 2025',
      category: 'Voleybol',
      excerpt: 'U16 voleybol takımımız bölge şampiyonluğunu kazandı. Takımımız final maçında rakibini 3-1 yenerek şampiyonluğa ulaştı.',
      image: '🏐',
    },
    {
      id: 2,
      title: 'Yeni Basketbol Sahası Açıldı',
      date: '12 Ekim 2025',
      category: 'Basketbol',
      excerpt: 'Modern basketbol sahamız sporcularımızın hizmetine açıldı. Uluslararası standartlarda inşa edilen saha büyük ilgi gördü.',
      image: '🏀',
    },
    {
      id: 3,
      title: 'Okçuluk Branşında Başarı',
      date: '10 Ekim 2025',
      category: 'Okçuluk',
      excerpt: 'Sporcularımız ulusal yarışmada derece aldı. Genç okçularımız 3 madalya kazanarak kulübümüzü gururlandırdı.',
      image: '🎯',
    },
    {
      id: 4,
      title: 'Yaz Spor Okulu Kayıtları Başladı',
      date: '8 Ekim 2025',
      category: 'Genel',
      excerpt: 'Yaz dönemi spor okulu kayıtları başladı. Tüm branşlarda yoğun eğitim programları sunulacak.',
      image: '☀️',
    },
    {
      id: 5,
      title: 'Basketbol Takımımız Finalde',
      date: '5 Ekim 2025',
      category: 'Basketbol',
      excerpt: 'U14 basketbol takımımız yarı finali kazanarak finale yükseldi. Final maçı önümüzdeki hafta oynanacak.',
      image: '🏀',
    },
    {
      id: 6,
      title: 'Yeni Antrenörler Kadromuza Katıldı',
      date: '1 Ekim 2025',
      category: 'Genel',
      excerpt: 'Deneyimli antrenörler kadromuza katıldı. Sporcularımıza daha kaliteli eğitim sunmak için ekibimizi güçlendirdik.',
      image: '👨‍🏫',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">HABERLER</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Kulübümüzden Son Haberler ve Gelişmeler
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
            {/* Featured News */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-64 flex items-center justify-center text-8xl">
                  {allNews[0].image}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {allNews[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{allNews[0].date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{allNews[0].title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{allNews[0].excerpt}</p>
                  <Link 
                    href={`/haberler/${allNews[0].id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </section>

            {/* All News Grid */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Tüm Haberler</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {allNews.slice(1).map((news) => (
                  <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48 flex items-center justify-center text-6xl">
                      {news.image}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {news.category}
                        </span>
                        <span className="text-gray-500 text-sm">{news.date}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-800">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                      <Link 
                        href={`/haberler/${news.id}`}
                        className="text-blue-600 font-medium hover:underline"
                      >
                        Devamını Oku →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">1</button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100">2</button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100">3</button>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-2">
            <SponsorSidebar />
            
            {/* Categories */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Kategoriler</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/haberler?category=voleybol" className="text-gray-700 hover:text-blue-600 transition">
                    🏐 Voleybol
                  </Link>
                </li>
                <li>
                  <Link href="/haberler?category=basketbol" className="text-gray-700 hover:text-blue-600 transition">
                    🏀 Basketbol
                  </Link>
                </li>
                <li>
                  <Link href="/haberler?category=okculuk" className="text-gray-700 hover:text-blue-600 transition">
                    🎯 Okçuluk
                  </Link>
                </li>
                <li>
                  <Link href="/haberler?category=genel" className="text-gray-700 hover:text-blue-600 transition">
                    📰 Genel
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

