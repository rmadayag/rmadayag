import React, { useState, useEffect } from "react";
import project1 from "../assets/images/Noa.png";
import project2 from "../assets/images/Stranger Lust.png";
import project3 from "../assets/images/SportsTXT.png";
import project4 from "../assets/images/SupportTXT.png";
import project5 from "../assets/images/ShareMyCircle.png";
import project6 from "../assets/images/Mock up (14).png";
import project7 from "../assets/images/NMS.png";
import project8 from "../assets/images/Maha.png";
import project9 from "../assets/images/Wittytongues.png";
import project10 from "../assets/images/SL.png";
import project11 from "../assets/images/ST.png";
import project12 from "../assets/images/Afflyfe.png";
import project13 from "../assets/images/Detox.png";
import project14 from "../assets/images/Numa.png";
import project15 from "../assets/images/Mock up (6).png";
import project16 from "../assets/images/Mock up (5).png";
import project17 from "../assets/images/Mock up (7).png";
import project18 from "../assets/images/Mock up (11).png";
import project19 from "../assets/images/Mock up (12).png";
import project20 from "../assets/images/Mock up (10).png";
import project21 from "../assets/images/Mock up (13).png";
import intro from "../assets/images/Portfolio.svg";
import Noa_popup from "../assets/images/Noa_popup.png";
import tdj_popup from "../assets/images/Instagram.png";
import ebp_popup from "../assets/images/Instagram-2.png";
import db_popup from "../assets/images/Instagram-3.png";
import dgc_popup from "../assets/images/Instagram-4.png";
import sp_popup from "../assets/images/Instagram-5.png";
import lc_popup from "../assets/images/Instagram-6.png";
import eb_popup from "../assets/images/Instagram-7.png";
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
import Numa_color from "../assets/images/Numa_color.svg";
import Numa_logo from "../assets/images/Numa_logo.svg";
import Numa_popup from "../assets/images/Numa_popup.png";
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


const Project = () => {
  const [activeTab, setActiveTab] = useState("WEB DESIGN | DEVELOPMENT");
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
      img_popup: Maha_popup,
      img: project8,
      label: "UI/UX DESIGN",
      label_to: "UI/UX DESIGN",
      name: "My Allied Health Academy",
      description:
        "My Allied Health Academy (MAHA) is an online platform designed to provide training and mentoring for professionals in the allied health sector. The academy supports practitioners such as physiotherapists, chiropractors, nutritionists, naturopaths, and many other healthcare professionals. ",
        design: "✔ Figma",
        development: "✔ Web Application",
      type: "Web Application",
      live_preview: "https://myalliedhealthacademy.com/",
    },
    {
      img_popup: Noa_popup,
      img: project1,
      label: "UI/UX DESIGN",
      label_to: "UI/UX DESIGN",
      name: "Noa Coach AI",
      description:
        "Noa Coach AI is an AI-powered coaching platform designed to enhance workplace productivity and personal well-being. It provides personalized coaching through advanced AI, helping users manage stress, improve focus, and achieve work-life balance. ",
        design: "✔ Figma",
        development: "✔ Mobile Application | Web Application",
        type: " Mobile Application | Web Application",
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
        design: "✔ Figma",
        development: "✔ Web Application",
      type: "Web Application",
      live_preview: "https://strangerlust.com/",
    },

      {
      img_popup: lc_popup,
      img: project20,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "Lending Centric",
      description:
        "Lending Centric likely offers services related to financial lending, such as loans, mortgage advice, or financial consulting. Unfortunately, due to access restrictions or limitations in the website's configuration, I could not retrieve specific details. ",
      design: "✔ Figma",
      development: "✔ Wordpress - Elementor",
      type: "UI design - Wordpress develop",
      design_tool: "Platform : Wordpress",
      live_preview: "https://lending-centric.thedigitaljuice.com.au/",
    },
    {
      img_popup: tdj_popup,
      img: project15,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "The Digital Juice",
      description:
        "Digital Juice is an Australian-based company that specializes in offering digital marketing and branding solutions. Their services often include web design, social media management, video production, and graphic design, catering to businesses looking to enhance their online presence and visual branding.",
      design: "✔ Figma",
      development: "✔ Wordpress - Elementor",
      type: "UI design - Wordpress develop",
      design_tool: "Platform : Wordpress",
      live_preview: "https://thedigitaljuice.com.au/",
    },
    {
      img_popup: eb_popup,
      img: project21,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "Blueprint 360",
      description:
        "Blueprint 360 is a business management platform designed to streamline various aspects of business operations. It offers a centralized solution for managing customer communication, sales, and marketing. With Blueprint 360, businesses can save time and enhance efficiency by handling everything from customer interactions to sales processes and marketing. ",
      design: "✔ Figma",
      development: "✔ Wordpress - Elementor",
      type: "UI design - Wordpress develop",
      design_tool: "Platform : Wordpress",
      live_preview: "https://360.ebpsites.com/",
    },
    {
      img_popup: ebp_popup,
      img: project16,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "Empire Blueprint",
      description:
        "Empire Blueprint (EBP) is a business consulting service that helps companies streamline operations and enhance productivity across various industries. Their primary goal is to give business owners the ultimate gift —time—by introducing customized solutions tailored to each client’s needs. ",
      design: "✔ Figma",
      development: "✔ Wordpress - Elementor",
      type: "UI design - Wordpress develop",
      design_tool: "Platform : Wordpress",
      live_preview: "https://ebp.business/",
    },
    {
      img_popup: db_popup,
      img: project17,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "Digital Branding",
      description:
        "Digital branding is the process of creating and managing a brand's online identity and presence through digital channels. It involves strategies and practices to establish a brand's image, voice, and values in the digital space, enabling businesses to connect with their audience effectively. ",
      design: "✔ Figma",
      development: "✔ Wordpress - Elementor",
      type: "UI design - Wordpress develop",
      design_tool: "Platform : Wordpress",
      live_preview: "https://db.thedigitaljuice.com.au/",
    },
    {
      img_popup: dgc_popup,
      img: project18,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "Delight Support Care",
      description:
        "Delight Support Care appears to be a service provider focused on personalized care and support, potentially linked to the National Disability Insurance Scheme (NDIS) in Australia. It likely offers services such as supported accommodation, respite care, and daily living assistance tailored to individual needs.  ",
      design: "✔ Figma",
      development: "✔ Wordpress - Elementor",
      type: "UI design - Wordpress develop",
      design_tool: "Platform : Wordpress",
      live_preview: "https://delightcaresupport.com.au/",
    },
    {
      img_popup: sp_popup,
      img: project19,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "Support Pillar",
      description:
        "Support Pillars likely refers to a service or platform providing assistance in areas such as mental health, disability support, or community services. It may aim to offer a network of support services or resources tailored to individuals' needs, particularly in an Australian context. ",
      design: "✔ Figma",
      development: "✔ Wordpress - Elementor",
      type: "UI design - Wordpress develop",
      design_tool: "Platform : Wordpress",
      live_preview: "https://supportpillar.com.au/",
    },
    {
      img_popup: Chekkee_popup,
      img: project6,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "Chekkee",
      description:
        "Chekkee is a content moderation service focused on managing user-generated content (UGC) across various platforms. The company uses a combination of AI technology and human moderation to ensure that content complies with community standards, safety protocols, and legal requirements.",
      type: "UI design - Wordpress develop",
      design: "✔ Figma",
      development: "✔ Wordpress - Oxygen",
      live_preview: "https://chekkee.com/",
    },
      //   img_popup: NMS_popup,
    //   img: project7,
    //   label: "WEB DESIGN | DEVELOPMENT",
    //   label_to: "WEB DESIGN | DEVELOPMENT",
    //   name: "New Media Services PH",
    //   description:
    //     "New Media Services specializes in delivering intelligent outsourcing services through a combination of machine learning and human-powered activities",
    //   typography1: "Poppins",
    //   typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
    //   typography2: "Poppins",
    //   typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
    //   color_svg: NMS_color,
    //   logo_svg: NMS_logo,
    //   type: "UI design - User research - Wordpress develop",
    //   design_tool: "Platform : Wordpress",
    //   live_preview: "https://nms.ph/",
    // },
    // {
    //   img_popup: SportTXT_popup,
    //   img: project3,
    //   label: "WEB DESIGN | DEVELOPMENT",
    //   label_to: "WEB DESIGN | DEVELOPMENT",
    //   name: "SportsTXT",
    //   description:
    //     "Being a sports fan is not just about watching games. SportsTXT is an online platform designed to deliver the ultimate sports fan experience. Engage with other fans, get insider facts about your favorite teams, and so much more.",
    //   typography1: "Poppins",
    //   typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
    //   typography2: "Poppins",
    //   typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
    //   color_svg: SportTXT_color,
    //   logo_svg: SportTXT_logo,
    //   type: "UI design - User research - Wordpress develop",
    //   design_tool: "Platform : Wordpress",
    //   live_preview: "https://sportstxt.com/",
    // },
    // {
    //   img_popup: SupportTXT_popup,
    //   img: project4,
    //   label: "WEB DESIGN | DEVELOPMENT",
    //   label_to: "WEB DESIGN | DEVELOPMENT",
    //   name: "SupportTXT",
    //   description:
    //     "The engagement platform for the community is a place where members can come to learn, grow, and connect with each other. The content on the platform should be engaging, informative, and relevant to the interests of the community members.",
    //   typography1: "Poppins",
    //   typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
    //   typography2: "Poppins",
    //   typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
    //   color_svg: SupportTXT_color,
    //   logo_svg: SupportTXT_logo,
    //   type: "UI design - User research - Wordpress develop",
    //   design_tool: "Platform : Wordpress",
    //   live_preview: "https://supporttxt.com/",
    // },
    // {
    //   img_popup: SMC_popup,
    //   img: project5,
    //   label: "WEB DESIGN | DEVELOPMENT",
    //   label_to: "WEB DESIGN | DEVELOPMENT",
    //   name: "Share My Circle",
    //   description:
    //     "Share My Circle offers a space for soon-to-be-married couples to invite their circle of family and friends to be connected with them throughout their wedding journey",
    //   typography1: "Poppins",
    //   typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
    //   typography2: "Poppins",
    //   typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
    //   color_svg: SMC_color,
    //   logo_svg: SMC_logo,
    //   type: "UI design - User research - Wordpress develop",
    //   design_tool: "Platform : Wordpress",
    //   live_preview: "https://sharemycircle.com/",
    // },
    // {
    //   img_popup: Numa_popup,
    //   img: project14,
    //   label: "WEB DESIGN | DEVELOPMENT",
    //   label_to: "WEB DESIGN | DEVELOPMENT",
    //   name: "Numa",
    //   description:
    //     "Numa Recovery Center is a leading detox and rehab In Los Angeles, CA, that serves to eliminate financial barriers to treatment. Healing Begins Here.",
    //   typography1: "Inter",
    //   typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
    //   typography2: "Inter",
    //   typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
    //   color_svg: Numa_color,
    //   logo_svg: Numa_logo,
    //   type: "UI design - User research - Wordpress develop",
    //   design_tool: "Platform : Wordpress",
    //   live_preview: "https://numarecoverycenters.com/",
    // },
    {
      img_popup: NMS_popup,
      img: project7,
      label: "WEB DESIGN | DEVELOPMENT",
      label_to: "WEB DESIGN | DEVELOPMENT",
      name: "New Media Services PH",
      description:
        "New Media Service Ltd. (NMS), is a digital marketing and technology services company based in the Philippines. They offer a range of services related to online marketing, web development, social media management, and other digital solutions for businesses looking to improve their online presence and reach.",
      type: "UI design - User research - Wordpress develop",
      design: "✔ Figma",
      development: "✔ Wordpress - Oxygen",
      live_preview: "https://nms.ph/",
    },
    // {
    //   img_popup: Afflyfe_popup,
    //   img: project12,
    //   label: "WEB DESIGN | DEVELOPMENT",
    //   label_to: "WEB DESIGN",
    //   name: "Afflyfe",
    //   description:
    //     "Afflyfe is a comprehensive NFT information platform designed to cater to both newcomers and experienced participants in the NFT space. Through a range of resources and features, Afflyfe aims to educate, inform, and connect individuals interested in NFTs",
    //   typography1: "Montserrat",
    //   typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
    //   typography2: "Montserrat",
    //   typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
    //   color_svg: Afflyfe_color,
    //   logo_svg: Afflyfe_logo,
    //   type: "UI design - User research - Wordpress develop",
    //   design_tool: "Design Tool : Figma",
    //   live_preview: "https://www.figma.com/proto/iDw0PzGdGinh46iqpauXiL/Projects?type=design&node-id=1-1999&t=d1Q1xZBTjVSGw1Qe-0&scaling=min-zoom&page-id=0%3A1",
    // },
    // {
    //   img_popup: Detox_popup,
    //   img: project13,
    //   label: "WEB DESIGN | DEVELOPMENT",
    //   label_to: "WEB DESIGN",
    //   name: "San Diego Detox",
    //   description:
    //     "The San Diego Detox website likely serves as an online platform providing information and services related to detoxification programs in the San Diego area.",
    //   typography1: "Montserrat",
    //   typography_bold: "Aa Bb Cc Dd Ee Ff Gg ",
    //   typography2: "Montserrat",
    //   typography_regular: "Aa Bb Cc Dd Ee Ff Gg ",
    //   color_svg: Detox_color,
    //   logo_svg: Detox_logo,
    //   type: "UI design - User research - Wordpress develop",
    //   design_tool: "Design Tool : Figma",
    //   live_preview: "https://www.figma.com/proto/iDw0PzGdGinh46iqpauXiL/Projects?type=design&node-id=5-1893&t=d1Q1xZBTjVSGw1Qe-0&scaling=min-zoom&page-id=1%3A5495",
    // },
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
      type: "Logo design",
      design: "✔ Figma",
      development: "✔ Logo Design",
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
      type: "Logo design",
      design: "✔ Figma",
      development: "✔ Logo Design",
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
      type: "Logo design",
      design: "✔ Figma",
      development: "✔ Logo Design",
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
    <section id="projects" className="h-auto flex items-center py-12 md:py-[150px]">
      <div className="flex flex-col justify-center items-center px-5 max-w-6xl mx-auto w-full gap-2">
      <div className="lg:w-100 h-full relative sm:w-100 w-full max-w-lg flex flex-col items-center justify-center">
  <h2 className="md:text-[30px] text-2xl font-medium text-txtcolor mb-10 leading-0 md:leading-10 text-center">
    My Creative Works
  </h2>
</div>

        {/* Tabs */}
<div className="flex flex-col md:flex-row md:gap-2 w-full justify-center mb-8">
<button
    onClick={() => setActiveTab("WEB DESIGN | DEVELOPMENT")}
    className={`w-full md:w-auto md:text-xl text-[16px] md:py-4 px-6 py-[10px] font-bold focus:outline-none transition-all duration-300 ease-in-out rounded-[70px] border-[4px] ${
      activeTab === "WEB DESIGN | DEVELOPMENT"
        ? "bg-secondary text-black border-black"
        : "bg-white text-txtcolor border-transparent hover:bg-secondary hover:text-black hover:border-black"
    }`}
  >
    Design | Development
  </button>
  <button
    onClick={() => setActiveTab("UI/UX DESIGN")}
    className={`w-full md:w-auto md:text-xl text-[16px] md:py-4 px-6 py-[10px] font-bold focus:outline-none transition-all duration-300 ease-in-out rounded-[70px] border-[4px] ${
      activeTab === "UI/UX DESIGN"
        ? "bg-secondary text-black border-black"
        : "bg-white text-txtcolor border-transparent hover:bg-secondary hover:text-black hover:border-black"
    }`}
  >
    UI/UX Design
  </button>
  <button
    onClick={() => setActiveTab("GRAPHIC DESIGN")}
    className={`w-full md:w-auto md:text-xl text-[16px] md:py-4 px-6 py-[10px] font-bold focus:outline-none transition-all duration-300 ease-in-out rounded-[70px] border-[4px] ${
      activeTab === "GRAPHIC DESIGN"
        ? "bg-secondary text-black border-black"
        : "bg-white text-txtcolor border-transparent hover:bg-secondary hover:text-black hover:border-black"
    }`}
  >
    Graphic Design
  </button>
</div>

<div className="max-w-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-y-20 gap-y-10 gap-x-20">
  {filteredProjects.map((project, index) => (
    <div
      key={index}
      className="flex flex-col items-start md:p-10 p-6 bg-white  border-4 border-black cursor-pointer group shadow-[10.03px_10.03px_0px_#BFBFB4]"
      onClick={(e) => {
        e.stopPropagation(); // Prevent Swiper from detecting this click
        openPopup(project); // Open popup on container click
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full md:h-[260px] h-[200px] mb-6 transition-all border-4 border-black">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-3 origin-center"
        />
      </div>

      {/* Title and SVG */}
      <div className="flex items-center justify-between w-full">
        <h2 className="md:text-[26px] text-xl font-semibold text-txtcolor">{project.name}</h2>
        <div className="ml-auto">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:scale-110 cursor-pointer"
          >
            <g filter="url(#filter0_d_318_18085)">
              <rect
                width="35.4404"
                height="35.4404"
                transform="translate(0.921875 0.961914)"
                fill="black"
              />
              <path
                d="M24.5848 12.443L25.213 22.9767M24.5848 12.443L14.0512 13.0712M24.5848 12.443L13.0284 25.4651"
                stroke="#FDFDFD"
                strokeWidth="2.2385"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_318_18085"
                x="0.921875"
                y="0.961914"
                width="39.172"
                height="39.171"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3.73057" dy="3.73057" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.556863 0 0 0 0 0.560784 0 0 0 0 0.529412 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_318_18085"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_18085"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="text-txtcolor mt-2 md:text-[20px] text-[16px]">{project.type}</p>
    </div>
  ))}
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
                <h2 className="text-txtcolor text-2xl font-semibold mb-4">{selectedProject.name}</h2>
                <p className="text-txtcolor/50 mb-8">{selectedProject.label_to}</p>
                <p className="text-txtcolor mb-8">{selectedProject.description}</p>
                <p className="text-txtcolor/50 mb-4">{selectedProject.design}</p>
                <p className="text-txtcolor/50 mb-8">{selectedProject.development}</p>
                {/* Project links */}
                <a
                  href={selectedProject.live_preview}
                  target="_blank"
                  className="text-black bg-secondary px-10 py-3 inline-block rounded-[70px] border-4 border-black hover:scale-105"
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
                <h2 className="text-txtcolor text-2xl font-semibold mb-4">{selectedProject.name}</h2>
                {/* More project details */}
                <p className="text-txtcolor/50 mb-8">{selectedProject.label}</p>
                <p className="text-txtcolor mb-8">{selectedProject.description}</p>
                <p className="text-txtcolor mb-8">{selectedProject.description_2}</p>
                <p className="text-txtcolor/50 mb-4">{selectedProject.design}</p>
                <p className="text-txtcolor/50 mb-8">{selectedProject.development}</p>
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
