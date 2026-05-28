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
  description:
    'Desfrute de uma experiência culinária única no Caimaneros Bar & Tapas, Luanda, Angola. Descubra o nosso menu de tapas e bebidas num ambiente acolhedor com influências locais e internacionais destacando o país natal do nosso Chef Carlos Manuel Rodríguez Álvarez, nascido em Cuba. Um local de qualidade absoluta com bons preços que certamente o farão regressar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <meta name="geo.region" content="AO" />
        <meta name="geo.placename" content="Angola" />
        <meta
          name="geo.position"
          content="-8.830927758221119, 13.229409665824166"
        />
        <meta name="ICBM" content="-8.830927758221119, 13.229409665824166" />
      </head>
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
