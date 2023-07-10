import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    "logo-facebook",
    "logo-twitter",
    "logo-github",
    "logo-linkedin",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10c font-bold">
            <span className="text-black md:text-3xl text-10xl">
            Howdy,
              <br />
            </span>
            <span className="text-primary">I'm Rheynalyn</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-secondary">
            UI/UX Designer
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-secondary hover:text-primary cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
