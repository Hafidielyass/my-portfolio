import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProjectTag = ({name,onClick, isSelected , Icon}) => {
    const buttonStyles = isSelected ?  "text-second-700 border border-second-200 " : "text-primary-950 border border-mercury-100 hover:text-second-900 hover:bg-second-50 "
  return (
    <button 
    className={`${buttonStyles} flex items-center rounded-full border-2  px-6 py-3 text-xl`}
    onClick={()=> onClick(name)}>
     <Icon className="w-6 h-6 mr-1"/>
     {name}
    </button>
  );
};

export default ProjectTag;
