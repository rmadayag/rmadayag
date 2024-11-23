import React, { useEffect, useState } from "react";
import logo from '/full-logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "#home" },
    // { name: "About", link: "#about" },
    { name: "Services", link: "#service" },
    { name: "Portfolio", link: "#projects" },
    { name: "Testimonial", link: "#testimony" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav.classList.add("visible");
      } else {
        nav.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white p-5 border-b-[5px] border-b-black">
      <nav className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="text-txtcolor md:block hidden px-7 py-2 font-medium">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map(({ name, link }, i) => (
              <li key={i} className="px-4 hover:text-primary">
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className={`${open ? "text-txtcolor" : "text-primary"} text-4xl md:hidden`}
          aria-label="Toggle navigation menu"
        >
          <ion-icon name="menu"></ion-icon>
        </button>
        <div
          className={`md:hidden text-txtcolor absolute w-2/3 h-screen px-7 py-2 font-medium bg-bgcolor top-0 transition-transform duration-300 ${open ? "right-0" : "right-[-100%]"} `}
          role="navigation"
        >
          <div className="flex justify-between items-center mb-4">
            <button className="text-4xl text-primary" onClick={() => setOpen(false)} aria-label="Close navigation menu">
              <ion-icon name="close"></ion-icon>
            </button>
          </div>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map(({ name, link }, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-primary"
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
