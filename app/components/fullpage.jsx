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
    <div
      className="w-screen h-screen overflow-hidden flex flex-col bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/portfolio_background2.svg')" }}
    >
      {/* Titel + quote */}
      <div className="flex flex-col items-center justify-center text-center p-[2rem] mt-[1.5rem]">
        <h3
          className={`mt-[2vh] font-fugazOne ${fugazOne.className} text-center cursor-default`}
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
          }}
        >
          {title}
        </h3>

        {quote && (
          <h1
            className={`mt-[1vh] font-homemadeApple ${homemadeApple.className} text-center cursor-default`}
            style={{
              fontSize: "clamp(1.2rem, 2vw, 2.2rem)",
            }}
          >
            {quote.split("").map((char, idx) => (
              <span
                key={idx}
                className="pop-letter inline-block"
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
        {/* Tekst + knoppen */}
        <div className="md:w-1/2 w-full flex flex-col items-start text-left ml-[11vw] px-[4vw] py-[3vw]">
          {/* Beschrijving */}
          <p
            className={`font-inter ${inter.className}`}
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            {description}
          </p>

          {/* Programma's */}
          {programs && (
            <p
              className={`font-inter ${inter.className}`}
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)",
                marginBottom: "clamp(1.2rem, 2.5vw, 2rem)",
              }}
            >
              {programs}
            </p>
          )}

          {/* Knoppen */}
          {buttons.length > 0 && (
            <div className="flex gap-[0.75rem] md:gap-[1.5vw] flex-wrap">
              {buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playSound();
                    window.open(btn.link, "_blank");
                  }}
                  className="
                    flex justify-center items-center
                    border border-black
                    bg-[#f5f5f5]
                    cursor-pointer
                    transition-transform duration-500 transform hover:scale-105
                    rounded-md
                    px-[1.25rem] py-[0.6rem]
                    w-[8.5rem]
                    mt-0 md:mt-[3rem]
                    text-center
                  "
                  style={{
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                  }}
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
            sizes="(max-width: 768px) 45vw, 28vw"
            className="object-cover rounded-2xl w-[28vw] max-w-[320px] h-auto"
          />
        </div>
      </div>

      {/* Animatie */}
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

        .pop-letter {
          animation: popIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}