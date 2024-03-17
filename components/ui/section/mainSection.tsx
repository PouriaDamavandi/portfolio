import { FC } from "react";
import { IMainSection } from "./mainSection.types";

const MainSection: FC<IMainSection> = ({ title, id, children }) => {
  return (
    <>
      <h3 id={id} className="text-5xl border-b-2 py-10 border-yellow-200">
        {title}
      </h3>
      <div className="py-10">{children}</div>
    </>
  );
};

export default MainSection;
