import React from "react";
import about from "../assets/images/about.png";
import HTML from "../assets/images/HTML.svg";
import CSS from "../assets/images/CSS.svg";
import JS from "../assets/images/JS.svg";
import BOOTSTRAP from "../assets/images/BOOTSTRAP.svg";
import NODEJS from "../assets/images/NODEJS.svg";
import REACT from "../assets/images/REACT.svg";
import VITE from "../assets/images/VITE.svg";
import VSCODE from "../assets/images/VSCODE.svg";
import TAILWIND from "../assets/images/TAILWIND.svg";
import MUI from "../assets/images/MUI.svg";
import GIT from "../assets/images/GIT.svg";
import WP from "../assets/images/WP.svg";
import FIGMA from "../assets/images/FIGMA.svg";
import PS from "../assets/images/PS.svg";
import AI from "../assets/images/AI.svg";
import CANVA from "../assets/images/CANVA.svg";
import intro from "../assets/images/about.svg"
import intro2 from "../assets/images/Skills.svg"

const About = () => {
  const skills = [
    { logo: HTML },
    { logo: CSS },
    { logo: JS },
    { logo: BOOTSTRAP },
    { logo: NODEJS },
    { logo: REACT },
    { logo: VITE },
    { logo: VSCODE },
    { logo: TAILWIND },
    { logo: MUI },
    { logo: GIT },
    { logo: WP },
    { logo: FIGMA },
    { logo: PS },
    { logo: AI },
    { logo: CANVA },
  ];

  return (
    <>
      <section id="about" className="py-28 bg-white/5 ">
        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-10 px-5 max-w-6xl mx-auto">
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-100 h-full relative sm:w-100 w-full max-w-lg">
              <img src={about} alt="Rheynalyn" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-txtcolor">
            <img
                src={intro} 
                alt="About"
              />
            <h2 className="md:text-4xl text-2xl md:leading-normal leading-10 font-semibold md:text-left">
            I am Professional User <span className="text-primary">Experience Designer</span>
          </h2>
              <p className="mt-4 mb-10 text-txtcolor">
              I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
              </p>
              <a href="./src/assets/Copy of Beige Company Organizational Chart Graph.pdf" download>
                <button className="btn-primary ease-in duration-300 hover:bg-primary/80">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-28">
      <div className=" text-txtcolor text-center px-5 max-w-6xl mx-auto">
      <img
                src={intro2} 
                alt="Skills"
                className="inline-block"
              />
      <h2 className="md:text-4xl text-2xl md:leading-normal leading-10 font-semibold">
      I Develop Skills <span className="text-primary"> Regularly</span>
          </h2>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div key={i} className="w-24 h-24 flex items-center justify-center">
              <img src={skill.logo} alt={`Logo ${i}`} />
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default About;
