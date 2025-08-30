import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import ContactInfo from "@/sections/CompanySection/ContactInfo";
import ContactUsForm from "@/sections/ContactSection/ContactUsForm";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

export const metadata = {
  title: "Contact Us | Assex Markets",
  description:
    "Get in touch with Assex Markets. Our support team is available 24/7 to help you with your trading, account, or platform-related queries.",
};
const ContactUsPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Get in touch with us"
        subtitle="We’re here to help! Whether you have questions, need support, or want to learn more about our services, our dedicated team is ready to assist you."
      />
      <ContactUsForm />
      <ContactInfo />
      <TradingPageCTA />
    </>
  );
};

export default ContactUsPage;
