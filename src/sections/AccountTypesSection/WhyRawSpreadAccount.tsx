import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import { TrendIcon } from "../../../public/icons/svgs";

const WhyRawSpreadAccount = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Features" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Why Choose the Raw Spread Account?
        </h1>
        <div className="mt-10 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center w-full">
         <BenefitCard
  icon={<TrendIcon />}
  title="Low, Transparent Commission"
  description="Pay a low fixed $2.50 per lot — no hidden fees, no surprises."
/>
<BenefitCard
  icon={<TrendIcon />}
  title="Fast Execution"
  description="Trade with minimal slippage and market-leading speed on MetaTrader 5."
/>
<BenefitCard
  icon={<TrendIcon />}
  title="Spreads from 0.0 Pips"
  description="Get the rawest pricing straight from our liquidity providers, with zero markup."
/>
        </div>
      </div>
    </section>
  );
};

export default WhyRawSpreadAccount;
