import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqsData from "../../data/faqs.json";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqsData.map((faq, index) => (
        <div
          key={faq.id}
          className="border border-border bg-card"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay={index * 50}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-card transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <span className="text-foreground font-medium pr-8">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#FFD700] flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`faq-answer-${faq.id}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4 text-foreground/70 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

