import TradingContestPage from "@/components/pageComponents/TradingContestPage";

export const metadata = {
  title: "Trading Contest | Assex Markets",
  description:
    "Participate in Assex Markets’ trading contests. Test your skills, compete with traders, and win big rewards.",
  alternates: {
    canonical: "https://www.assexmarkets.com/trading-contest",
  },
};

const StandardTradingAccountPage = () => {
  return <TradingContestPage />;
};

export default StandardTradingAccountPage;
