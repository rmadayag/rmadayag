import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/image.png";
import project2 from "../assets/images/image2.png";
import project3 from "../assets/images/image3.png";
import project4 from "../assets/images/image4.png";
import project5 from "../assets/images/image5.png";
import project6 from "../assets/images/image5.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: " Tribute Page",
      github_link: "https://github.com/rmadayag/Tribute",
      live_link: "https://rmadayag.github.io/Tribute/",
    },
    {
      img: project2,
      name: "PS4 Controller Landing Page",
      github_link: "https://github.com/rmadayag/Product",
      live_link: "https://rmadayag.github.io/Product/",
    },
    {
      img: project3,
      name: " Technical Document",
      github_link: "https://github.com/rmadayag/Technical",
      live_link: "https://rmadayag.github.io/Technical/",
    },
    {
      img: project4,
      name: "Survey Form",
      github_link:
        "https://github.com/rmadayag/Survey",
      live_link: "https://rmadayag.github.io/Survey/",
    },
    {
      img: project5,
      name: "NFT's",
      github_link: "c",
      live_link: "c",
    },
    {
      img: project6,
      name: "NFT's",
      github_link: "c",
      live_link: "c",
    },
  ];
  return (
    <section id="projects" className="py-10 text-txtcolor">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-primary">Projects</span>
        </h3>
        <p className="text-secondary mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-accent/10 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-primary bg-accent/50 px-2 py-1 inline-block rounded-lg"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-primary bg-accent/50 px-2 py-1 inline-block rounded-lg"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
