"use client";

import { useState } from "react";
import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQsProps = {
  faqItems: FAQItem[];
};

const FAQs = ({ faqItems }: FAQsProps) => {
  const [selectedFaq, setSelectedFaq] = useState(0);

  return (
    <section className="section-padding pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Heading */}
        <div className="md:w-1/2">
          <Tag>FAQs</Tag>
          <h2 className="text-4xl md:text-5xl font-semibold mt-6">
            Questions? We&apos;ve got{" "}
            <span className="text-lime-500">answers</span>
          </h2>
          <p className="text-neutral-600 mt-4 max-w-md">
            Everything you need to know about trading crypto, wallets, safety,
            and more.
          </p>
        </div>

        {/* Right: FAQ List */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className={twMerge(
                "bg-white font-secondary rounded-2xl border p-6 transition-all duration-300",
                selectedFaq === index
                  ? "border-lime-500 shadow-md"
                  : "border-neutral-200"
              )}
            >
              <button
                className="flex w-full items-center justify-between cursor-pointer focus:outline-none"
                onClick={() =>
                  setSelectedFaq(selectedFaq === index ? -1 : index)
                }
                aria-expanded={selectedFaq === index}
              >
                <h3 className="font-medium text-left">{faq.question}</h3>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={twMerge(
                    "text-lime-400 flex-shrink-0 transition-transform duration-300",
                    selectedFaq === index && "rotate-45"
                  )}
                >
                  <path
                    d="M8 1.35742V15.3574M1 8.35742H15"
                    stroke="#191A15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {selectedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-neutral-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
