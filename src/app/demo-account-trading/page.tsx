import Image from "next/image";
import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";
import { CheckListIcon, GroupIcon } from "../../../public/icons/svgs";
import ReusableBenefitsSection from "@/sections/TradingPagesSection/SimulatedBenefits";
import DemoResponsiveSection from "@/sections/TradingPagesSection/SimulatedResponsiveSection";

export const metadata = {
  title: "Demo Account Trading | Assex Markets",
  description:
    "Start trading with a free demo account at Assex Markets. Practice strategies with virtual funds in real market conditions before going live.",
};

const benefitsData = [
  {
    icon: <GroupIcon />,
    title: "Training",
    subtext: "Trade forex without risking your real money",
  },
  {
    icon: <GroupIcon />,
    title: "Test Strategy",
    subtext: "Test your strategies and EAs on a demo account before going live",
  },
  {
    icon: <GroupIcon />,
    title: "Test Environment",
    subtext:
      "Test your trading conditions like broker latency, swap rates, etc",
  },
  {
    icon: <CheckListIcon />,
    title: "Trading Platform",
    subtext:
      "Test your trading software, its functions and shortkeys before going live",
  },
];

// const accountCards = [
//   {
//     title: "Demo Account",
//     description:
//       "Perfect for beginners and strategy testing without financial risk.",
//   },
//   {
//     title: "Live Account",
//     description:
//       "Trade real markets with real money and full access to features.",
//   },
// ];

const DemoAccountTradingPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Demo"
        highlight={true}
        subtitle="The assexmarkets risk-free demo trading account offers you the benefit of sharpening your trading skills and strategies, as well as mastering Assexmarkets' unique trading tools without financial risk."
        endText="Trading Account"
      />
      <ReusableBenefitsSection
        title="Benefits of using an Assexmarkets Demo Trading Account"
        benefits={benefitsData}
        rightContent={
          <Image
            src="/images/TradingAccount.png"
            alt="Live Account Image"
            width={600}
            height={505}
            className=""
          />
        }
      />
      <DemoResponsiveSection />
      <TradingPageCTA isDemoPage />
    </>
  );
};

export default DemoAccountTradingPage;
