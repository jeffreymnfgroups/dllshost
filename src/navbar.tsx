import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: [0.44, 0, 0, 1],
        },
      }}
      viewport={{
        amount: "all",
        once: true,
      }}
      id="navbar"
      className={`px-[24px] lg:px-[80px] z-50 py-[25.5px] flex items-center justify-between w-full top-[0px] left-0 fixed bg-white`}
    >
      <Link
        to="/"
        className="flex items-center gap-2.5 cursor-pointer"
      >
        {/* Changed logo width to 'w-auto' for better responsiveness or a specific width like 'w-[80px]' if desired */}
        <img src={logo} alt="DLS Logo" className="h-[30px] w-auto" />
        {/* Removed the h2 element that displayed "DLS" */}
      </Link>

      <div className="md:flex items-center justify-center gap-8 hidden be-vietnam-pro-medium pr-[28px] md:pr-0 md:pl-[50px] lg:pr-[28px] lg:pl-0">
        <a
          href="https://jeffreydev.vercel.app/"
          className="text-[16px] leading-[21.6px] tracking-[-0.32px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Partners
        </a>
        <Link
          to="/about"
          className="text-[16px] leading-[21.6px] tracking-[-0.32px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-[16px] leading-[21.6px] tracking-[-0.32px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
        >
          Contact
        </Link>
      </div>

      <a
        href="tel:+18005551234"
        className="hidden md:flex items-center text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#0f1728] bg-transparent rounded-lg px-[18px] py-2.5 max-w-max border border-[#0f1728] mr-4 hover:bg-[#f5f5f5] transition"
      >
        (800) 555-1234
      </a>

      <Link
        to="https://jeffreydev.vercel.app/"
        target="_blank"
                    className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-white bg-primary-500 border border-primary-500 rounded-lg px-[18px] py-2.5 md:flex items-center justify-center max-w-max hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Get Partner Packet
      </Link>

      {navbarVisible ? (
        <svg
          width="100%"
          height="1.5em"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="rgb(0, 0, 0)"
          className="md:hidden cursor-pointer w-10 h-10"
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <path
            d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ) : (
        <svg
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="rgb(0, 0, 0)"
          className="md:hidden cursor-pointer w-10 h-10"
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <path
            d="M3 5h18M3 12h18M3 19h18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}

      <div
        className={`pb-[40px] ${
          navbarVisible ? "open-nav" : "close-nav"
        } transition-all top-[99px]  flex flex-col items-center justify-between w-full gap-10 left-0 absolute bg-whi te px-6 md:hidden pt-4`}
      >
        <div
          className={`absolute w-full delay-600 shadow-[0px_23px_30px_0px_rgba(0,0,0,0.1)] transition-all duration-500 ${
            navbarVisible ? "h-full" : "h-0"
          } bg-white top-0  -z-10`}
        />

        <div
          className={`max-w-max transition delay-[900ms] ${
            navbarVisible ? "open-nav-items" : "close-nav-items"
          } flex flex-col items-center justify-center gap-[33px] be-vietnam-pro-medium`}
        >
          <Link
            to="#benefits"
            onClick={handleScroll}
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            Benefits
          </Link>
          <Link
            to="#product"
            onClick={handleScroll}
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            Product
          </Link>
          <Link
            to="#testimonials"
            onClick={handleScroll}
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            Testimonials
          </Link>
          <Link
            to="#faqs"
            onClick={handleScroll}
            className="text-[20px] leading-[27px] tracking-[-0.4px] font-medium text-[#000] cursor-pointer hover:text-[#878787] transition-all"
          >
            FAQs
          </Link>
        </div>

        <Link
          to="/"
          className={`text-base transition leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-primary-500 ${
            navbarVisible ? "open-nav-items" : "close-nav-items"
          } border border-primary-500 bg-transparent rounded-lg px-[18px] py-[14px] flex items-center justify-center w-full`}
        >
          Get Template
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;