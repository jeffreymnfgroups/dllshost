import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TestimonialCarouselDesktop = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "30% start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["68px", "-997px"]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-start pl -[68px] w-full overflow-hidden relative h-[467px]"
    >
      <motion.div style={{ x }} className="flex gap-10 absolute left-[68px]">
        <div className="flex flex-row gap-[40px] items-center  justify-center bg-white p-[40px] rounded-[16px] w-[1000px] relative ">
          <img
            src="https://framerusercontent.com/images/jCl7IxnOEN5iV2G3osyfKLdVdoU.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "We struggled to find the right talent globally, but with their
              automated candidate ranking, we quickly identified top-notch
              candidates who perfectly fit our requirements."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Sarah Johnson
              </h5>
              <p className="leading-[24px] text-[#475466]">
                Small Business Owner, Sarah's Boutique
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] items-center  justify-center bg-[#dffab7] p-[40px] py-0 rounded-[16px] w-[1000px] relative max-h-[440px]">
          <img
            src="https://framerusercontent.com/images/GE1vHAv9NlgFtmyw1WPO1Fsrw28.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "We switched from a national provider to DLS and never looked back. It's stable, customizable, and our margins are finally predictable."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Chicago-based MSP
              </h5>
              <p className="leading-[24px] text-[#475466]">
                —
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] items-center  justify-center bg-white p-[40px] rounded-[16px] w-[1000px] relative max-h-min">
          <img
            src="https://framerusercontent.com/images/H14E8S7hJnIxSEJdJ1uxSIdkr8E.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "DLS made onboarding effortless. Their team handled the migration, and our clients noticed the improved call quality right away."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Jamie Lee
              </h5>
              <p className="leading-[24px] text-[#475466]">
                IT Consultant, LeeTech Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] items-center  justify-center bg-white p-[40px] rounded-[16px] w-[1000px] relative max-h-min">
          <img
            src="https://framerusercontent.com/images/H14E8S7hJnIxSEJdJ1uxSIdkr8E.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "The real-time provisioning tools and U.S.-based support set DLS apart. We feel like true partners, not just another number."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Priya Patel
              </h5>
              <p className="leading-[24px] text-[#475466]">
                Network Engineer, SecureNet Partners
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselDesktop;
