"use client";

import { useState, useEffect } from "react";
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
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TokenSelector from "@/components/TokenSelector";
import Navbar from "@/components/Navbar";

interface Token {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  logoURI: string;
}

interface SwapData {
  aggregator: string;
  output: string;
  slippage: string;
  gas: string;
  time: string;
  mev: string;
}



export default function Page() {
  const { isConnected, address } = useAccount();
  const [fromToken, setFromToken] = useState<Token | null>(null);
  const [toToken, setToToken] = useState<Token | null>(null);
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const [swapData, setSwapData] = useState<SwapData[]>([]);



  const [swapRate, setSwapRate] = useState<number | null>(null);

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

  useEffect(() => {
    const fetchRate = async () => {
      if (!fromToken || !toToken || !amount) {
        setConvertedAmount(null);
        return;
      }
  
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${fromToken.address},${toToken.address}&vs_currencies=usd`
        );
        const data = await res.json();
  
        const fromUSD = data[fromToken.address]?.usd;
        const toUSD = data[toToken.address]?.usd;
  
        if (fromUSD && toUSD) {
          const rate = fromUSD / toUSD;
          const outputAmount = (parseFloat(amount) * rate).toFixed(6);
          setConvertedAmount(outputAmount);
        } else {
          setConvertedAmount("0");
        }
      } catch (error) {
        console.error("Failed to fetch rate:", error);
        setConvertedAmount(null);
      }
    };
  
    fetchRate();
  }, [fromToken, toToken, amount]);
  

  const handleCheckSwaps = async () => {
    if (!fromToken || !toToken || !amount) return;
  
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${fromToken.address},${toToken.address}&vs_currencies=usd`
    );
    const data = await res.json();
  
    const fromUSD = data[fromToken.address]?.usd;
    const toUSD = data[toToken.address]?.usd;
    const rate = fromUSD / toUSD;
    const estOutput = parseFloat(amount) * rate;
  
    // Mock data following the SwapData structure
    setSwapData([
      {
        aggregator: "1inch",
        output: (estOutput * 0.99).toFixed(4), // simulate slippage
        slippage: "1%",
        gas: "$5",
        time: "12s",
        mev: "Yes",
      },
      {
        aggregator: "CowSwap",
        output: (estOutput * 0.985).toFixed(4),
        slippage: "1.5%",
        gas: "$4",
        time: "20s",
        mev: "Yes",
      },
      {
        aggregator: "Matcha",
        output: estOutput.toFixed(4),
        slippage: "0.5%",
        gas: "$6",
        time: "10s",
        mev: "No",
      },
    ]);
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
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          pt: "5rem",
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
            <TokenSelector
              label="From Token"
              value={fromToken}
              onChange={setFromToken}
            />
            <TokenSelector
              label="To Token"
              value={toToken}
              onChange={setToToken}
            />
            <TextField
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={handleCheckSwaps}
            >
             Check Swaps

            </Button>
            {convertedAmount && (
              <Typography sx={{ color: "#fff", textAlign: "center", mt: 2 }}>
                You will get approximately{" "}
                <strong>
                  {convertedAmount} {toToken?.symbol}
                </strong>
              </Typography>
            )}
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
          {swapData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.aggregator}</TableCell>
                <TableCell>{data.output}</TableCell>
                <TableCell>{data.slippage}</TableCell>
                <TableCell>{data.gas}</TableCell>
                <TableCell>{data.time}</TableCell>
                <TableCell>{data.mev}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
