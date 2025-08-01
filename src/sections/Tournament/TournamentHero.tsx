"use client";
import React from "react";
import { motion } from "framer-motion";
import { Medal } from "lucide-react";
import Button from "@/components/Button";

export const TournamentHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const confettiVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const chartVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        duration: 2,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-emerald-50/30 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              {/* Animated Badge */}
              <motion.div
                className="relative inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 font-semibold rounded-full text-sm border border-emerald-200/50 shadow-lg"
                whileHover={{ scale: 1.05 }}
                animate={pulseAnimation}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span>
                  Compete with virtual money and{" "}
                  <span className="text-emerald-600 font-bold">
                    win a prize!
                  </span>
                </span>
              </motion.div>

              {/* Animated Title */}
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-secondary font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, #111827, #059669, #0d9488, #111827)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Top the Leaderboard,
                </motion.span>
                <br />
                <motion.span
                  className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  remain consistent and win
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg leading-relaxed font-secondary"
                variants={itemVariants}
              >
                Showcase your trading skills and secure a top ranking!
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <Button
                text="Start Competing"
                icon={<Medal />}
                variant="primary"
                size="lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="lg:pl-8 flex justify-center"
            variants={itemVariants}
          >
            <motion.div className="relative" animate={floatingAnimation}>
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto max-w-md drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Animated Background Circle */}
                <motion.circle
                  cx="200"
                  cy="150"
                  r="120"
                  fill="url(#bgGradient)"
                  stroke="#0d9488"
                  strokeWidth="2"
                  opacity="0.3"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient
                    id="bgGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ecfdf5", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#f0fdfa", stopOpacity: 1 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="trophyGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#fbbf24", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="podiumGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#10b981", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#059669", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>

                {/* Trophy base with animation */}
                <motion.rect
                  x="170"
                  y="200"
                  width="60"
                  height="40"
                  fill="url(#trophyGradient)"
                  rx="5"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.rect
                  x="160"
                  y="240"
                  width="80"
                  height="20"
                  fill="#f59e0b"
                  rx="10"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                {/* Trophy cup with shine effect */}
                <motion.path
                  d="M150 120 L250 120 L240 200 L160 200 Z"
                  fill="url(#trophyGradient)"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))",
                      "drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))",
                      "drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.ellipse
                  cx="200"
                  cy="120"
                  rx="50"
                  ry="15"
                  fill="#f59e0b"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Trophy handles */}
                <ellipse
                  cx="140"
                  cy="140"
                  rx="15"
                  ry="25"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="8"
                />
                <ellipse
                  cx="260"
                  cy="140"
                  rx="15"
                  ry="25"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="8"
                />

                {/* Animated Winner podium */}
                <motion.rect
                  x="120"
                  y="220"
                  width="40"
                  height="60"
                  fill="#e5e7eb"
                  rx="5"
                  animate={{ y: [220, 215, 220] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.rect
                  x="180"
                  y="200"
                  width="40"
                  height="80"
                  fill="url(#podiumGradient)"
                  rx="5"
                  animate={{
                    y: [200, 195, 200],
                    filter: [
                      "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))",
                      "drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))",
                      "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.rect
                  x="240"
                  y="230"
                  width="40"
                  height="50"
                  fill="#f3f4f6"
                  rx="5"
                  animate={{ y: [230, 225, 230] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />

                {/* Position numbers */}
                <text
                  x="140"
                  y="200"
                  textAnchor="middle"
                  className="fill-gray-600 font-bold text-lg"
                >
                  2
                </text>
                <text
                  x="200"
                  y="180"
                  textAnchor="middle"
                  className="fill-white font-bold text-lg"
                >
                  1
                </text>
                <text
                  x="260"
                  y="210"
                  textAnchor="middle"
                  className="fill-gray-600 font-bold text-lg"
                >
                  3
                </text>

                {/* Animated Confetti */}
                {[
                  { cx: 100, cy: 80, fill: "#10b981", delay: 0 },
                  { cx: 300, cy: 70, fill: "#fbbf24", delay: 0.1 },
                  { cx: 320, cy: 100, fill: "#10b981", delay: 0.2 },
                  { cx: 80, cy: 110, fill: "#fbbf24", delay: 0.3 },
                ].map((item, i) => (
                  <motion.circle
                    key={i}
                    cx={item.cx}
                    cy={item.cy}
                    r="3"
                    fill={item.fill}
                    variants={confettiVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  />
                ))}

                {/* Animated squares */}
                <motion.rect
                  x="90"
                  y="60"
                  width="6"
                  height="6"
                  fill="#f59e0b"
                  transform="rotate(45 93 63)"
                  animate={{ rotate: [45, 135, 225, 315, 45] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.rect
                  x="310"
                  y="80"
                  width="6"
                  height="6"
                  fill="#10b981"
                  transform="rotate(45 313 83)"
                  animate={{ rotate: [45, 135, 225, 315, 45] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                  }}
                />

                {/* Animated Trading charts */}
                <motion.path
                  d="M50 250 L80 240 L110 260 L140 230"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  variants={chartVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M260 250 L290 235 L320 255 L350 225"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  variants={chartVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
