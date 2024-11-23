import React from "react";
import UIandUX from "../assets/images/UIandUX.svg";
import Graphic from "../assets/images/Graphic.svg";
import SEO from "../assets/images/SEO.svg";
import WebDev from "../assets/images/Web Dev.svg";

const Services = () => {
  return (
    <section
      id="service"
      className="py-12 md:py-[150px] text-white" // Padding for mobile and desktop
    >
      <div className="flex flex-col md:gap-0 gap-0 px-5 max-w-6xl mx-auto">
        
        {/* Services container */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Title Optimization Block */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-5 pr-4">
               
            <h2 className="md:text-[30px] text-2xl font-medium text-txtcolor md:leading-10 leading-8">
            Bring Your Ideas to Life with My Expertise
            </h2>
            <p className="md:text-[20px] text-lg font-regular text-txtcolor  w-full">
            What i do?
          </p>
              
              </div>
            </div>

            {/* UI/UX Design and Graphic Design Blocks */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-10">
                <div className="h-[260px] border-solid border-4 p-6 border-black hover:rotate-[3.4deg] hover:bg-[#FFE68C] transition-transform duration-300 ease-in-out shadow-[10.03px_10.03px_0px_#BFBFB4]">
                <img src={WebDev} className="mb-5" alt="Web Development icon" />
                  <p className="mt-2 font-semibold text-txtcolor text-[20px]">Web Development</p>
                  <p className="mt-2 md:text-[18px] text-[16px] text-txtcolor">
                  Create functional, visually appealing, and user-friendly Website.
                  </p>
                </div>
                <div className="h-[260px] border-solid border-4 p-6 border-black hover:rotate-[3.4deg] hover:bg-[#FFC9F0] transition-transform duration-300 ease-in-out shadow-[10.03px_10.03px_0px_#BFBFB4]">
                <img src={UIandUX} className="mb-5" alt="UI/UX Design icon" />
                  <p className="mt-2 font-semibold text-txtcolor text-[20px]">UI/UX Design</p>
                  <p className="mt-2 md:text-[18px] text-[16px] text-txtcolor">
                  Designing with the user's needs and preferences in mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Web Development Block */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-10">
                <div className="h-[260px] border-solid border-4 p-6 border-black hover:rotate-[3.4deg] hover:bg-[#DAC4FF] transition-transform duration-300 ease-in-out shadow-[10.03px_10.03px_0px_#BFBFB4]">
                <img src={SEO} className="mb-5"  alt="SEO icon" />
                  <p className="mt-2 font-semibold text-txtcolor text-[20px]">SEO Optimisation</p>
                  <p className="mt-2 md:text-[18px] text-[16px] text-txtcolor">
                  Improving a website's visibility and ranking in search engine results.
                  </p>
                </div>
                <div className="h-[260px] border-4 border-solid border-black p-6 hover:rotate-[3.4deg] hover:bg-[#9DDCFF] transition-transform duration-300 ease-in-out shadow-[10.03px_10.03px_0px_#BFBFB4]">
  <img src={Graphic} className="mb-5" alt="Graphic Design icon" />
  <p className="mt-2 font-semibold text-txtcolor text-[20px]">Graphic Design</p>
  <p className="mt-2 md:text-[18px] text-[16px] text-txtcolor">
    Create functional, visually appealing, and user-friendly Websites.
  </p>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
