"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

const projectData = [
  {
    id: 1,
    title: "OenergyMS",
    description:
      "A platform to search for movies and tv shows, and get information about them.",
    imgUrl: "images/oenergy-screen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Vigil",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "images/vigil-screen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Doc-area",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "images/Docarea-screen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Capsun",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "images/capsun-screen.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Yoga Mobile Project",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "images/yoga-project-screen.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 6,
    title: "PlanteCare+",
    description:
      "A mobile app to track workouts, set fitness goals, and monitor progress over time.",
    imgUrl: "images/plantcare-screen.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 7,
    title: "Agri R",
    description:
      "A mobile app to track workouts, set fitness goals, and monitor progress over time.",
    imgUrl: "images/agrir-screen.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  // Show-more state: display first 3, reveal the rest on demand
  const [showMore, setShowMore] = useState(false);
  const firstBatch = filteredProjects.slice(0, 3);
  const restBatch = filteredProjects.slice(3);

  return (
    <section id="projects" className="py-24 px-12 bg-background">
      <div className="relative flex flex-row">
        <h2 className="relative  w-fit text-right text-foreground text-4xl font-Gaegu font-extrabold mb-1 items-end">
          <span
            aria-hidden="true"
            className="absolute left-1/4 top-1/4 block h-[70%] w-[60%] -translate-x-1/2 -translate-y-1/2 bg-accent "
          />
          <span className="relative z-10 px-4">Projects</span>{" "}
          <hr className="border-secondary border-2 h-7 w-0 absolute top-2 right-0" />
        </h2>
      </div>
     

      {/* <div className="text-primary-900  flex flex-row justify-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
          Icon={FolderIcon}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
          Icon={ComputerDesktopIcon}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
          Icon={DevicePhoneMobileIcon}
        />
      </div> */}
      {/* Always show first 3 */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {firstBatch.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>

      {/* Smoothly slide down the rest */}
      {restBatch.length > 0 && (
        <motion.div
          id="more-projects"
          initial={{ height: 0, opacity: 0 }}
          animate={
            showMore
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="mt-8 grid md:grid-cols-3 gap-8 md:gap-12 ">
            {restBatch.map((project) => (
              <ProjectCard
                key={project.id}
                imgUrl={project.imgUrl}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Toggle button */}
      {filteredProjects.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            className="relative overflow-hidden  border border-border bg-muted px-5 py-2 text-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground flex items-center justify-between"
            aria-expanded={showMore}
            aria-controls="more-projects"
          >
            <span>{showMore ? "Less" : "More"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
              className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                showMore ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
