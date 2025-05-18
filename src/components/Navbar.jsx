import React, { useEffect, useState } from "react";
import logo from "/full-logo.png";
import menuIcon from "/menu.svg";
import closeIcon from "/close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#projects" },
    { name: "Services", link: "#service" },
    { name: "Testimonial", link: "#testimony" },
    { name: "FAQ's", link: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 p-5 transition-all duration-300 ${
        scrolled ? "bg-bgcolor shadow" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-[150px]">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Always visible menu icon */}
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          className="text-4xl"
          aria-label="Open navigation menu"
        >
          <img src={menuIcon} alt="Menu" className="w-8 h-8" />
        </button>

        {/* Slide-in Side Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-50 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="navigation"
        >
          {/* Close icon */}
          <div className="flex justify-end p-5">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <img src={closeIcon} alt="Close" className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-start p-6 pt-2 gap-6 text-lg text-black">
            {menuLinks.map(({ name, link }, i) => (
              <li
                key={i}
                onClick={() => setOpen(false)}
                className="pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200"
              >
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;