import React from "react";
import hero from "../assets/images/hero.png";
import intro from "../assets/images/hello.svg";

const Hero = () => {
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
        <div className="flex-1 md:order-1">
          <div className="text-txtcolor">
            <img src={intro} className ="mb-5" alt="Introduction" />
            <h1 className="md:text-6xl text-4xl md:leading-tight leading-tight font-semibold">
              I'm <span className="text-primary">Rheynalyn</span> Madayag
            </h1>
            <h4 className="md:text-1xl text-lg my-5 font-regular text-txtcolor">
              I'm a Freelance UI/UX Designer and Web Developer. I strive to build
              immersive and beautiful web applications through carefully
              crafted code and user-centric design.
            </h4>
            <a
              href="./src/assets/Madayag, Rheynalyn C.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <button className="btn-primary ease-in duration-300 hover:bg-primary/80">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
