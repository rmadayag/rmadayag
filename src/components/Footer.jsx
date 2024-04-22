import React from "react";
import LinkedInIcon from "../assets/images/linkedin.svg";
import FacebookIcon from "../assets/images/facebook.svg";
import GitHubIcon from "../assets/images/github.svg";
import Logo from "../assets/logo.svg"; // Assuming you have a logo SVG file

const Footer = () => {
  return (
    <div className=" text-sm p-4 text-txtcolor px-5 max-w-6xl mx-auto">
    <div className="flex justify-center items-center mb-4">
      <div className="w-1/2 text-left">
        <img src={Logo} alt="Logo" className="h-12 w-auto mb-4" /> {/* Adjust height as needed */}
      </div>
      <div className="w-1/2 flex justify-end">
        <a href="https://www.linkedin.com/in/rheynalyn-madayag-998100242/" target="_blank" rel="noopener noreferrer" className="mr-2">
          <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-2">
          <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="https://github.com/rmadayag" target="_blank" rel="noopener noreferrer" className="mr-2">
          <img src={GitHubIcon} alt="GitHub" className="h-6 w-6" />
        </a>
      </div>
    </div>
    <hr className="border-t border-txtcolor/20 my-4" />
    <p className="text-center">Copyright © 2023. All Rights Reserved</p>
  </div>
  );
};

export default Footer;
