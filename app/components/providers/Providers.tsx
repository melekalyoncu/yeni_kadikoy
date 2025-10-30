'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import { SWRConfig } from 'swr';
import ThemeInitializer from './ThemeInitializer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateOnReconnect: true,
          shouldRetryOnError: false,
          dedupingInterval: 5000,
          onError: (error) => {
            console.error('SWR Error:', error);
          },
        }}
      >
        <ThemeInitializer />
        {children}
      </SWRConfig>
    </Provider>
  );
}

