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
import project6 from "../assets/images/Chekkee.png";
import project7 from "../assets/images/NMS.png";
import project8 from "../assets/images/Maha.png";
import intro from "../assets/images/Portfolio.svg";
import Noa_popup from "../assets/images/Noa_popup.png";
import Noa_color from "../assets/images/Noa_color.svg";
import Noa_logo from "../assets/images/Noa_logo.svg";
import Strangerlust_color from "../assets/images/Strangerlust_color.svg";
import Strangerlust_logo from "../assets/images/Strangerlust_logo.svg";
import Strangerlust_popup from "../assets/images/Strangerlust_popup.png";
import SportTXT_color from "../assets/images/SportTXT_color.svg";
import SportTXT_logo from "../assets/images/SportTXT_logo.svg";
import SportTXT_popup from "../assets/images/SportTXT_popup.png";
import SupportTXT_color from "../assets/images/SupportTXT.color.svg";
import SupportTXT_logo from "../assets/images/SupportTXT_logo.svg";
import SupportTXT_popup from "../assets/images/SupportTXT_popup.png";
import SMC_color from "../assets/images/SMC_color.svg";
import SMC_logo from "../assets/images/SMC_logo.svg";
import SMC_popup from "../assets/images/SMC_popup.png";
import Chekkee_color from "../assets/images/Chekkee_color.svg";
import Chekkee_logo from "../assets/images/Chekkee_logo.svg";
import Chekkee_popup from "../assets/images/Chekkee_popup.png";
import NMS_color from "../assets/images/NMS_color.svg";
import NMS_logo from "../assets/images/NMS_logo.svg";
import NMS_popup from "../assets/images/NMS_popup.png";
import Maha_color from "../assets/images/Maha_color.svg";
import Maha_logo from "../assets/images/Maha_logo.svg";
import Maha_popup from "../assets/images/Maha_popup.png";




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
      name: "Noa Coach AI",
      description:
        "Noa Coach integrates your company's wellbeing initiatives with AI coaching and neuroscience-backed activities to minimise stress and maximise output",
      typography1: "Raleway",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Montserrat",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: Noa_color,
      logo_svg: Noa_logo,
      type: "Type : Mobile Application | Web Application",
      design_tool: "Design Tool : Figma",
      live_preview: "https://noacoach.com/",
    },
    {
      img_popup: Strangerlust_popup,
      img: project2,
      label: "UI/UX DESIGN",
      name: "Stranger Lust",
      description:
        "Stranger Lust is an creator-oriented internet content service and designed to meet the needs of people who create content for the web ",
      typography1: "Poppins",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Questrial",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: Strangerlust_color,
      logo_svg: Strangerlust_logo,
      type: "Type : Web Application",
      design_tool: "Design Tool : Figma",
      live_preview: "https://",
    },
    {
      img_popup: Maha_popup,
      img: project8,
      label: "UI/UX DESIGN",
      name: "My Allied Health Academy",
      description:
        "My Allied Health Academy (MAHA) provides an ongoing learning subscription in the form of lessons to student practioners who wish to subscribe to the course",
      typography1: "Poppins",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Questrial",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: Maha_color,
      logo_svg: Maha_logo,
      type: "Type : Web Application",
      design_tool: "Design Tool : Figma",
      live_preview: "https://",
    },
    {
      img_popup: Chekkee_popup,
      img: project6,
      label: "WEB DESIGN | DEVELOPMENT",
      name: "Chekkee",
      description:
        "Chekkee is a content moderation company based in Australia. Providing real-time human and AI-powered content moderation solutions for all kinds of online platforms",
      typography1: "DM Sans",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "DM Sans",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: Chekkee_color,
      logo_svg: Chekkee_logo,
      type: "Type : Website",
      design_tool: "Platform : Wordpress",
      live_preview: "https://chekkee.com/",
    },
    {
      img_popup: SportTXT_popup,
      img: project3,
      label: "WEB DESIGN | DEVELOPMENT",
      name: "SportsTXT",
      description:
        "SportsTXT is an online platform designed to deliver the ultimate sports fan experience. Engage with other fans, get insider facts about your favorite teams",
      typography1: "Poppins",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Poppins",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: SportTXT_color,
      logo_svg: SportTXT_logo,
      type: "Type : Website",
      design_tool: "Platform : Wordpress",
      live_preview: "https://sportstxt.com/",
    },
    {
      img_popup: SupportTXT_popup,
      img: project4,
      label: "WEB DESIGN | DEVELOPMENT",
      name: "SupportTXT",
      description:
        "The engagement platform for the community is a place where members can come to learn, grow, and connect with each other",
      typography1: "Poppins",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Poppins",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: SupportTXT_color,
      logo_svg: SupportTXT_logo,
      type: "Type : Website",
      design_tool: "Platform : Wordpress",
      live_preview: "https://supporttxt.com/",
    },
    {
      img_popup: SMC_popup,
      img: project5,
      label: "WEB DESIGN | DEVELOPMENT",
      name: "Share My Circle",
      description:
        "Share My Circle offers a space for soon-to-be-married couples to invite their circle of family and friends to be connected with them throughout their wedding journey",
      typography1: "Poppins",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Poppins",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: SMC_color,
      logo_svg: SMC_logo,
      type: "Type : Website",
      design_tool: "Platform : Wordpress",
      live_preview: "https://sharemycircle.com/",
    },
    {
      img_popup: NMS_popup,
      img: project7,
      label: "WEB DESIGN | DEVELOPMENT",
      name: "New Media Services PH",
      description:
        "New Media Services specializes in delivering intelligent outsourcing services through a combination of machine learning and human-powered activities",
      typography1: "Poppins",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Poppins",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: NMS_color,
      logo_svg: NMS_logo,
      type: "Type : Website",
      design_tool: "Platform : Wordpress",
      live_preview: "https://nms.ph/",
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
          <button onClick={() => setActiveTab("WEB DESIGN | DEVELOPMENT")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "WEB DESIGN | DEVELOPMENT" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>Design | Development</button>
          {/* <button onClick={() => setActiveTab("GRAPHIC DESIGN")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "GRAPHIC DESIGN" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>Graphic Design</button> */}
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
  <div className="fixed inset-0 flex justify-center items-center z-50 overflow-y-auto">
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closePopup}></div>
    <div className="bg-white rounded-lg max-w-[90%] md:max-w-[1000px] w-[90%] md:w-auto max-h-[80vh] overflow-y-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="mb-5 md:mb-0">
          <img src={selectedProject.img_popup} alt={selectedProject.name} className="rounded-lg" />
        </div>
        <div>
          <div className="flex justify-end">
            <button onClick={closePopup} className="absolute top-0 right-0 mt-3 mr-3 text-gray-600 hover:text-gray-800">
              <ion-icon name="close" class="text-[25px]"></ion-icon>
            </button>
          </div>
          <h2 className="text-txtcolor text-2xl font-semibold mb-5">{selectedProject.name}</h2>
          <p className="text-txtcolor/50 mb-2">{selectedProject.label}</p>
          <p className="text-txtcolor mb-2">{selectedProject.description}</p>
          <p className="text-txtcolor/50 mb-2">{selectedProject.type}</p>
          <p className="text-txtcolor/50 mb-2">{selectedProject.design_tool}</p>
          <img src={selectedProject.logo_svg} alt={selectedProject.name} className="mb-5" />
          <img src={selectedProject.color_svg} alt={selectedProject.name} className="mb-5" />
          <div className="mb-5">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <p className="text-txtcolor">{selectedProject.typography1}</p>
                <p className="text-txtcolor font-Poppins font-semibold text-lg">{selectedProject.typography_bold}</p>
              </div>
              <div>
                <p className="text-txtcolor">{selectedProject.typography2}</p>
                <p className="text-txtcolor font-Poppins font-regular text-lg">{selectedProject.typography_regular}</p>
              </div>
            </div>
          </div>
          <a
            href={selectedProject.live_preview}
            target="_blank"
            className="text-primary bg-primary/10 px-2 py-1 inline-block rounded-lg"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>
  </div>
)}


    </section>
  );
};

export default Project;
