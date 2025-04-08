"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useAccount } from "wagmi"; // For wallet connection
import { ConnectButton } from "@rainbow-me/rainbowkit";
//import { Line } from 'react-chartjs-2'; // For price chart (you can replace it with your data visualization)

export default function Page() {
  const { isConnected, address } = useAccount(); // Check if the user is connected
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [swapRate, setSwapRate] = useState<number | null>(null);

  // Placeholder data for price chart
  const chartData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Price Trend",
        data: [100, 105, 110, 120, 125],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
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
    <Container
      sx={{
        minHeight: "100vh",
        padding: 4,
        backgroundColor: "background.default",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography
          sx={{ color: "#ec4612", fontWeight: "700", fontSize: "2rem" }}
        >
          DexTrotter
        </Typography>

        <ConnectButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          pt:"1.5rem"
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "700",
            pb: "10px",
            color: "#ec4612",
          }}
        >
          Best Swap, Every Time.
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "grey", pb: "1rem" }}>
          Compare prices across CowSwap, Matcha, 1inch and more. Save on gas,
          get MEV protection.
        </Typography>
      </Box>
    </Container>
  );
}
