'use client';

import { useState } from 'react';
import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';

export default function SozlesmelerPage() {
  const [activeTab, setActiveTab] = useState<'uyelik' | 'kvkk'>('uyelik');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Kayıt • Yasal Belgeler"
        title="SÖZLEŞMELERİMİZ"
        subtitle="Üyelik sözleşmesi ve KVKK aydınlatma metni"
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Tab Menü */}
            <section className="mb-8">
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={() => setActiveTab('uyelik')}
                  className={`px-8 py-3 rounded-lg font-semibold transition ${
                    activeTab === 'uyelik'
                      ? 'bg-[#1E4FBC] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Üyelik Sözleşmesi
                </button>
                <button
                  onClick={() => setActiveTab('kvkk')}
                  className={`px-8 py-3 rounded-lg font-semibold transition ${
                    activeTab === 'kvkk'
                      ? 'bg-[#1E4FBC] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  KVKK Aydınlatma Metni
                </button>
              </div>
            </section>

            {/* Üyelik Sözleşmesi */}
            {activeTab === 'uyelik' && (
              <section className="mb-12">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Üyelik Sözleşmesi
                  </h2>
                  
                  <div className="space-y-6 text-slate-700 leading-relaxed">
                    
                    {/* Madde 1 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 1 - Taraflar
                      </h3>
                      <p>
                        İşbu sözleşme, bir tarafta <strong>Yeni Kadıköy Spor Kulübü</strong> 
                        (bundan sonra "KULÜP" olarak anılacaktır) ile diğer tarafta üye 
                        (bundan sonra "ÜYE" olarak anılacaktır) arasında aşağıda belirtilen 
                        şartlar dahilinde akdedilmiştir.
                      </p>
                    </div>

                    {/* Madde 2 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 2 - Sözleşmenin Konusu
                      </h3>
                      <p>
                        İşbu sözleşmenin konusu, ÜYE'nin KULÜP bünyesinde sunulan spor 
                        eğitimi ve tesislerden yararlanma koşullarının belirlenmesidir.
                      </p>
                    </div>

                    {/* Madde 3 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 3 - Kulübün Yükümlülükleri
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          KULÜP, ÜYE'ye seçtiği branşta profesyonel spor eğitimi vermeyi 
                          taahhüt eder.
                        </li>
                        <li>
                          KULÜP, tesislerini temiz, güvenli ve kullanıma uygun halde 
                          bulundurmayı taahhüt eder.
                        </li>
                        <li>
                          KULÜP, sertifikalı ve deneyimli antrenörlerle eğitim vermeyi 
                          taahhüt eder.
                        </li>
                        <li>
                          KULÜP, ÜYE'nin kişisel verilerini korumayı ve gizli tutmayı 
                          taahhüt eder.
                        </li>
                      </ul>
                    </div>

                    {/* Madde 4 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 4 - Üyenin Yükümlülükleri
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          ÜYE, antrenman saatlerine düzenli ve zamanında katılmayı 
                          taahhüt eder.
                        </li>
                        <li>
                          ÜYE, antrenörlere ve diğer üyelere saygılı davranmayı 
                          taahhüt eder.
                        </li>
                        <li>
                          ÜYE, tesis kurallarına uymayı ve tesisleri özenle kullanmayı 
                          taahhüt eder.
                        </li>
                        <li>
                          ÜYE, üyelik aidatını zamanında ödemeyi taahhüt eder.
                        </li>
                        <li>
                          ÜYE, sağlık durumunda meydana gelen değişiklikleri KULÜP'e 
                          bildirmeyi taahhüt eder.
                        </li>
                      </ul>
                    </div>

                    {/* Madde 5 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 5 - Ücret ve Ödeme
                      </h3>
                      <p className="mb-2">
                        ÜYE, seçtiği programa ait ücretleri aşağıdaki şekilde ödemeyi 
                        kabul eder:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Aylık aidat ödemeleri her ayın ilk haftasında yapılır.</li>
                        <li>Ödemeler nakit, kredi kartı veya havale/EFT ile yapılabilir.</li>
                        <li>Geç ödemelerde %10 gecikme faizi uygulanır.</li>
                        <li>3 ay üst üste ödeme yapılmaması halinde üyelik askıya alınır.</li>
                      </ul>
                    </div>

                    {/* Madde 6 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 6 - Sözleşmenin Süresi ve Feshi
                      </h3>
                      <p className="mb-2">
                        İşbu sözleşme, imza tarihinden itibaren 1 (bir) yıl süreyle 
                        geçerlidir. Taraflardan herhangi biri, 1 ay önceden yazılı 
                        bildirimde bulunarak sözleşmeyi feshedebilir.
                      </p>
                      <p>
                        KULÜP, ÜYE'nin tüzüğe aykırı davranışları halinde sözleşmeyi 
                        tek taraflı feshetme hakkına sahiptir.
                      </p>
                    </div>

                    {/* Madde 7 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 7 - Sorumluluk
                      </h3>
                      <p className="mb-2">
                        KULÜP, ÜYE'nin spor faaliyetleri sırasında meydana gelebilecek 
                        yaralanmalardan, ÜYE'nin kendi kusuru veya dikkatsizliği 
                        sonucu oluşan zararlardan sorumlu değildir.
                      </p>
                      <p>
                        ÜYE, spor yapmaya sağlık durumunun uygun olduğunu beyan eder 
                        ve gerekli sağlık raporunu KULÜP'e sunmayı taahhüt eder.
                      </p>
                    </div>

                    {/* Madde 8 */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Madde 8 - Uyuşmazlıkların Çözümü
                      </h3>
                      <p>
                        İşbu sözleşmeden doğabilecek her türlü uyuşmazlıkta İstanbul 
                        Mahkemeleri ve İcra Daireleri yetkilidir.
                      </p>
                    </div>

                    {/* İmza */}
                    <div className="mt-8 pt-6 border-t border-slate-300">
                      <p className="text-sm text-slate-600 mb-4">
                        İşbu sözleşme, taraflarca okunup anlaşıldıktan sonra imzalanmıştır.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">KULÜP</p>
                          <p className="text-sm text-slate-600">Yeni Kadıköy Spor Kulübü</p>
                          <p className="text-sm text-slate-600">Tarih: ___/___/______</p>
                          <p className="text-sm text-slate-600 mt-4">İmza: _______________</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">ÜYE</p>
                          <p className="text-sm text-slate-600">Ad Soyad: _______________</p>
                          <p className="text-sm text-slate-600">Tarih: ___/___/______</p>
                          <p className="text-sm text-slate-600 mt-4">İmza: _______________</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            )}

            {/* KVKK Aydınlatma Metni */}
            {activeTab === 'kvkk' && (
              <section className="mb-12">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    KVKK Aydınlatma Metni
                  </h2>
                  
                  <div className="space-y-6 text-slate-700 leading-relaxed">
                    
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm">
                        6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, 
                        kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek 
                        isteriz.
                      </p>
                    </div>

                    {/* Veri Sorumlusu */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        1. Veri Sorumlusu
                      </h3>
                      <p>
                        Kişisel verileriniz, veri sorumlusu sıfatıyla <strong>Yeni Kadıköy 
                        Spor Kulübü</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                      </p>
                    </div>

                    {/* İşlenen Veriler */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        2. İşlenen Kişisel Veriler
                      </h3>
                      <p className="mb-2">Kulübümüz tarafından işlenen kişisel verileriniz:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Kimlik bilgileri (ad, soyad, TC kimlik no, doğum tarihi)</li>
                        <li>İletişim bilgileri (adres, telefon, e-posta)</li>
                        <li>Sağlık bilgileri (sağlık raporu, kan grubu, alerjiler)</li>
                        <li>Fotoğraf ve video kayıtları</li>
                        <li>Finansal bilgiler (ödeme bilgileri)</li>
                        <li>Eğitim ve performans bilgileri</li>
                      </ul>
                    </div>

                    {/* İşleme Amaçları */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        3. Kişisel Verilerin İşlenme Amaçları
                      </h3>
                      <p className="mb-2">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Üyelik işlemlerinin yürütülmesi</li>
                        <li>Spor eğitimi hizmetlerinin sunulması</li>
                        <li>Sağlık ve güvenlik tedbirlerinin alınması</li>
                        <li>İletişim faaliyetlerinin yürütülmesi</li>
                        <li>Finansal işlemlerin gerçekleştirilmesi</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        <li>Tanıtım ve pazarlama faaliyetleri</li>
                      </ul>
                    </div>

                    {/* Aktarım */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        4. Kişisel Verilerin Aktarılması
                      </h3>
                      <p>
                        Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi 
                        doğrultusunda, ilgili spor federasyonlarına, sağlık kuruluşlarına, 
                        yasal mercilere ve hizmet sağlayıcılara aktarılabilecektir.
                      </p>
                    </div>

                    {/* Haklarınız */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        5. Kişisel Veri Sahibinin Hakları
                      </h3>
                      <p className="mb-2">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                        <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini isteme</li>
                        <li>Aktarıldığı üçüncü kişilere yukarıdaki işlemlerin bildirilmesini isteme</li>
                        <li>Münhasıran otomatik sistemler ile analiz edilmesine itiraz etme</li>
                        <li>Kanuna aykırı işleme nedeniyle zarara uğraması halinde tazminat talep etme</li>
                      </ul>
                    </div>

                    {/* Başvuru */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        6. Başvuru Yöntemi
                      </h3>
                      <p className="mb-2">
                        Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle 
                        başvurabilirsiniz:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>E-posta: kvkk@yenikadikoyspor.com</li>
                        <li>Posta: Kadıköy, İstanbul (Kulüp adresi)</li>
                        <li>Şahsen başvuru: Kulüp merkezimize gelerek</li>
                      </ul>
                      <p className="mt-3 text-sm">
                        Başvurularınız en geç 30 gün içinde değerlendirilecek ve 
                        sonuçlandırılacaktır.
                      </p>
                    </div>

                    {/* Son */}
                    <div className="mt-8 pt-6 border-t border-slate-300">
                      <p className="text-sm text-slate-600">
                        <strong>Son Güncelleme:</strong> Ocak 2025
                      </p>
                      <p className="text-sm text-slate-600 mt-2">
                        Bu aydınlatma metni, yasal düzenlemelerdeki değişiklikler 
                        doğrultusunda güncellenebilir.
                      </p>
                    </div>

                  </div>
                </div>
              </section>
            )}

          </div>
        </main>
      </GridShell>
    </div>
  );
}

