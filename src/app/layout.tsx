// app/layout.tsx
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletProvider from '@/contexts/WalletProvider';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider >{children}</WalletProvider>
      </body>
    </html>
  );
}

export default RootLayout;