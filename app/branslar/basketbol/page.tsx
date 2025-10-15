import Link from 'next/link';
import SponsorSidebar from '@/app/components/SponsorSidebar';

export default function BasketbolPage() {
  const teams = [
    {
      id: 1,
      name: 'U12 Basketbol Takımı',
      ageRange: '10-12 Yaş',
      description: 'Basketbol sporuna yeni başlayan çocuklarımız için temel eğitim programı',
      schedule: 'Pazartesi, Çarşamba, Cuma - 15:00-17:00',
    },
    {
      id: 2,
      name: 'U14 Basketbol Takımı',
      ageRange: '12-14 Yaş',
      description: 'Orta seviye basketbol eğitimi ve turnuva hazırlığı',
      schedule: 'Salı, Perşembe, Cumartesi - 15:00-17:00',
    },
    {
      id: 3,
      name: 'U16 Basketbol Takımı',
      ageRange: '14-16 Yaş',
      description: 'İleri seviye basketbol eğitimi ve profesyonel hazırlık',
      schedule: 'Pazartesi, Çarşamba, Cuma - 17:00-19:00',
    },
    {
      id: 4,
      name: 'U18 Basketbol Takımı',
      ageRange: '16-18 Yaş',
      description: 'Profesyonel basketbol eğitimi ve lig müsabakaları',
      schedule: 'Salı, Perşembe, Cumartesi - 17:00-19:00',
    },
  ];

  const schools = [
    {
      id: 1,
      name: 'Yaz Basketbol Okulu',
      period: 'Haziran - Ağustos',
      description: 'Yaz aylarında yoğun basketbol eğitimi ve kamp programı',
      ages: '8-16 Yaş',
    },
    {
      id: 2,
      name: 'Hafta Sonu Basketbol Okulu',
      period: 'Yıl Boyu',
      description: 'Hafta sonları basketbol öğrenmek isteyenler için',
      ages: '8-18 Yaş',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-8xl mb-6">🏀</div>
          <h1 className="text-5xl font-bold mb-4">BASKETBOL</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Profesyonel antrenörler eşliğinde basketbol eğitimi alın, yeteneklerinizi geliştirin
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
            {/* About Section */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Basketbol Branşımız Hakkında</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kadıköy Spor Kulübü basketbol branşı, modern tesisleri ve deneyimli antrenör 
                kadrosuyla gençlerimize en iyi basketbol eğitimini sunmaktadır. Her yaş grubuna 
                özel programlarımızla sporcularımızın teknik ve fiziksel gelişimini destekliyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Temel basketbol becerilerinden ileri seviye taktik ve stratejilere kadar kapsamlı 
                bir eğitim programı sunuyoruz. Takımlarımız düzenli olarak bölgesel ve ulusal 
                müsabakalara katılmaktadır.
              </p>
            </section>

            {/* Teams Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Takımlarımız</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {teams.map((team) => (
                  <div key={team.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {team.ageRange}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{team.description}</p>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500">
                        <strong>Antrenman Saatleri:</strong> {team.schedule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sports Schools Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Spor Okulları</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {schools.map((school) => (
                  <div key={school.id} className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-bold mb-2">{school.name}</h3>
                    <p className="text-orange-100 mb-4">{school.period}</p>
                    <p className="mb-4">{school.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-bold">
                        {school.ages}
                      </span>
                      <Link 
                        href="/kayit"
                        className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-yellow-400 transition"
                      >
                        Kayıt Ol
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilities Section */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tesislerimiz</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">🏟️</div>
                  <h4 className="font-bold text-gray-800 mb-2">Modern Salon</h4>
                  <p className="text-sm text-gray-600">Uluslararası standartlarda basketbol sahası</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">👟</div>
                  <h4 className="font-bold text-gray-800 mb-2">Ekipman</h4>
                  <p className="text-sm text-gray-600">Profesyonel basketbol ekipmanları</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">👨‍🏫</div>
                  <h4 className="font-bold text-gray-800 mb-2">Deneyimli Kadro</h4>
                  <p className="text-sm text-gray-600">Lisanslı ve deneyimli antrenörler</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Basketbol Ailemize Katılın!</h2>
              <p className="text-xl mb-6">
                Hemen kayıt olun ve basketbol yolculuğunuza başlayın
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
                  className="bg-white text-orange-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition"
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

