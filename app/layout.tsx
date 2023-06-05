import Sidebar from '@/components/Sidebar';
import './globals.css';
import { Figtree } from 'next/font/google';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  languages: {
    'en-US': '/en-US',
    'hu-HU': '/hu-HU',
  },
  title: 'Krúbi Website',
  description: 'Magyarország legjobb rappere',
  keywords: ['rapper', 'zene', 'koncert'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
