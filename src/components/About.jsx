import React from "react";
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
import ELEMENTOR from "../assets/images/ELEMENTOR.svg";
import OXYGEN from "../assets/images/OXYGEN.svg";

// Define the tech stack images
const techStack = [
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "JS", image: JS },
  { name: "Bootstrap", image: BOOTSTRAP },
  { name: "Node.js", image: NODEJS },
  { name: "React", image: REACT },
  { name: "Vite", image: VITE },
  { name: "VSCode", image: VSCODE },
  { name: "Tailwind", image: TAILWIND },
  { name: "MUI", image: MUI },
  { name: "Git", image: GIT },
  { name: "WordPress", image: WP },
  { name: "Figma", image: FIGMA },
  { name: "Photoshop", image: PS },
  { name: "Illustrator", image: AI },
  { name: "Canva", image: CANVA },
  { name: "Elementor", image: ELEMENTOR },
  { name: "Oxygen", image: OXYGEN },
];

const About = () => {
  return (
    <section id="about" className="h-auto flex items-center py-12 md:py-[150px]">
      <div className="flex flex-col gap-20 px-5 max-w-6xl mx-auto w-full">
        <div className="w-full flex flex-col items-center justify-center gap-10 py-2 mx-auto px-6">
          <h2 className="md:text-[30px] text-2xl font-medium text-txtcolor leading-0 md:leading-10 text-center">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-20">
            {techStack.map(({ name, image }, index) => (
              <div
                key={index}
                className="relative group w-18 h-18 flex flex-col items-center justify-center"
              >
                {/* Logo */}
                <img
                  src={image}
                  alt={`${name} Logo`}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Tooltip */}
                <span className="absolute bottom-[-30px] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
