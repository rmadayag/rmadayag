import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import hero from "../assets/images/hero.png";
import cvPdf from "../assets/Madayag, Rheynalyn C.pdf";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  const fadeIn = useSpring({
    opacity: showContent ? 1 : 0,
    marginTop: showContent ? 0 : -20,
    from: { opacity: 0, marginTop: -20 },
    config: { duration: 1000 },
  });

  const zoomIn = useSpring({
    from: { transform: "scale(0.5)" },
    to: { transform: "scale(1)" },
    config: { duration: 1000 },
    delay: 200,
  });

  const handleDownload = () => {
    window.open(cvPdf, "_blank");
  };

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <section
      id="home"
      className="bg-cover bg-center text-white pt-40 md:pt-60"
      aria-live="polite"
    >
      <div className="flex flex-col items-center px-5 mx-auto max-w-6xl md:flex-row md:gap-10 gap-10">
        {/* Hero Image */}
        <div className="flex-1 order-1 md:order-2">
          <animated.div style={{ ...fadeIn, ...zoomIn }}>
            <img
              src={hero}
              alt="Rheynalyn, a Web Developer and UI/UX Designer, in a professional setting"
              className="w-full max-w-lg h-auto object-cover rounded-lg"
            />
          </animated.div>
        </div>

        {/* Text Section */}
        <animated.div
          style={fadeIn}
          className="flex-1 order-2 md:order-1 w-full text-left"
        >
          <div className="flex flex-col items-start justify-center w-full gap-4">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight md:leading-tight text-txtcolor">
              Hi! <span className="inline-block animate-wave">👋</span> <br />
              I'm&nbsp;
              <span className="inline-block px-2 py-0.5 bg-[#FFDC58] text-black">
                Rheyna
              </span>
            </h1>
            <h4 className="text-xl md:text-2xl font-medium leading-relaxed text-txtcolor">
              Web Developer | UI/UX Designer
            </h4>
          </div>

          {/* Download CV Button */}
          <div className="mt-10">
            <button
              onClick={handleDownload}
              aria-label="Download my CV"
              className="btn-primary ease-in duration-300 hover:bg-primary/80 hover:scale-105 transition-transform px-5 py-3 rounded:ring-primary"
            >
              Download CV
            </button>
          </div>
        </animated.div>
      </div>

      {/* Marquee Section */}
      <div className="relative overflow-hidden bg-pink-300 py-5 md:py-8 md:mt-32 mt-16">
        <div className="whitespace-nowrap flex animate-marquee">
          {/* Duplicate Content for Seamless Scrolling */}
          <div className="inline-block">
            <span className="px-10 text-black text-xl md:text-4xl">Web Design</span>
            <span className="px-10 text-black text-xl md:text-4xl">App Design</span>
            <span className="px-10 text-black text-xl md:text-4xl">Wireframe</span>
            <span className="px-10 text-black text-xl md:text-4xl">Prototyping</span>
            <span className="px-10 text-black text-xl md:text-4xl">User Research</span>
            <span className="px-10 text-black text-xl md:text-4xl">Web Development</span>
          </div>
          <div className="inline-block">
            <span className="px-10 text-black text-xl md:text-4xl">Web Design</span>
            <span className="px-10 text-black text-xl md:text-4xl">App Design</span>
            <span className="px-10 text-black text-xl md:text-4xl">Wireframe</span>
            <span className="px-10 text-black text-xl md:text-4xl">Prototyping</span>
            <span className="px-10 text-black text-xl md:text-4xl">User Research</span>
            <span className="px-10 text-black text-xl md:text-4xl">Web Development</span>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          20%, 60% { transform: rotate(10deg); }
          40%, 80% { transform: rotate(-10deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
