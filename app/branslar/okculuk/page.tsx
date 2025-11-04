import Link from 'next/link';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';
import BranchHero from '@/app/components/branch/BranchHero';
import InfoSection from '@/app/components/branch/InfoSection';
import ProgramCard from '@/app/components/branch/ProgramCard';

export default function OkculukPage() {
  const teams = [
    { id: 1, name: 'U12 Okçuluk Takımı', ageRange: '10-12 Yaş', description: 'Okçuluk sporuna yeni başlayan çocuklarımız için temel eğitim programı', schedule: 'Pazartesi, Çarşamba • 16:00-18:00' },
    { id: 2, name: 'U14 Okçuluk Takımı', ageRange: '12-14 Yaş', description: 'Orta seviye okçuluk eğitimi ve turnuva hazırlığı', schedule: 'Salı, Perşembe • 16:00-18:00' },
    { id: 3, name: 'U16 Okçuluk Takımı', ageRange: '14-16 Yaş', description: 'İleri seviye okçuluk eğitimi ve profesyonel hazırlık', schedule: 'Pazartesi, Çarşamba • 18:00-20:00' },
    { id: 4, name: 'U18 Okçuluk Takımı', ageRange: '16-18 Yaş', description: 'Profesyonel okçuluk eğitimi ve ulusal müsabakalar', schedule: 'Salı, Perşembe • 18:00-20:00' },
  ];

  const schools = [
    { id: 1, name: 'Yaz Okçuluk Okulu', period: 'Haziran - Ağustos', description: 'Yaz aylarında yoğun okçuluk eğitimi ve kamp programı', ages: '8-16 Yaş' },
    { id: 2, name: 'Hafta Sonu Okçuluk Okulu', period: 'Yıl Boyu', description: 'Hafta sonları okçuluk öğrenmek isteyenler için', ages: '8-18 Yaş' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Compact Hero as Card (yeşil tonlar) */}
      <BranchHero
        emoji="🎯"
        title="OKÇULUK"
        subtitle="Konsantrasyon ve disiplin gerektiren okçuluk sporuyla kendinizi geliştirin."
        from="from-emerald-600"
        to="to-emerald-800"
        border="border-emerald-700/50"
        primary={{ href: "/kayit", label: "Kayıt Ol" }}
        secondary={{ href: "/iletisim", label: "Bilgi Al" }}
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
            <InfoSection title="Okçuluk Branşımız Hakkında">
              <p className="text-slate-700 leading-relaxed mb-3">
                Yeni Kadıköy Spor Kulübü okçuluk branşı, konsantrasyon, disiplin ve sabır gerektiren
                bu özel spor dalında gençlerimize profesyonel eğitim sunmaktadır. Deneyimli
                antrenörlerimiz ve modern tesislerimizle sporcularımızın gelişimini destekliyoruz.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Temel okçuluk tekniklerinden ileri seviye atış becerilerine kadar kapsamlı bir
                eğitim programı sunuyoruz. Sporcularımız düzenli olarak ulusal ve uluslararası
                yarışmalara katılmaktadır.
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
                      <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-md">
                        {team.ageRange}
                      </span>
                    </div>
                    <p className="text-slate-700 mb-3 md:mb-4">{team.description}</p>
                    <div className="border-t border-slate-200 pt-3">
                      <p className="text-sm text-slate-600">
                        <strong className="text-emerald-700">Antrenman:</strong> {team.schedule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sports Schools */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:3xl font-bold text-slate-800 mb-6 md:mb-8">Spor Okulları</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {schools.map((school) => (
                  <ProgramCard
                    key={school.id}
                    title={school.name}
                    period={school.period}
                    description={school.description}
                    ages={school.ages}
                    gradientFrom="from-emerald-600"
                    gradientTo="to-emerald-800"
                    buttonHref="/kayit"
                    badgeTextClass="text-emerald-700"
                  />
                ))}
              </div>
            </section>

            {/* Facilities */}
            <InfoSection title="Tesislerimiz">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: '🏹', title: 'Atış Alanı', text: 'Uluslararası standartlarda okçuluk alanı' },
                  { icon: '🎯', title: 'Ekipman', text: 'Profesyonel okçuluk ekipmanları' },
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

            {/* Benefits */}
            <section className="mb-8 md:mb-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-sm border border-emerald-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">Okçuluğun Faydaları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Konsantrasyon Gelişimi', text: 'Odaklanma ve dikkat becerilerini artırır' },
                  { title: 'Disiplin', text: 'Düzenli çalışma alışkanlığı kazandırır' },
                  { title: 'Sabır ve Özdenetim', text: 'Duygusal kontrol becerilerini geliştirir' },
                  { title: 'Fiziksel Gelişim', text: 'Üst vücut gücü ve koordinasyonu artırır' },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl text-emerald-600">✓</span>
                    <div>
                      <h4 className="font-bold text-slate-800">{b.title}</h4>
                      <p className="text-sm text-slate-600">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-xl border border-emerald-700/50 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-lg p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Okçuluk Ailemize Katılın!</h2>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-white/90">
                Hemen kayıt olun ve okçuluk yolculuğunuza başlayın.
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
                  className="rounded-lg bg-white px-6 md:px-8 py-2.5 font-bold text-emerald-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
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
