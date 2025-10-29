import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: 'Admin Panel - Yeni Kadıköy Spor Kulübü',
  description: 'Yönetim Paneli',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {children}
    </div>
  );
}

