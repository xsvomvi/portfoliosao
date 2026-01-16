'use client'

import Image from "next/image"
import Navbar from "./components/navbar"
import Header from "./components/header"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"
import { Homemade_Apple } from "next/font/google"

const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" })

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />

      {/* Intro sectie */}
      <section
        id="projects"
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] sm:py-[4vh] md:py-[5vh] text-black"
      >
        <h2
          className="font-bold mb-[1.5rem] cursor-default"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
        >
          hello there! ☺
        </h2>
        <p
          className={`max-w-[60vw] leading-relaxed cursor-default font-homemadeApple ${homemadeApple.className}`}
          style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", marginBottom: "1.5rem" }}
        >
          my name is saomai, a media design enthusiast who wants to translate feelings and ideas
          into visual realities, inspiring thought between people.
        </p>
      </section>

      <Projects />

      {/* Skills intro */}
      <section
        id="skills"
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] sm:py-[4vh] md:py-[5vh] text-black"
      >
        <h2
          className="font-bold max-w-[60vw] leading-relaxed cursor-default"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", marginBottom: "1.5rem" }}
        >
          i want to keep expanding my creative urges, such as experimenting with different media.
        </h2>
      </section>

      <Skills />

      {/* Hobbies */}
      <section
        id="hobbies"
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] sm:py-[4vh] md:py-[5vh] mt-[5vh] mb-[5vh] text-black"
      >
        <h2
          className="font-bold mb-[1rem] cursor-default"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
        >
          when i'm not designing,
        </h2>
        <p
          className={`max-w-[60vw] leading-relaxed cursor-default font-homemadeApple ${homemadeApple.className}`}
          style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", marginTop: "1rem" }}
        >
          i like browsing through music{" "}
          <Image
            src="/music_sticker.svg"
            alt="Music Sticker"
            width={30}
            height={30}
            className="inline-block mx-[0.5vw]"
          />
          , movies and games, or i'm outside{" "}
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

      <Contact />
    </>
  )
}