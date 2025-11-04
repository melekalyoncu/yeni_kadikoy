"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

type MenuItem = {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const links: MenuItem[] = useMemo(
    () => [
      { href: "/", label: "ANA SAYFA" },
      {
        href: "/hakkimizda",
        label: "HAKKIMIZDA",
        submenu: [
          { href: "/hakkimizda", label: "Genel Bilgi" },
          { href: "/hakkimizda/neden-yeni-kadikoy", label: "Neden Biz?" },
          { href: "/hakkimizda/tuzuk", label: "Tüzük" },
          { href: "/hakkimizda/sosyal-sorumluluk", label: "Sosyal Sorumluluk" },
          { href: "/hakkimizda/basinda-biz", label: "Basında Biz" },
          { href: "/hakkimizda/sss", label: "SSS" },
        ]
      },
      { href: "/haberler", label: "HABERLER" },
      {
        href: "/branslar/voleybol",
        label: "BRANŞLAR",
        submenu: [
          { href: "/branslar/voleybol", label: "🏐 Voleybol" },
          { href: "/branslar/basketbol", label: "🏀 Basketbol" },
          { href: "/branslar/okculuk", label: "🎯 Okçuluk" },
        ]
      },
      { href: "/kamplar", label: "KAMPLAR" },
      { href: "/galeri", label: "GALERİ" },
      {
        href: "/kayit",
        label: "KAYIT",
        submenu: [
          { href: "/kayit", label: "Kayıt Ol" },
          { href: "/kayit/sozlesmeler", label: "Sözleşmeler" },
        ]
      },
      { href: "/iletisim", label: "İLETİŞİM" },
    ],
    []
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all",
        "bg-white border-b-slate-200",
        scrolled ? "shadow-md" : "shadow-sm",
      ].join(" ")}
      aria-label="Site header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md focus:outline-none"
          >
            <Image
              src="/images/logo.png"
              alt="Yeni Kadıköy Spor Kulübü Logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
            <span className="leading-tight">
              <span className="block text-xl font-extrabold tracking-tight text-[#1E4FBC]">
                YENİ KADIKÖY
              </span>
              <span className="block text-sm font-semibold text-[#EAB308]">
                SPOR KULÜBÜ
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            {links.map((item) => (
              item.submenu ? (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={[
                      "relative font-semibold transition focus:outline-none px-2 py-1.5 rounded-lg",
                      isActive(item.href)
                        ? "text-slate-900 bg-yellow-50"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-1 text-sm">
                      {item.label}
                      <svg
                        className={[
                          "w-3.5 h-3.5 transition-transform duration-200",
                          openDropdown === item.label ? "rotate-180" : ""
                        ].join(" ")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={[
                      "absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50",
                      "transition-all duration-200 origin-top",
                      openDropdown === item.label
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    ].join(" ")}
                  >
                    <div className="py-2">
                      {item.submenu.map((subitem, idx) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className={[
                            "block px-4 py-2.5 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 hover:text-[#1E4FBC] transition-all",
                            "border-l-2 border-transparent hover:border-[#1E4FBC]",
                            idx !== 0 ? "border-t border-slate-100" : ""
                          ].join(" ")}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.href} href={item.href} active={isActive(item.href)}>
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>

          {/* Mobile: menu */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menüyü aç/kapat"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={[
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav className="mb-3 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            {links.map((item, idx) => (
              <div key={item.href} className={idx !== 0 ? "border-t border-slate-100" : ""}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }
                  }}
                  className={[
                    "px-4 py-3 font-semibold transition flex items-center justify-between",
                    "hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50",
                    isActive(item.href) ? "text-[#1E4FBC] bg-blue-50" : "text-slate-700",
                  ].join(" ")}
                >
                  <span className="text-sm">{item.label}</span>
                  {item.submenu && (
                    <svg
                      className={[
                        "w-4 h-4 transition-transform duration-200",
                        openDropdown === item.label ? "rotate-180" : ""
                      ].join(" ")}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.submenu && openDropdown === item.label && (
                  <div className="bg-slate-50 border-t border-slate-100">
                    {item.submenu.map((subitem, subIdx) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className={[
                          "block px-6 py-2.5 text-sm text-slate-600 hover:bg-white hover:text-[#1E4FBC] transition",
                          "border-l-2 border-transparent hover:border-[#1E4FBC]",
                          subIdx !== item.submenu!.length - 1 ? "border-b border-slate-200" : ""
                        ].join(" ")}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "font-semibold transition focus:outline-none px-2 py-1.5 rounded-lg text-sm",
        active
          ? "text-slate-900 bg-yellow-50"
          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

