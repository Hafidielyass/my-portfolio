import React from "react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="relative group h-40 md:h-52 overflow-hidden "
        style={{
          background: `url(${imgUrl}) center center / cover no-repeat`,
          backgroundSize: "contain",
        }}
      >
        {/* Muted overlay on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-muted/50 transition-colors duration-300 group-hover:bg-muted/50"
        />

        {/* Title at bottom-left */}
        <div className="absolute bottom-3 left-3 z-10">
          <h5 className="text-lg md:text-xl font-bold text-foreground [text-shadow:0_1px_4px_rgba(0,0,0,0.25)]">
            {title}
          </h5>
        </div>

        {/* Action icons bottom-right, slide up on hover */}
        <div className="absolute bottom-3 right-3 z-10 flex gap-2 transform translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={gitUrl}
            className="h-10 w-10 relative  bg-muted transition-colors duration-300"
            aria-label="View source"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-primary-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 group-hover:text-foreground" />
          </Link>
          {/* <Link
            href={previewUrl}
            className="h-10 w-10 relative rounded-full border-2 border-primary-900 hover:border-primary-950 bg-background/60 backdrop-blur-sm transition-colors duration-300"
            aria-label="Live preview"
          >
            <EyeIcon className="h-5 w-5 text-primary-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 group-hover:text-foreground" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
