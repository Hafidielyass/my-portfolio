import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const CertificationCard = ({ imgUrl, title, previewUrl }) => {
  return (
    <div className="mb-4 ">
      <div
        className="h-40 md:h-52 rounded-xl relative group "
        style={{ background: `url(${imgUrl}) center center / cover no-repeat`, backgroundSize: "cover" }}
      >
        <div className="overlay  items-center justify-center  top-0 left-0 w-full h-full bg-second-100 rounded-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-30 transition-all duration-500">
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-primary-900 hover:border-primary-950 group/link"
          >
            <LinkIcon className="h-5 w-5 text-primary-900   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary-950 transition-all duration-500 " />
          </Link>
            <h5 className="absolute bottom-0 text-xl font-semibold text-primary-900 mb-2">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
