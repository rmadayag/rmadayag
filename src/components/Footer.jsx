import React from "react";
import Logo from "/full-logo.png";
import menuIcon from "/Arrow.svg";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const socialLinks = [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/rheynalyn-madayag-998100242/" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/" },
    { label: "FACEBOOK", href: "https://www.facebook.com/" },
    { label: "GITHUB", href: "https://github.com/rmadayag" },
  ];

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-txtcolor">
      {/* Top Divider */}
      <div className="border-t border-gray-300 mb-8" />

      {/* Logo and Contact Text */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
        {/* Logo */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
          <img src={Logo} alt="Logo" className="h-12 sm:h-14 w-auto" />
        </div>

        {/* Text */}
        <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-end text-center sm:text-right">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I'm here to help and would love to hear from you!
          </p>
        </div>
      </div>

      {/* Middle Section: Social Links | LET’S (arrow) TALK | Blank */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 mb-20">
        {/* Social Links */}
        <div className="w-full sm:w-1/4 flex flex-col items-center sm:items-start gap-3">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm md:text-base uppercase font-regular transition-transform duration-300 hover:scale-110"
            >
              {label}
              <img
                src={menuIcon}
                alt="Arrow Icon"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </a>
          ))}
        </div>

        {/* LET’S TALK */}
        <div className="w-full sm:flex-grow flex justify-center items-center text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-black select-none flex items-center gap-4 group">
            LET’S
            <a
  href="https://www.linkedin.com/in/rheynalyn-madayag-998100242/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    p-2 sm:p-3 md:p-4 lg:p-5 
    border-4 border-primary rounded-full 
    text-primary 
    text-5xl sm:text-6xl md:text-7xl lg:text-7xl 
    transition-colors duration-300 
    group-hover:bg-black group-hover:text-white
    flex items-center justify-center
  "
>
  <GoArrowUpRight />
</a>
            TALK
          </h2>
        </div>

        {/* Blank Right Column */}
        <div className="w-full sm:w-1/4" />
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mb-8" />

      {/* Footer Bottom */}
      <div className="text-center text-xs sm:text-sm font-regular">
        © 2025 Rheynalyn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;