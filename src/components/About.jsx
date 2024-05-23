import React, { useState } from "react";
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
import intro from "../assets/images/about.svg";
import { useSpring, animated } from "react-spring";

const About = () => {
  const [activeTab, setActiveTab] = useState("tech");

  // Content for each tab
  const tabContent = {
    tech: (
      <div className="flex items-center justify-left gap-6 flex-wrap py-2">
        <div key={0} className="w-10 h-10 flex items-center justify-center">
          <img src={HTML} alt="HTML Logo" />
        </div>
        <div key={1} className="w-10 h-10 flex items-center justify-center">
          <img src={CSS} alt="HTML Logo" />
        </div>
        <div key={2} className="w-10 h-10 flex items-center justify-center">
          <img src={JS} alt="HTML Logo" />
        </div>
        <div key={3} className="w-10 h-10 flex items-center justify-center">
          <img src={BOOTSTRAP} alt="HTML Logo" />
        </div>
        <div key={4} className="w-10 h-10 flex items-center justify-center">
          <img src={NODEJS} alt="HTML Logo" />
        </div>
        <div key={5} className="w-10 h-10 flex items-center justify-center">
          <img src={REACT} alt="HTML Logo" />
        </div>
        <div key={6} className="w-10 h-10 flex items-center justify-center">
          <img src={VITE} alt="HTML Logo" />
        </div>
        <div key={7} className="w-10 h-10 flex items-center justify-center">
          <img src={VSCODE} alt="HTML Logo" />
        </div>
        <div key={8} className="w-10 h-10 flex items-center justify-center">
          <img src={TAILWIND} alt="HTML Logo" />
        </div>
        <div key={9} className="w-10 h-10 flex items-center justify-center">
          <img src={MUI} alt="HTML Logo" />
        </div>
        <div key={10} className="w-10 h-10 flex items-center justify-center">
          <img src={GIT} alt="HTML Logo" />
        </div>
        <div key={11} className="w-10 h-10 flex items-center justify-center">
          <img src={WP} alt="HTML Logo" />
        </div>
        <div key={12} className="w-10 h-10 flex items-center justify-center">
          <img src={FIGMA} alt="HTML Logo" />
        </div>
        <div key={13} className="w-10 h-10 flex items-center justify-center">
          <img src={PS} alt="HTML Logo" />
        </div>
        <div key={14} className="w-10 h-10 flex items-center justify-center">
          <img src={AI} alt="HTML Logo" />
        </div>
        <div key={15} className="w-10 h-10 flex items-center justify-center">
          <img src={CANVA} alt="HTML Logo" />
        </div>
        {/* Add other skills here */}
      </div>
    ),
    education: (
      <div className="flex flex-col text-txtcolor py-2">
        <p className="text-lg font-semibold">University of the Cordilleras</p>
        <p className="text-lg">Bachelor of Science in Information Technology </p>
        <p className="text-sm text-txtcolor/50">Batch 2022</p>
      </div>
    ),
    experience: (
      <div className="flex flex-col gap-5 text-txtcolor py-2">
        <div>
          <p className="text-lg font-semibold">Web Designer</p>
          <p className="text-lg">New Media Services Pty Ltd.</p>
          <p className="text-sm text-txtcolor/50">November 14, 2022 to Present</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Jr. Web Developer Intern</p>
          <p className="text-lg">Bitshares Labs Inc.</p>
          <p className="text-sm text-txtcolor/50">May 23, 2022 to August 4, 2022</p>
        </div>
      </div>

    ),
  };
  
  const styles = useSpring({
    from: { transform: 'scale(1)' },
    to: [
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ],
    config: { duration: 1000 },
    loop: { reverse: true }
  });

  const styles1 = useSpring({
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: 'translateY(-20px)' },
      { transform: 'translateY(0px)' }
    ],
    config: { duration: 1000 },
    loop: { reverse: true }
  });


  return (
    <>
      <section id="about" className="md:py-36 py-12 bg-white">
        <div className="flex md:flex-row flex-col md:gap-10 gap-10 px-5 max-w-6xl mx-auto">
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-100 h-full relative sm:w-100 w-full max-w-lg">
            <animated.img
                src={about}
                alt="Rheynalyn"
                style={styles1}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-start gap-5">
            <animated.img
              src={intro}
              alt="About"
              style={styles}
            />
              <h2 className="md:text-4xl text-2xl md:leading-tight leading-tight font-semibold text-txtcolor">
                I am UX/UI Designer <span className="text-primary">& Web Developer</span>
              </h2>
              <p className="md:text-1xl text-lg font-regular text-txtcolor">
              My expertise lies in blending aesthetic design with seamless functionality to craft websites and applications that not only look great but also provide exceptional user experiences.
              </p>
              <div className="flex flex-col md:flex-row md:gap-2 w-full">
                <button
                  className={`w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "tech" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"} rounded-[10px]`}
                  onClick={() => setActiveTab("tech")}
                >
                  Tech Stack
                </button>
                <button
                  className={`w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "education" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"} rounded-[10px]`}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </button>
                <button
                  className={`w-full md:w-auto text-lg py-2 px-4 font-regular focus:outline-none ${activeTab === "experience" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"} rounded-[10px]`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>
              </div>

              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
