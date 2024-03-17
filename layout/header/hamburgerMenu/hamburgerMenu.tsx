import { IconX } from "@tabler/icons-react";
import { FC } from "react";

const HamburgerMenu: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="w-1/2 bg-slate-900 z-20 absolute right-0 top-0 h-screen flex flex-row items-start justify-around py-8 md:hidden">
      <IconX onClick={onClose} />
      <ul className="h-full flex flex-col gap-4">
        <li className="text-white">
          <a href="#work">Work</a>
        </li>
        <li className="text-white">
          <a href="#about">About</a>
        </li>
        <li className="text-white">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
