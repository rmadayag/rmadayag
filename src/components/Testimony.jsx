import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import project1 from "../assets/images/qt.svg";
import project2 from "../assets/images/qt.svg";
import project3 from "../assets/images/qt.svg";
import project4 from "../assets/images/qt.svg";
import project5 from "../assets/images/qt.svg";
import intro from "../assets/images/Testimonial.svg";

SwiperCore.use([Pagination, Autoplay]);

const Testimony = () => {
  const projects = [
    {
      img: project1,
      name: "Steph",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus. ",
      github_link: "https://github.com/rmadayag/Tribute",
    },
    {
      img: project2,
      name: "Bob",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus. ",
      github_link: "https://github.com/rmadayag/Product",
    },
    {
      img: project3,
      name: "Alex",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus. ",
      github_link: "https://github.com/rmadayag/Technical",
    },
    {
      img: project4,
      name: "Dominic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus. ",
      github_link: "https://github.com/rmadayag/Survey",
    },
    {
      img: project5,
      name: "Mike",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus. ",
      github_link: "https://github.com/rmadayag/Survey",
    },
  ];

  return (
    <section id="testimony" className="md:py-36 py-12 bg-bgaccent">
      <div className="flex flex-col justify-center items-center px-5 max-w-6xl mx-auto w-full gap-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={intro} alt="About" />
        <h2 className="text-2xl md:text-4xl leading-tight font-semibold text-txtcolor">
          What Clients <span className="text-primary">Say</span>
        </h2>
        </div>
        <div className="max-w-full px-5 gap-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            className="w-full" // Ensure the Swiper takes full width
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-end py-5 px-5 bg-bgcolor rounded-lg gap-1">
                  <img src={project.img} alt="Quote" className="w-[40px]" />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-txtcolor">
                      {project.name}
                    </h3>
                    <p className="font-regular text-txtcolor">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
