"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = useMemo(
    () => [
      { href: "/", label: "ANA SAYFA" },
      { href: "/hakkimizda", label: "HAKKIMIZDA" },
      { href: "/haberler", label: "HABERLER" },
      { href: "/iletisim", label: "İLETİŞİM" },
      { href: "/kayit", label: "KAYIT OL" },
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
              <span className="block text-xl font-extrabold tracking-tight text-blue-600">
                YENİ KADIKÖY
              </span>
              <span className="block text-sm font-semibold text-[#EAB308]">
                SPOR KULÜBÜ
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} active={isActive(l.href)}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile: menu */}
          <div className="md:hidden flex items-center gap-2">
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
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav className="mb-3 grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-lg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-lg px-4 py-2 font-semibold transition",
                  "hover:bg-slate-100",
                  isActive(l.href) ? "text-slate-900 bg-yellow-50" : "text-slate-700",
                ].join(" ")}
              >
                {l.label}
              </Link>
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
        "group relative font-semibold transition focus:outline-none",
        active ? "text-slate-900" : "text-slate-700 hover:text-slate-900",
      ].join(" ")}
    >
      <span className="px-1.5 py-1">{children}</span>
      {/* underline */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0",
          "bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#ea580c]",
          "transition-transform duration-300",
          active ? "scale-x-100" : "group-hover:scale-x-100",
        ].join(" ")}
      />
    </Link>
  );
}

