import React from "react";
import LinkedInIcon from "../assets/images/linkedin.svg";
import FacebookIcon from "../assets/images/facebook.svg";
import GitHubIcon from "../assets/images/github.svg";
import Logo from "/full-logo.svg"; // Assuming you have a logo SVG file

const Footer = () => {
  return (
    <div className="text-sm p-6 text-txtcolor border-t-4 border-black w-full">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        {/* Logo Section */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <img src={Logo} alt="Logo" className="h-12 w-auto mx-auto sm:mx-0" />
        </div>

        {/* Copyright Section */}
        <p className="text-center font-medium sm:text-center sm:flex-grow">
          Copyright © 2024. All Rights Reserved
        </p>

        {/* Social Icons Section */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end space-x-3">
          <a
            href="https://www.linkedin.com/in/rheynalyn-madayag-998100242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="h-8 w-8 sm:h-10 sm:w-10" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" className="h-8 w-8 sm:h-10 sm:w-10" />
          </a>
          <a
            href="https://github.com/rmadayag"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" className="h-8 w-8 sm:h-10 sm:w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
