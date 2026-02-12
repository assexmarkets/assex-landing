"use client";

import React from "react";
import { motion } from "framer-motion";

const terms = [
  {
    title: "Important — Please Read Carefully",
    content:
      'These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and AssexMarkets Global Limited ("AssexMarkets", "we", "us", or "our"), a company registered and operating as an intermediary offering online and offline access to trading in Over-the-Counter ("OTC") derivative instruments. By registering for an account, accessing our platform, depositing funds, or executing any trade, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree with any provision of these Terms, you must immediately discontinue your use of our platform and services.',
  },
  {
    title: "1. Eligibility",
    content:
      'To use the services provided by AssexMarkets, you must satisfy all of the following conditions:\n• You must be at least eighteen (18) years of age, or the age of legal majority in your country of residence, whichever is higher.\n• You must be legally capable of entering into binding contracts under the laws of your jurisdiction.\n• You must not be a resident of, or located in, any jurisdiction where the trading of OTC derivatives is prohibited or restricted by law.\n• You must not be a Politically Exposed Person ("PEP") or an individual subject to international sanctions without prior written disclosure and approval from AssexMarkets.\n• You must not have previously had an account terminated by AssexMarkets for violation of these Terms or applicable laws.\n\nBy registering and using our services, you represent and warrant that you meet all eligibility requirements stated above. AssexMarkets reserves the right to request proof of identity, age, and residency at any time. Failure to provide such documentation may result in immediate account suspension or termination.',
  },
  {
    title: "2. Services Provided",
    content:
      'AssexMarkets operates as an intermediary providing access to online and offline trading in OTC derivative instruments, including but not limited to Contracts for Difference ("CFDs") on foreign exchange (forex) currency pairs, commodities, indices, equities, and cryptocurrencies.\n\nAssexMarkets does not provide:\n• Investment advice, portfolio management, or financial planning services of any kind.\n• Guaranteed returns, profit projections, or any representation that trading will result in profit.\n• Tax advice. You are solely responsible for understanding and complying with the tax laws of your jurisdiction.\n• Custody or safekeeping services for client assets beyond the operational requirements of maintaining trading accounts.\n\nAll trading decisions are made solely by you. AssexMarkets acts only as an intermediary facilitating your access to the financial markets and does not act as your financial advisor, broker-dealer, or fiduciary.',
  },
  {
    title: "3. Account Registration and Verification",
    content:
      '3.1 Account Creation\nTo access the full features of our platform, you must register for a trading account. During registration, you agree to provide accurate, complete, and current information including your legal name, email address, phone number, country of residence, and date of birth. You agree to update this information promptly should any details change.\n\n3.2 Know Your Customer (KYC) Verification\nAssexMarkets is committed to compliance with anti-money laundering ("AML") and counter-terrorism financing ("CTF") regulations. As part of our onboarding process, you may be required to submit the following documentation:\n• A valid government-issued photo identification (passport, national ID card, or driver\'s licence).\n• Proof of residential address dated within the last three (3) months (utility bill, bank statement, or government-issued correspondence).\n• Source of funds documentation where applicable.\n\nAssexMarkets reserves the right to restrict account functionality, including deposits, withdrawals, and trading, until KYC verification is satisfactorily completed. Incomplete or fraudulent documentation may result in permanent account closure.\n\n3.3 Account Security\nYou are solely responsible for maintaining the confidentiality of your account credentials, including your password and any two-factor authentication methods. You agree to notify AssexMarkets immediately of any unauthorised access or suspected breach of your account security. AssexMarkets shall not be held liable for any loss or damage arising from your failure to protect your account credentials.',
  },
  {
    title: "4. Deposits, Payments, and Withdrawals",
    content:
      "4.1 Payment Processing\nAll deposits and withdrawals on the AssexMarkets platform are processed through our authorised payment partner, Korapay (or such other payment processors as AssexMarkets may designate from time to time). By making a deposit, you agree to be bound by the terms and conditions of the relevant payment processor in addition to these Terms.\n\n4.2 Deposit Terms\nDeposits are credited to your trading account upon confirmation of receipt by our payment processor. AssexMarkets does not guarantee instant crediting and processing times may vary depending on the payment method selected. The minimum deposit amount and accepted currencies are as published on our platform and may be updated at our discretion.\n\n4.3 Withdrawal Terms\nWithdrawal requests are processed within the timeframes published on our platform, subject to the completion of all applicable KYC verification and compliance checks. Withdrawals will be processed to the same payment method used for the original deposit where possible. AssexMarkets reserves the right to request additional verification before processing any withdrawal.\n\n4.4 No Refund of Traded Losses\nTHIS IS A CRITICAL PROVISION. PLEASE READ CAREFULLY.\n\nAny funds deposited into your trading account and subsequently used for trading are subject to market risk. Losses incurred as a result of trading activity — whether from individual trades, overnight holding costs, swap fees, or any other market-related activity — are final, non-refundable, and non-reversible. AssexMarkets does not, under any circumstances, refund trading losses. By depositing funds and placing trades, you accept full and sole responsibility for all outcomes, including the complete loss of your deposited capital.",
  },
  {
    title: "5. Risk Disclosure and Limitation of Liability",
    content:
      "5.1 General Risk Warning\nTRADING IN OTC DERIVATIVE INSTRUMENTS, INCLUDING BUT NOT LIMITED TO FOREX, CFDs, COMMODITIES, AND CRYPTOCURRENCIES, CARRIES AN EXTREMELY HIGH LEVEL OF RISK AND IS NOT SUITABLE FOR ALL INVESTORS. YOU COULD SUSTAIN A TOTAL LOSS OF YOUR DEPOSITED FUNDS. DO NOT TRADE WITH MONEY YOU CANNOT AFFORD TO LOSE.\n\nThe value of derivative instruments can fluctuate rapidly and unpredictably. Leveraged trading amplifies both potential profits and potential losses. Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed or illustrated on our platform.\n\n5.2 Client Responsibility for Trading Decisions\nYou acknowledge and agree that all trading decisions made through your account are your own. AssexMarkets does not make trading decisions on your behalf and bears no responsibility for the outcome of any trade you execute. You are solely responsible for:\n• Evaluating and understanding the risks associated with each trade before executing it.\n• Monitoring your open positions and managing your risk exposure.\n• Ensuring you have sufficient margin and balance to support your positions.\n• Understanding the impact of leverage, spread, swap, and other trading costs on your account.\n\n5.3 Limitation of Liability\nTo the maximum extent permitted by applicable law, AssexMarkets, its directors, officers, employees, affiliates, agents, and partners shall not be held liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from or related to:\n• Any trading losses, including total loss of deposited funds.\n• Any decisions made based on information, analysis, signals, or educational content provided on our platform.\n• Platform downtime, technical failures, connectivity issues, or data feed interruptions.\n• Unauthorised access to your account resulting from your failure to maintain account security.\n• Actions of third-party payment processors, liquidity providers, or technology partners.\n• Force majeure events including but not limited to natural disasters, pandemics, civil unrest, government actions, cyberattacks, or infrastructure failures.\n\nIN NO EVENT SHALL THE AGGREGATE LIABILITY OF ASSEXMARKETS EXCEED THE TOTAL AMOUNT OF FEES PAID BY YOU TO ASSEXMARKETS IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO SUCH LIABILITY.",
  },
  {
    title: "6. Prohibition of High-Frequency and Automated Trading",
    content:
      'AssexMarkets strictly prohibits the use of any of the following on our platform:\n• High-frequency trading ("HFT") strategies, including but not limited to latency arbitrage, market-making algorithms, and tick-scalping bots.\n• Automated trading bots, scripts, Expert Advisors ("EAs") designed for high-frequency execution, or any software that submits orders without direct manual intervention by the account holder.\n• Any form of algorithmic trading that exploits platform latency, price feed delays, or system vulnerabilities.\n• Copy trading signals routed through automated execution systems that bypass the platform\'s standard order flow.\n• Any third-party plugins, extensions, or API exploits not expressly authorised by AssexMarkets.\n\n6.1 Consequences of Violation\nAny trading account found to be engaging in prohibited automated trading activity will be subject to the following enforcement actions at AssexMarkets\' sole discretion:\n• Immediate and permanent blocking of the trading account without prior notice.\n• Forfeiture of all trading profits derived from the use of automated systems.\n• Reversal of any pending withdrawal requests associated with profits generated through prohibited activity.\n• Reporting to relevant regulatory authorities where required by law.\n\nAssexMarkets employs advanced trade surveillance systems to detect patterns consistent with automated or high-frequency trading. Detection methods include but are not limited to order velocity analysis, execution pattern monitoring, and latency profiling.',
  },
  {
    title: "7. Acceptable Use of the Platform",
    content:
      "You agree to use the AssexMarkets platform solely for lawful purposes and in accordance with these Terms. You must not:\n• Use the platform in violation of any applicable local, national, or international law or regulation.\n• Engage in fraudulent, deceptive, or manipulative trading practices, including but not limited to wash trading, spoofing, and layering.\n• Attempt to interfere with, disrupt, or compromise the operation, security, or integrity of the platform.\n• Upload, transmit, or distribute harmful code, malware, viruses, or any material that could damage the platform or its users.\n• Use another person's identity or credentials to access the platform.\n• Open multiple accounts for the purpose of circumventing trading limits, promotional conditions, or these Terms.\n• Engage in arbitrage exploitation of pricing errors, system glitches, or delayed price feeds.\n• Use the platform for money laundering, terrorism financing, or any other illicit financial activity.",
  },
  {
    title: "8. Bonuses, Promotions, and Incentives",
    content:
      "AssexMarkets may, from time to time, offer deposit bonuses, trading credits, cashback programmes, or other promotional incentives. All such promotions are subject to their own specific terms and conditions, which will be published alongside the promotion.\n\nGeneral rules applicable to all promotions:\n• Bonus funds are not withdrawable unless expressly stated otherwise in the specific promotion terms.\n• Trading volume requirements must be met before bonus-related profits can be withdrawn.\n• AssexMarkets reserves the right to modify, suspend, or terminate any promotion at any time without prior notice.\n• Abuse of promotional offers, including but not limited to opening multiple accounts to claim bonuses, will result in forfeiture of all bonus funds and may lead to account termination.\n• Bonuses are offered at AssexMarkets' sole discretion and do not constitute a contractual obligation.",
  },
  {
    title: "9. Intellectual Property",
    content:
      "All content and materials available on the AssexMarkets platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the overall design and arrangement of the platform, are the exclusive property of AssexMarkets or its licensors and are protected by applicable intellectual property laws.\n\nYou are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the platform for personal trading purposes in accordance with these Terms. You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content or materials from the platform without the prior written consent of AssexMarkets.",
  },
  {
    title: "10. Third-Party Services",
    content:
      "Our platform may incorporate or provide access to third-party services, including but not limited to payment processors (Korapay), liquidity providers, charting tools, market data feeds, and trading platforms (MetaTrader). AssexMarkets does not control and is not responsible for the availability, accuracy, or functionality of any third-party service. Your use of third-party services is governed by their respective terms and conditions, and AssexMarkets disclaims all liability arising from your use of such services.",
  },
  {
    title: "11. Privacy and Data Protection",
    content:
      "Your use of our services is governed by our Privacy Policy, which is incorporated into these Terms by reference. The Privacy Policy explains how we collect, process, store, and protect your personal data. By using the platform, you consent to the collection and use of your data as described in the Privacy Policy.\n\nAssexMarkets will not sell or share your personal data with third parties for marketing purposes without your explicit consent. However, we may be required to disclose your information to regulatory authorities, law enforcement agencies, or compliance bodies where required by applicable law.",
  },
  {
    title: "12. Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless AssexMarkets, its directors, officers, employees, affiliates, agents, and partners from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to:\n• Your use of the platform and services.\n• Your breach of any provision of these Terms.\n• Your violation of any applicable law, regulation, or third-party right.\n• Any trading activity conducted through your account, whether authorised or unauthorised.\n• Any dispute between you and a third party relating to your trading activity.",
  },
  {
    title: "13. Account Suspension and Termination",
    content:
      "AssexMarkets reserves the right to suspend, restrict, or permanently terminate your access to the platform at any time, with or without prior notice, if we reasonably believe that:\n• You have violated any provision of these Terms.\n• You have engaged in fraudulent, illegal, or suspicious activity.\n• Your account is being used for money laundering or terrorism financing.\n• You have provided false, misleading, or incomplete information during registration or verification.\n• Continued provision of services to you would expose AssexMarkets to legal, regulatory, or reputational risk.\n• You are subject to international sanctions or are located in a prohibited jurisdiction.\n\nUpon termination, all open positions may be closed at the prevailing market price, and any remaining balance (after deduction of applicable fees and obligations) will be returned to you through the original payment method, subject to compliance with AML/CTF requirements.",
  },
  {
    title: "14. Dispute Resolution",
    content:
      "Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall first be submitted to AssexMarkets' internal complaints procedure by contacting support@assexmarkets.com. AssexMarkets will use reasonable efforts to resolve complaints within thirty (30) business days.\n\nIf a dispute cannot be resolved through our internal complaints procedure, either party may refer the matter to mediation or arbitration in accordance with the laws of the governing jurisdiction specified in Section 15 below.",
  },
  {
    title: "15. Governing Law and Jurisdiction",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of laws principles. You agree to submit to the exclusive jurisdiction of the courts of South Africa for the resolution of any disputes arising under or in connection with these Terms, provided that AssexMarkets retains the right to bring proceedings in any court of competent jurisdiction.",
  },
  {
    title: "16. Modifications to These Terms",
    content:
      "AssexMarkets reserves the right to amend, modify, or replace these Terms at any time at its sole discretion. Material changes will be communicated to you by email or by publishing a notice on the platform at least fourteen (14) days before the changes take effect.\n\nYour continued use of the platform after the effective date of any modifications constitutes your acceptance of the updated Terms. If you do not agree with any modification, you must discontinue use of the platform and close your account.",
  },
  {
    title: "17. Force Majeure",
    content:
      "AssexMarkets shall not be liable for any failure or delay in performing its obligations under these Terms to the extent that such failure or delay is caused by circumstances beyond its reasonable control, including but not limited to: natural disasters, war, terrorism, pandemics, civil unrest, government actions or sanctions, power failures, internet outages, cyberattacks, exchange or market suspensions, or failures of third-party service providers.",
  },
  {
    title: "18. Severability",
    content:
      "If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be deemed severed from these Terms, and the remaining provisions shall continue in full force and effect.",
  },
  {
    title: "19. Entire Agreement",
    content:
      "These Terms, together with our Privacy Policy, Risk Disclosure Statement, and any applicable promotion-specific terms, constitute the entire agreement between you and AssexMarkets with respect to the use of the platform and supersede all prior agreements, understandings, negotiations, and discussions, whether oral or written.",
  },
  {
    title: "20. Contact Information",
    content:
      "If you have any questions, concerns, or complaints regarding these Terms or our services, please contact us at:\n\nCompany: AssexMarkets Global Limited\nEmail: support@assexmarkets.com\nWebsite: assexmarkets.com\nSupport Hours: Monday – Friday, 9:00 AM – 6:00 PM (WAT)",
  },
  {
    title: "Acknowledgment and Acceptance",
    content:
      "By registering for an AssexMarkets account, depositing funds, or placing any trade on our platform, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety. You further acknowledge that trading in OTC derivatives involves substantial risk of loss and that you are trading at your own risk with funds you can afford to lose. AssexMarkets does not guarantee the preservation of your capital, and all trading losses are your sole responsibility.",
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
