import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-40 md:h-52 rounded-t-xl relative group "
        style={{
          background: `url(${imgUrl}) center center / cover no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay  items-center justify-center rounded top-0 left-0 w-full h-full bg-second-100 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-30 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-10 w-10 border-2 mr-2 relative rounded-full border-primary-900 hover:border-primary-950 group/link"
          >
            <CodeBracketIcon className="h-5 w-5 text-primary-900   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary-950 transition-all duration-500 " />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-primary-900 hover:border-primary-950 group/link"
          >
            <EyeIcon className="h-5 w-5 text-primary-900   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary-950 transition-all duration-500 " />
          </Link>
        </div>
      </div>
      <div className="text-primary-900 rounded-b-xl  bg-white-50 py-6 px-4 border border-mercury-100 hover:shadow-[0_1px_3px_rgba(15,23,42,0.08)] ">
        <h5 className="text-xl font-bold text-primary-950 mb-2">{title}</h5>
        <p className="text-primary-900 ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
