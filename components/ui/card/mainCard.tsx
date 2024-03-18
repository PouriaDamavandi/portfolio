import Image from "next/image";
import { FC } from "react";
import { IMainCard } from "./mainCard.types";
import { useRouter } from "next/navigation";

const MainCard: FC<IMainCard> = ({ image, title, description, id }) => {
  const { push } = useRouter();
  return (
    <>
      <div
        className="grid justify-center items-start gap-2"
        onClick={() => push(`/work/${id}`)}
      >
        <Image src={image} alt={title} width={860} height={860} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default MainCard;
