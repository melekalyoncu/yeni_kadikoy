import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';
import CTAButton from '@/app/components/ui/CTAButton';

export default function KamplarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Kamplar • Yaz & Kış Programları"
        title="KAMPLARIMIZ"
        subtitle="Yoğun antrenman ve eğlence dolu kamplarımızla gelişin"
        actions={
          <>
            <CTAButton href="/kayit" variant="primary" size="md">
              KAMPA KAYIT OL
            </CTAButton>
            <CTAButton href="/iletisim" variant="secondary" size="md">
              BİLGİ AL
            </CTAButton>
          </>
        }
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Giriş */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-sm border border-blue-200 p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Kamp Programlarımız
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-4">
                  Yeni Kadıköy Spor Kulübü olarak, yaz ve kış dönemlerinde düzenlediğimiz 
                  yoğun antrenman kamplarıyla sporcularımızın gelişimini hızlandırıyoruz.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Kamplarımızda profesyonel antrenmanların yanı sıra sosyal aktiviteler, 
                  eğitim seminerleri ve eğlenceli etkinliklerle unutulmaz deneyimler sunuyoruz.
                </p>
              </div>
            </section>

            {/* Yaz Kampı */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">☀️</div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Yaz Kampı</h2>
                      <p className="text-orange-100">Haziran - Ağustos</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Program Detayları</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">📅</span>
                        Süre ve Tarihler
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• 1. Dönem: 15 Haziran - 5 Temmuz</li>
                        <li>• 2. Dönem: 10 Temmuz - 30 Temmuz</li>
                        <li>• 3. Dönem: 5 Ağustos - 25 Ağustos</li>
                        <li>• Her dönem 3 hafta (15 gün)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">🏃</span>
                        Günlük Program
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• 09:00 - 12:00: Sabah antrenmanı</li>
                        <li>• 12:00 - 13:00: Öğle yemeği</li>
                        <li>• 13:00 - 15:00: Dinlenme / Aktivite</li>
                        <li>• 15:00 - 18:00: Öğleden sonra antrenmanı</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    Kamp İçeriği
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="text-3xl mb-2">🏐</div>
                      <h5 className="font-semibold text-slate-900 mb-2">Teknik Antrenman</h5>
                      <p className="text-sm text-slate-700">Branşa özel yoğun teknik çalışmalar</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="text-3xl mb-2">💪</div>
                      <h5 className="font-semibold text-slate-900 mb-2">Kondisyon</h5>
                      <p className="text-sm text-slate-700">Fiziksel gelişim programları</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="text-3xl mb-2">🎮</div>
                      <h5 className="font-semibold text-slate-900 mb-2">Sosyal Aktiviteler</h5>
                      <p className="text-sm text-slate-700">Eğlenceli grup etkinlikleri</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Kampın Avantajları</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-slate-700 text-sm">
                      <li>✓ Profesyonel antrenör kadrosu</li>
                      <li>✓ Modern tesisler ve ekipmanlar</li>
                      <li>✓ Beslenme danışmanlığı</li>
                      <li>✓ Spor psikoloğu desteği</li>
                      <li>✓ Sağlık ekibi gözetimi</li>
                      <li>✓ Kamp sonu sertifika</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Kış Kampı */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">❄️</div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Kış Kampı</h2>
                      <p className="text-blue-100">Ocak - Şubat</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Program Detayları</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">📅</span>
                        Süre ve Tarihler
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Dönem: 15 Ocak - 15 Şubat</li>
                        <li>• Süre: 4 hafta (20 gün)</li>
                        <li>• Hafta içi ve hafta sonu programları</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">🏃</span>
                        Günlük Program
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• 10:00 - 13:00: Sabah antrenmanı</li>
                        <li>• 13:00 - 14:00: Öğle yemeği</li>
                        <li>• 14:00 - 16:00: Teorik eğitim / Video analizi</li>
                        <li>• 16:00 - 19:00: Öğleden sonra antrenmanı</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    Kamp İçeriği
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="text-3xl mb-2">🎯</div>
                      <h5 className="font-semibold text-slate-900 mb-2">Taktik Eğitim</h5>
                      <p className="text-sm text-slate-700">Oyun stratejileri ve takım çalışması</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="text-3xl mb-2">📹</div>
                      <h5 className="font-semibold text-slate-900 mb-2">Video Analizi</h5>
                      <p className="text-sm text-slate-700">Performans değerlendirme</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="text-3xl mb-2">🧠</div>
                      <h5 className="font-semibold text-slate-900 mb-2">Mental Antrenman</h5>
                      <p className="text-sm text-slate-700">Spor psikolojisi çalışmaları</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Oyun Kuralları */}
            <section className="mb-12">
              <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">📋</span>
                  Kamp Kuralları
                </h2>
                
                <div className="space-y-4 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">1️⃣</span>
                    <p><strong>Katılım:</strong> Tüm antrenman ve etkinliklere düzenli katılım zorunludur.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">2️⃣</span>
                    <p><strong>Disiplin:</strong> Antrenörlere ve kamp görevlilerine saygılı olunmalıdır.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">3️⃣</span>
                    <p><strong>Ekipman:</strong> Kişisel spor malzemeleri temiz ve düzenli tutulmalıdır.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">4️⃣</span>
                    <p><strong>Sağlık:</strong> Sağlık sorunları derhal kamp görevlilerine bildirilmelidir.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">5️⃣</span>
                    <p><strong>Güvenlik:</strong> Kamp alanı dışına çıkış için izin alınmalıdır.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">6️⃣</span>
                    <p><strong>Fair Play:</strong> Tüm katılımcılara saygılı ve sportmence davranılmalıdır.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#1E4FBC] to-[#003580] rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Kamplarımıza Katılın!
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Yoğun antrenman ve eğlence dolu kamplarımızla yeteneklerinizi 
                  geliştirin, yeni arkadaşlar edinin!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/kayit" variant="primary" size="lg">
                    HEMEN KAYIT OL
                  </CTAButton>
                  <CTAButton href="/iletisim" variant="secondary" size="lg">
                    DETAYLI BİLGİ AL
                  </CTAButton>
                </div>
              </div>
            </section>

          </div>
        </main>
      </GridShell>
    </div>
  );
}

