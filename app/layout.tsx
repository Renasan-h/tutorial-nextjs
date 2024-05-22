import { lusitana } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.className} md text-xl leading-normal text-gray-800 md:text-3xl`}
      >
        {children}
      </body>
    </html>
  );
}
