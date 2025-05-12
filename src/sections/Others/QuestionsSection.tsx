"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSection = {
  section: string;
  items: FAQItem[];
};

type FAQContentProps = {
  data: FAQSection[];
};

const FAQSection = ({ data }: FAQContentProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="px-6 md:px-8 my-20 lg:my-30">
      <div className="max-w-6xl mx-auto">
        {data.map((section, sectionIndex) => (
          <div key={section.section} className="mb-10">
            <h3 className="font-secondary text-base sm:text-lg md:text-2xl font-bold text-[#1F0d3f] mb-6">
              {section.section}
            </h3>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => {
                const id = `${sectionIndex}-${itemIndex}`;
                const isOpen = openIndex === id;

                return (
                  <div
                    key={id}
                    className="border border-[#1F0d3f]/10 rounded-lg shadow-sm"
                  >
                    <button
                      onClick={() => toggle(id)}
                      className="font-secondary w-full text-left px-5 py-4 text-[#1F0d3f] font-medium text-base sm:text-lg flex justify-between items-center"
                    >
                      {item.question}
                      <span className="ml-4 ">{isOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden px-5 pb-4 text-sm sm:text-base whitespace-pre-line tracking-wide"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="font-secondary text-center text-sm md:text-base text-[#1F0d3f] mt-6">
        For additional questions not covered here, please contact our{" "}
        <span className="font-semibold">customer support team</span> who will be
        happy to assist you.
      </p>
    </section>
  );
};

export default FAQSection;
