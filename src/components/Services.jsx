import React from "react";
import intro from "../assets/images/service.svg";
import UIandUX from "../assets/images/UIandUX.svg";
import Graphic from "../assets/images/Graphic.svg";
import SEO from "../assets/images/SEO.svg";
import WebDev from "../assets/images/Web Dev.svg";

const Services = () => {
  return (
    <section id="service" className="md:py-36 py-12 text-white bg-bgaccent">
      <div className="flex md:flex-row flex-col items-center md:gap-10 gap-10 px-5 max-w-6xl mx-auto">
        {/* Services container */}
        <div className="flex-1 md:order-2">
        <div class="flex flex-col md:flex-row gap-5">
  <div class="w-full md:w-1/2">
    <div class="flex flex-col gap-5">
      <div class="h-[216px] bg-bgcolor flex flex-col items-start rounded-lg p-4">
        <img src={UIandUX} class="mb-5" alt="UI/UX"/>
        <p class="mt-2 font-semibold text-txtcolor">UI/UX Design</p>
        <p class="mt-2 text-txtcolor">Designing with the user's needs and preferences in mind</p>
      </div>
      <div class="h-[216px] bg-bgcolor flex flex-col items-start rounded-lg p-4">
        <img src={Graphic} class="mb-5" alt="Graphic"/>
        <p class="mt-2 font-semibold text-txtcolor">Graphic Design</p>
        <p class="mt-2 text-txtcolor">Create visual assets and bring design concepts to life</p>
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/2">
    <div class="flex flex-col gap-5">
      <div class="h-[216px] bg-bgcolor flex flex-col items-start rounded-lg p-4">
        <img src={SEO} class="mb-5" alt="SEO"/>
        <p class="mt-2 font-semibold text-txtcolor">SEO Optimisation</p>
        <p class="mt-2 text-txtcolor">Improving a website's visibility and ranking in search engine results</p>
      </div>
      <div class="h-[216px] bg-bgcolor flex flex-col items-start rounded-lg p-4">
        <img src={WebDev} class="mb-5" alt="Web Dev"/>
        <p class="mt-2 font-semibold text-txtcolor">Web Development</p>
        <p class="mt-2 text-txtcolor">Create functional, visually appealing, and user-friendly Website</p>
      </div>
    </div>
  </div>
</div>

      
        </div>
        {/* Text content container */}
        <div className="flex-1 md:order-1">
          <div className="text-txtcolor">
            <img src={intro} className ="mb-5" alt="Introduction" />
            <h2 className="md:text-4xl text-2xl md:leading-tight leading-tight font-semibold">
            Why Hire Me For Your<span className="text-primary"> <br/> Next Project?</span>
            </h2>
            <h4 className="md:text-1xl text-lg my-5 font-regular text-txtcolor">
            With a keen eye for aesthetics and a commitment to functionality, 
            I blend creativity with technical expertise 
            to craft visually stunning and intuitive interfaces.
            </h4>
            <a
              href="/"
              className="inline-block"
            >
              <button className="btn-primary ease-in duration-300 hover:bg-primary/80">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
