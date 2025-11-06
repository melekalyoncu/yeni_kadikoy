import Link from 'next/link';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';

export default function VoleybolPage() {
  const teams = [
    { id: 1, name: 'Mini Grup', ageRange: '6-9 Yaş', description: 'Voleybol sporuna ilk adım atan çocuklarımız için temel eğitim', schedule: 'Hafta içi' },
    { id: 2, name: 'Kız-Erkek Voleybol', ageRange: '6-12 Yaş', description: 'Temel voleybol becerileri ve oyun kuralları eğitimi', schedule: 'Hafta içi' },
    { id: 3, name: 'Gelişim Takımları', ageRange: '9-17 Yaş', description: 'Yıllık 11 aylık antrenman programı, özel/resmi maçlar ve özel turnuva katılım grubu', schedule: 'Yıl boyu' },
    { id: 4, name: 'Altyapı Takımları (9-13 yaş)', ageRange: '9-13 Yaş', description: 'Genç yaş grubu altyapı takımı', schedule: 'Hafta içi' },
    { id: 5, name: 'Altyapı Takımları (13-18 yaş)', ageRange: '13-18 Yaş', description: 'Büyük yaş grubu altyapı takımı', schedule: 'Hafta içi' },
  ];

  const schools = [
    { id: 1, name: 'Voleybol Okulları', period: 'Yıl Boyu', description: 'Lisanssız başlangıç gruplarıdır. Sporcular geliştirilip uygun görülenler lisanslandırılarak liglere kazandırılır.', ages: '6-12 Yaş' },
  ];

  const coaches = [
    { name: 'Yasemin Güven', role: 'Voleybol Hocası', description: 'A takım ve altyapılar sorumlusu' },
    { name: 'Zeynep Belek', role: 'Teknik Koordinatör', description: 'Teknik koordinasyon ve planlama' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Compact Hero as Card */}
      <div className="container mx-auto px-4 pt-8 md:pt-10">
        <div className="relative overflow-hidden rounded-2xl border border-amber-600/40 bg-gradient-to-r from-yellow-500 to-amber-600 shadow-lg">
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px)] [background-size:20px_20px]" aria-hidden />
          <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8 px-6 py-8 md:px-10 md:py-10">
            <div className="text-6xl md:text-7xl" aria-hidden>🏐</div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">VOLEYBOL</h1>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-yellow-50 max-w-2xl">
                Profesyonel antrenörler eşliğinde voleybol eğitimi alın, takım ruhu kazanın.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-auto flex gap-3">
              <Link
                href="/kayit"
                className="rounded-lg bg-gradient-to-r from-[#EAB308] to-[#FACC15] px-4 md:px-6 py-2 font-semibold text-slate-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Kayıt Ol
              </Link>
              <Link
                href="/iletisim"
                className="rounded-lg bg-white/95 px-4 md:px-6 py-2 font-semibold text-amber-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Bilgi Al
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-2 order-2 lg:order-1 flex justify-center lg:block">
            <SponsorSidebar />
          </aside>

          {/* Main */}
          <main className="lg:col-span-8 order-1 lg:order-2">
            {/* About */}
            <section className="mb-8 md:mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">Voleybol Branşımız Hakkında</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                Yeni Kadıköy Spor Kulübü voleybol branşı, deneyimli antrenörler ve modern tesislerle
                gençlerimize kaliteli voleybol eğitimi sunmaktadır. Farklı yaş gruplarına özel
                programlarımızla sporcularımızın gelişimini destekliyoruz.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Temel voleybol becerilerinden profesyonel teknik ve taktiklere kadar geniş bir
                eğitim yelpazesi sunuyoruz. Takımlarımız düzenli olarak bölgesel ve ulusal turnuvalara katılmaktadır.
              </p>
            </section>

            {/* Teams */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8">Takımlarımız</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {teams.map((team) => (
                  <div
                    key={team.id}
                    className="bg-slate-50 h-full rounded-xl shadow-sm border border-slate-200 p-5 md:p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800">{team.name}</h3>
                      <span className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-md">
                        {team.ageRange}
                      </span>
                    </div>
                    <p className="text-slate-700 mb-3 md:mb-4">{team.description}</p>
                    <div className="border-t border-slate-200 pt-3">
                      <p className="text-sm text-slate-600">
                        <strong className="text-amber-700">Antrenman:</strong> {team.schedule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sports Schools */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8">Spor Okulları</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {schools.map((school) => (
                  <div
                    key={school.id}
                    className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-1.5 md:mb-2">{school.name}</h3>
                    <p className="text-yellow-100 mb-3 md:mb-4 font-medium">{school.period}</p>
                    <p className="mb-4">{school.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-white text-amber-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-md">
                        {school.ages}
                      </span>
                      <Link
                        href="/kayit"
                        className="bg-gradient-to-r from-[#EAB308] to-[#FACC15] text-slate-900 px-5 md:px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        Kayıt Ol
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Coaches */}
            <section className="mb-8 md:mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">Teknik Kadro</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {coaches.map((coach, i) => (
                  <div key={i} className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-sm border border-yellow-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {coach.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">{coach.name}</h4>
                        <p className="text-amber-700 font-semibold text-sm mb-2">{coach.role}</p>
                        <p className="text-slate-600 text-sm">{coach.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilities */}
            <section className="mb-8 md:mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">Tesislerimiz</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: '🏟️', title: 'Modern Salon', text: 'Uluslararası standartlarda voleybol salonu' },
                  { icon: '👕', title: 'Ekipman', text: 'Profesyonel voleybol ekipmanları' },
                  { icon: '👨‍🏫', title: 'Deneyimli Kadro', text: 'Lisanslı ve deneyimli antrenörler' },
                ].map((f, i) => (
                  <div key={i} className="text-center p-6 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl md:text-5xl mb-2 md:mb-3">{f.icon}</div>
                    <h4 className="font-bold text-slate-800 mb-1.5">{f.title}</h4>
                    <p className="text-sm text-slate-600">{f.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-xl border border-amber-600/60 bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-lg p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Voleybol Ailemize Katılın!</h2>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-yellow-50">
                Hemen kayıt olun ve voleybol yolculuğunuza başlayın.
              </p>
              <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
                <Link
                  href="/kayit"
                  className="rounded-lg bg-gradient-to-r from-[#EAB308] to-[#FACC15] px-6 md:px-8 py-2.5 font-bold text-slate-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                >
                  KAYIT OL
                </Link>
                <Link
                  href="/iletisim"
                  className="rounded-lg bg-white px-6 md:px-8 py-2.5 font-bold text-amber-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                >
                  BİLGİ AL
                </Link>
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-2 order-3 flex justify-center lg:block">
            <SponsorSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
