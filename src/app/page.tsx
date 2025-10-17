import AccountTypes from "@/sections/AccountTypes";
import CallToAction from "@/sections/CallToAction";
import { CardScrollSection } from "@/sections/CardScroll";
import Feature from "@/sections/Feature";
import Features from "@/sections/Features";
import { StepsSection } from "@/sections/GetStarted";
// import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import PaymentMethods from "@/sections/PaymentMethods";
import Testimonial from "@/sections/Testimonial";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.assexmarkets.com",
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Feature />
      <CardScrollSection />
      <AccountTypes />
      <StepsSection />
      <PaymentMethods />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
