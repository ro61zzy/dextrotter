"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <Box sx={{ position: "fixed", width: "100%", top: 0, zIndex: 10 }}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{
          //   background: "linear-gradient(45deg, #ec4612, #ff6f00)",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: "10px 1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "70%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "2rem",
                // pl: "1rem",
                background: "linear-gradient(45deg, #ec4612, #ff6f00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DexTrotter
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NavButton label="Swap" icon={<SwapHorizIcon />} path="/"  />
              <NavButton label="Lending" icon={<AccountBalanceIcon />} path="/lending"  />
              <NavButton label="Liquidity" icon={<WaterDropIcon />} path="/liquidity" />
              <NavButton label="Flash Loans" icon={<FlashOnIcon />} path="/flash_loans"  />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "30%",
            }}
          >
            <ConnectButton />
          </Box>
        </Box>
      </motion.nav>
    </Box>
  );
};

export default Navbar;
