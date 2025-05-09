import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import { WhiteFlameButtonIcon } from "../../../public/icons/ButtonIcons";

interface ImageWithTextSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonOnClick?: () => void;
  imageComponent: React.ReactNode;
  imageOnLeft?: boolean;
  reverseColumnOnMobile?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ImageWithTextSection: React.FC<ImageWithTextSectionProps> = ({
  title,
  description,
  buttonText,
  buttonOnClick,
  imageComponent,
  imageOnLeft = false,
  reverseColumnOnMobile,
}) => {
  return (
    <section className="">
      <div
        className={`max-w-7xl mx-auto flex ${
          reverseColumnOnMobile ? "flex-col-reverse" : "flex-col"
        } items-center gap-8 md:gap-20 lg:flex-row ${
          imageOnLeft ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <motion.div
          className={`w-full lg:w-1/2 text-center ${
            imageOnLeft ? "lg:text-right" : "lg:text-left"
          }`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1f0d3f] mb-4 whitespace-pre-line leading-loose">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed ">
            {description}
          </p>
          <div className="mt-8">
            <Button
              onClick={buttonOnClick}
              text={buttonText}
              icon={<WhiteFlameButtonIcon />}
              variant="primary"
              size="md"
            />
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className={`w-full lg:w-1/2 flex justify-center lg:justify-${
            imageOnLeft ? "start" : "end"
          }`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div
            className={`w-full max-w-[500px] md:max-w-[600px] lg:max-w-[480px] xl:max-w-[560px] flex justify-center lg:justify-${
              imageOnLeft ? "start" : "end"
            } overflow-hidden rounded-none lg:rounded-xl`}
          >
            {imageComponent}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageWithTextSection;
