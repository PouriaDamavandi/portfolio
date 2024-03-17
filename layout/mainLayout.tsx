import MainContainer from "@/components/ui/container/mainContainer";

import MainHeader from "./header/mainHeader";
import { IMainLayout } from "./mainLayout.types";
import { FC } from "react";

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className="bg-slate-900 text-cyan-50">
      <MainHeader />
      <MainContainer>{children}</MainContainer>
    </div>
  );
};

export default MainLayout;
