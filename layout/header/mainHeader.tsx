import React, { FC } from "react";

const MainHeader: FC = () => {
  return (
    <div className="flex flex-row md:justify-between justify-start items-center w-full">
      <p className="text-base">Pouria Damavandi</p>
      <div className="flex flex-row md:gap-10 gap-2">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default MainHeader;
