"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const AboutSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section
      ref={ref}
      id="about"
      className="pt- bg-background py-24 text-foreground font-AlbertSans relative"
    >
      {/* Big background title fixed to the top */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-2 left-1/2 -translate-x-1/2 text-[clamp(1rem,8vw,6rem)] font-extrabold uppercase tracking-tight text-foreground opacity-10 leading-none"
      >
        {"< About Me />"}
      </span>

      <motion.div
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : ""}
        className="md:grid md:grid-cols-2 gap-8 items-start justify-center py-8 px-4 xl:gap-16 sm:py-16 xl:my-6 md:my-6"
      >
        <div className="relative flex flex-row">
          <h2 className="relative mx-auto w-fit text-center text-foreground text-4xl font-Gaegu font-extrabold mb-1">
            <span
              aria-hidden="true"
              className="absolute left-1/4 top-1/4 block h-[70%] w-[60%] -translate-x-1/2 -translate-y-1/2 bg-accent "
            />
            <span className="relative z-10 px-4">My biography</span>
            <hr className="border-secondary border-2 h-7 w-0 absolute top-2 right-0" />
          </h2>
        </div>

        <div className="relative">
          <p className="text-foreground text-base mt-8 lg:text-2xl max-w-xl">
            I'm Elyass Hafidi, a software engineer with a passion for crafting
            elegant and efficient solutions. With a strong foundation in both
            front-end and back-end development, I specialize in creating
          </p>
          <div className="flex flex-row items-center space-x-2"></div>
          {/* Removed centered background text from here */}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
