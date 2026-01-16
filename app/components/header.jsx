import React from "react";
import Image from "next/image";
import { Fugaz_One, Homemade_Apple } from "next/font/google";

// Fonts
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <div
      id="home"
      className="w-full flex flex-col justify-center items-center h-screen overflow-x-hidden px-[5vw]"
    >
      {/* Logo */}
      <div
        className="pop-logo"
        style={{
          animationDelay: `0.2s`,
          width: "5vw",
        }}
      >
        <Image
          src="/star_logo.svg"
          alt="Star Logo"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* Naam */}
      <h3
        className={`mt-[2vh] font-fugazOne ${fugazOne.className}
          text-[7.5vw] text-center cursor-default`}
      >
        SAOMAI NGO
      </h3>

      {/* Functie */}
      <h1
        className={`mt-[1vh] font-homemadeApple ${homemadeApple.className}
          text-[3vw] lg:text-[2vw] text-center cursor-default`}
      >
        {"creative media designer".split("").map((char, idx) => (
          <span
            key={idx}
            className="pop-letter"
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}