"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 pt-20 sm:grid sm:grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left relative"
        >
          <h1 className="text-foreground mb-4 mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold ">
            Hi! I&apos;m <span className="bg-accent p-1"> Elyass</span> software
            engineer.
          </h1>
          <h1 className="text-muted-foreground mt-6 text-xl sm:text-lg lg:text-xl font-mono font-light max-w-xl mx-auto sm:mx-0">
            a passionate about building excellent software that improves
            everyday life.
            <br />
          </h1>
        </motion.div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full flex justify-center items-center"
          >
            <Image
              src="images/hero-section.png"
              alt="hero image"
              className="w-full h-auto max-w-[260px] xs:max-w-sm sm:max-w-md lg:max-w-lg object-contain"
              width={550}
              height={550}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
