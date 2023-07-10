import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Year experience", count: "01" },
    { text: "Completed Projects", count: "12" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-txtcolor">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-primary">Me</span>
        </h3>
        <p className="text-secondary my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-secondary my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a Devolper and also a Designer. I graduated from University of the Cordilleras with bachelor’s degree in Information technology major in web technology. I am hardworking, honest, diligent, intelligent, and dedicated to the UI/UX Designer profession.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-txtcolor">
                      {content.count}
                      <span className="text-primary">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
