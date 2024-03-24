import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/1.png";
import project2 from "../assets/images/2.png";
import project3 from "../assets/images/3.png";
import qoute from "../assets/images/qt.svg"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Testimony = () => {
  const projects = [
    {
      qoute: qoute,
      testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus.",
      img: project1,
      name: "Lorem ipsum ",
    },
    {
        qoute: qoute,
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus.",
      img: project2,
      name: "Lorem ipsum ",
    },
    {
        qoute: qoute,
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus mattis tellus.",
      img: project3,
      name: "Lorem ipsum ",
    },
   
  ];
  return (
    <section id="testimony" className="py-28 text-white bg-white/5">
      <div className="text-txtcolor text-center px-5 max-w-6xl mx-auto">
        <h3 className="md:text-4xl text-2xl md:leading-normal leading-10 font-medium mb-2">
          What they say
        </h3>
        <div className="flex max-w-full gap-5 px-5 mx-auto items-center relative mt-12">
          <div className="w-full">
            <Swiper
              slidesperview={1}
              spaceBetween={20}
              breakpoints={{
                393: { slidesperview: 1.3, spaceBetween: 10 },
                768: { slidesperpiew: 3, spaceBetween: 20 },
              }}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project, i) => (
              <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-white/10 rounded-xl flex flex-col items-center justify-center">
                <img src={project.qoute} alt="Quote" className="rounded-lg" />
                <p className="my-4">{project.testimony}</p>
                <img src={project.img} alt={project.name} className="rounded-lg" />
                <p className="font-semibold my-4">{project.name}</p>
              </div>
            </SwiperSlide>
            
             
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
