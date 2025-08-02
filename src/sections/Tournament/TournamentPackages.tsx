"use client";
import Button from "@/components/Button";
import React from "react";

const TournamentPackages = () => {
  const packages = [
    // {
    //   name: "Basic",
    //   price: 50,
    //   accountSize: "50,000",
    //   prize: "5,000",
    //   popular: false,
    //   features: [
    //     "$50,000 account size",
    //     "$5,000 Prize",
    //     "Weekend Trading allowed",
    //     "No rules",
    //   ],
    // },
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
    // {
    //   name: "Premium",
    //   price: 200,
    //   accountSize: "200,000",
    //   prize: "20,000",
    //   popular: false,
    //   features: [
    //     "$200,000 account size",
    //     "$20,000 Prize",
    //     "Weekend Trading allowed",
    //     "No rules",
    //   ],
    // },
  ];

  // Dynamic grid classes based on number of packages
  const getGridClasses = () => {
    const count = packages.length;
    if (count === 1) return "grid grid-cols-1 gap-8 lg:gap-12 max-w-md mx-auto";
    if (count === 2)
      return "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto";
    return "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12";
  };

  return (
    <section className="py-16 px-4 relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/15 to-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-300/10 to-cyan-300/10 rounded-full blur-2xl"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
        <div
          className="absolute top-32 right-32 w-3 h-3 bg-teal-400/30 rotate-45 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-indigo-400/35 rotate-12 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-secondary font-medium mb-6">
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
        <div className={getGridClasses()}>
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
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 ${
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
