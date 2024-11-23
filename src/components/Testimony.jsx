import React from "react";
import project1 from "../assets/images/qt.svg";
import project2 from "../assets/images/qt.svg";
import project3 from "../assets/images/qt.svg";
import project4 from "../assets/images/qt.svg";

// Avatar images for each client
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import avatar4 from "../assets/images/avatar4.png";

const Testimony = () => {
  const projects = [
    { img: avatar1, name: "Dom", description: "I'm so happy with this design and excited to have it used—thank you so much! :)" },
    { img: avatar2, name: "Seff", description: "I'm happy I chose to collaborate with you. The project was completed on time and met all the requirements." },
    { img: avatar3, name: "Alex", description: "We were delighted to learn how you addressed and resolved the user interface issues and challenges on our website." },
    { img: avatar4, name: "Steph", description: "The design looks incredibly sleek and modern, with clean lines, contemporary style, and attention to detail that really stand out." },
  ];

  const getRotation = (index) => {
    const rotations = [-2, 10, 10, -2];
    return `rotate(${rotations[index] || (index + 1) * 3}deg)`;
  };

  return (
    <section id="testimony" className="py-12 md:py-[150px]">
      <div className="flex flex-col px-5 max-w-6xl mx-auto w-full gap-10">
        <div className="lg:w-full h-full relative sm:w-full w-full max-w-lg flex flex-col">
          <h2 className="md:text-[30px] text-2xl font-medium text-txtcolor md:mb-10 mb-0 leading-0 md:leading-10">
            Here’s what my clients are saying about my work
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-x-[0px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-left md:p-10 p-6 bg-white border-4 border-black md:gap-8 gap-4 hover:bg-[#FFC9F0] transition-all duration-200 ease-in-out shadow-[10.03px_10.03px_0px_#BFBFB4]"
              style={{ transform: getRotation(index) }}
            >
                <p className="font-regular text-txtcolor text-left md:text-[20px] text-[16px]">{project.description}</p>
              <div className="flex items-center gap-4">
                <img
                  src={project.img}
                  alt={`Testimonial from ${project.name}: ${project.description}`}
                  className="w-[60px] h-[60px] rounded-full" // Avatar styled as a circle
                />
                <h2 className="md:text-[26px] font-semibold text-txtcolor">{project.name}</h2>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
