import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FOOT INTELLIGENCE',
  description: 'Dashboard football intelligent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
