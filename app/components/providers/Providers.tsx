'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import ThemeInitializer from './ThemeInitializer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeInitializer />
      {children}
    </Provider>
  );
}

