import React, { useState, useEffect } from "react";
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
import Noa_popup from "../assets/images/Noa_popup.png";

SwiperCore.use([Pagination, Autoplay]);

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Add event listener when popup is shown to disable scrolling
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Remove event listener when popup is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const projects = [
    {
      img_popup: Noa_popup,
      img: project1,
      label: "UI/UX DESIGN",
      name: "Noa Coach",
      description:
        "Noa Coach integrates your company's wellbeing initiatives with AI coaching and neuroscience-backed activities to minimise stress and maximise output",
    },
    {
      img_popup: Noa_popup,
      img: project2,
      label: "UI/UX DESIGN",
      name: "Stranger Lust",
      description:
        "Stranger Lust is an creator-oriented internet content service and designed to meet the needs of people who create content for the web. ",
    },
    {
      img_popup: Noa_popup,
      img: project3,
      label: "WEB DESIGN",
      name: "SportsTXT",
      description:
        "SportsTXT is an online platform designed to deliver the ultimate sports fan experience. Engage with other...",
    },
    {
      img_popup: Noa_popup,
      img: project4,
      label: "WEB DESIGN",
      name: "SupportTXT",
      description:
        "The engagement platform for the community is a place where members can come to learn, grow, and connect...",
    },
    {
      img_popup: Noa_popup,
      img: project5,
      label: "WEB DESIGN",
      name: "Share My Circle",
      description:
        "Share My Circle offers a space for soon-to-be-married couples to invite their circle of family and friends to be connected...",
    },
  ];

  const filteredProjects = activeTab === "All" ? projects : projects.filter(project => project.label === activeTab);

  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="projects" className="md:py-36 py-12 bg-bgcolor relative">
      <div className="flex flex-col justify-center items-center px-5 max-w-6xl mx-auto w-full gap-10">
        <div className="flex flex-col items-center gap-5">
          <img src={intro} alt="About" />
          <h2 className="text-2xl md:text-4xl leading-tight font-semibold text-txtcolor">
            My Creative <span className="text-primary">Works</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 w-full justify-center">
          {/* Render tab buttons */}
          <button onClick={() => setActiveTab("All")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "All" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>All</button>
          <button onClick={() => setActiveTab("UI/UX DESIGN")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "UI/UX DESIGN" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>UI/UX Design</button>
          <button onClick={() => setActiveTab("WEB DESIGN")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "WEB DESIGN" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>Web Design</button>
          <button onClick={() => setActiveTab("GRAPHIC DESIGN")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "GRAPHIC DESIGN" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>Graphic Design</button>
          <button onClick={() => setActiveTab("DEVELOPMENT")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "DEVELOPMENT" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>Development</button>
        </div>
        <div className="max-w-full gap-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-left py-5 px-5 bg-bgaccent rounded-lg gap-1">
                  <img src={project.img} alt={project.name} className="w-full rounded-lg mb-3" />
                  <p className="font-regular text-txtcolor/50 text-sm">{project.label}</p>
                  <h3 className="text-lg font-semibold text-txtcolor">{project.name}</h3>
                  <p className="font-regular text-txtcolor">{project.description.substring(0, 100) + "..."}</p>
                  <div className="flex gap-2 mt-1">
                    <button onClick={() => openPopup(project)} className="text-primary bg-accent/10 px-2 py-1 rounded-lg">Read More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
  <div className="fixed inset-0 flex justify-center items-center z-50">
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closePopup}></div>
    <div className="bg-white rounded-lg max-w-[1000px] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="mb-4 md:mb-0">
          <img src={selectedProject.img_popup} alt={selectedProject.name} className="rounded-lg" />
        </div>
        <div>
          <div className="flex justify-end">
            <button onClick={closePopup} className="absolute top-0 right-0 mt-3 mr-3 text-gray-600 hover:text-gray-800">
              <ion-icon name="close" class="text-[30px]"></ion-icon>
            </button>
          </div>
          <h2 className="text-txtcolor text-2xl font-semibold mb-4">{selectedProject.name}</h2>
          <p className="text-txtcolor">{selectedProject.description}</p>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Project;
