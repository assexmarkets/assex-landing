"use client";
import React, { useMemo, useState } from "react";
import FAQHeader from "@/sections/Others/FAQHeader";
import FAQSection from "@/sections/Others/QuestionsSection";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import { faqData } from "@/constants";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqData = useMemo(() => {
    if (!searchTerm.trim()) return faqData;

    const lowerSearch = searchTerm.toLowerCase();

    return faqData
      .map((section) => {
        const filteredItems = section.items.filter(
          (item) =>
            item.question.toLowerCase().includes(lowerSearch) ||
            item.answer.toLowerCase().includes(lowerSearch)
        );

        return filteredItems.length > 0
          ? { ...section, items: filteredItems }
          : undefined;
      })
      .filter((section) => section !== undefined);
  }, [searchTerm]);

  return (
    <>
      <FAQHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FAQSection data={filteredFaqData} />
      <TradingPageCTA />
    </>
  );
};

export default FAQ;
