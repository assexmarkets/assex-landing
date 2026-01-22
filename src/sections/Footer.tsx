import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DribbleIcon,
  LinkedInIcon,
  XIcon,
} from "../../public/icons/SocialIcons";

const footerLinks = [
  {
    title: "Accounts",
    links: [
      { name: "Live Trading Accounts", href: "/live-account-trading" },
      {
        name: "Demo Trading Accounts",
        href: "/demo-account-trading",
      },
      { name: "Copy Trading", href: "/copy-trading" },
      { name: "Trading Contest", href: "/trading-contest" },
      { name: "Tournament", href: "/tournament" },
      { name: "Percentage Allocation Asset Management (PAMM)", href: "/paam" },
    ],
  },
  {
    title: "Conditions",
    links: [
      { name: "Deposit & Withdrawals", href: "/deposit-withdrawals" },
      { name: "Fees", href: "/fees" },
      { name: "Client Protection", href: "/client-protection" },
    ],
  },
  {
    title: "Markets",
    links: [
      { name: "Forex CFD", href: "/forex-cfd" },
      { name: "Crypto CFD", href: "/crypto-cfd" },
      { name: "Indices", href: "/indices" },
      { name: "Metals", href: "/metals" },
      { name: "Commodities", href: "/commodities" },
    ],
  },
  {
    title: "Platform",
    links: [{ name: "Metatrader 5", href: "/metatrader5" }],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      // { name: "Why AssexMarkets?", href: "/why-assexmarkets" },
      { name: "Contact Us", href: "/contact-us" },
      // { name: "Help Center", href: "/help-center" },
    ],
  },
  {
    title: "Others",
    links: [
      { name: "Trading Calculator", href: "/trading-calculator" },
      { name: "Currency Converter", href: "/currency-converter" },
      { name: "FAQs", href: "/faqs" },
      // { name: "User Agreement", href: "/user-agreement" },
      // { name: "Imprint Risk Disclosure", href: "/risk-disclosure" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#00CCB1]/12 py-16 px-4 sm:px-6 text-sm">
      <div className="max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Assexmarkets Logo"
              width={64}
              height={38}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Link Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="min-w-[140px]">
              <h4 className="font-medium mb-4 text-[#191a45]">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="block hover:font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
                      title={link.name}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-[#00CCB1] mt-12 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 text-xs text-[#191a45] mb-8">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} AssexMarkets Ltd. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* Legal Links */}
            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
              <Link
                href="/terms-and-conditions"
                className="hover:font-semibold whitespace-nowrap"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:font-semibold whitespace-nowrap"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 items-center justify-center">
              <XIcon />
              <DribbleIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>

        {/* Regulatory Information & Disclaimer */}
        <div className="space-y-6 text-xs leading-relaxed text-[#191a45]">
          {/* Regulatory Information Card */}
          <div className="bg-white/30 rounded-lg p-4 border border-[#00CCB1]/20">
            <h5 className="font-semibold text-[#191a45] mb-2 text-sm">
              St. Lucia Registration
            </h5>
            <p>
              Assexmarkets Global Ltd is authorised by the Financial Services
              Regulatory Authority (FSRA) in St. Lucia in compliance with the
              (RATLA) IBC Act 12.14 section 10(5) with registration number
              <strong> 2024-00223</strong>. Registered office: Ground Floor, The
              Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia. P.O. Box
              838, Castries, Saint Lucia.
            </p>
          </div>

          {/* Risk Warning */}
          <div className="bg-amber-50/50 border border-amber-200/50 rounded-lg p-4">
            <p>
              <strong className="text-amber-800">Risk Warning:</strong> Trading
              Contracts for Difference (CFDs) and other leveraged products
              involves significant risk of loss and is not suitable for all
              investors. CFDs are complex instruments and come with a high risk
              of losing money rapidly due to leverage. You should carefully
              consider your investment objectives, level of experience, and risk
              appetite before deciding to trade CFDs. Do not invest more than
              you can afford to lose. Ensure you fully understand the risks
              involved and seek independent financial advice if necessary.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-red-50/50 border border-red-200/50 rounded-lg p-4">
            <p>
              <strong className="text-red-800">Disclaimer:</strong> Assexmarkets
              Global Ltd does not offer services to US, Pakistan, Iraq, Iran,
              Uzbekistan, or any other jurisdiction where such distribution or
              use would be contrary to local law or regulation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
