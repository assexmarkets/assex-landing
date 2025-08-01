"use client";
import { useState } from "react";
import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = {
  question: string;
  answer: string;
};

type TournamentFAQsProps = {
  faqItems: FAQItem[];
};

const TournamentFAQs = ({ faqItems }: TournamentFAQsProps) => {
  const [selectedFaq, setSelectedFaq] = useState(0);

  // Split FAQs into left and right columns
  const leftColumnFAQs = faqItems.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqItems.filter((_, index) => index % 2 === 1);

  const renderFAQ = (faq: FAQItem, originalIndex: number) => (
    <motion.div
      key={originalIndex}
      layout
      className={twMerge(
        "bg-white font-secondary rounded-2xl border p-6 transition-all duration-300",
        selectedFaq === originalIndex
          ? "border-lime-500 shadow-md"
          : "border-neutral-200"
      )}
    >
      <button
        className="flex w-full items-center justify-between cursor-pointer focus:outline-none"
        onClick={() =>
          setSelectedFaq(selectedFaq === originalIndex ? -1 : originalIndex)
        }
        aria-expanded={selectedFaq === originalIndex}
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
            selectedFaq === originalIndex && "rotate-45"
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
        {selectedFaq === originalIndex && (
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
  );

  return (
    <section className="section-padding pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <Tag>Frequently Asked Questions</Tag>
          <h2 className="text-2xl md:text-3xl font-semibold font-secondary mt-6">
            Questions? We&apos;ve got{" "}
            <span className="text-lime-500">answers</span>
          </h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Everything you need to know about our tournaments, rules, prizes,
            and participation.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Desktop, Single Column - Mobile */}
          <div className="flex flex-col gap-6">
            {leftColumnFAQs.map((faq, index) => {
              const originalIndex = index * 2;
              return renderFAQ(faq, originalIndex);
            })}
          </div>

          {/* Right Column - Desktop only */}
          <div className="hidden lg:flex flex-col gap-6">
            {rightColumnFAQs.map((faq, index) => {
              const originalIndex = index * 2 + 1;
              return renderFAQ(faq, originalIndex);
            })}
          </div>

          {/* Mobile: Right column FAQs rendered in single column */}
          <div className="lg:hidden flex flex-col gap-6">
            {rightColumnFAQs.map((faq, index) => {
              const originalIndex = index * 2 + 1;
              return renderFAQ(faq, originalIndex);
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentFAQs;
