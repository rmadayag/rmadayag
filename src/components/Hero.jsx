import React from "react";
import hero from "../assets/images/hero.png";
import intro from "../assets/images/hello.svg";
import cvPdf from "../assets/Madayag_Rheynalyn.pdf";

const Hero = () => {
  const handleDownload = () => {
    window.open(cvPdf);
  };

  return (
    <section id="home" className="md:py-36 pt-28 pb-12 text-white bg-bgaccent">
      <div className="flex md:flex-row flex-col items-center md:gap-10 gap-10 px-5 max-w-6xl mx-auto">
        {/* Image container */}
        <div className="flex-1 md:order-2">
          <div className="lg:w-100 h-full relative sm:w-100 w-full max-w-lg">
            <img src={hero} alt="Rheynalyn" />
          </div>
        </div>
        {/* Text content container */}
        <div className="flex-1 md:order-1 items-start">
          <div className="flex flex-col items-start gap-5">
            <img src={intro} alt="Introduction" />
            <h1 className="md:text-6xl text-4xl md:leading-tight leading-tight font-semibold text-txtcolor">
              I'm <span className="text-primary">Rheynalyn</span> Madayag
            </h1>
            <h4 className="md:text-1xl text-lg font-regular text-txtcolor">
              I'm a UI/UX Designer and Web Developer. I strive to build
              immersive and beautiful web applications through carefully
              crafted code and user-centric design.
            </h4>
            <button
              onClick={handleDownload}
              className="btn-primary ease-in duration-300 hover:bg-primary/80"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
