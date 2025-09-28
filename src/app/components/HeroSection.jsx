"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="  mx-auto px-20 pt-14 grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left  relative"
        >
          <h1 className="text-foreground mb-4 text-xl sm:text-2xl lg:text-5xl font-extrabold">
            Hi! I'm <span className="bg-accent p-1"> Elyass</span> software
            engineer.
          </h1>
          <h1 className="text-muted-foreground mt-10 text-3xl sm:text-4xl lg:text-xl font-mono font-light max-w-xl">
            a passionate about building excellent software that improves
            everyday life.
            <br />
          </h1>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className=" relative"
          >
            <Image
              src="/images/hero-section.png"
              alt="hero image"
              className=""
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
