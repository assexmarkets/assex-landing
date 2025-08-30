import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import ContactInfo from "@/sections/CompanySection/ContactInfo";
import WhatWeOffer from "@/sections/CompanySection/WhatWeOffer";
import AboutUsSection from "@/sections/CompanySection/WhyUs";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

export const metadata = {
  title: "About AssexMarkets | Leading Online Trading Platform",
  description:
    "Learn about AssexMarkets - a trusted online broker offering forex, CFDs, commodities, and crypto trading with advanced tools, competitive spreads, and exceptional client support.",
  keywords:
    "about AssexMarkets, online broker, forex trading, CFD trading, trading platform, financial markets, MetaTrader 5, regulated broker",
  openGraph: {
    title: "About AssexMarkets | Leading Online Trading Platform",
    description:
      "Learn about AssexMarkets - a trusted online broker offering forex, CFDs, commodities, and crypto trading with advanced tools, competitive spreads, and exceptional client support.",
    url: "https://www.assexmarkets.com/about-us",
    siteName: "AssexMarkets",
    images: [
      {
        url: "https://www.assexmarkets.com/images/worldImage.png",
        width: 500,
        height: 333,
        alt: "AssexMarkets Global Trading Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AssexMarkets | Leading Online Trading Platform",
    description:
      "Learn about AssexMarkets - a trusted online broker offering forex, CFDs, commodities, and crypto trading with advanced tools, competitive spreads, and exceptional client support.",
    images: ["https://www.assexmarkets.com/images/worldImage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.assexmarkets.com/about-us",
  },
};

const AboutUsPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="About Us"
        subtitle="At AssexMarkets, we believe that financial markets should be accessible, transparent, and empowering for everyone — from first-time traders to seasoned professionals. That’s why we’ve built a platform that combines cutting-edge technology, robust tools, and client-focused support to help traders succeed in today’s fast-moving global economy."
      />
      <AboutUsSection />
      <WhatWeOffer />
      <ContactInfo />
      <TradingPageCTA />
    </>
  );
};

export default AboutUsPage;
