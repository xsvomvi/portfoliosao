import Image from "next/image";
import Link from "next/link";
import { Fugaz_One, Homemade_Apple } from "next/font/google";
import { useState, useEffect, useRef } from "react";

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

const playSound = () => {
  const audio = new Audio("/paper_fold.mp3");
  audio.play();
};

export default function ProjectCards({ title, description, image, link }) {
  const [animate, setAnimate] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row bg-[#e9e5d9] text-black rounded-2xl shadow-md overflow-hidden
        max-w-[76vw] w-full mx-auto my-[0.5rem]
        transition-transform duration-700 ease-out transform
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}
        hover:scale-[1.02]`}
    >
      {/* Afbeelding */}
      <div className="md:w-1/3 w-full flex-shrink-0 relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Tekst */}
      <div className="md:w-2/3 w-full p-[1.5rem] flex flex-col justify-center items-center text-center cursor-default">
        <h3
          className={`mt-[0.5rem] font-fugazOne ${fugazOne.className}`}
          style={{ fontSize: "clamp(1.6rem, 3.75vw, 2.8rem)" }}
        >
          {title}
        </h3>

        <p
          className={`mt-[0.5rem] font-homemadeApple ${homemadeApple.className} flex flex-wrap justify-center`}
          style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)" }}
        >
          {description.split("").map((char, idx) => (
            <span
              key={idx}
              className={`inline-block ${animate ? "pop-letter" : "opacity-0"}`}
              style={{ animationDelay: animate ? `${idx * 0.08}s` : "0s" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        {/* Knop */}
        <div className="mt-[2.5rem] flex justify-center w-full">
          <Link href={link}>
            <button
              onClick={playSound}
              className="
                flex justify-center items-center
                border border-black
                rounded-md
                transition-transform duration-500 transform hover:scale-105
                px-[1.25rem] py-[0.6rem]
                w-full sm:w-[12rem]
                bg-transparent
                cursor-pointer
                text-center
              "
              style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
            >
              view project
            </button>
          </Link>
        </div>
      </div>

      {/* Animaties */}
      <style jsx>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }

        .pop-letter {
          animation: popIn 0.5s ease forwards;
        }

        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}