// src/components/ThemeWalletProvider.tsx
'use client';

import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme/theme';
import WalletProvider from '@/contexts/WalletProvider';

export default function ThemeWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  );
}
