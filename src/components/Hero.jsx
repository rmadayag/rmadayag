import React from "react";
import hero from "../assets/images/hero.png";
import intro from "../assets/images/hello.svg"

const Hero = () => {
  const social_media = [
    "logo-facebook",
    "logo-github",
    "logo-linkedin",
  ];

  return (
    <section id="home" className="py-36 text-white bg-hero-pattern">
        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-10 px-5 max-w-6xl mx-auto">
          <div className="flex-1">
            <div className="text-txtcolor my-3 text-center">
            <img
                src={intro} 
                alt="Hello"
              />
            <h1 className="md:text-6xl text-2xl md:leading-normal leading-10 font-semibold md:text-left">
            I'm  <span className="text-primary">Rheynalyn</span> Madayag
          </h1>
          <h4 className="md:text-1xl text-lg md:leading-normal leading-5 mt-4 font-regular text-txtcolor md:text-left">
          I'm a Freelance UI/UX Designer and Developer. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-secondary hover:text-txtcolor cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-100 h-full relative sm:w-100 w-full max-w-lg">
              <img
                src={hero}
                alt="Rheynalyn"
              />
            </div>
          </div>
        </div>
    
    </section>
  );
};

export default Hero;
