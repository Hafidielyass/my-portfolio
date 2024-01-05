import {
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import SkillsCard from "./SkillsCard";

const skillsArray = [
  {
    id: 1,
    title: "Web Dev",
    Icon: CodeBracketIcon,
    skills: `HTML - CSS - JavaScript  - TailwindCSS - Bootstrap - Redux - ContextAPI - NodeJS - ExpressJS - REST API`,
    iconColor: "primary-500",
    textColor: "white-50",
    fillColor: "white-50",
  },
  {
    id: 2,
    title: "Programming",
    Icon: CommandLineIcon,
    skills: `PL : C - C++ - JAVA - JEE - Android - Kotlin - Spring - python - React - Next.js - M.E.R.N`,
    iconColor: "second-500",
    textColor: "second-600",
    fillColor: "second-600",
  },
  {
    id: 3,
    title: "Networking",
    Icon: GlobeAltIcon,
    skills: `Routing & Switching - linuxOS - IPV4 - IPV6 - Sécurisation réseaux - Shell Virtualisation`,
    bgColor: "second-600",
    iconColor: "primary-950",
    textColor: "white-50",
    fillColor: "white-50",
  },
];

const SkillsSection = () => {
  return (
    <section className="text-primary-950 font-AlbertSans ">
      <h2 className="text-primary-950 text-5xl font-Gaegu font-extrabold mb-1 ">Skills</h2>
      <hr className="border-second-500 border-2 w-14" />

      <div className="md:grid md:grid-cols-3 gap-6 items-start py-4 xl:gap-16 sm:grid-cols-3 sm:gap-16 ">
        {skillsArray.map((skill) => (
          <SkillsCard
            key={skill.id}
            title={skill.title}
            Icon={skill.Icon}
            skills={skill.skills}
            iconColor={skill.iconColor}
            textColor={skill.textColor}
            fillColor={skill.fillColor}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
