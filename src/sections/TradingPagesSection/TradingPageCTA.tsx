"use client";

import Button from "@/components/Button";
import Image from "next/image";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../../public/icons/ButtonIcons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TradingPageCTAProps {
  isDemoPage?: boolean;
}

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TradingPageCTA: React.FC<TradingPageCTAProps> = ({
  isDemoPage = false,
}) => {
  const title = isDemoPage
    ? "Explore Assexmarkets assets and markets"
    : "Trade with a trusted broker today";

  const description = isDemoPage
    ? "Learn to trade with our various assets from leading global financial markets with the same conditions as on live trading accounts."
    : "Trade confidently and securely with AssexMarkets today.";

  const imageSrc = isDemoPage
    ? "/images/SimulatedPageImage.svg"
    : "/images/cta-graphic.png";

  const imageWidth = isDemoPage ? 708 : 520;
  const imageHeight = isDemoPage ? 346 : 390;

  return (
    <section className="px-6 md:px-8 relative w-full bg-[#1f0d3f] pb-12 xl:pb-4 pt-8 overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#2e1d57_1px,transparent_1px),linear-gradient(to_bottom,#2e1d57_1px,transparent_1px)]"
        )}
      />
      {/* Radial Fade Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#1f0d3f] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Left Content */}
        <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start flex-1">
          {/* Title */}
          <motion.h2
            className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px] font-bold leading-tight"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {description}
          </motion.p>

          {/* Image for Mobile/Tablet */}
          <motion.div
            className="block lg:hidden w-full max-w-[400px] sm:max-w-[500px] mx-auto mt-8"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={imageSrc}
              alt="CTA Graphic"
              width={imageWidth}
              height={imageHeight}
              className="object-contain w-full h-auto"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col md:flex-row justify-center md:justify-start gap-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Button
              icon={<WhiteFlameButtonIcon />}
              text="Create a Live Account"
              variant="primary"
              size="md"
              onClick={() =>
                window.open(
                  "https://my.assexmarkets.com/auth/register",
                  "_blank"
                )
              }
            />
            <Button
              icon={<VideoButtonIcon />}
              text="Try a Free Demo"
              variant="ghost"
              size="md"
              onClick={() =>
                window.open(
                  "https://my.assexmarkets.com/auth/register",
                  "_blank"
                )
              }
            />
          </motion.div>
        </div>

        {/* Image for Desktop */}
        <motion.div
          className="hidden lg:block w-full max-w-[600px] lg:max-w-[700px] mx-auto flex-1"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={imageSrc}
            alt="CTA Graphic"
            width={imageWidth}
            height={imageHeight}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TradingPageCTA;
