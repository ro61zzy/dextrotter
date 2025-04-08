//src/contexts/walletprovider.tsx

import { ReactNode } from 'react';
import { RainbowKitProvider, darkTheme, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';

const config = getDefaultConfig({
  appName: 'DexTrotter',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // <- Get from WalletConnect dashboard
  chains: [mainnet],
  transports: { [mainnet.id]: http() },
  ssr: false, // Disable SSR for wallet connection components
});

const queryClient = new QueryClient();

export default function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()} modalSize="compact">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
