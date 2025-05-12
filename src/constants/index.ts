const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "Assexmarkets is the best forex broker platform",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Reliable and transparent broker with great trading conditions.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "I’ve been trading with Assexmarkets for several months now, and I’m impressed by their fast execution speeds and tight spreads. The platform is user-friendly.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "As a new trader, I found Assexmarkets very welcoming. The registration process was quick, and the demo account helped me practice before going live.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Fast execution and excellent customer support—highly recommend Assexmarkets!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review: "Good customer support and stable platform make trading easy.",
    imgPath: "/images/client6.png",
  },
];

const navigationLinks = [
  {
    id: 1,
    // href: "/live-account-trading",
    text: "Trading",
    dropdown: true,
    dropdownLinks: [
      {
        id: 1,
        href: "/live-account-trading",
        text: "Live Account Trading",
        dropdown: false,
      },
      {
        id: 2,
        href: "/demo-account-trading",
        text: "Demo Account Trading",
        dropdown: false,
      },
      { id: 3, href: "/copy-trading", text: "Copy Trading", dropdown: false },
      {
        id: 4,
        href: "/trading-contest",
        text: "Trading Contest",
        dropdown: false,
      },
      {
        id: 5,
        href: "/paam",
        text: "Percentage Allocation Asset Management (PAMM)",
        dropdown: false,
      },
      {
        id: 6,
        href: "/deposit-and-withdrawals",
        text: "Deposit and Withdrawals",
        dropdown: false,
      },
      {
        id: 7,
        href: "/fees",
        text: "Fees",
        dropdown: false,
      },
      {
        id: 8,
        href: "/client-protection",
        text: "Client Protection",
        dropdown: false,
      },
    ],
  },
  {
    id: 2,
    // href: "/forex-cfd",
    text: "Markets",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/forex-cfd", text: "Forex CFD", dropdown: false },
      { id: 2, href: "/crypto-cfd", text: "Crypto CFD", dropdown: false },
      { id: 3, href: "/indices", text: "Indices", dropdown: false },
      { id: 4, href: "/metals", text: "Metals", dropdown: false },
      { id: 5, href: "/commodities", text: "Commodities", dropdown: false },
    ],
  },
  {
    id: 3,
    // href: "",
    text: "Platform",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/metatrader5", text: "MetaTrader5", dropdown: false },
    ],
  },
  {
    id: 4,
    // href: "/forex-cfd",
    text: "Account Types",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/standard", text: "Standard", dropdown: false },
      { id: 2, href: "/leverage-plus", text: "Leverage Plus", dropdown: false },
      { id: 3, href: "/raw-spread", text: "Raw Spread", dropdown: false },
    ],
  },
  // {
  // id: 5,
  // href: "/about-us",
  // text: "Company",
  // dropdown: false,
  // dropdownLinks: [
  //   { id: 1, href: "/about-us", text: "About Us", dropdown: false },
  //   { id: 2, href: "/careers", text: "Careers", dropdown: false },
  // ],
  // },
  // {
  // id: 6,
  // href: "/contact-form",
  // text: "Contact Us",
  // dropdown: false,
  // dropdownLinks: [
  //   { id: 1, href: "/contact-form", text: "Contact Form", dropdown: false },
  //   { id: 2, href: "/support", text: "Support", dropdown: false },
  // ],
  // },
];

const staticLinks = [
  { href: "/about-us", text: "Company" },
  { href: "/contact-us", text: "Contact Us" },
];

const faqData = [
  {
    section: "Account Questions",
    items: [
      {
        question: "How do I open an account with AssexMarkets?",
        answer:
          "Opening an account is simple and can be completed in minutes. Visit our registration page, fill in your personal details, verify your identity by uploading the required documents, and make your initial deposit. Once your verification is approved, you can start trading immediately.",
      },
      {
        question: "What documents do I need to verify my account?",
        answer:
          "We require proof of identity (passport, national ID, or driver's license) and proof of address (utility bill or bank statement from the last 3 months). Additional documents may be required depending on your country of residence and account type.",
      },
      {
        question: "What types of trading accounts do you offer?",
        answer:
          "AssexMarkets offers several account types:\n\n• Standard Account: For beginners with competitive spreads and no commissions\n• Premium Account: Lower spreads with minimal commissions for more active traders\n• Professional Account: Designed for high-volume traders with ECN execution\n• Islamic Account: Swap-free accounts compliant with Islamic financial principles",
      },
      {
        question: "What is the minimum deposit to open an account?",
        answer:
          "The minimum deposit varies by account type: Standard ($100), Premium ($1,000), and Professional ($5,000). We accept deposits via bank transfer, credit/debit cards, and various e-wallets.",
      },
    ],
  },
  {
    section: "Trading Platforms",
    items: [
      {
        question: "Which trading platforms do AssexMarkets support?",
        answer:
          "We offer MetaTrader 4, MetaTrader 5, and our proprietary AssexTrader platform. All platforms are available on desktop, web, and mobile devices.",
      },
      {
        question: "How do I download the trading platform?",
        answer:
          "You can download all our platforms from the 'Platforms' section on our website. Mobile versions are available in the App Store and Google Play Store.",
      },
      {
        question: "Can I use Expert Advisors (EAs) for automated trading?",
        answer:
          "Yes, our MetaTrader platforms fully support Expert Advisors. You can use existing EAs or develop custom solutions.",
      },
      {
        question: "Do you offer a demo account?",
        answer:
          "Yes, we provide free demo accounts with virtual funds to practice trading without financial risk. Demo accounts mirror the features of our live accounts.",
      },
    ],
  },
  {
    section: "Markets and Trading Conditions",
    items: [
      {
        question: "What financial instruments can I trade at AssexMarkets?",
        answer:
          "Our offerings include 60+ forex pairs, major commodities (gold, silver, oil), global indices, popular stocks, and selected cryptocurrencies. The full instrument list is available on our website.",
      },
      {
        question: "What are your typical spreads?",
        answer:
          "Spreads vary by account type and market conditions. For our most popular pairs:\nEUR/USD: from 1.0 pips (Standard), 0.6 pips (Premium), 0.2 pips (Professional)\nGold (XAU/USD): from 25 pips (Standard), 18 pips (Premium), 10 pips (Professional)\nCurrent spread information is always available on our trading platforms.",
      },
      {
        question: "What leverage does AssexMarkets offer?",
        answer:
          "We offer flexible leverage options up to 1:500, depending on your account type, trading experience, and regulatory restrictions in your jurisdiction. Professional clients may request higher leverage options.",
      },
      {
        question: "What are your trading hours?",
        answer:
          "Forex markets are available for trading 24/5 from Sunday 22:00 GMT to Friday 22:00 GMT. Other markets follow their respective exchange hours. A detailed schedule is available on our Trading Conditions page.",
      },
    ],
  },
  {
    section: "Deposits and Withdrawals",
    items: [
      {
        question: "What payment methods can I use?",
        answer:
          "We accept deposits via bank wire transfer, credit/debit cards (Visa, Mastercard), and popular e-wallets including Skrill, Neteller, and PayPal. Available methods may vary by country.",
      },
      {
        question: "Are there any deposit fees?",
        answer:
          "AssexMarkets does not charge fees for deposits. However, your payment provider may apply their own fees or currency conversion charges. Please check with your provider for details.",
      },
      {
        question: "How long do withdrawals take to process?",
        answer:
          "We process all withdrawal requests within 24 hours. The time to receive funds depends on your withdrawal method:\nE-wallets: 1-2 business days\nCredit/debit cards: 3-5 business days\nBank transfers: 3-7 business days",
      },
      {
        question: "Is there a minimum withdrawal amount?",
        answer:
          "The minimum withdrawal amount is $50 or equivalent in your account currency. Smaller balances must be withdrawn in full as a complete account closure.",
      },
    ],
  },
  {
    section: "Security and Regulation",
    items: [
      {
        question: "Is AssexMarkets regulated?",
        answer:
          "Yes, AssexMarkets is regulated by [Regulatory Authority] under license number [License Number]. We adhere to strict financial standards including capital adequacy requirements and client fund segregation.",
      },
      {
        question: "How is my personal information protected?",
        answer:
          "We implement bank-grade encryption and comprehensive data protection protocols. Your personal information is never shared with unauthorized third parties and is handled in accordance with international data protection standards.",
      },
      {
        question: "Are my funds safe with AssexMarkets?",
        answer:
          "Yes, all client funds are held in segregated accounts with top-tier banks, separate from company operational funds. We also provide negative balance protection to ensure you cannot lose more than your deposit.",
      },
      {
        question:
          "Is compensation available if AssexMarkets becomes insolvent?",
        answer:
          "Clients may be eligible for compensation through the [Investor Compensation Fund] up to [Amount] per client, subject to eligibility criteria defined by our regulatory authority.",
      },
    ],
  },
  {
    section: "Trading Education and Support",
    items: [
      {
        question: "Do you offer educational resources for traders?",
        answer:
          "Yes, we provide comprehensive educational resources including webinars, video tutorials, trading guides, market analysis, and one-on-one coaching sessions. All resources are accessible through our Trading Academy section.",
      },
      {
        question: "What customer support options are available?",
        answer:
          "Our multilingual support team is available 24/5 via live chat, email, and phone. Premium and Professional account holders receive priority support and dedicated account managers.",
      },
      {
        question: "Do you provide market analysis?",
        answer:
          "Yes, our team of analysts provides daily market updates, weekly outlooks, and in-depth research reports. These resources are available on our website, trading platforms, and through our mobile app.",
      },
      {
        question: "Can I get help with platform technical issues?",
        answer:
          "Yes, our technical support team can assist with platform installation, setup, and troubleshooting. For complex issues, we offer screen-sharing sessions to resolve problems efficiently.",
      },
    ],
  },
  {
    section: "Account Management",
    items: [
      {
        question: "How can I change my account leverage?",
        answer:
          "You can request leverage changes through your client portal. Changes are typically processed within one business day, subject to eligibility and risk assessment.",
      },
      {
        question: "Can I have multiple trading accounts?",
        answer:
          "Yes, you can open multiple accounts in different base currencies or with different account types. All accounts can be managed from a single client portal.",
      },
      {
        question: "What happens if my account goes into negative balance?",
        answer:
          "AssexMarkets provides negative balance protection for all retail clients. This means your account cannot go below zero, and you will not owe money beyond your deposit.",
      },
      {
        question: "How do I close my account?",
        answer:
          "To close your account, please withdraw all funds and submit an account closure request through your client portal or contact customer support. We may contact you to complete an exit survey.",
      },
    ],
  },
];

export { testimonials, navigationLinks, staticLinks, faqData };
