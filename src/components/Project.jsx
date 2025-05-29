import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoArrowUpRight } from "react-icons/go";

// Image Imports
import IMG1 from "../assets/images/img1.png";
import IMG2 from "../assets/images/img2.png";
import IMG3 from "../assets/images/img3.png";
import IMG4 from "../assets/images/img4.png";
import IMG5 from "../assets/images/img5.png";
import IMG6 from "../assets/images/img6.png";
import IMG7 from "../assets/images/img7.png";
import IMG8 from "../assets/images/img8.png";
import IMG9 from "../assets/images/img9.png";
import IMG10 from "../assets/images/img10.png";
import IMG11 from "../assets/images/img11.png";
import IMG12 from "../assets/images/img12.png";
import IMG13 from "../assets/images/img13.png";
import IMG14 from "../assets/images/img14.png";
import IMG15 from "../assets/images/img15.png";
import IMG16 from "../assets/images/img16.png";
import IMG17 from "../assets/images/img17.png";
import IMG18 from "../assets/images/img18.png";

const allProjects = [
  { id: 1, title: "Brewing Brands", image: IMG1, description: "2025 • Web Development", url: "https://brewingbrandsph.com/" },
  { id: 12, title: "MAHA", image: IMG12, description: "2023 • App Design | Web Development", url: "https://myalliedhealthacademy.com/" },
  { id: 13, title: "Noa Coach Ai", image: IMG13, description: "2022 • App Design | Web Development", url: "https://www.behance.net/gallery/196498417/Noa-Coach/" },
  { id: 2, title: "The Digital Juice", image: IMG2, description: "2025 • Web Design | Development", url: "https://thedigitaljuice.com.au/" },
  { id: 9, title: "Lending Centric", image: IMG9, description: "2024 • Web Development", url: "https://lendingcentric.com.au/" },
  { id: 10, title: "Blueprint 360", image: IMG10, description: "2024 • Web Design | Development", url: "https://360.ebpsites.com/" },
  { id: 4, title: "Age Care Support", image: IMG4, description: "2025 • Web Development", url: "https://agecaresupport.com.au/" },
  { id: 3, title: "Easy Health Care", image: IMG3, description: "2025 • Web Design | Development", url: "https://easyhealthcare.com.au/" },
  { id: 5, title: "Support Pillars", image: IMG5, description: "2024 • Web Design | Development", url: "https://supportpillar.com.au/" },
  { id: 6, title: "Go Respite", image: IMG6, description: "2025 • Web Design | Development", url: "https://gorespite.au/" },
  { id: 8, title: "Sustainable Power Fuels", image: IMG8, description: "2025 • Web Development", url: "https://spf.tdjwebsites.com.au/" },
  { id: 7, title: "International MAARIF School", image: IMG7, description: "2025 • Web Development", url: "https://vic.maarif.org.au/" },
  { id: 11, title: "Digital Branding", image: IMG11, description: "2024 • Web Development", url: "https://digitalbrandingco.com.au/" },
  { id: 14, title: "NUMA", image: IMG14, description: "2022 • Web Design | Development", url: "https://numarecoverycenters.com/" },
  { id: 15, title: "TribeTXT", image: IMG15, description: "2022 • Web Design | Development", url: "https://business.tribetxt.com/" },
  { id: 16, title: "Emergency Plumbers", image: IMG16, description: "2025 • Web Design | Development", url: "https://emergencyplumbersmelbourne.au/" },
  { id: 17, title: "Foster Disability Services", image: IMG17, description: "2025 • Web Development", url: "https://fds.thedigitaljuice.com.au/" },
  { id: 18, title: "Delight Care Support", image: IMG18, description: "2024 • Web Design | Development", url: "https://delightcaresupport.com.au/" },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [visibleCount]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Label */}
      <p
        className="text-lg sm:text-xl md:text-2xl font-normal text-txtcolor mb-8 sm:mb-12"
        data-aos="fade-up"
      >
        My Portfolio
      </p>

      {/* Title and Description */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 lg:gap-y-10 gap-x-8 lg:gap-x-16 items-start mb-12"
        data-aos="fade-up"
      >
        <h3 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-medium text-primary leading-tight">
          FEATURED PROJECTS
        </h3>
        <p className="text-base sm:text-lg text-txtcolor max-w-xl">
          Check out what I’ve been working on lately. Here’s a glimpse of my recent projects.
        </p>
      </div>

      <div className="border-t border-gray-300 mb-12" data-aos="fade-up" />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {allProjects.slice(0, visibleCount).map((project, index) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-bgaccent rounded-xl p-4 sm:p-6 transition cursor-pointer flex flex-col shadow-sm hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-full h-auto mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                style={{
                  imageRendering: "crisp-edges",
                }}
              />
            </div>

            <div className="flex justify-between items-start mt-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 text-black">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-txtcolor">
                  {project.description}
                </p>
              </div>
              <div className="p-2 sm:p-3 border border-txtcolor rounded-full text-txtcolor text-2xl sm:text-3xl transition duration-300 group-hover:bg-black group-hover:text-white">
                <GoArrowUpRight />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < allProjects.length && (
        <div className="flex justify-center mt-10" data-aos="fade-up">
          <button
            onClick={handleViewMore}
            className="mt-6 px-6 py-3 text-sm sm:text-base rounded-md bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-transform duration-300"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;