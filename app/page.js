'use client'

import Navbar from "./components/navbar";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] bg-[#f5f5f5] text-black"
      >
        <h2 className="text-[2.5vw] font-bold mb-[2vh]">hello there! ☺</h2>
        <p className="max-w-[60vw] text-[1.4vw] leading-relaxed">
          my name is saomai, a media design enthousiast who wants to translate feelings and ideas into visually stunning realities, evoking emotion and inspiring thought between people.
        </p>
      </section>

      <Projects />

      {/* My Goal */}
      <section
        id="goal"
        ref={goalRef}
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] bg-[#f5f5f5] text-black"
      >
        <h2 className="text-[2.5vw] font-bold max-w-[60vw] leading-relaxed">
          i want to keep expanding my creative urges, such as experimenting with different media.
        </h2>
      </section>

      <Skills />

      {/* My Hobbies */}
      <section
        id="hobbies"
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] bg-[#f5f5f5] text-black"
      >
        <h2 className="text-[2.5vw] font-bold mb-[2vh]">when i'm not designing,</h2>
        <p className="max-w-[60vw] text-[1.4vw] leading-relaxed">
          i like browsing through music{" "}
          <Image
            src="/music_sticker.svg"
            alt="Music Sticker"
            width={30}
            height={30}
            className="inline-block mx-[0.5vw]"
          />
          , movies and games. or i'm outside{" "}
          <Image
            src="/outside_sticker.svg"
            alt="Outside Sticker"
            width={30}
            height={30}
            className="inline-block mx-[0.5vw]"
          />
          , drawing inspiration from the people and world around me.
        </p>
      </section>
    </>
  );
}