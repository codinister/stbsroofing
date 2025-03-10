'use client';

import type { Metadata } from 'next';
import './globals.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const provider = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={provider}>
          <Nav />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
