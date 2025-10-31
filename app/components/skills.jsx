'use client'

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Fugaz_One, Homemade_Apple } from "next/font/google";

// Fonts
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

// Button labels
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
    <div ref={skillsRef} className="flex flex-col items-center h-screen bg-[#f5f5f5] px-8">

      {/* Beschrijving */}
      <h1
        className={`mt-10 font-homemadeApple ${homemadeApple.className} text-[14px] sm:text-[18px] md:text-[25px] lg:text-[32px] text-center`}
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
      <div className="mt-12 flex flex-col md:flex-row w-full max-w-6xl">

        {/* Links: verticale knoppen */}
        <div className="flex flex-col gap-4">
          {skillButtons.map((btn) => (
            <button
              key={btn}
              className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 rounded-full px-6 py-3 block w-[186px] text-center border border-black py-2 px-3 rounded-md
                         transition-transform duration-500 transform hover:scale-105 cursor-pointer"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Sticker */}
        <div
          className={`relative left-30 bottom-[-6] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[200px] ${animateSkills ? "pop-logo" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/sparkles_sticker.svg"
            alt="Sparkles Sticker"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Rechts: afbeelding */}
        <div className="w-108 md:w-124 lg:w-140">
          <Image
            src="/me_sticker.svg"
            alt="Me"
            width={320}
            height={320}
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