import React from "react";
import { Homemade_Apple, Fugaz_One } from "next/font/google";

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

// Links
const links = ["home", "projects", "skills", "contact"];

const Navbar = () => {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-center z-50 bg-[#f5f5f5]">
      <ul className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 rounded-full px-6 py-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`block w-[136px] text-center border border-black py-2 px-3 rounded-md
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