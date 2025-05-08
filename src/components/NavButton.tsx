'use client'

import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

interface NavButtonProps {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const NavButton: React.FC<NavButtonProps> = ({ label, icon, path }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ margin: "0 1rem" }}
    >
      <Button
        onClick={() => router.push(path)}
        startIcon={icon}
        sx={{
          color: "#ec4612",
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          fontSize: { xs: "10px", md: "10px", lg:"12px" }, // Adjust font size
          width: { xs: "100px",  md:"120px", lg:"140px" }, // Adjust button width for small screens
          height: "40px",
          fontWeight: 600,
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#fff7f4",
          },
        }}
      >
        {label}
      </Button>
    </motion.div>
  );
};

export default NavButton;
