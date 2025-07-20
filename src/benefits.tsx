import { motion } from "framer-motion";
import TickIcon from "./assets/TickIcon";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="pt-[80px] lg:pt-[120px]  bg-white w-full px-[24px] md:px-[32px] xl:px-[178px] flex flex-col items-center gap-[60px]"
    >
      <div className="flex flex-col items-center gap-5 w-full xl:w-[800px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
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
          className="w-full sm:w-[669px] poppins-medium text-[50px] leading-[60px] tracking-[-2px] md:text-[56px] md:leading-[67.2px] text-center text-secondary-900"
        >
          Tired of Reselling Overpriced VoIP?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="font-normal text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-secondary-600"
        >
          Your clients deserve better — and so do you. At DLS, we've been delivering rock-solid hosted PBX to businesses since 2004.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-[24px] w-full mt-6">
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>White-label or referral model</b> — your choice</span>
            </div>
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>30% recurring commission structure</b></span>
            </div>
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>Simple pricing</b> with transparent billing</span>
            </div>
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>100% U.S.-based support</b> (we answer the phones)</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>Real-time access</b> to provisioning tools and reporting</span>
            </div>
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>Fast provisioning</b>, flexible configuration options</span>
            </div>
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>BYOD-friendly</b> or phones shipped ready-to-go</span>
            </div>
            <div className="flex items-start gap-3">
              <TickIcon className="w-6 h-6 flex-shrink-0 text-primary-500" />
              <span className="text-secondary-700"><b>Optional managed internet, firewall, or failover options</b></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[24px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col p-8 bg-primary-50 rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3 border border-primary-100"
        >
          <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-secondary-900">
              Predictable Margins
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-secondary-600">
              No more bait-and-switch pricing. Our transparent billing structure ensures your margins are predictable and profitable.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.4,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col p-8 bg-primary-50 rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3 border border-primary-100"
        >
          <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-secondary-900">
              U.S.-Based Support
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-secondary-600">
              We answer the phones. Get real support from real people who understand your business and your clients' needs.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.6,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col p-8 bg-primary-50 rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3 border border-primary-100"
        >
          <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-secondary-900">
              Proven Platform
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-secondary-600">
              Rock-solid hosted PBX that just works. Fast provisioning, flexible configuration, and BYOD-friendly options.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
