import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="px-[24px] lg:px-[80px] z-40 py-[32px] flex flex-col lg:flex-row gap-[42px] items-center justify-between w-full bg-white">
      <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
      <img src={logo} alt="DLS Logo" className="h-[30px] w-auto" />
      </Link>

      <div className="w-full text-center sm:flex items-center justify-center gap-[5px] be-vietnam-pro-regular md:text-[14px] md:leading-[18.9px] md:tracking-[-0.28px] text-[16px] leading-[23.2px] tracking-[-0.32px]">
        <p>
           Development by
          <a
            href="https://jeffreydev.vercel.app/"
            target="_blank"
            className="underline text-[#878787] hover:text-black hover:no-underline transition-all cursor-pointer duration-300 mx-[5px]"
          >
            Jeffrey <span role="img" aria-label="heart">❤️</span>
          </a>
          - Copyright 2025
        </p>
      </div>

      <a
        href="https://jeffreydev.vercel.app/"
        target="_blank"
        className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-white bg-[#F78B16] border border-[#F78B16] rounded-lg px-[18px] py-2.5 flex items-center justify-center max-w-max whitespace-nowrap hover:bg-[#E67A0A] transition"
      >
        Get Partner Packet
      </a>
    </footer>
  );
};

export default Footer;
