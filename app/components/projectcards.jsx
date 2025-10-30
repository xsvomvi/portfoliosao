import Image from "next/image";
import Link from "next/link";
import { Fugaz_One, Homemade_Apple } from "next/font/google";
import { useState, useEffect, useRef } from "react";

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function ProjectCards({ title, description, image, link }) {
  const [animate, setAnimate] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // trigger animatie
          observer.disconnect(); // animatie 1 keer
        }
      },
      { threshold: 0.3 } // start animatie als 30% zichtbaar
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row bg-[#e9e5d9] text-black rounded-2xl shadow-md overflow-hidden max-w-6xl w-full mx-auto my-1
                  transition-transform duration-700 ease-out transform 
                  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
                  hover:scale-[1.02]`}
    >
      {/* Afbeelding links, vierkant en volledige hoogte */}
      <div className="md:w-1/3 w-full flex-shrink-0 relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Tekst rechts, verticaal gecentreerd */}
      <div className="md:w-2/3 w-full p-6 flex flex-col justify-center items-center text-center">
        <h3 className={`mt-4 font-fugazOne ${fugazOne.className} text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px]`}>
          {title}
        </h3>

        <p className={`mt-2 font-homemadeApple ${homemadeApple.className} text-[7px] sm:text-[13px] md:text-[17px] lg:text-[21px] flex flex-wrap justify-center`}>
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

        <Link href={link}>
          <button className="flex justify-center items-center gap-4 lg:gap-6 px-6 py-2 border border-black rounded-md transition-transform duration-500 transform hover:scale-105 cursor-pointer mt-15">
            view project
          </button>
        </Link>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .pop-letter {
          animation: popIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}