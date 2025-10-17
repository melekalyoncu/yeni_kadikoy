'use client';
import type { ReactNode } from 'react';

type GridShellProps = {
  children: ReactNode;          // orta içerik (8 kolon)
  left?: ReactNode;             // sol sidebar (2 kolon) - varsayılan SponsorSidebar
  right?: ReactNode;            // sağ sidebar (2 kolon) - varsayılan SponsorSidebar
  stickyOffset?: number;        // lg:top-* değeri (px)
  className?: string;           // dış sarmal ek sınıflar
};

export default function GridShell({
  children,
  left,
  right,
  stickyOffset = 24, // lg:top-6 ~ 24px
  className = '',
}: GridShellProps) {
  return (
    <div className={`w-full py-12 md:py-16 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Sol 2 kolon */}
        <aside className="lg:col-span-2 px-4">
          <div className="lg:sticky" style={{ top: stickyOffset }}>{left}</div>
        </aside>

        {/* Orta 8 kolon */}
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            {children}
          </div>
        </main>

        {/* Sağ 2 kolon */}
        <aside className="lg:col-span-2 px-4">
          <div className="lg:sticky" style={{ top: stickyOffset }}>{right}</div>
        </aside>
      </div>
    </div>
  );
}
