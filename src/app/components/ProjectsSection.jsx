"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { ComputerDesktopIcon, DevicePhoneMobileIcon, FolderIcon } from "@heroicons/react/24/outline";

const projectData = [
  {
    id: 1,
    title: "Cineflix",
    description:
      "A platform to search for movies and tv shows, and get information about them.",
    imgUrl: "/images/cineflixmern-screen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Yoga Project",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "/images/yoga-project-screen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Yoga Project",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "/images/yoga-project-screen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Mobile Project",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "/images/yoga-project-screen.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Yoga Mobile Project",
    description:
      "A platform for the yoga community to share their knowledge and experience.",
    imgUrl: "/images/yoga-project-screen.png",
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

  return (
    <section id="projects">
      <h2 className="text-primary-950 text-5xl font-Gaegu font-extrabold mb-1 mt-12">
        My Projects
      </h2>
      <hr className="border-second-500 border-2 w-20 mb-2 " />
      <div className="text-primary-900  flex flex-row justify-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
          Icon={FolderIcon
          }
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
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project) => (
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
    </section>
  );
};

export default ProjectsSection;
