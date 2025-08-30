"use client";

import React from "react";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Terms and Conditions | Assex Markets",
//   description:
//     "Terms and Conditions for AssexMarkets. By using our services, you agree to these terms and conditions.",
// };

const terms = [
  {
    title: "1. Eligibility",
    content:
      "You must be at least 18 years of age and legally capable of entering into binding contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.",
  },
  {
    title: "2. Services Provided",
    content:
      "AssexMarkets operates as an intermediary offering online and offline marketing services related to OTC derivative instruments. We do not provide investment advice or portfolio management services.",
  },
  {
    title: "3. Account Registration",
    content:
      "To access certain features, you may be required to register an account. You agree to provide accurate, complete, and updated information and to maintain the confidentiality of your account credentials. You are solely responsible for all activities under your account.",
  },
  {
    title: "4. Use of the Platform",
    content:
      "You agree to use the Services only for lawful purposes and in accordance with these Terms. You must not:\n• Use the Services in violation of any applicable law or regulation;\n• Engage in fraudulent or deceptive practices;\n• Attempt to interfere with the operation of the Services;\n• Upload or transmit harmful code.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All content and materials on the AssexMarkets platform, including text, graphics, logos, and software, are the property of AssexMarkets or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Services for personal or business use, as permitted under these Terms.",
  },
  {
    title: "6. Third-Party Services",
    content:
      "Our Services may include access to or use of third-party services. We do not control and are not responsible for such third-party services. Use of third-party services is subject to their own terms and privacy policies.",
  },
  {
    title: "7. Fees and Payments",
    content:
      "[Insert details about any fees or payment terms here if applicable.]",
  },
  {
    title: "8. Privacy",
    content:
      "Your use of our Services is also governed by our [Privacy Policy], which explains how we collect, use, and disclose your personal information. By using the Services, you agree to the practices described in the Privacy Policy.",
  },
  {
    title: "9. Risk Disclosure",
    content:
      "The trading of OTC derivative instruments involves substantial risk and is not suitable for all investors. You acknowledge that you understand these risks and are solely responsible for your decisions and actions.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, AssexMarkets and its affiliates, officers, employees, and agents are not liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Services.",
  },
  {
    title: "11. Indemnification",
    content:
      "You agree to indemnify and hold harmless AssexMarkets from and against any claims, liabilities, damages, losses, and expenses arising out of your use of the Services or your breach of these Terms.",
  },
  {
    title: "12. Termination",
    content:
      "We reserve the right to suspend or terminate your access to the Services at any time, with or without notice, if we believe you have violated these Terms or applicable laws.",
  },
  {
    title: "13. Changes to the Terms",
    content:
      "We may update these Terms from time to time. Changes will be effective when posted on our website. Your continued use of the Services after changes are posted constitutes your acceptance of the updated Terms.",
  },
  {
    title: "14. Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of e.g., South Africa, without regard to its conflict of laws principles.",
  },
  {
    title: "15. Prohibition of High‑Frequency and Automated Trading",
    content:
      "AssexMarkets strictly prohibits the use of high‑frequency trading (HFT) strategies, bots, or any other form of automated trading on our platform. Any trading account found engaging in such activity will be permanently blocked, and all trading profits derived from the use of automated systems will be forfeited.",
  },
  {
    title: "16. Contact Information",
    content:
      "If you have any questions about these Terms or our Services, please contact us at:\nAssexMarkets Support Team\nEmail: support@assexmarkets.com\nWebsite: assexmarkets.com",
  },
];

const TermsAndConditions: React.FC = () => {
  return (
    <section className="bg-[#00CCB1]/2 px-6 sm:px-10 md:px-16 lg:px-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px] font-bold text-center text-[#1F0d3f] mb-6">
          AssexMarkets Terms and Conditions
        </h2>

        <div className="space-y-10">
          {terms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-[#f9f9f9] rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-secondary text-base sm:text-lg font-bold text-[#1F0d3f] mb-2">
                {term.title}
              </h3>
              <p className="text-sm sm:text-base text-[#3F4550] whitespace-pre-line leading-relaxed">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TermsAndConditions;
