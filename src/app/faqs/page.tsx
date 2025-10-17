import FAQ from "@/components/pageComponents/FAQs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Assex Markets",
  description:
    "Find answers to common questions about trading, accounts, deposits, withdrawals, and more in Assex Markets' FAQs section.",
  alternates: {
    canonical: "https://www.assexmarkets.com/faqs",
  },
};

export default function FAQPage() {
  return <FAQ />;
}
