import MetalsPage from "@/components/pageComponents/Metals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metals Trading | Assex Markets",
  description:
    "Trade precious metals like gold and silver with Assex Markets. Diversify your portfolio and hedge risks with our powerful trading tools.",
  alternates: {
    canonical: "https://www.assexmarkets.com/metals",
  },
};

export default function MetalsPageRoute() {
  return <MetalsPage />;
}
