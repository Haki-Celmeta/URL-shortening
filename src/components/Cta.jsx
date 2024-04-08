import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  useGSAP(() => {
    gsap.to(".boost-cta-content", {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.3,
      ease: 'power1.inOut',
      scrollTrigger: ".boost-cta-content"
    });
  }, []);
  return (
    <section className="bg-violet-default">
      <div className="screen-max-width relative">
        <div
          id="boost-cta-con"
          className="h-40 w-full flex flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="boost-cta-content text-white sm:text-3xl text-2xl font-bold">
            Boost your links today
          </h2>
          <button className="btn boost-cta-content">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
