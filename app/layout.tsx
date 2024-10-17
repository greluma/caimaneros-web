// Next
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
// Redux Client Provider
import ClientProvider from '@/components/ClientProvider';
// Styles
import './styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Caimaneros. Bar & Tapas',
  description: 'Página para mostrar el menú de el restaurante Caimaneros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <AppRouterCacheProvider
            options={{ key: 'css', enableCssLayer: true }}
          >
            {children}
          </AppRouterCacheProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
