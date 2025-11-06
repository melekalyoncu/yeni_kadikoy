'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = {
    instagram: 'https://instagram.com/yenikadikoysk',
    facebook: 'https://facebook.com/yenikadikoysk',
    twitter: 'https://twitter.com/yenikadikoysk',
    email: 'mailto:yenikadikoysporkulubu@gmail.com',
  };

  return (
    <footer
      className="
        relative isolate text-white
        bg-gradient-to-b from-[#1e3a8a] via-[#1d4ed8] to-[#1e40af]
        transition-colors
      "
    >
      {/* yumuşak radial highlight */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(900px_600px_at_50%_-200px,rgba(255,255,255,0.12),transparent)]
        "
      />

      {/* çok ince grid dokusu */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-[0.06]
          bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          bg-[size:28px_28px]
          [mask-image:radial-gradient(85%_70%_at_50%_40%,#000_60%,transparent_100%)]
        "
      />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Yeni Kadıköy Spor Kulübü"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-base leading-tight tracking-tight">
                  YENİ KADIKÖY
                </h3>
                <p className="text-[#FFD700] text-xs font-semibold tracking-wide">
                  SPOR KULÜBÜ
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Geleceğin şampiyonlarını yetiştiriyoruz. Voleybol, basketbol ve okçuluk
              branşlarında profesyonel eğitim.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#FFD700] mb-2.5">
              Hızlı Linkler
            </h3>
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#FFD700] via-[#f59e0b] to-[#ea580c] rounded-full mb-3" />
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#FFD700] transition" />
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="group inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#FFD700] transition" />
                  Hakkımızda
                </Link>
              </li>
              <li>
                <a
                  href="/documents/yeni-kadikoy-spor-kulubu-tuzuk.pdf"
                  download="Yeni-Kadikoy-Spor-Kulubu-Tuzuk.pdf"
                  className="group inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#FFD700] transition" />
                  Tüzük (PDF)
                </a>
              </li>
              <li>
                <Link
                  href="/haberler"
                  className="group inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#FFD700] transition" />
                  Haberler
                </Link>
              </li>
              <li>
                <Link
                  href="/kamplar"
                  className="group inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#FFD700] transition" />
                  Kamplarımız
                </Link>
              </li>
              <li>
                <Link
                  href="/magaza"
                  className="group inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#FFD700] transition" />
                  Mağaza
                </Link>
              </li>
              <li>
                <Link
                  href="/kayit"
                  className="group inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#FFD700] transition" />
                  Kayıt Ol
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#FFD700] mb-2.5">
              Branşlarımız
            </h3>
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#FFD700] via-[#f59e0b] to-[#ea580c] rounded-full mb-3" />
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/branslar/voleybol"
                  className="inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span>🏐</span> Voleybol
                </Link>
              </li>
              <li>
                <Link
                  href="/branslar/basketbol"
                  className="inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span>🏀</span> Basketbol
                </Link>
              </li>
              <li>
                <Link
                  href="/branslar/okculuk"
                  className="inline-flex items-center gap-2 text-blue-100/90 hover:text-[#FFD700] transition"
                >
                  <span>🎯</span> Okçuluk
                </Link>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href="/kayit"
                className="
                  inline-flex items-center gap-2 bg-[#FFD700] text-[#1e3a8a]
                  px-5 py-2 rounded-xl font-bold text-sm
                  hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl
                  ring-1 ring-black/5
                "
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1e3a8a]" />
                KAYIT OL
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#FFD700] mb-2.5">
              İletişim
            </h3>
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#FFD700] via-[#f59e0b] to-[#ea580c] rounded-full mb-3" />
            <ul className="space-y-2.5 text-sm text-blue-100/90">
              <li className="flex items-start gap-2">
                <span className="text-[#FFD700]">📍</span>
                <span>Kadıköy, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD700]">📞</span>
                <a href="tel:+905352279131" className="hover:text-[#FFD700] transition">
                  0535 227 91 31
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD700]">✉️</span>
                <a
                  href={socialLinks.email}
                  className="hover:text-[#FFD700] transition"
                >
                  yenikadikoysporkulubu@gmail.com
                </a>
              </li>
            </ul>

            {/* Sosyal */}
            <div className="flex gap-2.5 mt-5">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={socialLinks.email}
                className="w-9 h-9 bg-[#EAB308] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-blue-100/70">
            <p className="text-center md:text-left">
              &copy; 2025 Yeni Kadıköy Spor Kulübü. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-5">
              <Link href="/kayit/sozlesmeler" className="hover:text-[#FFD700] transition">
                Sözleşmelerimiz
              </Link>
              <Link href="/hakkimizda/sss" className="hover:text-[#FFD700] transition">
                SSS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

