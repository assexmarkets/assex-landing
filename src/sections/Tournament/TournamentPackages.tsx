// "use client";
// import Button from "@/components/Button";
// import { motion } from "framer-motion";
// import React from "react";

// // Custom Button Component
// // const Button = ({
// //   text,
// //   icon,
// //   onClick,
// //   className = "",
// //   variant = "default",
// //   size = "sm",
// //   type = "button",
// //   fullWidth = false,
// // }) => {
// //   const baseStyles =
// //     "font-secondary inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap shadow-[0_0_20px_rgba(31,14,63,0.6)] hover:shadow-[0_0_35px_rgba(31,14,63,0.9)] hover:scale-105 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0dae94]";

// //   const variantStyles = {
// //     primary: "bg-[#0dae94] text-white hover:bg-[#0ca88d]",
// //     outlinedDark:
// //       "bg-white text-[#2D3139] border border-[#676d79] hover:border-[#2D3139]",
// //     ghost:
// //       "bg-transparent text-[#0dae94] border border-[#0dae94] hover:bg-white hover:text-[#0dae94]",
// //     default: "bg-white text-[#0dae94] hover:bg-[#e6f7f4]",
// //   };

// //   const sizeStyles = {
// //     sm: "px-5 py-2.5 text-sm min-w-[256px] h-[42px]",
// //     md: "px-6 py-3 text-base min-w-[288px] h-[48px]",
// //     lg: "px-7 py-3.5 text-lg min-w-[352px] h-[56px]",
// //   };

// //   return (
// //     <button
// //       type={type}
// //       onClick={onClick}
// //       className={clsx(
// //         baseStyles,
// //         variantStyles[variant],
// //         sizeStyles[size],
// //         fullWidth && "w-full",
// //         className
// //       )}
// //     >
// //       {icon && <span className="text-lg">{icon}</span>}
// //       <span>{text}</span>
// //     </button>
// //   );
// // };

// export const TournamentPackages = () => {
//   const packages = [
//     {
//       name: "Basic",
//       price: 50,
//       accountSize: "50,000",
//       prize: "5,000",
//       popular: false,
//       gradient: "from-blue-500 to-indigo-600",
//       glowColor: "blue",
//       features: [
//         "$50,000 account size",
//         "$5,000 Prize",
//         "Weekend Trading allowed",
//         "No rules",
//       ],
//     },
//     {
//       name: "Pro",
//       price: 100,
//       accountSize: "100,000",
//       prize: "10,000",
//       popular: true,
//       gradient: "from-emerald-500 to-lime-500",
//       glowColor: "emerald",
//       features: [
//         "$100,000 account size",
//         "$10,000 Prize",
//         "Weekend Trading allowed",
//         "No rules",
//       ],
//     },
//     {
//       name: "Premium",
//       price: 200,
//       accountSize: "200,000",
//       prize: "20,000",
//       popular: false,
//       gradient: "from-purple-500 to-pink-600",
//       glowColor: "purple",
//       features: [
//         "$200,000 account size",
//         "$20,000 Prize",
//         "Weekend Trading allowed",
//         "No rules",
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.25, 0, 1],
//       },
//     },
//   };

//   const badgeVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden section-padding">
//       {/* Enhanced Background Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-emerald-400/20 to-lime-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>

//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 2}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-16 sm:mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//         >
//           {/* Enhanced Badge */}
//           <motion.div
//             className="relative inline-flex items-center mb-6"
//             variants={badgeVariants}
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400 rounded-full blur opacity-30 animate-pulse"></div>
//             <div className="relative inline-flex items-center bg-gradient-to-r from-emerald-50 to-lime-50 border border-emerald-200/50 text-emerald-700 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
//               <div className="absolute -top-1 -right-1 flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-lime-400 to-emerald-400"></span>
//               </div>
//               <svg
//                 className="w-4 h-4 mr-2 text-emerald-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
//                 />
//               </svg>
//               Tournament Packages
//             </div>
//           </motion.div>

//           {/* Enhanced Title */}
//           <motion.h2
//             className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 font-secondary px-4"
//             variants={cardVariants}
//           >
//             <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
//               Pick any package of your choice
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
//               to participate in our trading competition
//             </span>
//           </motion.h2>
//         </motion.div>

//         {/* Packages Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {packages.map((pkg, index) => (
//             <motion.div
//               key={index}
//               className={`relative group ${
//                 pkg.popular ? "xl:-mt-8 xl:mb-8" : ""
//               } ${
//                 index === 1 && packages.length === 3
//                   ? "md:col-span-2 xl:col-span-1"
//                   : ""
//               }`}
//               variants={cardVariants}
//               whileHover={{ y: -10, scale: 1.02 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//             >
//               {/* Card Glow Effect */}
//               <div
//                 className={`absolute -inset-1 bg-gradient-to-r ${pkg.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}
//               ></div>

//               {/* Popular Badge */}
//               {pkg.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur animate-pulse"></div>
//                     <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-4 sm:px-6 py-2 rounded-full shadow-lg">
//                       🔥 Most Popular
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Main Card */}
//               <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl border border-gray-200/50 shadow-2xl backdrop-blur-sm overflow-hidden group-hover:shadow-3xl transition-all duration-500">
//                 {/* Card Header */}
//                 <div className="relative p-6 sm:p-8 pb-4 sm:pb-6">
//                   <div
//                     className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${pkg.gradient} opacity-10 rounded-bl-full`}
//                   ></div>

//                   <div className="relative z-10">
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//                       {pkg.name}
//                     </h3>
//                     <div className="flex items-baseline mb-4">
//                       <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                         ${pkg.price}
//                       </span>
//                       <span className="text-gray-600 text-base sm:text-lg ml-2 font-medium">
//                         USD
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Key Metrics */}
//                 <div className="px-6 sm:px-8 pb-4">
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
//                     <div
//                       className={`p-3 rounded-xl bg-gradient-to-br ${pkg.gradient} bg-opacity-5 border border-gray-200`}
//                     >
//                       <div className="text-xs font-semibold text-gray-600 mb-1">
//                         Account Size
//                       </div>
//                       <div
//                         className={`text-base sm:text-lg font-black bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
//                       >
//                         ${pkg.accountSize}
//                       </div>
//                     </div>
//                     <div
//                       className={`p-3 rounded-xl bg-gradient-to-br ${pkg.gradient} bg-opacity-5 border border-gray-200`}
//                     >
//                       <div className="text-xs font-semibold text-gray-600 mb-1">
//                         Prize Pool
//                       </div>
//                       <div
//                         className={`text-base sm:text-lg font-black bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
//                       >
//                         ${pkg.prize}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Features List */}
//                 <div className="px-6 sm:px-8 pb-6 sm:pb-8">
//                   <div className="space-y-3 sm:space-y-4">
//                     {pkg.features.map((feature, featureIndex) => (
//                       <motion.div
//                         key={featureIndex}
//                         className="flex items-center group/feature"
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: featureIndex * 0.1 }}
//                       >
//                         <div
//                           className={`flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover/feature:scale-110 transition-transform duration-200`}
//                         >
//                           <svg
//                             className="w-3 sm:w-4 h-3 sm:h-4 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="3"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <span className="text-sm sm:text-base text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-200">
//                           {feature}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <div className="p-6 sm:p-8 pt-0">
//                   <Button
//                     text="Sign Up Now"
//                     variant="primary"
//                     size="md"
//                     fullWidth={true}
//                     className="!rounded-2xl !shadow-xl hover:!scale-102 !transition-all !duration-300"
//                     icon={
//                       <svg
//                         className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M13 10V3L4 14h7v7l9-11h-7z"
//                         />
//                       </svg>
//                     }
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA Section */}
//         <motion.div
//           className="text-center mt-16 sm:mt-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
//             All packages include full access to our trading platform, real-time
//             analytics, and 24/7 customer support. No hidden fees, no
//             restrictions.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-500 px-4">
//             <div className="flex items-center text-sm sm:text-base">
//               <svg
//                 className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Instant Access
//             </div>
//             <div className="flex items-center text-sm sm:text-base">
//               <svg
//                 className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Secure Payments
//             </div>
//             <div className="flex items-center text-sm sm:text-base">
//               <svg
//                 className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Money Back Guarantee
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

"use client";
import Button from "@/components/Button";
import React from "react";

const TournamentPackages = () => {
  const packages = [
    {
      name: "Basic",
      price: 50,
      accountSize: "50,000",
      prize: "5,000",
      popular: false,
      features: [
        "$50,000 account size",
        "$5,000 Prize",
        "Weekend Trading allowed",
        "No rules",
      ],
    },
    {
      name: "Pro",
      price: 100,
      accountSize: "100,000",
      prize: "10,000",
      popular: true,
      features: [
        "$100,000 account size",
        "$10,000 Prize",
        "Weekend Trading allowed",
        "No rules",
      ],
    },
    {
      name: "Premium",
      price: 200,
      accountSize: "200,000",
      prize: "20,000",
      popular: false,
      features: [
        "$200,000 account size",
        "$20,000 Prize",
        "Weekend Trading allowed",
        "No rules",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            Tournament Packages
          </div>

          <h2 className="text-2xl md:text-3xl font-secondary font-bold text-gray-900 mb-4">
            Choose Your Package
          </h2>

          <p className="text-base font-secondary max-w-2xl mx-auto">
            Select the perfect package for your trading competition journey
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group ${
                pkg.popular ? "transform md:-translate-y-4" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold font-secondary px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div
                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular
                    ? "border-emerald-200 shadow-emerald-100/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Header */}
                <div className="p-8 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-secondary mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-500 text-lg ml-2">USD</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="px-8 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-sm font-medium font-secondary text-gray-600 mb-1">
                        Account Size
                      </div>
                      <div className="text-xl font-bold text-emerald-600">
                        ${pkg.accountSize}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-sm font-medium font-secondary text-gray-600 mb-1">
                        Prize Pool
                      </div>
                      <div className="text-xl font-bold text-emerald-600">
                        ${pkg.prize}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="px-8 mb-8">
                  <div className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium font-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-0">
                  <Button
                    text="Get Started"
                    variant={pkg.popular ? "primary" : "default"}
                    size="md"
                    fullWidth={true}
                  />
                  {/* <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 focus:ring-emerald-500 shadow-lg"
                        : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-lg"
                    }`}
                  >
                    Get Started
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-16 text-center">
          <p className="text-lg font-secondary mb-8">
            All packages include full platform access, real-time analytics, and
            24/7 support
          </p>

          <div className="flex flex-wrap justify-center gap-8 font-secondary">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-emerald-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Instant Access
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-emerald-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Secure Payments
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-emerald-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentPackages;
