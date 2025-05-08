// app/layout.tsx
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletProvider from '@/contexts/WalletProvider';
import Navbar from '@/components/Navbar';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider >
          <Navbar />
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}

export default RootLayout;