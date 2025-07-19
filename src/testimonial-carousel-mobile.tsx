import { motion } from "framer-motion";

const TestimonialCarouselMobile = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col gap-[30px] items-center justify-center bg-white p-[25px] rounded-[16px] w-full "
      >
        <img
          src="https://framerusercontent.com/images/jCl7IxnOEN5iV2G3osyfKLdVdoU.jpg?scale-down-to=512"
          alt=""
          className="rounded-[16px] w-full h-[465px] object-cover"
        />

        <div className="flex flex-col gap-6">
          <h4 className="text-[24px] leading-[31.2px] tracking-[-1px] text-[#050505] w-full poppins-medium">
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col gap-[30px] items-center justify-center bg-[#dffab7] p-[25px] rounded-[16px] w-full "
      >
        <img
          src="https://framerusercontent.com/images/GE1vHAv9NlgFtmyw1WPO1Fsrw28.jpg?scale-down-to=512"
          alt=""
          className="rounded-[16px] w-full h-[465px] object-cover"
        />

        <div className="flex flex-col gap-6">
          <h4 className="text-[24px] leading-[31.2px] tracking-[-1px] text-[#050505] w-full poppins-medium">
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col gap-[30px] items-center justify-center bg-[#f5f5f5] p-[25px] rounded-[16px] w-full "
      >
        <img
          src="https://framerusercontent.com/images/H14E8S7hJnIxSEJdJ1uxSIdkr8E.jpg?scale-down-to=512"
          alt=""
          className="rounded-[16px] w-full h-[465px] object-cover"
        />

        <div className="flex flex-col gap-6">
          <h4 className="text-[24px] leading-[31.2px] tracking-[-1px] text-[#050505] w-full poppins-medium">
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col gap-[30px] items-center justify-center bg-[#f5f5f5] p-[25px] rounded-[16px] w-full "
      >
        <img
          src="https://framerusercontent.com/images/H14E8S7hJnIxSEJdJ1uxSIdkr8E.jpg?scale-down-to=512"
          alt=""
          className="rounded-[16px] w-full h-[465px] object-cover"
        />

        <div className="flex flex-col gap-6">
          <h4 className="text-[24px] leading-[31.2px] tracking-[-1px] text-[#050505] w-full poppins-medium">
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
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselMobile;
