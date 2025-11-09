'use client'

import Image from "next/image"
import Navbar from "./components/navbar"
import Header from "./components/header"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"

export default function Home() {
  return (
    <>

      <Navbar />
      <Header />

      <section
        id="projects"
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] text-black"
      >
        <h2 className="text-[2.5vw] font-bold mb-[2vh] cursor-default">
          hello there! ☺
        </h2>
        <p className="max-w-[60vw] text-[1.4vw] leading-relaxed cursor-default">
          my name is saomai, a media design enthusiast who wants to translate feelings and ideas 
          into visually stunning realities, evoking emotion and inspiring thought between people.
        </p>
      </section>

      <Projects />

      <section
        id="skills"
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] text-black"
      >
        <h2 className="text-[2.5vw] font-bold max-w-[60vw] leading-relaxed cursor-default">
          i want to keep expanding my creative urges, such as experimenting with different media.
        </h2>
      </section>

      <Skills />

      <section
        id="hobbies"
        className="w-full flex flex-col justify-center items-center text-center px-[5vw] py-[5vh] text-black pt-15"
      >
        <h2 className="text-[2.5vw] font-bold mb-[2vh] cursor-default">
          when i'm not designing,
        </h2>
        <p className="max-w-[60vw] text-[1.4vw] leading-relaxed cursor-default">
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

      <Contact />
    </>
  )
}