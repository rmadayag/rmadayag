import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in front-end web development, UI/UX design, WordPress, and custom interactive websites using modern frameworks.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline depends on the project's scope, but typically ranges from 1 to 4 weeks for most design and development projects.",
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer:
        "Absolutely! I’ll ensure all designs align with your existing brand identity while enhancing your digital presence.",
    },
    {
      question: "Do you provide responsive/mobile-friendly designs?",
      answer:
        "Yes, all websites and interfaces I design are fully responsive and optimized for mobile, tablet, and desktop.",
    },
    {
      question: "How can I get started with a project?",
      answer:
        "Simply reach out to me through email or the contact form. We’ll set up a discovery call to discuss your goals and next steps.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Label */}
      <p className="md:text-[28px] text-xl font-normal text-txtcolor mb-8">
        FAQ
      </p>

      {/* Heading + Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start mb-12">
        <div>
          <h3 className="text-[44px] md:text-[70px] leading-tight md:leading-[80px] font-medium text-primary">
            QUICK QUESTIONS
          </h3>
        </div>
        <div>
          <p className="text-base md:text-lg text-txtcolor leading-relaxed max-w-md">
            Find clear and concise answers to the most common questions our clients ask.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 mb-12" />

      {/* FAQ List */}
      <div className="flex flex-col gap-5 w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-[#F8F8F8] p-5 md:p-6 rounded-md shadow-sm transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex justify-between items-center w-full cursor-pointer focus:outline-none"
              >
                <h3 className="text-base md:text-xl font-medium text-primary leading-tight text-left flex-1">
                  {faq.question}
                </h3>
                <span className="ml-4 text-primary flex-shrink-0">
                  {isOpen ? (
                    <AiOutlineMinus className="w-6 h-6" />
                  ) : (
                    <AiOutlinePlus className="w-6 h-6" />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <p className="mt-3 text-sm md:text-base text-txtcolor leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;