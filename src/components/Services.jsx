import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoArrowUpRight } from "react-icons/go";
import UIandUX from "../assets/images/img_service-1.png";
import Graphic from "../assets/images/img_service-2.png";
import SEO from "../assets/images/img_service-3.png";
import WebDev from "../assets/images/img_service-4.png";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "I design intuitive and engaging user interfaces, ensuring seamless experiences through wireframing, prototyping, and usability testing.",
    icon: UIandUX,
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "I build visually appealing and responsive websites that work flawlessly across devices. My focus is on combining aesthetics with functionality to deliver a great user experience.",
    icon: Graphic,
  },
  {
    id: 3,
    title: "App Design",
    description:
      "I create user-friendly and visually engaging mobile app interfaces. My designs prioritize smooth navigation and optimal usability for all users.",
    icon: SEO,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "I develop responsive, dynamic, and user-friendly websites, ensuring seamless functionality, performance, and an engaging digital experience.",
    icon: WebDev,
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="service"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      {/* Section Title */}
      <p className="text-xl sm:text-2xl font-normal text-txtcolor mb-10">
        What I do
      </p>
      {/* Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-12 md:gap-x-24 mb-10">
        <div>
          <h3 className="text-primary font-medium text-[clamp(2.5rem,6vw,4.375rem)] leading-tight">
            SERVICES EXPERTISE
          </h3>
        </div>
        <div>
          <p className="text-base sm:text-lg text-txtcolor max-w-xl">
            Bring your ideas to life with my expertise. I turn concepts into
            engaging, functional digital experiences.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 mb-10" />

      {/* Services List */}
      <div className="flex flex-col gap-10">
        {servicesData.map(({ id, title, description, icon }, index) => (
          <div
            key={id}
            className="relative cursor-pointer p-6 md:p-8 w-full border-b border-gray-300 group"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-6 sm:gap-4">
              {/* Title */}
              <div className="sm:col-span-1">
                <p className="text-primary font-medium text-2xl sm:text-3xl md:text-4xl leading-tight">
                  {title}
                </p>
              </div>

              {/* Hover Image */}
              <div className="sm:col-span-1 relative h-[1px]">
                {hovered === id && (
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="hidden md:block absolute top-1/2 left-1/2 max-w-[230px] max-h-[260px] object-cover opacity-90 pointer-events-none"
                    style={{
                      transform: "translate(-50%, -50%) rotate(10deg)",
                      filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))",
                      zIndex: 10,
                    }}
                  />
                )}
              </div>

              {/* Description + Arrow */}
              <div className="sm:col-span-2 grid grid-cols-6 items-center gap-2 mt-4 sm:mt-0">
                <p className="col-span-5 text-sm sm:text-base md:text-lg text-txtcolor leading-relaxed">
                  {description}
                </p>
                <div className="col-span-1 flex justify-start">
                  <div
                    className="p-3 border border-txtcolor rounded-full text-txtcolor text-xl sm:text-2xl 
                               transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                  >
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;