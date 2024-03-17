import Image from "next/image";
import React, { FC, useState } from "react";
import { IMainCard } from "./mainCard.types";

const MainCard: FC<IMainCard> = ({ image, title, description }) => {
  const [zoomIn, setZoomIn] = useState<boolean>(false);

  return (
    <>
      <div className="grid justify-center items-start gap-2">
        <Image
          src={image}
          alt={title}
          width={860}
          height={860}
          onClick={() => setZoomIn(true)}
        />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {zoomIn && (
        <Image
          alt={title}
          src={image}
          width={1200}
          height={1200}
          onClick={() => setZoomIn(false)}
          className="hidden xl:block xl:absolute xl:inset-0 xl:m-auto z-50 "
        />
      )}
    </>
  );
};

export default MainCard;
