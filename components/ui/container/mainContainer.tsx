import React, { FC } from "react";
import { IMainContainer } from "./mainContainer.types";

const MainContainer: FC<IMainContainer> = ({ children }) => {
  return <div className="px-6 md:px-16 py-12">{children}</div>;
};

export default MainContainer;
