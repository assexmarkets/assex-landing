"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ServerErrorPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 text-center bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-72 h-72 md:w-96 md:h-96 mb-8"
      >
        <Image
          src="/icons/server-down.svg"
          alt="Server down illustration"
          layout="fill"
          objectFit="contain"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-secondary text-2xl md:text-3xl font-bold text-[#1F0d3f] mb-4"
      >
        Internal Server Error
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm md:text-base mb-6 max-w-md text-gray-600"
      >
        Something went wrong on our end. We’re working to fix it.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Link href="/" passHref>
          <span className="font-secondary inline-block px-6 py-3 bg-[#00CCB1] text-white rounded-md shadow hover:bg-[#00B2A1] transition duration-300 cursor-pointer">
            Return Home
          </span>
        </Link>
      </motion.div>
    </main>
  );
};

export default ServerErrorPage;
