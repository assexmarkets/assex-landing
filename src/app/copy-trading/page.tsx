import CopyTradingPage from "@/components/pageComponents/CopyTradingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copy Trading | Assex Markets",
  description:
    "Discover copy trading with Assex Markets. Follow top traders, replicate strategies automatically, and grow your portfolio effortlessly.",
  alternates: {
    canonical: "https://www.assexmarkets.com/copy-trading",
  },
};

export default function CopyTradingPageRoute() {
  return <CopyTradingPage />;
}
