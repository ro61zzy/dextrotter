'use client';

import { useState } from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardContent, TextField } from '@mui/material';
import { useAccount } from 'wagmi'; // For wallet connection
import { ConnectButton } from '@rainbow-me/rainbowkit'; // RainbowKit for wallet connection
//import { Line } from 'react-chartjs-2'; // For price chart (you can replace it with your data visualization)

export default function Page() {
  const { isConnected, address } = useAccount(); // Check if the user is connected
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');
  const [swapRate, setSwapRate] = useState<number | null>(null);

  // Placeholder data for price chart
  const chartData = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Price Trend',
        data: [100, 105, 110, 120, 125],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Handle the swap action (this will connect to the backend API later)
  const handleSwap = () => {
    // Placeholder logic for the swap action
    console.log(`Swapping ${amount} ${fromToken} to ${toToken}`);
    // Replace this with actual logic for fetching the swap rate from DEXs
    setSwapRate(Math.random() * 10); // Random swap rate for now
  };

  return (
    <Container>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
        <Typography variant="h4">DexTrotter</Typography>
        <ConnectButton />
      </Box>

      {/* Main Dashboard Content */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {/* Token Swap Overview */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Token Swap Overview
              </Typography>
              <Typography variant="body1">
                Swap rate: {swapRate ? `${swapRate.toFixed(2)} ETH` : 'Fetching...'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Price Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Price Trend (Last 5 Transactions)
              </Typography>
              <hr />
              {/* <Line data={chartData} /> */}
            </CardContent>
          </Card>
        </Grid>

        {/* Swap Form */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Token Swap
              </Typography>
              <TextField
                fullWidth
                label="From Token"
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="To Token"
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <Button variant="contained" color="primary" fullWidth onClick={handleSwap}>
                Swap
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="body2">© 2024 DexTrotter - All Rights Reserved</Typography>
      </Box>
    </Container>
  );
}
