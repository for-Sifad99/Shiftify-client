import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, this posture corrector is designed to be adjustable and suitable for users of all ages and body types for maximum comfort and support.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Absolutely. Regular use of a posture corrector encourages proper alignment, which can reduce strain on your back muscles and improve posture over time.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Yes, some models include smart features like vibration alerts that gently remind you to correct your posture when you slouch.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe to our back-in-stock notifications, and we’ll send you an email or SMS alert once it's available again.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default: first open

  const toggleOpen = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Collapse if clicked again
    } else {
      setOpenIndex(index); // Open clicked one
    }
  };

  return (
    <section className="sm:py-16 py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="md:text-3xl sm:text-2xl text-lg font-bold text-secondary sm:mb-2 mb-1">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-base-200 md:text-base sm:text-sm text-xs max-w-2xl mx-auto md:mb-10 mb-6">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <div className="md:space-y-3 sm:space-2 space-y-[6px] text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`collapse collapse-arrow transition-all duration-300 border ${isOpen
                  ? "bg-[#e6f2f3] border-[#76b6bd]"
                  : "bg-white border-none"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={isOpen}
                  onChange={() => toggleOpen(index)}
                />
                <div className="collapse-title sm:text-lg text-sm font-bold text-secondary">
                  {faq.question}
                </div>
                <div className="collapse-content sm:text-sm text-xs text-base-200">
                  <div className="border-t border-dashed border-[#27a1ac] mb-3"></div>
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className='sm:mt-10 mt-6 flex items-center justify-center'>
          <button className="btn border-none btn-primary text-black rounded-lg">See More FAQ's</button>
          <button className="px-3 py-2 bg-black text-white hover:bg-gray-800 hover:text-blue-100 rounded-full"><FaArrowRight className="-rotate-40 my-1" /></button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
