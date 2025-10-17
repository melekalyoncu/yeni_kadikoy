import Link from 'next/link';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';

export default function OkculukPage() {
  const teams = [
    {
      id: 1,
      name: 'U12 Okçuluk Takımı',
      ageRange: '10-12 Yaş',
      description: 'Okçuluk sporuna yeni başlayan çocuklarımız için temel eğitim programı',
      schedule: 'Pazartesi, Çarşamba - 16:00-18:00',
    },
    {
      id: 2,
      name: 'U14 Okçuluk Takımı',
      ageRange: '12-14 Yaş',
      description: 'Orta seviye okçuluk eğitimi ve turnuva hazırlığı',
      schedule: 'Salı, Perşembe - 16:00-18:00',
    },
    {
      id: 3,
      name: 'U16 Okçuluk Takımı',
      ageRange: '14-16 Yaş',
      description: 'İleri seviye okçuluk eğitimi ve profesyonel hazırlık',
      schedule: 'Pazartesi, Çarşamba - 18:00-20:00',
    },
    {
      id: 4,
      name: 'U18 Okçuluk Takımı',
      ageRange: '16-18 Yaş',
      description: 'Profesyonel okçuluk eğitimi ve ulusal müsabakalar',
      schedule: 'Salı, Perşembe - 18:00-20:00',
    },
  ];

  const schools = [
    {
      id: 1,
      name: 'Yaz Okçuluk Okulu',
      period: 'Haziran - Ağustos',
      description: 'Yaz aylarında yoğun okçuluk eğitimi ve kamp programı',
      ages: '8-16 Yaş',
    },
    {
      id: 2,
      name: 'Hafta Sonu Okçuluk Okulu',
      period: 'Yıl Boyu',
      description: 'Hafta sonları okçuluk öğrenmek isteyenler için',
      ages: '8-18 Yaş',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 border-b border-green-700">
        <div className="container mx-auto px-4 text-center">
          <div className="text-8xl mb-6">🎯</div>
          <h1 className="text-5xl font-bold mb-4">OKÇULUK</h1>
          <p className="text-lg max-w-2xl mx-auto text-green-50">
            Konsantrasyon ve disiplin gerektiren okçuluk sporuyla kendinizi geliştirin
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
            <section className="mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Okçuluk Branşımız Hakkında</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kadıköy Spor Kulübü okçuluk branşı, konsantrasyon, disiplin ve sabır gerektiren
                bu özel spor dalında gençlerimize profesyonel eğitim sunmaktadır. Deneyimli
                antrenörlerimiz ve modern tesislerimizle sporcularımızın gelişimini destekliyoruz.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Temel okçuluk tekniklerinden ileri seviye atış becerilerine kadar kapsamlı bir
                eğitim programı sunuyoruz. Sporcularımız düzenli olarak ulusal ve uluslararası
                yarışmalara katılmaktadır.
              </p>
            </section>

            {/* Teams Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Takımlarımız</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {teams.map((team) => (
                  <div key={team.id} className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800">{team.name}</h3>
                      <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        {team.ageRange}
                      </span>
                    </div>
                    <p className="text-slate-700 mb-4">{team.description}</p>
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-sm text-slate-600">
                        <strong>Antrenman Saatleri:</strong> {team.schedule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sports Schools Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Spor Okulları</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {schools.map((school) => (
                  <div key={school.id} className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold mb-2">{school.name}</h3>
                    <p className="text-green-100 mb-4 font-medium">{school.period}</p>
                    <p className="mb-4">{school.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-bold shadow-md">
                        {school.ages}
                      </span>
                      <Link
                        href="/kayit"
                        className="bg-gradient-to-r from-[#EAB308] to-[#FACC15] text-slate-900 px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        Kayıt Ol
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilities Section */}
            <section className="mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Tesislerimiz</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-5xl mb-3">🏹</div>
                  <h4 className="font-bold text-slate-800 mb-2">Atış Alanı</h4>
                  <p className="text-sm text-slate-600">Uluslararası standartlarda okçuluk alanı</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-5xl mb-3">🎯</div>
                  <h4 className="font-bold text-slate-800 mb-2">Ekipman</h4>
                  <p className="text-sm text-slate-600">Profesyonel okçuluk ekipmanları</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-5xl mb-3">👨‍🏫</div>
                  <h4 className="font-bold text-slate-800 mb-2">Deneyimli Kadro</h4>
                  <p className="text-sm text-slate-600">Lisanslı ve deneyimli antrenörler</p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm border border-green-200 p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Okçuluğun Faydaları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-green-600">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Konsantrasyon Gelişimi</h4>
                    <p className="text-sm text-slate-600">Odaklanma ve dikkat becerilerini artırır</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-green-600">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Disiplin</h4>
                    <p className="text-sm text-slate-600">Düzenli çalışma alışkanlığı kazandırır</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-green-600">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Sabır ve Özdenetim</h4>
                    <p className="text-sm text-slate-600">Duygusal kontrol becerilerini geliştirir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-green-600">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Fiziksel Gelişim</h4>
                    <p className="text-sm text-slate-600">Üst vücut gücü ve koordinasyonu artırır</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl shadow-lg p-8 text-center border border-green-700">
              <h2 className="text-3xl font-bold mb-4">Okçuluk Ailemize Katılın!</h2>
              <p className="text-lg mb-6 text-green-50">
                Hemen kayıt olun ve okçuluk yolculuğunuza başlayın
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/kayit"
                  className="bg-gradient-to-r from-[#EAB308] to-[#FACC15] text-slate-900 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  KAYIT OL
                </Link>
                <Link
                  href="/iletisim"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
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

