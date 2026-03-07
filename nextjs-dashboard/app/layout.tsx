import '@/app/ui/global.css'; // ЦЕЙ РЯДОК ПІДКЛЮЧАЄ ТВОЇ КАРТИНКИ ТА СТИЛІ
import { inter } from '@/app/ui/fonts'; // ПІДКЛЮЧАЄМО ШРИФТ
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Додаємо шрифт inter до body, щоб все виглядало професійно */}
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}