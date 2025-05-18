import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Avatar images
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar3.png";
import avatar3 from "../assets/images/avatar2.png";

// Star icon component
const Star = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.646 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.96z" />
  </svg>
);

const Testimony = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // animation happens only once when scrolled into view
    });
  }, []);

  const projects = [
    {
      img: avatar1,
      name: "Youssef Assad",
      position: "Digital Coordinator",
      description:
        "I had the pleasure of collaborating with Rheyna on a branding project, and her development skills were outstanding.",
    },
    {
      img: avatar2,
      name: "Fadi Fahd ",
      position: "Head of TDJ",
      description:
        "Working with Rheyna at TDJ was an absolute game-changer for our website. Her eye for detail and passion for clean, modern UI made our brand stand out.",
    },
    {
      img: avatar3,
      name: "Patty Chua",
      position: "Head of Brewing Brands",
      description:
        "Rheyna brought our vision to life at Brewing Brands with a level of professionalism and creativity that exceeded our expectations.",
    },
  ];

  return (
    <section
      id="testimony"
      className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      {/* Section Title */}
      <p className="text-xl sm:text-2xl font-normal text-txtcolor mb-10">
        Testimonials
      </p>

      {/* Heading & Subtext */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start mb-10">
        <div>
          <h3 className="text-[clamp(2.5rem,6vw,4.375rem)] font-medium text-primary leading-tight">
            WHAT MY CLIENT SAY
          </h3>
        </div>
        <div>
          <p className="text-base sm:text-lg text-txtcolor leading-relaxed">
            Hear from those who have experienced my work firsthand. Their
            feedback reflects my commitment to quality and collaboration.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 mb-10" />

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger animation delay
          >
            <h2 className="text-xl sm:text-2xl font-medium text-primary">
              {project.name}
            </h2>
            <p className="text-sm text-txtcolor mb-4">{project.position}</p>

            <div className="w-full h-[360px] overflow-hidden rounded-md">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>

            <p className="text-txtcolor text-sm mt-4 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;