import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import hero from "../assets/images/hero.png";
import intro from "../assets/images/hello.svg";
import cvPdf from "../assets/Madayag, Rheynalyn C.pdf";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const fadeIn = useSpring({
    opacity: showContent ? 1 : 0,
    marginTop: showContent ? 0 : -20,
    from: { opacity: 0, marginTop: -20 },
    config: { duration: 1000 }
  });

  const handleDownload = () => {
    window.open(cvPdf);
  };

  // Trigger animation when component mounts
  React.useEffect(() => {
    setShowContent(true);
  }, []);

  const styles = useSpring({
    from: { transform: 'scale(1)' },
    to: [
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ],
    config: { duration: 1000 },
    loop: { reverse: true }
  });

  const styles1 = useSpring({
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: 'translateY(-20px)' },
      { transform: 'translateY(0px)' }
    ],
    config: { duration: 1000 },
    loop: { reverse: true }
  });

  return (
    <section id="home" className="md:py-36 pt-28 pb-12 text-white bg-bgaccent">
      <div className="flex md:flex-row flex-col items-center md:gap-10 gap-10 px-5 max-w-6xl mx-auto">
        {/* Image container */}
        <div className="flex-1 md:order-2">
          <animated.div style={fadeIn}>
            <div className="lg:w-100 h-full relative sm:w-100 w-full max-w-lg">
              <animated.img
                src={hero}
                alt="Rheynalyn"
                style={styles1}
              />
            </div>
          </animated.div>
        </div>
        {/* Text content container */}
        <animated.div style={fadeIn} className="flex-1 md:order-1 items-start">
          <div className="flex flex-col items-start gap-5">
            <animated.img
              src={intro}
              alt="Introduction"
              style={styles}
            />
            <h1 className="md:text-6xl text-4xl md:leading-tight leading-tight font-semibold text-txtcolor">
              I'm <span className="text-primary">Rheynalyn</span> Madayag
            </h1>
            <h4 className="md:text-1xl text-lg font-regular text-txtcolor">
              UI/UX Designer and Web Developer
            </h4>
            <button
              onClick={handleDownload}
              className="btn-primary ease-in duration-300 hover:bg-primary/80 hover:scale-105 hover:transition-transform"
            >
              Download CV
            </button>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;
