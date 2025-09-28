import {
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import SkillsCard from "./SkillsCard";

const skillsArray = [
  {
    id: 1,
    title: "Full Stack Development",
    Icon: CodeBracketIcon,
    skills: `JavaScript - TypeScript - React - Vue.js - Angular - Next.js - Node.js - Nest.js - Laravel - Django - .NET - MERN Stack - PostgreSQL - MongoDB - MySQL`,
    iconColor: "accent",
    textColor: "white-50",
    fillColor: "white-50",
  },
  {
    id: 2,
    title: "DevOps & Cloud",
    Icon: CloudIcon,
    skills: `AWS - Azure - GCP - Docker - Kubernetes - Terraform - Ansible - Jenkins - GitLab CI - GitHub Actions - Azure DevOps - Prometheus - Grafana - ELK Stack`,
    iconColor: "accent",
    textColor: "accent",
    fillColor: "accent",
  },
  {
    id: 3,
    title: "Programming & Systems",
    Icon: CommandLineIcon,
    skills: `Java - Python - PHP - C++ - Go - Bash - C# - Linux - Windows Server - Git - Oracle - SQLite - SonarQube - Selenium - Cypress`,
    bgColor: "second-600",
    iconColor: "primary-950",
    textColor: "white-50",
    fillColor: "white-50",
  },
];

const SkillsSection = () => {
  return (
    <section className="relative py-24 px-12 bg-background text-foreground font-AlbertSans">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-4 right-4 text-[clamp(2.5rem,10vw,8rem)] font-extrabold uppercase tracking-tight text-foreground opacity-10 leading-none"
      >
        {"< Skills />"}
      </span>
      <div className="relative flex flex-row">
        <h2 className="relative  w-fit text-right text-foreground text-4xl font-Gaegu font-extrabold mb-1">
          <span
            aria-hidden="true"
            className="absolute left-1/4 top-1/4 block h-[70%] w-[60%] -translate-x-1/2 -translate-y-1/2 bg-accent "
          />
          <span className="relative z-10 px-4">Skills</span>{" "}
          <hr className="border-secondary border-2 h-7 w-0 absolute top-2 right-0" />
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 xl:gap-16 items-start py-4 mt-6">
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
