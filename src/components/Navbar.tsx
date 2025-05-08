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
            <NavButton label="Swap" icon={<SwapHorizIcon />} />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ margin: "0 1rem" }}
              >
                <Button
                  startIcon={<AccountBalanceIcon />}
                  sx={{
                    color: "#ec4612",
                    backgroundColor: "white",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    width: "140px",
                    height: "40px",
                    justifyContent: "center",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                      backgroundColor: "#fff7f4",
                    },
                  }}
                >
                  Lending
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ margin: "0 1rem" }}
              >
                <Button
                  startIcon={<WaterDropIcon />}
                  sx={{
                    color: "#ec4612",
                    backgroundColor: "white",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    fontSize:"12px",
                    width: "140px",
                    height: "40px",
                    justifyContent: "center",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                      backgroundColor: "#fff7f4",
                    },
                  }}
                >
                  Liquidity
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ margin: "0 1rem" }}
              >
                <Button
                  startIcon={<FlashOnIcon />}
                  sx={{
                    color: "#ec4612",
                    backgroundColor: "white",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    fontSize:"12px",
                    width: "140px",
                    height: "40px",
                    justifyContent: "center",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                      backgroundColor: "#fff7f4",
                    },
                  }}
                >
                  Flash Loans
                </Button>
              </motion.div>

              {/* <ConnectButton /> */}
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
