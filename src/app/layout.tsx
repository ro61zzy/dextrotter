// app/layout.tsx
import './globals.css';
import ThemeWalletProvider from '@/components/ThemeWalletProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeWalletProvider>{children}</ThemeWalletProvider>
      </body>
    </html>
  );
}
