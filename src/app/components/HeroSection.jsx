"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 palce-self-center text-center sm:text-left  relative"
        >
          <h1 className="text-primary-950  mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I&apos;m <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "ELYASS ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "web developer",
                1000,
                "Mobile developer",
                1000,
                "UI/UX designer",
                1000,
              ]}
              wrapper="span"
              speed={65}
              style={{ color: "#206EF3" }}
              repeat={Infinity}
              className="font-Gaegu text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            />
          </h1>
          <p className="text-primary-900  text-xl sm:text-lg sm:pr-5 mb-6 lg:text-2xl">
            A human kind with some ability to love learning and working on
            teamwork
          </p>
          <div>
            <button className="px-6 py-3 font-Gaegu text-xl w-full sm:w-fit rounded-full mt-3 mr-4 text-white-50 bg-second-500 shadow-2xl hover:bg-second-600 hover:shadow-none active:bg-second-700 ">
              Hire me
            </button>
            <Link href="/HAFIDI ELYASS CV.pdf" target="_blank">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mt-4 text-primary-950 border-2 border-second-700 hover:bg-second-50 active:bg-second-100 ">
                Donwload CV
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          className="rounded-full bg-second-500 border border-mercury-300 w-80 h-80  relative"
          >
            <Image
              src="/images/test3.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -scale-x-100 "
              width={230}
              height={220}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
