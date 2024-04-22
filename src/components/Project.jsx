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
import project9 from "../assets/images/Wittytongues.png";
import project10 from "../assets/images/SL.png";
import project11 from "../assets/images/ST.png";
import project12 from "../assets/images/Afflyfe.png";
import project13 from "../assets/images/Detox.png";
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
import Wittytongues_popup from "../assets/images/Wittytongues_popup.png";
import SL_popup from "../assets/images/SL_popup.png";
import ST_popup from "../assets/images/ST_popup.png";
import Afflyfe_color from "../assets/images/Afflyfe_color.svg";
import Afflyfe_logo from "../assets/images/Afflyfe_logo.svg";
import Afflyfe_popup from "../assets/images/Afflyfe_popup.png";
import Detox_color from "../assets/images/Detox_color.svg";
import Detox_logo from "../assets/images/Detox_logo.svg";
import Detox_popup from "../assets/images/Detox_popup.png";
import { useSpring, animated } from "react-spring";


SwiperCore.use([Pagination, Autoplay]);

const Project = () => {
  const [activeTab, setActiveTab] = useState("UI/UX DESIGN");
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
      label_to: "UI/UX DESIGN",
      name: "Noa Coach AI",
      description:
        "Noa Coach is a mobile application designed to provide users with personalized coaching and guidance for various aspects of their lives, such as health, wellness, productivity, and personal development.",
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
      label_to: "UI/UX DESIGN",
      name: "Stranger Lust",
      description:
        "Stranger Lust is a platform that connects users anonymously based on mutual interests and desires for casual encounters or exploration. Users typically create profiles with their preferences and interests.",
      typography1: "Poppins",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Questrial",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: Strangerlust_color,
      logo_svg: Strangerlust_logo,
      type: "Type : Web Application",
      design_tool: "Design Tool : Figma",
      live_preview: "https://strangerlust.com/",
    },
    {
      img_popup: Maha_popup,
      img: project8,
      label: "UI/UX DESIGN",
      label_to: "UI/UX DESIGN",
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
      live_preview: "https://myalliedhealthacademy.com/",
    },
    {
      img_popup: Chekkee_popup,
      img: project6,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
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
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "SportsTXT",
      description:
        "Being a sports fan is not just about watching games. SportsTXT is an online platform designed to deliver the ultimate sports fan experience. Engage with other fans, get insider facts about your favorite teams, and so much more.",
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
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "SupportTXT",
      description:
        "The engagement platform for the community is a place where members can come to learn, grow, and connect with each other. The content on the platform should be engaging, informative, and relevant to the interests of the community members.",
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
      label_to: "WEB DESIGN | DEVELOPMENT",
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
      label_to: "WEB DESIGN | DEVELOPMENT",
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
    {
      img_popup: Afflyfe_popup,
      img: project12,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN",
      name: "Afflyfe",
      description:
        "Afflyfe is a comprehensive NFT information platform designed to cater to both newcomers and experienced participants in the NFT space. Through a range of resources and features, Afflyfe aims to educate, inform, and connect individuals interested in NFTs",
      typography1: "Montserrat",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Montserrat",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: Afflyfe_color,
      logo_svg: Afflyfe_logo,
      type: "Type : Website",
      design_tool: "Design Tool : Figma",
      live_preview: "https://www.figma.com/proto/iDw0PzGdGinh46iqpauXiL/Projects?type=design&node-id=1-1999&t=d1Q1xZBTjVSGw1Qe-0&scaling=min-zoom&page-id=0%3A1",
    },
    {
      img_popup: Detox_popup,
      img: project13,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN",
      name: "San Diego Detox",
      description:
        "The San Diego Detox website likely serves as an online platform providing information and services related to detoxification programs in the San Diego area.",
      typography1: "Montserrat",
      typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
      typography2: "Montserrat",
      typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
      color_svg: Detox_color,
      logo_svg: Detox_logo,
      type: "Type : Website",
      design_tool: "Design Tool : Figma",
      live_preview: "https://www.figma.com/proto/iDw0PzGdGinh46iqpauXiL/Projects?type=design&node-id=5-1893&t=d1Q1xZBTjVSGw1Qe-0&scaling=min-zoom&page-id=1%3A5495",
    },
    {
      img_popup: Wittytongues_popup,
      img: project9,
      label: "GRAPHIC DESIGN",
      label_to: "GRAPHIC DESIGN",
      name: "Witty Tongues",
      description:
        "The central element of the logo is, of course, the tongue. It's a universal symbol of communication, speaking, and expression. It's bold and prominent, indicating the confidence and assertiveness associated with effective communication",
      description_2:
        "The tongue is portrayed in a stylized manner, perhaps with a curve or a twist, signifying wit, humor, and creativity. This suggests that communication with Witty Tongues isn't just about conveying information but doing so in an engaging and entertaining way.",
      type: "Type : Logo",
    },
    {
      img_popup: SL_popup,
      img: project10,
      label: "GRAPHIC DESIGN",
      label_to: "GRAPHIC DESIGN",
      name: "Stranger Lust",
      description:
        "The logo for Stranger Lust aims to capture the essence of intrigue and sensuality while maintaining tastefulness and elegance. It might feature a combination of elegant typography and subtle imagery, such as silhouettes or suggestive shapes, to evoke curiosity and anticipation.",
      description_2:
        "The logo's composition should be visually balanced and scalable across different platforms. Importantly, the design should avoid explicit imagery or vulgar connotations to uphold the brand's integrity and appeal.",
      type: "Type : Logo",
    },
    {
      img_popup: ST_popup,
      img: project11,
      label: "GRAPHIC DESIGN",
      label_to: "GRAPHIC DESIGN",
      name: "SportsTXT",
      description:
        "The logo for Sportstxt aims to represent the brand's focus on sports-related content through a combination of text and imagery. The typography is chosen to be bold and modern, reflecting the energy of sports. ",
      description_2:
        "Additionally, sports-related icons or symbols may be incorporated into the design to enhance its relevance. The color palette is vibrant and dynamic, evoking the excitement of sports events. The logo's composition is carefully balanced to ensure visual appeal and versatility across different platforms. ",
      type: "Type : Logo",
    },
  ];

  const filteredProjects = activeTab === "UX/UI DESIGN" ? projects : projects.filter(project => project.label === activeTab);

  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const styles = useSpring({
    from: { transform: 'scale(1)' },
    to: [
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ],
    config: { duration: 1000 },
    loop: { reverse: true }
  });


  return (
    <section id="projects" className="md:py-36 py-12 bg-bgcolor relative">
      <div className="flex flex-col justify-center items-center px-5 max-w-6xl mx-auto w-full gap-10">
        <div className="flex flex-col items-center gap-5">
          <animated.img
            src={intro}
            alt="Projects"
            style={styles}
          />
          <h2 className="text-2xl md:text-4xl leading-tight font-semibold text-txtcolor">
            My Creative <span className="text-primary">Works</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 w-full justify-center">
          <button onClick={() => setActiveTab("UI/UX DESIGN")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "UI/UX DESIGN" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>UI/UX Design</button>
          <button onClick={() => setActiveTab("WEB DESIGN | DEVELOPMENT")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "WEB DESIGN | DEVELOPMENT" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>Design | Development</button>
          <button onClick={() => setActiveTab("GRAPHIC DESIGN")} className={`rounded-[10px] w-full md:w-auto text-lg md:mr-2 md:mb-0 mb-2 py-2 px-4 font-regular focus:outline-none ${activeTab === "GRAPHIC DESIGN" ? "bg-primary text-white" : "bg-white text-txtcolor hover:bg-primary hover:text-white"}`}>Graphic Design</button>
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
                <div className="flex flex-col items-left py-5 px-5 bg-bgaccent rounded-lg gap-1 hover:bg-primary/10">
                  <img src={project.img} alt={project.name} className="w-full h-[200px] object-cover rounded-lg mb-3" />
                  <p className="font-regular text-txtcolor/50 text-sm">{project.label}</p>
                  <h3 className="text-lg font-semibold text-txtcolor">{project.name}</h3>
                  <p className="font-regular text-txtcolor">{project.description.substring(0, 120) + "..."}</p>
                  <div className="flex gap-2 mt-1">
                    <button onClick={() => openPopup(project)} className="text-primary bg-accent/10 px-2 py-1 rounded-lg hover:scale-105">Read More</button>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* General Project Popup */}
      {showPopup && selectedProject && activeTab !== "GRAPHIC DESIGN" && (
        <div className="fixed inset-0 flex justify-center items-center z-50 overflow-y-auto">
          {/* Popup overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closePopup}></div>
          {/* Popup content */}
          <div className="bg-white rounded-lg max-w-[90%] md:max-w-[1000px] w-[90%] md:w-auto max-h-[80vh] overflow-y-auto relative">
            {/* Popup content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
              {/* Project image */}
              <div className="mb-5 md:mb-0 overflow-hidden rounded-lg transform transition-transform hover:scale-105">
                <img src={selectedProject.img_popup} alt={selectedProject.name} className="rounded-lg" />
              </div>
              {/* Project details */}
              <div>
                {/* Close button */}
                <div className="flex justify-end">
                  <button onClick={closePopup} className="absolute top-0 right-0 mt-3 mr-3 text-gray-600 hover:text-gray-800">
                    <ion-icon name="close" class="text-[25px]"></ion-icon>
                  </button>
                </div>
                {/* Project information */}
                <h2 className="text-txtcolor text-2xl font-semibold mb-5">{selectedProject.name}</h2>
                <p className="text-txtcolor/50 mb-2">{selectedProject.label_to}</p>
                <p className="text-txtcolor mb-5">{selectedProject.description}</p>
                <p className="text-txtcolor/50 mb-2">{selectedProject.type}</p>
                <p className="text-txtcolor/50 mb-5">{selectedProject.design_tool}</p>
                <img src={selectedProject.logo_svg} alt={selectedProject.name} className="mb-5" />
                <img src={selectedProject.color_svg} alt={selectedProject.name} className="mb-5" />
                {/* Project links */}
                <a
                  href={selectedProject.live_preview}
                  target="_blank"
                  className="text-primary bg-primary/10 px-2 py-1 inline-block rounded-lg hover:scale-105"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Graphic Design Project Popup */}
      {showPopup && selectedProject && activeTab === "GRAPHIC DESIGN" && (
        <div className="fixed inset-0 flex justify-center items-center z-50 overflow-y-auto">
          {/* Popup overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closePopup}></div>
          {/* Popup content */}
          <div className="bg-white rounded-lg max-w-[90%] md:max-w-[1000px] w-[90%] md:w-auto max-h-[80vh] overflow-y-auto relative">
            {/* Popup content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
              {/* Project image */}
              <div className="mb-5 md:mb-0 overflow-hidden rounded-lg transform transition-transform hover:scale-105">
                <img src={selectedProject.img_popup} alt={selectedProject.name} className="rounded-lg" />
              </div>

              {/* Project details */}
              <div>
                {/* Close button */}
                <div className="flex justify-end">
                  <button onClick={closePopup} className="absolute top-0 right-0 mt-3 mr-3 text-gray-600 hover:text-gray-800">
                    <ion-icon name="close" class="text-[25px]"></ion-icon>
                  </button>
                </div>
                {/* Project information */}
                <h2 className="text-txtcolor text-2xl font-semibold mb-5">{selectedProject.name}</h2>
                {/* More project details */}
                <p className="text-txtcolor/50 mb-2">{selectedProject.label}</p>
                <p className="text-txtcolor/50 mb-5">{selectedProject.type}</p>
                <p className="text-txtcolor mb-5">{selectedProject.description}</p>
                <p className="text-txtcolor mb-2">{selectedProject.description_2}</p>
                {/* Project links */}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Project;
