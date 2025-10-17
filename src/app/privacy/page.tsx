import PrivacyPolicy from "@/components/pageComponents/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Assex Markets",
  description:
    "Read Assex Markets' privacy policy to understand how we protect your personal information and ensure data security.",
  alternates: {
    canonical: "https://www.assexmarkets.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
