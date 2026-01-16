import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fugaz_One, Homemade_Apple } from "next/font/google";

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

// Knoppen + skills
const skillButtons = [
  { name: "video editing", link: "/skill1" },
  { name: "ui/ux design", link: "/skill2" },
  { name: "content (strategy)", link: "/skill3" },
];

const playSound = () => {
  const audio = new Audio("/paper_fold.mp3"); 
  audio.play();
};

export default function Skills() {
  const skillsRef = useRef(null);
  const [animateSkills, setAnimateSkills] = useState(false);
  const text = "i've already experimented a bit with:";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={skillsRef}
      className="w-full flex flex-col items-center px-[5vw] overflow-x-hidden relative"
    >
      {/* Beschrijving */}
      <h1
        className={`font-homemadeApple ${homemadeApple.className} flex flex-wrap justify-start cursor-default mt-[3vh]`}
        style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }} // MATCH met Projects-page
      >
        {text.split("").map((char, idx) => (
          <span
            key={idx}
            className={`inline-block ${animateSkills ? "pop-letter" : "opacity-0"}`}
            style={{ animationDelay: animateSkills ? `${idx * 0.12}s` : "0s" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Sectie met knoppen + afbeelding */}
      <div className="mt-[3vh] flex flex-col items-center w-full gap-[2.5vw]">

        {/* Knoppen */}
        <div className="flex flex-col sm:flex-row gap-[1.5vh] sm:gap-[1vw] w-full justify-center">
          {skillButtons.map((btn) => (
            <Link
              key={btn.name}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button
                onClick={playSound}
                className="flex justify-center items-center gap-[0.5vw] sm:gap-[1vw] px-[1.5rem] py-[0.75rem] w-full sm:w-[12rem] text-center border border-black rounded-md transition-transform duration-500 transform hover:scale-105 cursor-pointer bg-[#f5f5f5]"
                style={{ fontSize: "clamp(0.8rem, 1vw, 1rem)" }}
              >
                {btn.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Afbeelding */}
        <div className="w-[40vw] mt-[2.5vh] mb-[2.5vh]">
          <Image
            src="/me_sticker.svg"
            alt="Me"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Animatie */}
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