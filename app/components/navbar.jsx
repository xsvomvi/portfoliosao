import React from "react";
import { Homemade_Apple, Fugaz_One } from "next/font/google";

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

// Links
const links = ["home", "projects", "skills", "contact"];

const Navbar = () => {
  return (
    <nav className="w-full fixed px-[3vw] lg:px-[2vw] xl:px-[8%] py-[1.2rem] flex justify-center z-50 bg-[#f5f5f5]">
      <ul className="flex flex-wrap justify-center items-center gap-[1vw] lg:gap-[1.5vw] rounded-full px-[1.5rem] py-[0.75rem]">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`block w-[8rem] text-center border border-black py-[0.5rem] px-[0.75rem] rounded-md
                         transition-transform duration-500 transform hover:scale-105`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;