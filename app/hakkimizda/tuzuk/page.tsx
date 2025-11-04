import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';

export default function TuzukPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Hakkımızda • Yasal Belgeler"
        title="KULÜP TÜZÜĞÜ"
        subtitle="Yeni Kadıköy Spor Kulübü Ana Tüzüğü"
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Giriş */}
            <section className="mb-8">
              <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 p-6">
                <p className="text-slate-700 leading-relaxed">
                  Yeni Kadıköy Spor Kulübü, 5253 sayılı Dernekler Kanunu ve ilgili mevzuat 
                  çerçevesinde faaliyet gösteren bir spor kulübüdür. Aşağıda kulübümüzün 
                  ana tüzüğü yer almaktadır.
                </p>
              </div>
            </section>

            {/* Tüzük Maddeleri */}
            <section className="mb-12 space-y-8">
              
              {/* Madde 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    1
                  </span>
                  Kulübün Adı ve Merkezi
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 1.1:</strong> Kulübün adı "Yeni Kadıköy Spor Kulübü"dür.
                  </p>
                  <p>
                    <strong>Madde 1.2:</strong> Kulübün merkezi İstanbul ili, Kadıköy ilçesindedir.
                  </p>
                  <p>
                    <strong>Madde 1.3:</strong> Kulüp, gerekli izinler alınarak şube açabilir.
                  </p>
                </div>
              </div>

              {/* Madde 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    2
                  </span>
                  Kulübün Amacı
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 2.1:</strong> Kulübün amacı; gençlere ve çocuklara spor yapma 
                    imkanı sağlamak, sağlıklı nesiller yetiştirmek, spor kültürünü yaymaktır.
                  </p>
                  <p>
                    <strong>Madde 2.2:</strong> Voleybol, basketbol ve okçuluk branşlarında 
                    profesyonel eğitim vermek ve sporcuları ulusal ve uluslararası müsabakalara 
                    hazırlamaktır.
                  </p>
                  <p>
                    <strong>Madde 2.3:</strong> Fair play, takım ruhu ve disiplin değerlerini 
                    benimseyen bireyler yetiştirmektir.
                  </p>
                </div>
              </div>

              {/* Madde 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    3
                  </span>
                  Üyelik
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 3.1:</strong> Kulübe üye olmak isteyen herkes, yaş ve cinsiyet 
                    ayrımı gözetilmeksizin başvurabilir.
                  </p>
                  <p>
                    <strong>Madde 3.2:</strong> 18 yaşından küçükler için veli/vasi onayı gereklidir.
                  </p>
                  <p>
                    <strong>Madde 3.3:</strong> Üyelik başvuruları yönetim kurulu tarafından 
                    değerlendirilir ve karara bağlanır.
                  </p>
                  <p>
                    <strong>Madde 3.4:</strong> Üyeler, kulüp tüzüğüne ve iç yönetmeliğe uymakla 
                    yükümlüdür.
                  </p>
                </div>
              </div>

              {/* Madde 4 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    4
                  </span>
                  Üyelikten Çıkma ve Çıkarılma
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 4.1:</strong> Üyeler, yazılı bildirimde bulunarak üyelikten 
                    ayrılabilir.
                  </p>
                  <p>
                    <strong>Madde 4.2:</strong> Tüzüğe aykırı davranışlarda bulunan, kulübün 
                    itibarını zedeleyen üyeler yönetim kurulu kararıyla üyelikten çıkarılabilir.
                  </p>
                  <p>
                    <strong>Madde 4.3:</strong> Aidat borcunu 6 ay süreyle ödemeyen üyelerin 
                    üyeliği askıya alınabilir.
                  </p>
                </div>
              </div>

              {/* Madde 5 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    5
                  </span>
                  Yönetim Kurulu
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 5.1:</strong> Kulüp, genel kurul tarafından seçilen 7 asil ve 
                    7 yedek üyeden oluşan yönetim kurulu tarafından yönetilir.
                  </p>
                  <p>
                    <strong>Madde 5.2:</strong> Yönetim kurulu görev süresi 4 yıldır.
                  </p>
                  <p>
                    <strong>Madde 5.3:</strong> Yönetim kurulu, başkan, başkan yardımcısı, 
                    genel sekreter, sayman ve üyelerden oluşur.
                  </p>
                  <p>
                    <strong>Madde 5.4:</strong> Yönetim kurulu ayda en az bir kez toplanır.
                  </p>
                </div>
              </div>

              {/* Madde 6 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    6
                  </span>
                  Genel Kurul
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 6.1:</strong> Genel kurul, kulübün en yetkili karar organıdır.
                  </p>
                  <p>
                    <strong>Madde 6.2:</strong> Olağan genel kurul yılda bir kez, Mart-Haziran 
                    ayları arasında toplanır.
                  </p>
                  <p>
                    <strong>Madde 6.3:</strong> Olağanüstü genel kurul, yönetim kurulu kararı 
                    veya üyelerin 1/5'inin yazılı talebi ile toplanabilir.
                  </p>
                </div>
              </div>

              {/* Madde 7 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    7
                  </span>
                  Gelir Kaynakları
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 7.1:</strong> Kulübün gelir kaynakları; üye aidatları, 
                    bağışlar, sponsorluklar ve etkinlik gelirleridir.
                  </p>
                  <p>
                    <strong>Madde 7.2:</strong> Tüm gelir ve giderler kayıt altına alınır ve 
                    yıllık mali rapor genel kurula sunulur.
                  </p>
                </div>
              </div>

              {/* Madde 8 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E4FBC] text-white font-bold">
                    8
                  </span>
                  Tüzük Değişikliği ve Fesih
                </h2>
                <div className="pl-13 space-y-3 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Madde 8.1:</strong> Tüzük değişikliği, genel kurulda mevcut üyelerin 
                    2/3 çoğunluğu ile yapılabilir.
                  </p>
                  <p>
                    <strong>Madde 8.2:</strong> Kulübün feshi, genel kurulda mevcut üyelerin 
                    2/3 çoğunluğu ile kararlaştırılabilir.
                  </p>
                  <p>
                    <strong>Madde 8.3:</strong> Fesih halinde, kulübün mal varlığı benzer amaçlı 
                    bir spor kulübüne veya kamu yararına çalışan bir kuruluşa devredilir.
                  </p>
                </div>
              </div>

            </section>

            {/* Alt Bilgi */}
            <section className="mb-12">
              <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Not:</strong> Bu tüzük, 5253 sayılı Dernekler Kanunu ve ilgili 
                  mevzuat çerçevesinde hazırlanmıştır. Tüzükte yer almayan hususlarda 
                  ilgili mevzuat hükümleri uygulanır.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  Son güncelleme: Ocak 2025
                </p>
              </div>
            </section>

          </div>
        </main>
      </GridShell>
    </div>
  );
}

