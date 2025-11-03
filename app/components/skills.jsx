'use client'

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Fugaz_One, Homemade_Apple } from "next/font/google";

// Fonts
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

// Knoppen
const skillButtons = [
  "photography & video editing",
  "web design & ui/ux design",
  "content creation",
  "graphic design"
];

export default function Skills() {
  const skillsRef = useRef(null);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateSkills(true);
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div ref={skillsRef} className="w-full flex flex-col items-center min-h-[100vh] bg-[#f5f5f5] px-[5vw] overflow-x-hidden">

      {/* Beschrijving */}
      <h1
        className={`mt-[2vh] font-homemadeApple ${homemadeApple.className} text-[2vw] text-center`}
      >
        {"i've already experimented with:".split("").map((char, idx) => (
          <span
            key={idx}
            className={`pop-letter ${animateSkills ? "opacity-100" : "opacity-0"}`}
            style={{ animationDelay: animateSkills ? `${idx * 0.12}s` : "0s" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Sectie met knoppen + afbeelding */}
      <div className="mt-[4vh] flex flex-col w-full gap-[4vw] items-center justify-center">

        {/* Knoppen */}
        <div className="flex gap-[1.5vh]">
          {skillButtons.map((btn) => (
            <button
              key={btn}
              className="flex flex-wrap justify-center items-center gap-[1vw] lg:gap-[1.5vw] rounded-full px-[1.5rem] py-[0.75rem] w-[12rem] block w-[8rem] text-center border border-black py-[0.5rem] px-[0.75rem] rounded-md transition-transform duration-500 transform hover:scale-105 cursor-pointer"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Sticker */}
        <div
          className={`absolute right-[62%] w-[11vw] min-w-[50px] max-w-[12rem] overflow-hidden ${animateSkills ? "pop-logo" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/sparkles_sticker.svg"
            alt="Sparkles Sticker"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Afbeelding */}
        <div className="w-[40vw]">
          <Image
            src="/me_sticker.svg"
            alt="Me"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }

        .pop-letter {
          display: inline-block;
          animation: popIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}