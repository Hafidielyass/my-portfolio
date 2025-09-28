import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="md:hidden px-4 pb-6 animate-in fade-in slide-in-from-top-2">
      <ul className="flex flex-col items-center py-4 gap-1">
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              if (onClose) onClose();
            }}
          >
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
      <div className="mt-2 flex justify-center">
        <Link
          href="#contact"
          onClick={() => {
            if (onClose) onClose();
          }}
          className="relative group border border-primary text-foreground w-40 h-11 flex items-center justify-center overflow-hidden rounded-sm"
        >
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          <span className="relative font-medium tracking-wide text-sm">
            Hire me
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MenuOverlay;
