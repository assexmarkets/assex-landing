import MetaTrader5Page from "@/components/pageComponents/MetaTrader5Page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetaTrader 5 | Assex Markets",
  description:
    "Discover MetaTrader 5, the leading platform for trading on the forex market. Open a MetaTrader 5 account and start trading with ease.",
  alternates: {
    canonical: "https://www.assexmarkets.com/metatrader5",
  },
};

export default function MT5PageRoute() {
  return <MetaTrader5Page />;
}
