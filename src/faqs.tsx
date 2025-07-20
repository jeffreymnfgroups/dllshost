import { motion } from "framer-motion";
import ogImg from "./assets/propellent-og.png";
import Accordion from "./accordion";

const Faqs = () => {
  return (
    <section className="bg-white flex flex-col items-center w-full pt-[60px] pb-[92px] md:pb-[80px] px-[24px] md:px-[32px] xl:px-[64px] gap-[60px] md:gap-[80px] relative">
      <div className="w-full flex flex-col items-center gap-[10px] md:w-[850px]">
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
          className="flex items-center py-2 px-3 bg-[#FFF3E0] rounded-[11px]"
        >
          <h4 className="ibm-plex-mono-semibold text-black text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
            FAQs
          </h4>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.3,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-[40px] leading-[44px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center w-full poppins-medium relative"
        >
          <h3 className="text-[#a3a6ae] text-center">
            Frequently Asked Questions
          </h3>
          <h3 className="text-[#0f1728] mt-[-8px] md:mt-0 text-center">
            Everything you need to know about partnering with DLS
          </h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
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
        className="bg-[#f5f5f5] rounded-[20px] shadow-lg border border-[#F78B16] flex justify-center mx-auto w-auto max-w-max"
        >
  <div className="px-6 py-6">
  <Accordion faqs={[
            {
              question: "How quickly can I get started?",
              answer: "Most partners are up and running within 1-2 business days after onboarding."
            },
            {
              question: "What support do you provide?",
              answer: "We offer 100% U.S.-based support by phone and email, plus a partner portal with resources and training."
            },
            {
              question: "How are commissions calculated?",
              answer: "Partners earn 30% recurring commission on all referred or white-label accounts, paid monthly."
            },
            {
              question: "Can I use my own branding?",
              answer: "Yes! Choose white-label or referral model to fit your business and branding needs."
            },
            {
              question: "What resources are available?",
              answer: "You'll get access to marketing materials, technical docs, and a partner portal demo."
            }
          ]} />
        </div>
      </motion.div>

      <motion.h4
        initial={{ opacity: 0, y: 5 }}
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
        className="text-[18px] mt-5 md:mt-0 leading-[24.3px] tracking-[-0.54px] be-vietnam-pro-medium text-[#0f1728] bg-transparent rounded-full px-[24px] py-[24px] md:px-5 w-full text-center"
      >
        Still have more questions? Contact our
        <span className="underline ml-1 cursor-pointer hover:text-[#475466]">
          help center
        </span>
        .
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 40,
            stiffness: 160,
            mass: 1,
            delay: 0.1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col xl:flex-row items-center bg-[#FFF3E0] w-full sm:w-[622px] rounded-[24px] overflow-hidden md:w-full xl:w-full xl:h-[480px]"
      >
        <div className="flex flex-col gap-12 items-start w-full xl:w-1/2 px-10 md:px-16 pt-[60px] pb-[60px]">
          <h1 className="poppins-medium text-[40px] leading-[44px] tracking-[-1px] text-[#0f1728] md:text-[52px] md:leading-[57.2px]">
            Ready to grow your business with DLS?
          </h1>
          <a
            href="https://jeffreydev.vercel.app/"
            target="_blank"
            className="w-full md:w-max flex justify-start"
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
              className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#fff] bg-[#F78B16] rounded-full px-[18px] md:px-[22px] py-[14px] flex items-center justify-center min-w-full md:min-w-min"
            >
              Get Partner Packet
            </motion.button>
          </a>
        </div>
        <div className="w-full xl:w-1/2 h-[400px] xl:h-full">
          <img
            src="https://framerusercontent.com/images/xbGd7KjeOkQuVXYhzidyCZ0EUM.jpg?scale-down-to=2048"
            alt=""
            className="rounded-b-[24px] xl:rounded-b-[0px] xl:rounded-r-[24px] h-full w-full object-cover"
          />
        </div>
      </motion.div>

      <img src={ogImg} alt="" className="w-full opacity-0 absolute bottom-0 -z-10" />
    </section>
  );
};

export default Faqs;  