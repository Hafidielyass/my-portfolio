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
    <section ref={ref} className="text-primary-950 font-AlbertSans " id="about">
      <motion.div
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : ""}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:my-10 md:my-10 "
      >
        <div className="rounded-full bg-second-400 w-72 h-72  relative">
          {" "}
          <Image
            src="/images/test6.png"
            alt="hero image"
            className="absolute center-cropped transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
            width={210}
            height={210}
          />
        </div>
        <div>
          <h2 className="text-primary-950 text-5xl font-Gaegu font-extrabold mb-1">
            About Me
          </h2>
          <hr className="border-second-500 border-2 w-20 " />
          <p className="text-primary-950 text-base mt-8 lg:text-lg">
            I am Elyass Hafidi, it is a pleasure to make your acquaintance. As a
            Full Stack Developer , my ambition is to utilize my extensive
            proficiency in software development, database management, and
            network infrastructure. I am a highly motivated individual who is
            eager to learn new skills and technologies.
          </p>
          <div className="flex flex-row items-center  space-x-2">
            {/* <Link href="/HAFIDI ELYASS CV.pdf" target="_blank">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mt-3 text-white-50 bg-second-500 hover:bg-second-600 active:bg-second-700 flex items-center justify-center">
                <ArrowDownTrayIcon className="w-4 h-4 mr-2 " /> Download CV
              </button>
            </Link> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
