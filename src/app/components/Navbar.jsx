"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
  <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent bg-opacity-50 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link
          href=""
          className="text-lg md:text-5xl text-foreground font-semibold "
        >
          <Image
            src="/images/my-logo.svg"
            alt="logo image"
            width={34}
            height={34}
          />
        </Link>
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-primary hover:text-second-500   "
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-foreground hover:text-second-500  "
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="menu  hidden md:block md:w-auto " id="navbar">
          <ul className="flex items-center p-10 md:p-0 md:flex-row mt-0">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href ?? index}>
                <li>
                  <NavLink href={link.href} title={link.title} />
                </li>
                {index < navLinks.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="px-10 text-white/10 select-none text-xs"
                  >
                    &#9679;
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        {/* Desktop Hire me button (hidden on mobile; mobile version lives inside MenuOverlay) */}
        <button
          className="hidden md:flex relative group border border-primary text-foreground w-20 h-10 md:w-32 md:h-10 items-center justify-center overflow-hidden"
          type="button"
          onClick={() => {
            // Scroll to contact section
            const el = document.querySelector('#contact')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          <span className="relative font-medium tracking-wide text-sm md:text-base">Hire me</span>
        </button>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          onClose={() => setNavbarOpen(false)}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
