import { motion } from "framer-motion";
import integrated from "./assets/integrated.png";
import secure from "./assets/secure.png";
import fingerprintTwo from "./assets/fingerprint-two.svg";
import earn from "./assets/earn.png";
import invest from "./assets/invest.svg";
import { FaCheckCircle } from 'react-icons/fa';

const partnerBenefits = [
  "White-label or referral model — your choice",
  "30% recurring commission structure",
  "Simple pricing with transparent billing",
  "100% U.S.-based support (we answer the phones)",
  "Real-time access to provisioning tools and reporting",
  "Fast provisioning, flexible configuration options",
  "BYOD-friendly or phones shipped ready-to-go",
  "Optional managed internet, firewall, or failover options",
];

const partnerTypes = [
  {
    icon: integrated,
    title: "MSPs",
    desc: "Expand your service portfolio and boost recurring revenue with a proven VoIP platform.",
  },
  {
    icon: secure,
    title: "IT Consultants",
    desc: "Deliver reliable communications to your clients with full support and flexible options.",
  },
  {
    icon: fingerprintTwo,
    title: "Security Integrators",
    desc: "Integrate secure, scalable voice solutions into your security offerings.",
  },
  {
    icon: earn,
    title: "Copier Dealers",
    desc: "Add VoIP to your product lineup and increase your value to business clients.",
  },
  {
    icon: invest,
    title: "Network Engineers",
    desc: "Partner with DLS for flexible, reliable hosted PBX solutions for your network clients.",
  },
];

const Product = () => {
  return (
    <section
      id="product"
      className="flex flex-col items-center w-full pt-[120px] md:pt-[160px] pb-[190px] md:pb-[150px] px-[24px] md:px-[32px] xl:px-[152px] gap-[80px] relative"
    >
      {/* Problem/Solution Section */}
      <div className="w-full flex flex-col items-center gap-[15px] md:w-[850px]">
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
          className="flex items-center py-2 px-3 bg-[#F78B16] rounded-[11px]"
        >
          <h4 className="ibm-plex-mono-semibold uppercase text-black text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
            Problem / Solution
          </h4>
        </motion.div>
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
          className="w-full sm:w-[669px] poppins-medium text-[40px] leading-[44px] tracking-[-2px] md:text-[56px] md:leading-[61.6px] md:tracking-[-2.4px] text-center text-[#0f1728] md:w-full"
        >
          Tired of reselling overpriced VoIP with poor support or bait-and-switch pricing?
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
          className="font-normal mt-[9px] text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-[#475466] md:w-[765px]"
        >
          Your clients deserve better — and so do you. At DLS, we've been delivering rock-solid hosted PBX to businesses since 2004. Now you can offer the same to your clients — under your brand or ours — with a platform that just works.
        </motion.p>
      </div>

      {/* Partner Benefits Section */}
      <div className="w-full flex flex-col items-center gap-6 md:w-[850px]">
        <motion.h2
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
          className="text-[32px] md:text-[40px] font-semibold text-center mb-4 text-[#0f1728]"
        >
          Partner Benefits
        </motion.h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {partnerBenefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[18px] text-[#222]">
                              <FaCheckCircle className="text-[#F78B16] mt-1 min-w-[22px]" size={22} />
              <span className="font-medium">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Target Partner Types Section */}
      <div className="mt-16 w-full flex flex-col items-center">
        <motion.h2
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
          className="text-[36px] md:text-[44px] font-semibold text-center mb-8 text-[#0f1728]"
        >
          Who We Work With
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {partnerTypes.map((type, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl group">
              <img src={type.icon} alt={type.title} className="w-16 h-16 mb-4" />
                              <h3 className="font-bold text-lg mb-2 group-hover:text-[#F78B16] transition">{type.title}</h3>
              <p className="text-center text-sm text-[#475466]">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
