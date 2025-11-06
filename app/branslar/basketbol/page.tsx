import Link from 'next/link';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';
import BranchHero from '@/app/components/branch/BranchHero';
import InfoSection from '@/app/components/branch/InfoSection';
import ProgramCard from '@/app/components/branch/ProgramCard';

export default function BasketbolPage() {
  const teams = [
    { id: 1, name: 'U10', ageRange: '10 Yaş', description: 'Basketbol sporuna yeni başlayan çocuklarımız için temel eğitim programı', schedule: 'Cumartesi, Pazar' },
    { id: 2, name: 'U14', ageRange: '14 Yaş', description: 'Orta seviye basketbol eğitimi ve turnuva hazırlığı', schedule: 'Cumartesi, Pazar' },
    { id: 3, name: 'U18', ageRange: '18 Yaş', description: 'İleri seviye basketbol eğitimi ve profesyonel hazırlık', schedule: 'Cumartesi, Pazar' },
    { id: 4, name: 'U21 Ümit Erkekler', ageRange: '21 Yaş', description: 'Ümit erkekler kategorisi', schedule: 'Cumartesi, Pazar' },
    { id: 5, name: 'A Erkek (Büyük Erkekler)', ageRange: 'Yetişkin', description: 'Büyük erkekler kategorisi', schedule: 'Cumartesi, Pazar' },
    { id: 6, name: 'EBBL', ageRange: 'Çeşitli', description: 'EBBL ligi takımı', schedule: 'Cumartesi, Pazar' },
    { id: 7, name: 'Kadınlar', ageRange: 'Yetişkin', description: 'Kadın basketbol takımı', schedule: 'Cumartesi, Pazar' },
    { id: 8, name: 'KBBL (Kadın Basketbol)', ageRange: 'Yetişkin', description: 'Kadın Basketbol ligi takımı', schedule: 'Cumartesi, Pazar' },
  ];

  const schools = [
    { id: 1, name: 'Basketbol Spor Okulları', period: 'Yıl Boyu', description: 'Cumartesi ve Pazar günleri antrenmanlar. Her antrenmanda sahada 3 antrenör bulunur. Kız ve erkek takım grupları ayrı çalışır.', ages: '6-17 Yaş' },
  ];

  const coaches = [
    { name: 'Arkın Belek', role: 'Baş Antrenör', description: 'A takım ve altyapılar' },
    { name: 'Türkay Çakıroğlu', role: 'Bireysel Performans Koçu (PT)', description: 'Performans antrenmanları' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Compact Hero as Card (turuncu/amber tonlar) */}
      <BranchHero
        emoji="🏀"
        title="BASKETBOL"
        subtitle="Profesyonel antrenörler eşliğinde basketbol eğitimi alın, yeteneklerinizi geliştirin."
        from="from-orange-600"
        to="to-orange-800"
        border="border-orange-700/50"
        primary={{ href: "/kayit", label: "Kayıt Ol" }}
        secondary={{ href: "/iletisim", label: "Bilgi Al" }}
        secondaryTextClass="text-orange-700"
        statChip="4 takım • 2 spor okulu"
      />

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
            <InfoSection title="Basketbol Branşımız Hakkında">
              <p className="text-slate-700 leading-relaxed mb-3">
                Yeni Kadıköy Spor Kulübü basketbol branşı, modern tesisleri ve deneyimli antrenör
                kadrosuyla gençlerimize en iyi basketbol eğitimini sunmaktadır. Her yaş grubuna
                özel programlarımızla sporcularımızın teknik ve fiziksel gelişimini destekliyoruz.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Temel basketbol becerilerinden ileri seviye taktik ve stratejilere kadar kapsamlı
                bir eğitim programı sunuyoruz. Takımlarımız düzenli olarak bölgesel ve ulusal
                müsabakalara katılmaktadır.
              </p>
            </InfoSection>

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
                      <span className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-md">
                        {team.ageRange}
                      </span>
                    </div>
                    <p className="text-slate-700 mb-3 md:mb-4">{team.description}</p>
                    <div className="border-t border-slate-200 pt-3">
                      <p className="text-sm text-slate-600">
                        <strong className="text-orange-700">Antrenman:</strong> {team.schedule}
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
                  <ProgramCard
                    key={school.id}
                    title={school.name}
                    period={school.period}
                    description={school.description}
                    ages={school.ages}
                    gradientFrom="from-orange-600"
                    gradientTo="to-orange-800"
                    buttonHref="/kayit"
                    badgeTextClass="text-orange-700"
                  />
                ))}
              </div>
            </section>

            {/* Coaches */}
            <InfoSection title="Teknik Kadro">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {coaches.map((coach, i) => (
                  <div key={i} className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-sm border border-orange-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {coach.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">{coach.name}</h4>
                        <p className="text-orange-700 font-semibold text-sm mb-2">{coach.role}</p>
                        <p className="text-slate-600 text-sm">{coach.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfoSection>

            {/* Facilities */}
            <InfoSection title="Tesislerimiz">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: '🏟️', title: 'Modern Salon', text: 'Uluslararası standartlarda basketbol sahası' },
                  { icon: '👟', title: 'Ekipman', text: 'Profesyonel basketbol ekipmanları' },
                  { icon: '👨‍🏫', title: 'Deneyimli Kadro', text: 'Lisanslı ve deneyimli antrenörler' },
                ].map((f, i) => (
                  <div key={i} className="text-center p-6 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl md:text-5xl mb-2 md:mb-3">{f.icon}</div>
                    <h4 className="font-bold text-slate-800 mb-1.5">{f.title}</h4>
                    <p className="text-sm text-slate-600">{f.text}</p>
                  </div>
                ))}
              </div>
            </InfoSection>

            {/* CTA */}
            <section className="rounded-xl border border-orange-700/50 bg-gradient-to-r from-orange-600 to-orange-800 text-white shadow-lg p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Basketbol Ailemize Katılın!</h2>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-white/90">
                Hemen kayıt olun ve basketbol yolculuğunuza başlayın.
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
                  className="rounded-lg bg-white px-6 md:px-8 py-2.5 font-bold text-orange-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
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
