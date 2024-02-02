import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';

export const metadata = {
  title: 'Banx Revenue Dashboard',
  description:
    'Showing data of Banx revenue'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body >
        <Suspense>
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
