"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useAccount } from "wagmi"; // For wallet connection
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

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
    <Box
      sx={{
        minHeight: "100vh",
        padding: 4,
       // background: "linear-gradient(to right, #1c1c1c, #2a2a2a)", // Dark gradient
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "2rem",
            background: "linear-gradient(45deg, #ec4612, #ff6f00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
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
          pt: "0.5rem",
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
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#fff",
          // backgroundColor: "#f5f5f5",
          borderRadius: 2,
          // width: "100%",
          // padding: 3,
          // boxShadow: 3,
          pt: "10px",
          pb: "3rem",
        }}
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: 500,
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: 2,
            padding: 3,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#ec4612",
              textAlign: "center",
              marginBottom: 2,
              fontWeight: 700,
            }}
          >
            Token Swap
          </Typography>

          <Box display="flex" flexDirection="column" gap={3}>
            {/* From Token Input */}
            <TextField
              label="From Token"
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#f5f5f5",
                // color:"#ec4612",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            {/* To Token Input */}
            <TextField
              label="To Token"
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            {/* Amount Input */}
            <TextField
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            {/* Swap Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#ec4612",
                padding: "12px",
                borderRadius: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#d93c10",
                },
              }}
              startIcon={<CompareArrowsIcon />}
              onClick={() => console.log("Run comparison")}
            >
              Swap
            </Button>
          </Box>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ color: "white" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#333",
                  cursor: "pointer",
                },
              }}
            >
              <TableCell sx={{ color: "#ec4612", fontWeight: "bold" }}>
                Aggregator
              </TableCell>
              <TableCell sx={{ color: "#ec4612", fontWeight: "bold" }}>
                Estimated Output
              </TableCell>
              <TableCell sx={{ color: "#ec4612", fontWeight: "bold" }}>
                Slippage
              </TableCell>
              <TableCell sx={{ color: "#ec4612", fontWeight: "bold" }}>
                Gas Fees
              </TableCell>
              <TableCell sx={{ color: "#ec4612", fontWeight: "bold" }}>
                Execution Time
              </TableCell>
              <TableCell sx={{ color: "#ec4612", fontWeight: "bold" }}>
                MEV Protection
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {["1inch", "CowSwap", "Matcha"].map((dex, index) => (
              <TableRow
                key={index}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#333",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{ display: "flex", alignItems: "center", color: "grey" }}
                >
                  <Avatar
                    sx={{ bgcolor: "#ec4612", mr: 2 }}
                    alt={dex}
                    src={`/logos/${dex.toLowerCase()}.png`}
                  />
                  {dex}
                </TableCell>
                <TableCell sx={{ color: "grey" }}>-</TableCell>
                <TableCell sx={{ color: "grey" }}>-</TableCell>
                <TableCell sx={{ color: "grey" }}>-</TableCell>
                <TableCell sx={{ color: "grey" }}>-</TableCell>
                <TableCell sx={{ color: "grey" }}>-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
