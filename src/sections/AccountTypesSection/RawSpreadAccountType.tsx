"use client";
import Badge from "@/components/Badge";
import React from "react";
import { CustomButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import {
  GiftIcon,
  RawSpreadIcon,
} from "../../../public/icons/AccountTypesIcons";
import { PlanCard } from "@/components/PlanCard";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const RawSpreadAccountType = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={0}
        >
          <Badge text="Raw Spread Account" />
        <h2
  className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px]
 font-bold text-[#1f0e3f]"
>
  Raw Pricing with Raw Spread
</h2>
<p className="text-sm sm:text-base md:text-lg leading-relaxed">
  Built for high-volume trading — raw spreads from 0.0 pips with a low
  commission, executed with speed and precision.
</p>
        </motion.div>

        {/* Plan Card */}
        <motion.div
          className="flex justify-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={1}
        >
            <PlanCard
      title="Raw Spread"
      description="Raw spreads from 0.0 pips with a low fixed commission — built for high-volume traders."
      icon={<RawSpreadIcon />}
      benefits={[
        "Forex, metals, energies, indices",
        "Maximum Leverage 1:500",
        "Spread from 0.0 pips",
        "Commission $2.50 per lot",
        "Minimum Deposit $100",
      ]}
    />
        </motion.div>

        {/* CTA Demo Section */}
        <motion.div
          className="max-w-[449px] mx-auto mt-11"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={2}
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center">
            Want to explore before committing? Try our free demo with full
            features and flexibility.
          </p>
          <div className="mt-4 md:mt-10 flex justify-center">
            <CustomButton
              onClick={() =>
                window.open(
                  "https://my.assexmarkets.com/auth/register",
                  "_blank",
                )
              }
              className="flex items-center gap-2 bg-[white] text-[#2D3139] rounded-[48px] font-medium border border-[#2D3139]/40"
            >
              <GiftIcon />
              Try free demo
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RawSpreadAccountType;
