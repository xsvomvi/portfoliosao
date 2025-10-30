import React from "react";
import Image from "next/image";
import { Fugaz_One, Homemade_Apple } from "next/font/google";

// Fonts
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      
      {/* Logo met pop */}
        <div
          className="w-[70px] sm:w-[90px] md:w-[110px] lg:w-[140px] pop-logo"
          style={{ animationDelay: `0.2s` }}
        >
          <Image
            src="/star_logo.png"
            alt="Star Logo"
            width={128}
            height={128}
            className="w-full h-auto"
          />
        </div>

      {/* Naam */}
      <h3
        className={`mt-4 font-fugazOne ${fugazOne.className} text-[35px] sm:text-[55px] md:text-[75px] lg:text-[110px] text-center`}
      >
        SAOMAI NGO
      </h3>

      {/* Functie */}
      <h1
        className={`mt-2 font-homemadeApple ${homemadeApple.className} text-[14px] sm:text-[18px] md:text-[25px] lg:text-[32px] text-center`}
      >
        {"creative media designer".split("").map((char, idx) => (
          <span
            key={idx}
            className="pop-letter"
            style={{ animationDelay: `${idx * 0.12}s` }} // letters verschijnen één voor één
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}