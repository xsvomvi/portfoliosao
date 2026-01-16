import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProjectCards from "./projectcards";
import projectsData from "../data/projects.json";
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
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full text-black flex flex-col items-center justify-center py-[4rem] px-[5vw] overflow-x-hidden"
    >
      <div className="relative flex w-full max-w-[75vw] mb-[1rem] items-start">
        {/* Beschrijving */}
        <h1
          className={`font-homemadeApple ${homemadeApple.className} text-[3vw] lg:text-[2vw] flex flex-wrap justify-start cursor-default`}
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
      </div>

      {/* Projecten */}
      {projectsData.map((project) => (
        <ProjectCards
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}

      {/* Animatie */}
      <style jsx>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .pop-letter,
        .pop-logo { animation: popIn 0.5s ease forwards; }
        .opacity-0 { opacity: 0; }
      `}</style>
    </div>
  );
}