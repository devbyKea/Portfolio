import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/Iphone eco connexion 2_00000.png" alt="Ecoride Interface" />
            </div>
            <div className="text-content">
              <h2>
                EcoRide 🌳
              </h2>
              <p className="text-white-50 md:text-xl">
                Une application web de covoiturage éco-responsable, conçue pour
                promouvoir le transport durable et réduire l'empreinte carbone. 
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/Ipad FOP_00000.png"
                  alt="Site vitrine Focus On Production"
                />
              </div>
              <div className="text-content">
                <h2>
                  Focus On Production 🎥
                </h2>
                <p className="text-white-50 md:text-xl">
                  Site vitrine conçu avec le CMS Wordpress pour mettre en avant
                  les services de l'agence Focus On Production, spécialisée dans
                  la production audiovisuelle et le Motion Design.
                </p>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/Ipad CV_00000.png" alt="DevByKea Portfolio" />
              </div>
              <h2>3D Portofolio 🗂️</h2>
              <p className="text-white-50 md:text-xl">
                Conception d'un portfolio interactif en 3D, moyennant React, Three et Fiber,
                permettant de présenter mes projets de manière immersive et engageante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;