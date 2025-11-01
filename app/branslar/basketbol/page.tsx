import Link from 'next/link';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';
import BranchHero from '@/app/components/branch/BranchHero';
import InfoSection from '@/app/components/branch/InfoSection';
import ProgramCard from '@/app/components/branch/ProgramCard';

export default function BasketbolPage() {
  const teams = [
    { id: 1, name: 'U12 Basketbol Takımı', ageRange: '10-12 Yaş', description: 'Basketbol sporuna yeni başlayan çocuklarımız için temel eğitim programı', schedule: 'Pzt, Çrş, Cum • 15:00-17:00' },
    { id: 2, name: 'U14 Basketbol Takımı', ageRange: '12-14 Yaş', description: 'Orta seviye basketbol eğitimi ve turnuva hazırlığı', schedule: 'Salı, Perş, Cts • 15:00-17:00' },
    { id: 3, name: 'U16 Basketbol Takımı', ageRange: '14-16 Yaş', description: 'İleri seviye basketbol eğitimi ve profesyonel hazırlık', schedule: 'Pzt, Çrş, Cum • 17:00-19:00' },
    { id: 4, name: 'U18 Basketbol Takımı', ageRange: '16-18 Yaş', description: 'Profesyonel basketbol eğitimi ve lig müsabakaları', schedule: 'Salı, Perş, Cts • 17:00-19:00' },
  ];

  const schools = [
    { id: 1, name: 'Yaz Basketbol Okulu', period: 'Haziran - Ağustos', description: 'Yaz aylarında yoğun basketbol eğitimi ve kamp programı', ages: '8-16 Yaş' },
    { id: 2, name: 'Hafta Sonu Basketbol Okulu', period: 'Yıl Boyu', description: 'Hafta sonları basketbol öğrenmek isteyenler için', ages: '8-18 Yaş' },
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
                Kadıköy Spor Kulübü basketbol branşı, modern tesisleri ve deneyimli antrenör
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
