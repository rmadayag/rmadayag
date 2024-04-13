import React, { useEffect, useState } from "react";
import logo from '/full-logo.svg' ;

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#service" },
    { name: "Portfolio", link: "#projects" },
    { name: "Testimonial", link: "#testimony" },
    { name: "Contact", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
    className={`fixed w-full left-0 top-0 z-[999] ${
      sticky ? "bg-bgcolor text-bgcolor" : "bg-bgcolor text-pink"
    } p-5`}
  >
      <div className="flex items-center justify-between">
        <div className="">
            <div>
         <img src={logo} />
     </div>
        </div>
        <div
          className={` ${
            sticky ? "" : ""
          } text-txtcolor md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-primary">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-txtcolor" : "text-primary"
          } text-4xl md:hidden`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-txtcolor absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-bgcolor top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-primary"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;