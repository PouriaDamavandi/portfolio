import React, { FC, useState } from "react";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";
import { IconMenu2 } from "@tabler/icons-react";

const MainHeader: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-row md:justify-between justify-between items-center w-full relative px-16 py-8 transition-all duration-300 ">
      <p className="text-xl">Pouria Damavandi</p>
      <div className="hidden md:flex md:flex-row md:gap-10 gap-2">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="md:hidden">
        {!isNavOpen && (
          <IconMenu2 onClick={() => setIsNavOpen((prev) => !prev)} />
        )}
        {isNavOpen && <HamburgerMenu onClose={() => setIsNavOpen(false)} />}
      </div>
    </div>
  );
};

export default MainHeader;
