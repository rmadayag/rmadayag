import React from "react";
import UIandUXDesign from "../assets/images/UIandUXDesign.svg";
import GraphicDesign from "../assets/images/GraphicDesign.svg";
import WebDevelopment from "../assets/images/WebDevelopment.svg";

const Services = () => {
  const services = [
    {
      logo: UIandUXDesign, // Import SVG directly
      level: "Creative Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  "
     
    },
    {
      logo: GraphicDesign,
      level: "Responsive Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  "
    },
    {
      logo: WebDevelopment,
      level: "Clean Code",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  "
    },
  ];

  return (
    <section id="service" className="py-28 bg-white/5 items-center">
      <div className="text-txtcolor text-left px-5 max-w-6xl mx-auto">
        <h3 className="md:text-4xl text-2xl md:leading-normal leading-10c font-medium mb-2 text-center">
          My Services
        </h3>
        <div className="flex items-center justify-center mt-12 gap-5 flex-wrap">
          {services.map((skill, i) => (
            <div
              key={i}
              className="group relative lg:w-[355px] md:w-[200px] bg-white/10 p-5 rounded-xl"
            >
              {/* Render SVG using img tag */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={skill.logo} alt={`Logo ${i}`} />
              </div>
              <h3 className="text-xl mt-4 font-semibold">{skill.level}</h3>
              <p className="mt-4">{skill.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
