"use client";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export const WhyChooseTournament = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Excellent customer service",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Trade tracking",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Real time leaderboard ranking",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Fast payout upon winning",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-lime-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left side - Enhanced Visual */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute top-10 left-10 w-4 h-4 bg-lime-400 rounded-full opacity-60 animate-bounce"></div>
                <div
                  className="absolute top-20 right-16 w-3 h-3 bg-emerald-400 rounded-full opacity-40 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-16 left-6 w-5 h-5 bg-cyan-400 rounded-full opacity-50 animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-10 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              <svg
                viewBox="0 0 400 350"
                className="w-full h-auto max-w-lg drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="mainBg"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#0dae94" stopOpacity="0.15" />
                    <stop
                      offset="100%"
                      stopColor="#0dae94"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                  <linearGradient
                    id="screenBg"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#111827" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Enhanced background circle with gradient */}
                <circle
                  cx="200"
                  cy="175"
                  r="160"
                  fill="url(#mainBg)"
                  className="animate-pulse"
                />

                {/* Outer glow ring */}
                <circle
                  cx="200"
                  cy="175"
                  r="170"
                  fill="none"
                  stroke="#0dae94"
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-ping"
                />

                {/* Trading platform screen with enhanced styling */}
                <rect
                  x="120"
                  y="90"
                  width="160"
                  height="100"
                  fill="url(#screenBg)"
                  rx="16"
                  className="drop-shadow-lg"
                />
                <rect
                  x="125"
                  y="95"
                  width="150"
                  height="90"
                  fill="#0f172a"
                  rx="12"
                />

                {/* Enhanced screen content */}
                <path
                  d="M135 125 L155 140 L175 120 L195 135 L215 110 L235 125 L255 105"
                  stroke="#0dae94"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
                <path
                  d="M135 150 L155 145 L175 160 L195 140 L215 155 L235 145 L255 165"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />

                {/* Enhanced service icons */}
                <g className="animate-pulse">
                  {/* Customer service - top left */}
                  <circle
                    cx="80"
                    cy="60"
                    r="28"
                    fill="#0dae94"
                    opacity="0.9"
                    className="drop-shadow-lg"
                  />
                  <circle
                    cx="80"
                    cy="60"
                    r="32"
                    fill="none"
                    stroke="#0dae94"
                    strokeWidth="2"
                    opacity="0.3"
                    className="animate-ping"
                  />
                  <path
                    d="M68 55 Q68 48 75 48 L85 48 Q92 48 92 55 L92 65 Q92 72 85 72 L75 72 Q68 72 68 65 Z"
                    fill="white"
                  />
                  <circle cx="80" cy="57" r="5" fill="#0dae94" />
                  <path
                    d="M71 67 Q80 74 89 67"
                    stroke="#0dae94"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Other service icons with similar enhancements */}
                  <circle
                    cx="320"
                    cy="60"
                    r="28"
                    fill="#0dae94"
                    opacity="0.9"
                  />
                  <circle
                    cx="80"
                    cy="290"
                    r="28"
                    fill="#0dae94"
                    opacity="0.9"
                  />
                  <circle
                    cx="320"
                    cy="290"
                    r="28"
                    fill="#0dae94"
                    opacity="0.9"
                  />
                </g>

                {/* Enhanced trophy with glow effect */}
                <g filter="url(#glow)">
                  <path
                    d="M185 195 L215 195 L213 220 L187 220 Z"
                    fill="#fbbf24"
                  />
                  <rect
                    x="180"
                    y="220"
                    width="40"
                    height="10"
                    fill="#f59e0b"
                    rx="5"
                  />
                  <ellipse cx="200" cy="195" rx="15" ry="6" fill="#f59e0b" />
                  <path
                    d="M175 202 Q168 202 168 208 Q168 214 175 214"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    d="M225 202 Q232 202 232 208 Q232 214 225 214"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Right side - Enhanced Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            variants={itemVariants}
          >
            {/* Enhanced Badge with pinging effect */}
            <motion.div
              className="relative inline-flex items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative inline-flex items-center bg-gradient-to-r from-lime-50 to-emerald-50 border border-lime-200 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
                <div className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                </div>
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M13.707 8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Why Choose Our Tournament
              </div>
            </motion.div>

            {/* Enhanced Title */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-secondary font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                Profit
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-lime-500 to-emerald-600 bg-clip-text text-transparent">
                Service
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                Technology
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-lime-500 to-emerald-600 bg-clip-text text-transparent">
                Stability
              </span>
              <span className=""> Traders&apos; Top Choice.</span>
            </motion.h2>

            {/* Enhanced Subtitle */}
            <motion.p
              className="text-base font-secondary leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Our Tournament isn&apos;t bound by traditional prop firm rules. No
              targets, no restrictions— just pure skill-based competition where
              the top leaderboard traders earn their rewards based on account
              balance and equity performance.
            </motion.p>

            {/* Enhanced Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group py-2 px-4 bg-white/60 backdrop-blur-sm border border-lime-400 rounded-2xl hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-100 to-lime-100 rounded-2xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-lime-200 transition-all duration-300 group-hover:rotate-3">
                      <div className="text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-secondary text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div className="pt-6" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  text="Join Tournament Now"
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  }
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://my.assexmarkets.com/auth/register",
                      "_blank"
                    )
                  }
                  className="overflow-hidden" // Optional, matches your design intent
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
