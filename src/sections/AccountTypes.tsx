"use client";
import Badge from "@/components/Badge";
import React from "react";
import {
  StandardIcon,
  ProIcon,
  GiftIcon,
  RawSpreadIcon,
} from "../../public/icons/AccountTypesIcons";
import { motion } from "framer-motion";
import { PlanCard } from "@/components/PlanCard";
import { CustomButton } from "@/components/ui/moving-border";
// import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AccountTypes = () => {
  // const router = useRouter();
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={0}
        >
          <Badge text="Account Types" />
          <h2 className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px] font-bold text-[#1f0e3f]">
            Simple and Trustworthy
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8">
            Choose the Right Account for Your Trading Style.
            <br /> From beginner-friendly options to pro-level execution, we
            offer accounts tailored to every level of trader.
          </p>
        </motion.div>

        {/* Plan Cards */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-3 gap-y-12 gap-8 mt-10 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              variants={containerVariants}
            >
              {index === 0 && (
                <PlanCard
                  title="Standard"
                  description="Straightforward account with great leverage and zero swaps"
                  icon={<StandardIcon />}
                  benefits={[
                    "Spread: 0",
                    "Minimum Deposit: $1",
                    "Leverage: 1:200",
                    "Swap: 0",
                    "Minimum Trade: 0.01 lot",
                  ]}
                />
              )}
              {index === 1 && (
                <PlanCard
                  title="Leverage Plus"
                  description="Enjoy zero spreads and unlimited leverage with a minimum deposit of just $1"
                  icon={<ProIcon />}
                  isPro
                  benefits={[
                    "Spread: 0",
                    "Minimum Deposit: $1",
                    "Leverage: Unlimited",
                    "Swap: 0",
                    "Minimum Trade: 0.01 lot",
                  ]}
                />
              )}
              {index === 2 && (
                <PlanCard
                  title="Raw Spread"
                  description="Best-in-class leverage and raw spreads for high-volume traders"
                  icon={<RawSpreadIcon />}
                  benefits={[
                    "Spread: 0",
                    "Minimum Deposit: $1",
                    "Leverage: 1:500",
                    "Swap: 0",
                    "Minimum Trade: 0.01 lot",
                  ]}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Demo Section */}
        <motion.div
          className="max-w-lg mx-auto mt-11"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={4}
        >
          <p className="text-base sm:text-lg leading-relaxed sm:leading-7 text-center">
            Not ready to register yet? Try the free demo. Same features, same
            flexibility. It also includes full preview.
          </p>
          <div className="mt-6 sm:mt-10 flex justify-center">
            <CustomButton
              // onClick={() => {
              //   router.push("/demo-account-trading");
              // }}
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

export default AccountTypes;
