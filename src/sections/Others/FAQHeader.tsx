"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type FAQHeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const FAQHeader = ({ searchTerm, setSearchTerm }: FAQHeaderProps) => {
  return (
    <section className="bg-[rgba(0,204,177,0.02)] px-6 sm:px-10 md:px-12 lg:px-20 pt-12 lg:pt-24">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-12 max-w-7xl">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:max-w-[747px] text-center lg:text-left"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-secondary font-bold text-[#1F0d3f] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6 max-w-[709px] mx-auto text-[#3F4550]">
            Find answers to the most common questions about our platform,
            features, account setup, and more. Use the search below to quickly
            locate what you’re looking for.
          </p>

          <div className="mt-6 max-w-[709px] mx-auto w-full">
            <input
              type="text"
              placeholder="Search for anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00ccb1] focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-xl flex justify-center mt-10 lg:mt-0"
        >
          <Image
            src="/images/question.png"
            alt="Question"
            width={280}
            height={202}
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQHeader;
