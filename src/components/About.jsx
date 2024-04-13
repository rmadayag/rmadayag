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
import intro2 from "../assets/images/Skills.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState("tech");

  // Content for each tab
  const tabContent = {
    tech: (
      <div className="flex items-center justify-left mt-5 gap-6 flex-wrap">
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
      <div className="flex flex-col mt-5">
      <p className="text-lg font-semibold">University of the Cordilleras</p>
      <p className="text-lg">Bachelor of Science in Information Technology </p>
      <p className="text-sm text-txtcolor/50">Batch 2022</p>
  </div>  
    ),
    experience: (
      <div className="flex flex-col mt-5 gap-5">
      <div>
      <p className="text-lg font-semibold">Web Designer</p>
      <p className="text-lg">New Media Services Pty Ltd.</p>
      <p className="text-sm text-txtcolor/50">November 14, 2023 to Present</p>
      </div>
      <div>
      <p className="text-lg font-semibold">Jr. Web Developer Intern</p>
      <p className="text-lg">Bitshares Labs Inc.</p>
      <p className="text-sm text-txtcolor/50">May 23, 2022 to August 4, 2022</p>
      </div>
      </div>  
      
    ),
  };

  return (
    <>
    <section id="about" className="md:py-36 py-12 bg-white/5">
      <div className="flex md:flex-row flex-col md:gap-10 gap-10 px-5 max-w-6xl mx-auto">
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-100 h-full relative sm:w-100 w-full max-w-lg">
            <img src={about} alt="Rheynalyn" />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-txtcolor">
            <img src={intro} className="mb-5" alt="About" />
            <h2 className="md:text-4xl text-2xl md:leading-tight leading-tight font-semibold">
              I am Professional User <span className="text-primary">Experience Designer</span>
            </h2>
            <p className="md:text-1xl text-lg my-5 font-regular text-txtcolor">
              I design and develop services for customers specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
            </p>
            <div className="flex flex-col md:flex-row md:gap-2">
              <button
                className={`text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "tech" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"} rounded-[10px]`}
                onClick={() => setActiveTab("tech")}
              >
                Tech Stack
              </button>
              <button
                className={`text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "education" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"} rounded-[10px]`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button
                className={`text-lg py-2 px-4 font-regular focus:outline-none ${activeTab === "experience" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"} rounded-[10px]`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
            </div>
            <div className="py-4">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default About;
