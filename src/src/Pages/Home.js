import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const refs = {
    greeting: useRef(),
    name: useRef(),
    tagline: useRef(),
    image: useRef(),
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      [refs.greeting.current, refs.name.current, refs.tagline.current],
      {
        x: "-100%",
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      }
    ).from(
      refs.image.current,
      {
        x: "200%",
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      },
      "<"
    );
  }, []);

  return (
    <main className="container mx-auto max-w-screen-xl section flex flex-col md:flex-row justify-between items-center py-10">
      <div className="flex-1">
        <h1
          ref={refs.greeting}
          className="text-2xl md:text-3xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading"
        >
          Hi, 👋<br />My Name is
        </h1>
        <h1
          ref={refs.name}
          className="text-2xl md:text-3xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mt-2"
        >
          {name}
        </h1>
        <h2
          ref={refs.tagline}
          className="text-xl md:text-2xl xl:text-3xl font-semibold text-dark-heading dark:text-light-heading mt-2"
        >
          {tagline}
        </h2>
      </div>

      <div className="flex-1 mt-5 md:mt-0 flex justify-center md:justify-end">
        <img
          ref={refs.image}
          className="w-full md:w-1/2 rounded-xl shadow-lg"
          src={img}
          alt={`Portrait of ${name}`}
        />
      </div>
    </main>
  );
}

export default Home;
