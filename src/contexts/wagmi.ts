// src/contexts/wagmi.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

const enableTestnets = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true';
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

export const config = getDefaultConfig({
  appName: 'DexTrotter',
  projectId,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(enableTestnets ? [sepolia] : []),
  ],
  ssr: true,
});
