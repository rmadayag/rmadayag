import React, { useEffect } from "react";
import hero from "../assets/images/hero.png";
import menuIcon from "/Arrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/rheynalyn-madayag-998100242/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/" },
  { label: "FACEBOOK", href: "https://www.facebook.com/" },
  { label: "GITHUB", href: "https://github.com/rmadayag" },
];

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/drive/folders/1HD-v_gAxkqfLajnqN6UdWSMyZeEKV2mg?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home" className="w-full bg-bgcolor" aria-live="polite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
        
        {/* Left Column */}
        <div
          data-aos="fade-up"
          className="
            lg:col-span-3 
            flex flex-col 
            items-center text-center 
            lg:items-start lg:text-left
            pt-24 sm:pt-32 lg:pt-40 xl:pt-48
          "
        >
          <p className="mb-36 text-xs sm:text-sm md:text-base hidden lg:block">
            AVAILABLE FOR PROJECT
          </p>
          <p className="text-sm sm:text-base leading-relaxed max-w-[300px] sm:max-w-[400px] md:max-w-[360px] lg:max-w-[320px] xl:max-w-[360px]">
            My goal is to craft seamless interfaces that are both functional and visually engaging.
          </p>
          <button
            onClick={handleDownload}
            aria-label="Download my CV"
            className="mt-6 btn-primary px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base rounded ring-primary ease-in duration-300 hover:bg-primary/80 hover:scale-105 transition-transform"
          >
            Download CV
          </button>
        </div>

        {/* Center Column */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="lg:col-span-6 flex justify-center items-start"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[900px]">
            <img
              src={hero}
              alt="Rheynalyn, a Web Developer and UI/UX Designer"
              className="w-full h-auto object-cover"
            />
            <h1
              className="
                absolute bottom-[-20px] md:bottom-[-40px] 
                left-1/2 transform -translate-x-1/2
                text-bold 
                text-[4.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[11.5rem] 
                font-bold tracking-wider select-none
                leading-none
              "
            >
              RHEYNA
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="
            hidden lg:flex lg:col-span-3 
            flex-col items-center text-center 
            lg:items-end lg:text-right 
            pt-0 lg:pt-40 xl:pt-48 
            space-y-4
          "
        >
          <p className="mb-36 text-xs sm:text-sm md:text-base hidden lg:block">
            CREATING SINCE 2022
          </p>
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm md:text-base uppercase transition-transform duration-300 hover:scale-110"
            >
              {label}
              <img src={menuIcon} alt="Arrow Icon" className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;