import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-yellow-500 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KS</span>
              </div>
              <h3 className="font-bold text-lg">KADIKÖY SPOR KULÜBÜ</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Kadıköy Spor Kulübü olarak gençlerimize spor yapma imkanı sunuyor, 
              sağlıklı nesiller yetiştirmeyi hedefliyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">HIZLI LİNKLER</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-blue-600 transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/haberler" className="hover:text-blue-600 transition">
                  Haberler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-blue-600 transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sponsors */}
          <div>
            <h3 className="font-bold text-lg mb-4">SPONSORLARIMIZ</h3>
            <ul className="space-y-2 text-sm">
              <li>Sponsor 1</li>
              <li>Sponsor 2</li>
              <li>Sponsor 3</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">İLETİŞİM BİLGİLERİ</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Kadıköy, İstanbul</li>
              <li>📞 +90 XXX XXX XX XX</li>
              <li>✉️ info@kadikoysporkulubu.com</li>
            </ul>
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                f
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition">
                t
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition">
                i
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 Kadıköy Spor Kulübü. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

