'use client'

import Navbar from "./components/navbar";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { Fugaz_One, Homemade_Apple } from "next/font/google";
import { useRef, useState, useEffect } from "react";

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const goalRef = useRef(null);
  const [animateGoal, setAnimateGoal] = useState(false);

  // IntersectionObserver Goal
  useEffect(() => {
    const observerGoal = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateGoal(true);
      },
      { threshold: 0.3 }
    );

    if (goalRef.current) observerGoal.observe(goalRef.current);

    return () => observerGoal.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Header />

      {/* About Me */}
      <section
        id="about"
        className="min-h-[30vh] flex flex-col justify-center items-center text-center px-8 bg-[#f5f5f5] text-black -mt-16"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">hello there! ☺</h2>
        <p className="max-w-[800px] text-base md:text-lg leading-relaxed">
          my name is saomai, a media design enthousiast who wants to translate feelings and ideas into visually stunning realities, evoking emotion and inspiring thought between people.
        </p>
      </section>

      <Projects />

      {/* My Goal */}
      <section
        id="goal"
        className="min-h-[30vh] flex flex-col justify-center items-center text-center px-8 bg-[#f5f5f5] text-black -mt-16"
      >
        <h2 className="max-w-[800px] text-2xl md:text-4xl font-bold mb-4">i want to keep expanding my creative urges, such as experimenting with different media.</h2>
      </section>

      <Skills />
    </>
  );
}