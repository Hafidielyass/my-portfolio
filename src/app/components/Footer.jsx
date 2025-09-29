import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer  bg-background text-foreground ">
      <div className="container p-12 flex justify-center">
        <div className="flex items-center justify-center gap-3 text-foreground font-semibold text-lg">
          <span>Made by</span>
          <Image
            src="images/my-logo.svg"
            alt="logo image"
            width={40}
            height={40}
          />{" "}
          <span>Elyass hafidi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
