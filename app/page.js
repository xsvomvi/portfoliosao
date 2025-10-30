'use client'
import Navbar from "./components/navbar";
import Header from "./components/header";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
      {/* About Me */}
      <section
        id="about"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-8 bg-white text-black -mt-16"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">hello there! ☺</h2>
        <p className="max-w-[800px] text-base md:text-lg leading-relaxed">
my name is saomai, a media design enthousiast who wants to translate feelings and ideas into visually stunning realities, evoking emotion and inspiring thought between people.
        </p>
      </section>
    </>
  );
}
