'use client';

import { useAppSelector } from '@/app/store/hooks';

export default function ThemeDebug() {
  const theme = useAppSelector((state) => state.theme.mode);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg text-xs font-mono z-50">
      <div>Redux Theme: {theme}</div>
      <div>HTML Class: {typeof document !== 'undefined' ? (document.documentElement.classList.contains('dark') ? 'dark' : 'light') : 'N/A'}</div>
      <div>LocalStorage: {typeof window !== 'undefined' ? localStorage.getItem('theme') || 'null' : 'N/A'}</div>
    </div>
  );
}

