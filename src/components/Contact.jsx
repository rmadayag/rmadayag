import React from "react";
import WebDev from "../assets/images/Vector.svg"; // Import the image

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-[150px] bg-bgcolor text-txtcolor"
      aria-labelledby="contact-section"
    >
      <div className="flex flex-col justify-center items-center px-5 md:px-10 max-w-6xl mx-auto w-full">
        <div
          className="relative flex flex-col items-center md:gap-6 gap-4 border-4 border-black p-6 md:p-20 w-full shadow-[10.03px_10.03px_0px_#BFBFB4]"
          role="region"
          aria-labelledby="contact-section"
        >
          {/* Positioned Image */}
          <img
            src={WebDev} // Use the imported WebDev image
            alt="Web Development Icon"
            className="absolute top-0 md:right-40 right-10 w-14 h-14 md:w-40 md:h-40 transform translate-x-1/2 -translate-y-1/2"
          />
          <h2
            id="contact-section"
            className="text-2xl md:text-[40px] font-medium text-txtcolor leading-0 md:leading-10 text-center"
          >
            Let’s Discuss Your Project
          </h2>
          <p className="text-lg md:text-[20px] text-[16px] font-regular text-txtcolor text-center md:w-[60%] w-full">
          Let’s make something new, different and more meaningful or make thing more visual or conceptual
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.rmady@gmail.com&su=Design%20Project%20Inquiry"
            target="_blank"
            className="btn-primary ease-in duration-300 hover:bg-primary/80 hover:scale-105 transition-transform px-5 py-3 rounded:ring-primary mt-5"
            aria-label="Get in Touch"
          >
            Send Me Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
