import TermsAndConditions from "@/components/pageComponents/TermsAndConditions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Assex Markets",
  description:
    "Terms and Conditions for AssexMarkets. By using our services, you agree to these terms and conditions.",
  alternates: {
    canonical: "https://www.assexmarkets.com/terms-and-conditions",
  },
};

export default function TermsPage() {
  return <TermsAndConditions />;
}
