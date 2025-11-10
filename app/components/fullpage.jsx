"use client";

import Image from "next/image";
import { Fugaz_One, Inter, Homemade_Apple } from "next/font/google";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

const playSound = () => {
  const audio = new Audio("/paper_fold.mp3");
  audio.play();
};

export default function FullPageProject({
  title,
  quote,
  description,
  programs,
  image,
  buttons = [],
  reverse,
}) {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: "url('/portfolio_background2.svg')" }}>

      {/* Titel + quote */}
      <div className="flex flex-col items-center justify-center text-center p-[2rem] mt-[1.5rem]">
        <h3
          className={`mt-[2vh] font-fugazOne ${fugazOne.className} text-[4vw] text-center cursor-default`}
        >
          {title}
        </h3>

        {quote && (
          <h1
            className={`mt-[1vh] font-homemadeApple ${homemadeApple.className} text-[2vw] text-center cursor-default`}
          >
            {quote.split("").map((char, idx) => (
              <span
                key={idx}
                className="pop-letter"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        )}
      </div>

      {/* Beschrijving + afbeelding */}
      <div
        className={`flex flex-1 w-full items-start ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } text-black cursor-default`}
      >

        {/* Programma's + knoppen */}
        <div className="md:w-1/2 w-full flex flex-col items-start text-left ml-[11vw] px-[4vw] py-[3vw]">
          <p className={`font-inter ${inter.className} text-[1.4vw] mb-[1.5rem]`}>
            {description}
          </p>
          {programs && (
            <p className={`font-inter ${inter.className} text-[1.4vw]`}>
              {programs}
            </p>
          )}

          {/* Knoppen */}
          {buttons.length > 0 && (
            <div className="flex gap-[1.5vw] flex-wrap">
              {buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playSound(); 
                    window.open(btn.link, "_blank"); 
                  }}
                  className="flex flex-wrap justify-center items-center gap-[1vw] lg:gap-[1.5vw] rounded-full px-[1.5rem] py-[0.75rem] w-[12rem] block w-[8rem] text-center border border-black py-[0.5rem] px-[0.75rem] rounded-md transition-transform duration-500 transform hover:scale-105 mt-[3rem] cursor-pointer bg-[#f5f5f5]"
                >
                  {btn.text}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Afbeelding */}
        <div className="md:w-auto w-full flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 60vw, 28vw"
            className="object-cover rounded-2xl w-[28vw] h-auto"
          />
        </div>
      </div>
    </div>
  );
}