import PlanComparisonCard from "@/components/pageComponents/PlanComparisonCard";
import React from "react";

const LeveragePlusComparison = () => {
  return (
    <section>
      <PlanComparisonCard
        planNames={["Leverage Plus", ""]}
        parameters={[
          "Minimum Deposit",
          "Spread",
          "Commission",
          "Maximum Leverage",
          "Instruments",
          "Minimum Lot Size",
          "Maximum Lot Size",
          "Maximum number of positions",
          "Hedged margin",
        ]}
       planValues={[
  {
    "Minimum Deposit": "$10",
    Spread: "From 0.10 pips",
    Commission: "None",
    "Maximum Leverage": "Unlimited",
    Instruments:
      "Forex, metals, cryptocurrencies, energies and indices",
    "Minimum Lot Size": "0.01",
    "Maximum Lot Size": "100",
    "Maximum number of positions": "200",
    "Hedged margin": "50%",
  },
  {},
]}
        ]}
      />
    </section>
  );
};

export default LeveragePlusComparison;
