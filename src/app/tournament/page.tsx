import { FAQItem } from "@/sections/FAQs";
import HowTournamentWorks from "@/sections/Tournament/HowTournamentWorks";
import TournamentFAQs from "@/sections/Tournament/TournamentFAQs";
import { TournamentHero } from "@/sections/Tournament/TournamentHero";
import TournamentPackages from "@/sections/Tournament/TournamentPackages";
import { WhyChooseTournament } from "@/sections/Tournament/WhyChooseTournament";
import React from "react";

export const metadata = {
  title: "Trading Tournament | Assex Markets",
  description:
    "Join Assex Markets’ exciting trading tournaments. Compete with global traders and win attractive prizes and rewards.",
};

const myFaqs: FAQItem[] = [
  {
    question: "How do I get started with the contest?",
    answer:
      "Pick a suitable account type, make payments, receive login details, and join the contest.",
  },
  {
    question: "Is this a prop firm account?",
    answer:
      "No, we only offer our virtual account to traders, and the system picks the most skillful traders and rewards them.",
  },
  {
    question: "What if I don’t top the leaderboard?",
    answer:
      "We believe in our traders and your skills. If you don't top the leaderboard, you can always retry at a discounted rate.",
  },
  {
    question: "Can I use HFT or a bot?",
    answer:
      "In the tournament, every possible approach is allowed—provided you're topping the leaderboard.",
  },
  {
    question: "Can I trade news?",
    answer: "Yes.",
  },
  {
    question: "How do I get paid?",
    answer:
      "If you're picked by the system, your winnings will be deposited into your Assexmarkets wallet for withdrawals.",
  },
  {
    question: "If I won before, can I reapply?",
    answer: "Yes, previous winners are welcome to reapply and compete again.",
  },
  {
    question: "Can I have more than one tournament account?",
    answer: "Yes.",
  },
  {
    question: "Can I copy trade on all my accounts?",
    answer: "Yes.",
  },
  {
    question: "Can I withdraw my tournament profits?",
    answer:
      "Only prizes from winning or topping the leaderboard are withdrawable. Profits made during the tournament stay within the competition framework.",
  },
];

const TournamentPage = () => {
  return (
    <>
      <TournamentHero />
      <HowTournamentWorks />
      <TournamentPackages />
      <WhyChooseTournament />
      <TournamentFAQs faqItems={myFaqs} />
    </>
  );
};

export default TournamentPage;
