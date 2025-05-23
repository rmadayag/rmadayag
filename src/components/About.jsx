import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaReact, FaGitAlt,
  FaWordpress, FaFigma, FaElementor, FaCode
} from "react-icons/fa";
import {
  SiVite, SiTailwindcss, SiMui, SiAdobephotoshop, SiAdobeillustrator,
  SiFirebase, SiOxygen, SiCanva
} from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  { name: "VSCode", icon: <FaCode className="text-[#007ACC]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "MUI", icon: <SiMui className="text-[#007FFF]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
  { name: "PHP", icon: <DiPhp className="text-[#777BB4]" /> },
  { name: "MySQL", icon: <GrMysql className="text-[#4479A1]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Divi WP", icon: <FaWordpress className="text-[#21759B]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
  { name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" /> },
  { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
  { name: "Elementor", icon: <FaElementor className="text-[#EF3B75]" /> },
  { name: "Oxygen Builder", icon: <SiOxygen className="text-[#00AEEF]" /> },
];

const Counter = ({ target }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = target / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <span className="text-[3.5rem] md:text-[56px] font-bold text-primary">
      {count}+
    </span>
  );
};

const splitTextToWords = (text) => {
  return text.split(" ").map((word, index) => {
    // Add space after each word except the last
    return (
      <span
        key={index}
        className="inline-block text-gray-600 mr-1"
        style={{ color: "#C9C9C9" }}
      >
        {word}
      </span>
    );
  });
};

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const words = document.querySelectorAll(".highlight-word span");
    if (words.length) {
      gsap.to(words, {
        color: "#0A0C09", // highlight color
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".highlight-word",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    }
  }, []);

  const aboutText =
    "I’m a Web Developer and UI/UX Designer passionate about crafting intuitive, user-focused, and responsive digital experiences. With a keen eye for design and a strong foundation in front-end development, I bridge the gap between visual aesthetics and seamless functionality.";

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col gap-20 md:gap-40 w-full">
        {/* About Me Section */}
        <div
          className="flex flex-col items-center text-center gap-8 md:gap-10"
          data-aos="fade-up"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-txtcolor">
            About Me
          </p>

          <p
            className="text-base md:text-[38px] font-medium max-w-5xl leading-relaxed md:leading-normal highlight-word"
            style={{ cursor: "default" }}
          >
            {splitTextToWords(aboutText)}
          </p>

          {/* Statistics */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-6 w-full max-w-4xl"
            data-aos="fade-up"
          >
            {[
              { title: "Projects Completed", value: 60 },
              { title: "Satisfied Clients", value: 45 },
              { title: "Hours of Work", value: 820 },
            ].map(({ title, value }, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Counter target={value} />
                <div className="my-2 w-36 h-[1px] bg-txtcolor" />
                <p className="text-txtcolor text-lg font-normal">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Toolbox Section */}
        <section id="toolbox" className="w-full" data-aos="fade-up">
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-txtcolor mb-8 sm:mb-12">
            Toolbox
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 lg:gap-y-10 gap-x-8 lg:gap-x-16 items-start mb-12">
            <h3 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-medium text-primary leading-tight">
              DESIGN & DEVELOPMENT
            </h3>
            <p className="text-base sm:text-lg text-txtcolor max-w-xl">
            The tools I use to craft clean designs and smooth builds. They power every step from concept to launch.
            </p>
          </div>

          <div className="border-t border-gray-300 mb-12" />

          <div
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-y-16 gap-x-6 md:gap-x-10"
            data-aos="fade-up"
          >
            {techStack.map(({ name, icon }, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center justify-center"
              >
                {React.cloneElement(icon, {
                  className:
                    "w-8 h-8 md:w-10 md:h-10 transform group-hover:scale-110 transition-transform duration-300",
                })}
                <span className="absolute bottom-[-30px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;