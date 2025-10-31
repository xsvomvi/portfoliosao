import ProjectCards from "./projectcards";
import projectsData from "../data/projects.json";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fugaz_One, Homemade_Apple } from "next/font/google";

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function Projects() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const text = "some projects i worked on:";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // trigger animatie
          observer.disconnect(); // maar één keer afspelen
        }
      },
      { threshold: 0.3 } // trigger als 30% zichtbaar is
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-[#f5f5f5] text-black flex flex-col items-center justify-center py-16 px-8"
    >
      {/* Beschrijving + sticker container */}
      <div className="relative flex w-full max-w-6xl mb-8 items-start">
        {/* Beschrijving */}
        <h1
          className={`font-homemadeApple ${homemadeApple.className} text-[14px] sm:text-[18px] md:text-[25px] lg:text-[32px] flex flex-wrap justify-start`}
        >
          {text.split("").map((char, idx) => (
            <span
              key={idx}
              className={`inline-block ${animate ? "pop-letter" : "opacity-0"}`}
              style={{ animationDelay: animate ? `${idx * 0.12}s` : "0s" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Sticker */}
        <div
          className={`absolute top-[-15vh] left-[75%] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[200px] ${animate ? "pop-logo" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/star_sticker.svg"
            alt="Star Sticker"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Project Cards */}
      {projectsData.map((project) => (
        <ProjectCards
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}

      {/* Animatie styles */}
      <style jsx>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .pop-letter,
        .pop-logo {
          animation: popIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
}