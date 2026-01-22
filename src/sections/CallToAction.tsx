"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../public/icons/ButtonIcons";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const CallToAction = () => {
  return (
    <section className="section-padding bg-[#1DA1F2]/5 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-base sm:text-xl md:text-2xl lg:text-[32px] font-bold font-secondary text-[#1f0e3f]"
        >
          Join over 100k+ users to trade with a trusted broker today
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-base md:text-lg leading-relaxed mt-4"
        >
          Trade confidently and securely with AssexMarkets today.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-12 w-full flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            text="Create a Live Account"
            icon={<WhiteFlameButtonIcon />}
            variant="primary"
            size="sm"
            onClick={() =>
              window.open("https://my.assexmarkets.com/auth/register", "_blank")
            }
          />
          <Button
            // onClick={() => router.push("/demo-account-trading")}
            text="Try a free Demo"
            icon={<VideoButtonIcon />}
            variant="ghost"
            size="sm"
            onClick={() =>
              window.open("https://my.assexmarkets.com/auth/register", "_blank")
            }
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
