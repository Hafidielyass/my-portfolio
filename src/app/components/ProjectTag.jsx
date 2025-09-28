import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProjectTag = ({ name, onClick, isSelected, Icon }) => {
  const buttonStyles = isSelected
    ? "bg-muted text-muted-foreground border-s border-accent "
    : "bg-muted text-muted-foreground hover:text-second-900 hover:bg-second-50 ";
  return (
    <button
      className={`${buttonStyles} flex items-center   px-6 py-3 text-xl`}
      onClick={() => onClick(name)}
    >
      <Icon className="w-6 h-6 mr-1" />
      {name}
    </button>
  );
};

export default ProjectTag;
