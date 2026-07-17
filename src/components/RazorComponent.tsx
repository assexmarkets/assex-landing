"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MonitorSmartphone, Rocket, TrendingUp } from "lucide-react";

export function RazorFeatureSection() {
  return (
    <section className="pt-6 pb-24 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 md:gap-8">
          <Card
            title="Razor Thin Spread"
            icon={<TrendingUp className="w-10 h-10 text-[#1f0d3f]" />}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-800"
            />
          </Card>

          <Card
            title="Lightning Fast Execution"
            icon={<Rocket className="w-10 h-10 text-[#1f0d3f]" />}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-indigo-800"
              colors={[
                [99, 102, 241],
                [139, 92, 246],
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 rounded-2xl" />
          </Card>

          <Card
            title="The Power of MT5"
            icon={<MonitorSmartphone className="w-10 h-10 text-[#1f0d3f]" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-cyan-700"
              colors={[[34, 211, 238]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

// === Card Component ===
const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-6 relative h-[20rem] bg-white rounded-2xl shadow-md"
    >
      {/* <Icon className="absolute h-5 w-5 -top-2 -left-2  " />
      <Icon className="absolute h-5 w-5 -bottom-2 -left-2 " />
      <Icon className="absolute h-5 w-5 -top-2 -right-2 " />
      <Icon className="absolute h-5 w-5 -bottom-2 -right-2 " /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <div className="mb-4 transition duration-300 flex items-center justify-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 ">
          {icon}
        </div>
        <h3 className="font-secondary text-base sm:text-lg md:text-2xl font-bold text-[#191a45] mb-6 transition duration-300 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-md leading-6 px-2 group-hover/canvas-card:text-white transition duration-300">
          {getCardText(title)}
        </p>
      </div>
    </div>
  );
};

// === Text Map ===
function getCardText(title: string) {
  switch (title) {
    case "Razor Thin Spread":
      return "Trade on some of the tightest pricing around. Raw Spread starts from 0.0 pips with a low $2.50 per-lot commission, while Standard (0.15 pip) and Leverage Plus (0.10 pip) stay fully commission-free — pick the account that matches how you trade.";
    case "Lightning Fast Execution":
      return "Deep prime liquidity and solid infrastructure fill your orders in a snap — no re-quotes, no rejections, no delays. Every account runs on the same liquidity pool.";
    case "The Power of MT5":
      return "Trade on MT5, streaming live prices straight from our prime liquidity providers. Available across Standard, Leverage Plus, and Raw Spread — on desktop, web, and mobile.";
    default:
      return "";
  }
}