"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  Package,
  Shield,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Enhanced Badge Component
const Badge = ({ text }: { text: string }) => (
  <motion.div
    className="relative inline-flex items-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 rounded-full blur opacity-30 animate-pulse"></div>
    <div className="relative inline-flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
      <Sparkles className="w-4 h-4 mr-2 text-emerald-600" />
      {text}
      <div className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
      </div>
    </div>
  </motion.div>
);

// Enhanced StepCard Component
const TournamentStepCard = ({
  stepNumber,
  title,
  description,
  icon: Icon,
  index,
  isLast,
}: {
  stepNumber: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  index: number;
  isLast: boolean;
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
        delay: index * 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: "easeOut",
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.1,
      },
    },
  };

  return (
    <motion.div variants={cardVariants} className="relative group">
      {/* Connection Line */}
      {!isLast && (
        <motion.div
          className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 w-12 xl:w-16 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 z-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
        >
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-4 h-4 text-emerald-500" />
          </motion.div>
        </motion.div>
      )}

      {/* Main Card */}
      <div className="relative bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group-hover:border-emerald-200 overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating Background Elements */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

        <div className="relative z-10">
          {/* Step Number */}
          <motion.div
            variants={numberVariants}
            className="flex items-center justify-between mb-6"
          >
            <div className="text-6xl font-black text-gray-100 group-hover:text-emerald-100 transition-colors duration-300">
              {stepNumber}
            </div>
            <motion.div
              variants={iconVariants}
              className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          >
            <h3 className="text-xl font-bold font-secondary text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </motion.div>

          {/* Hover Effect Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const HowTournamentWorks = () => {
  const tournamentSteps = [
    {
      step: "01",
      title: "Open Account",
      description:
        "Set up your tournament account in minutes with our streamlined registration process.",
      icon: UserPlus,
    },
    {
      step: "02",
      title: "Choose Package",
      description:
        "Select a suitable package with the winning prize that matches your trading goals.",
      icon: Package,
    },
    {
      step: "03",
      title: "Secure Tournament",
      description:
        "After choosing, pay and secure your spot to enable you to compete with confidence.",
      icon: Shield,
    },
    {
      step: "04",
      title: "Top the Leaderboard",
      description:
        "Trade your style, climb to the top of the leaderboard and claim your prize.",
      icon: Trophy,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge text="How it works" />

          <motion.h2
            variants={titleVariants}
            className="text-3xl sm:text-4xl font-secondary font-bold text-gray-900 mt-8 mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Start competing with
            </span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "linear-gradient(90deg, #059669, #0d9488, #10b981, #059669)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              no trading rules
            </motion.span>
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="text-lg font-secondary text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Kickstart your forex trading competition journey with our easy,
            straightforward steps designed for success.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {tournamentSteps.map((step, index) => (
            <TournamentStepCard
              key={index}
              stepNumber={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
              isLast={index === tournamentSteps.length - 1}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium font-secondary shadow-lg">
            <Trophy className="w-5 h-5 mr-2 text-emerald-600" />
            Ready to start your trading competition journey?
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowTournamentWorks;
