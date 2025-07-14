import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-[1.25rem] md:text-[2.5rem] font-semibold relative z-10">
              <h1>Transforme des</h1>

              {/* Bloc animé + espacement vers le bas */}
              <div className="block overflow-hidden h-[2.5rem] md:h-[3.5rem] mb-0 md:mb-0">
                <div className="wrapper">
                  {words.map((word, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 h-[2.5rem] md:h-[3.5rem]"
                    >
                      <img
                        src={word.imgPath}
                        alt="icon"
                        className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h1>en expérience web</h1>
              <h1>complète et enrichissante</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Salut ! Je suis Keanu, un développeur en herbe basé à Bordeaux avec une passion pour le code.
            </p>

            <Button
              text="Mon travail"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
