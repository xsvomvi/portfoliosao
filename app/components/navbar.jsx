import React from "react";
import { Homemade_Apple } from "next/font/google";
import { Fugaz_One } from "next/font/google";

const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

const links = ["home", "projects", "skills", "contact"];

const Navbar = () => {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 bg-white">
      <ul className="flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`border border-black py-2 px-3 w-[136px] block text-center rounded-md
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