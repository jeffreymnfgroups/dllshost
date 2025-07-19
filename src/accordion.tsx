import React, { useState } from "react";
import plus from "./assets/plus.png";

const Accordion: React.FC<{ faqs?: { question: string; answer: string }[] }> = ({ faqs }) => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const items = faqs && faqs.length > 0 ? faqs : [
    { question: 'Is there a free trial available?', answer: 'Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.' },
    { question: 'How does billing work?', answer: 'You can pay monthly or annually for your subscription.' },
    { question: 'Can I use my own branding?', answer: 'Yes, you can fully white-label the platform.' },
    { question: 'Is support available?', answer: 'Yes, we offer 24/7 support for all partners.' },
  ];

  return (
    <div
      id="accordion-flush"
      className="w-full sm:w-[658px] md:w-[756px] !transition-all flex flex-col"
    >
      {items.map((item, idx) => {
        const id = `accordion-flush-body-${idx}`;
        return (
          <div key={id} className="border-b border-gray-200">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] border-gray-200 gap-3 z-40"
              id={`accordion-flush-heading-${idx}`}
              onClick={() => toggleAccordion(id)}
            >
              <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
                {item.question}
              </span>
              <img
                src={plus}
                className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${isOpen[id] ? "rotate-[45deg]" : "rotate-0"} shrink-0`}
                alt=""
              />
            </button>
            <div
              id={id}
              className={`transition-all duration-500 ${isOpen[id] ? "h-auto" : "h-0"} overflow-hidden`}
            >
              <div className="pb-5">
                <p
                  className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${isOpen[id] ? "opacity-100 delay-150" : "opacity-0"} transition-all duration-300`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
