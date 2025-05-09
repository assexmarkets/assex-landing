"use client";

import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 text-center">
      {/* Animated Spinner */}
      <motion.div
        className="mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      >
        <LoaderCircle className="w-16 h-16 text-[#0dae94]" />
      </motion.div>

      {/* Loading Text */}
      <motion.h1
        className="font-secondary text-lg md:text-xl font-semibold text-[#1F0d3f]"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading, please wait...
      </motion.h1>
    </div>
  );
};

export default LoadingPage;
