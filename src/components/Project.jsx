import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import project1 from "../assets/images/Noa.png";
import project2 from "../assets/images/Stranger Lust.png";
import project3 from "../assets/images/SportsTXT.png";
import project4 from "../assets/images/SupportTXT.png";
import project5 from "../assets/images/ShareMyCircle.png";
import intro from "../assets/images/Portfolio.svg";

SwiperCore.use([Pagination, Autoplay]);

const Project = () => {
  const projects = [
    {
      img: project1,
      label: "UI/UX DESIGN",
      name: "Noa Coach",
      description:
        "Noa Coach integrates your company's wellbeing initiatives with AI coaching and neuroscience-backed activities...",
      github_link: "https://github.com/rmadayag/Tribute",
    },
    {
      img: project2,
      label: "UI/UX DESIGN",
      name: "Stranger Lust",
      description:
        "Stranger Lust is an creator-oriented internet content service and designed to meet the needs of people...",
      github_link: "https://github.com/rmadayag/Product",
    },
    {
      img: project3,
      label: "WEB DESIGN",
      name: "SportsTXT",
      description:
        "SportsTXT is an online platform designed to deliver the ultimate sports fan experience. Engage with other...",
      github_link: "https://github.com/rmadayag/Technical",
    },
    {
      img: project4,
      label: "WEB DESIGN",
      name: "SupportTXT",
      description:
        "The engagement platform for the community is a place where members can come to learn, grow, and connect...",
      github_link: "https://github.com/rmadayag/Survey",
    },
    {
      img: project5,
      label: "WEB DESIGN",
      name: "Share My Circle",
      description:
        "Share My Circle offers a space for soon-to-be-married couples to invite their circle of family and friends to be connected...",
      github_link: "https://github.com/rmadayag/Survey",
    },
  ];

  return (
    <section id="projects" className="md:py-36 py-12 bg-bgcolor">
      <div className="flex flex-col justify-center items-center px-5 max-w-6xl mx-auto w-full gap-10">
        <div className="flex flex-col items-center gap-5">
          <img src={intro} alt="About" />
          <h2 className="text-2xl md:text-4xl leading-tight font-semibold text-txtcolor">
            My Creative <span className="text-primary">Works</span>
          </h2>
        </div>
        <div className="max-w-full px-5 gap-5">
          <Swiper
            slidesPerView={1} // One slide per view by default
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{ // Define breakpoints for responsive design
              768: {
                slidesPerView: 3, // Three slides per view on screens larger than 768px
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-left py-5 px-5 bg-bgaccent rounded-lg gap-1">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full rounded-lg mb-3"
                  />
                  <p className="font-regular text-txtcolor/50 text-sm">
                    {project.label}
                  </p>
                  <h3 className="text-lg font-semibold text-txtcolor">
                    {project.name}
                  </h3>
                  <p className="font-regular text-txtcolor">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-1">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary bg-accent/10 px-2 py-1 rounded-lg"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="#contact"
            className="inline-block"
          >
            <button className="btn-primary ease-in duration-300 hover:bg-primary/80">
              View More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
