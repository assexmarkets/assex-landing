"use client";

import React from "react";
import { motion } from "framer-motion";

const privacyPolicy = [
  {
    title: "Introduction",
    content:
      "Welcome to AssexMarkets. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our Services, including our website, trading platform, and mobile application. By using our Services, you agree to the terms of this Privacy Policy.",
  },
  {
    title: "Who We Are",
    content:
      "This Privacy Policy applies to AssexMarkets and any of its affiliated entities and service providers (collectively referred to as “AssexMarkets Entities”). Depending on the services you access or the country you're located in, your personal data may be handled by different AssexMarkets Entities. The primary controller of your personal data is the AssexMarkets Entity providing services to you. In some cases, your data may be shared between multiple AssexMarkets Entities for service delivery or regulatory purposes.",
  },
  {
    title: "Information We Collect",
    content:
      "We collect and process personal information you provide to us directly when registering an account, interacting with our Services, or contacting our support team. This includes:\n\n• Identification Data: Name, gender, date of birth, nationality, country of residence, and government-issued ID.\n• Contact Details: Phone number, email, address, billing info.\n• Financial & Economic Info: Bank info, income sources, tax details, employment status, trading experience.\n• Account & Trading Data: Transaction history, trading behavior, risk profile.\n• Technical & Usage Data: Device, IP address, location, browser type.\n• Marketing & Communication Data: Communication preferences, surveys, feedback.\n\nWe may obtain this data from you directly or through third-party partners, social media, and regulatory databases.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to:\n\n• Create and manage your trading account.\n• Verify your identity and comply with legal obligations.\n• Process transactions and manage trading activities.\n• Personalize your experience.\n• Conduct risk assessments and ensure regulatory compliance.\n• Improve our services and user experience.\n• Communicate with you regarding updates, promotions, and legal notices.\n• Prevent fraud and enhance platform security.\n• Generate insights to improve performance and marketing.\n\nWe may also request your data for promotions or research. Participation is optional.",
  },
  {
    title: "Communication Monitoring",
    content:
      "We may monitor or record communications (phone calls, emails, chats) with you for quality assurance, regulatory compliance, and recordkeeping. These recordings are the property of AssexMarkets and may be used as evidence of interactions.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to enhance your experience, analyze traffic, and improve functionality. Some cookies may be placed by third-party service providers. You can control cookies through your browser settings. Note that disabling cookies may limit your use of certain features.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell or rent your personal information. We may share your data with third-party providers who assist with platform operations, payment processing, or analytics. These providers are required to maintain confidentiality and use data solely for service provision.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your information from unauthorized access or disclosure. However, internet transmission is not completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your information only as long as necessary to fulfill the purposes outlined in this Policy or as required by law. Once no longer needed, data is securely deleted or anonymized.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have rights including:\n\n• Access to your personal data\n• Correction of inaccurate data\n• Deletion or restriction of your data\n• Withdrawal of consent where applicable\n\nTo exercise these rights, contact support@assexmarkets.com.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our Services may contain links to third-party websites. We are not responsible for the privacy practices of these third parties. Please review their privacy policies before submitting your data.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our Services are not intended for children under 18. We do not knowingly collect data from children. If we become aware of such data collection, we will delete it promptly.",
  },
  {
    title: "How We Use Your Personal Information",
    content:
      "Your personal data may also be used to:\n\n• Provide and market Over-the-Counter (OTC) Derivative Instruments.\n• Respond to inquiries and complaints.\n• Comply with financial and privacy laws.\n• Detect and prevent fraud or terrorism financing.\n• Fulfill tax and legal reporting obligations.\n• Run marketing campaigns and customize your experience.\n• Build user profiles and track engagement.\n• Fulfill contractual duties and exercise legal rights.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Updates will be posted on our site and become effective immediately. Continued use of our Services constitutes acceptance of changes.",
  },
  {
    title: "Contact Information",
    content:
      "If you have questions or concerns about this Privacy Policy, please contact us:\n\nAssexMarkets Support Team\nEmail: support@assexmarkets.com\nWebsite: assexmarkets.com",
  },
];

const PrivacyPolicy: React.FC = () => {
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
          AssexMarkets Privacy Policy
        </h2>

        <div className="space-y-10">
          {privacyPolicy.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-[#f9f9f9] rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-secondary text-base sm:text-lg font-bold text-[#1F0d3f] mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#3F4550] whitespace-pre-line leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
