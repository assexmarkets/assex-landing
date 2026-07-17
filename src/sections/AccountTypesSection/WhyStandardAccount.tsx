import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import { TrendIcon } from "../../../public/icons/svgs";

const WhyStandardAccount = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Badge text="Features" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Why Choose the Standard Account?
        </h1>
        <div className="mt-10 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center w-full">
        <BenefitCard
  icon={<TrendIcon />}
  title="No Commissions"
  description="Commission-free trading, with all costs built into the spread for full transparency."
/>
<BenefitCard
  icon={<TrendIcon />}
  title="Competitive Spreads"
  description="Trade from just 0.15 pips — tight, transparent pricing with nothing added on top."
/>
<BenefitCard
  icon={<TrendIcon />}
  title="User-Friendly Setup"
  description="Built for an easy start — open an account in minutes and begin trading right away."
/>
        </div>
      </div>
    </section>
  );
};

export default WhyStandardAccount;
