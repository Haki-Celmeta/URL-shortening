import { illustration } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

const Hero = () => {
  useGSAP(() => {
    gsap.to('.hero-content', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      stagger: {
        each: 0.6,
        from: "end"
      }
    })
  }, [])

  return (
    <section className="py-6">
      <div className="screen-max-width flex sm:flex-row gap-4 items-center flex-col px-2">
        <div className="hero-content flex flex-col gap-4 sm:order-1 order-2 sm:w-1/2">
          <h1 className="sm:text-5xl sm:leading-tight text-4xl font-bold leading-tight sm:text-left text-center">
            More than just shorter links
          </h1>
          <p className="text-violet-100 sm:text-left text-center">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing
          </p>
          <div className="sm:w-fit w-full flex items-center justify-center">
            <button className="btn mt-6">Get started</button>
          </div>
        </div>
        <div className="hero-content sm:order-2 order-1 sm:w-1/2 w-auto">
          <img src={illustration} alt="boost dektop" className="px-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
