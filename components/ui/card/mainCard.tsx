import Image from "next/image";
import React, { FC } from "react";
import { IMainCard } from "./mainCard.types";

const MainCard: FC<IMainCard> = ({ image, title, description }) => {
  return (
    <div className="grid justify-center items-start gap-2 ">
      <Image src={image} alt={title} width={640} height={640} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default MainCard;
