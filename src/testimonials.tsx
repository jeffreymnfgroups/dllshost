import { motion } from "framer-motion";
import TestimonialCarouselDesktop from "./testimonial-carousel-desktop";
import TestimonialCarouselMobile from "./testimonial-carousel-mobile";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Testimonials = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-[#f5f5f5] flex flex-col items-center w-full py-[60px] md:pb-[80px] px-[30px] xl:px-[56px] gap-[60px] md:gap-[80px] relative">
      <div className="w-full flex flex-col gap-[45px] items-center pb-[60px] md:pb-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col items-center py-8 px-6 bg-white rounded-[16px] shadow-lg max-w-2xl mx-auto"
        >
          <h4 className="ibm-plex-mono-semibold uppercase text-[#F78B16] text-[14px] leading-[16px] text-center tracking-[1.2px] mb-4">
            Partner Testimonial
          </h4>
          <p className="text-[24px] md:text-[32px] leading-[1.3] text-center text-[#0f1728] font-medium mb-6">
            “We switched from a national provider to DLS and never looked back. It’s stable, customizable, and our margins are finally predictable.”
          </p>
          <span className="block text-[#a3a6ae] text-[18px] md:text-[20px] text-center font-semibold">
            — Chicago-based MSP
          </span>
        </motion.div>
      </div>

      <div
        ref={targetRef}
        className="w-full flex flex-col items-center gap-[80px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-[40px] leading-[42px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center w-full poppins-medium relative"
        >
          <h3 className="text-[#a3a6ae]">Real stories.</h3>
          <h3 className="text-[#0f1728] mt- [-8px] md:mt-[-0px] text-center md:text-left">
            Don’t take our word for it.
          </h3>

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.8,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="https://framerusercontent.com/images/VL43VhHmWPuTeXXKbTYxdaAoyU.png?scale-down-to=512"
            alt=""
            className="absolute w-[152px] hidden xl:block top-[-30.5px] right-[223px] rotate-[-43deg]"
          />
        </motion.div>
        <div className="flex md:hidden w-full items-center">
          <TestimonialCarouselMobile />
        </div>
        <div className="hidden md:flex w-full items-center">
          <TestimonialCarouselDesktop />
        </div>
      </div>

      <Link
        to="https://jeffreydev.vercel.app/"
        className="w-full flex items-center justify-center"
      >
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.5,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-base mt-[-20px] leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#F78B16] border border-[#F78B16] bg-transparent rounded-full px-[18px] py-[14px] md:px-5 flex items-center justify-center w-full md:max-w-max"
        >
          Read all stories
        </motion.button>
      </Link>

      <div
        id="faqs"
        className="absolute w-4 h-4 bg-black bottom-20 opacity-0"
      />
    </section>
  );
};

export default Testimonials;
