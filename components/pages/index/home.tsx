import Image from "next/image";
import React from "react";
import sampleImage from "../../../public/images/man-presenting-something.jpg";

const HomePageHero = () => {
  return (
    <div className="my-16 flex flex-col gap-6 justify-center items-center md:flex-row ">
      <Image
        src={sampleImage}
        alt="Pouria Damavandi picture"
        className="w-72 h-72 "
      />
      <p className="text-justify ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi
        numquam sunt repellendus nisi quos id possimus dignissimos, inventore
        ducimus, recusandae quia incidunt consequatur deleniti quae quaerat
        velit impedit. Quas? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Totam adipisci excepturi hic quas sunt eaque quod dolore omnis
        dignissimos saepe, expedita cupiditate laudantium, tenetur, aliquid
        libero recusandae distinctio quae consequuntur. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Vero molestias deserunt non sed ut
        alias quaerat ipsum expedita quisquam ad culpa ab repellat odio ipsa
        veritatis, consequuntur explicabo animi iste.
        <br />
        <a
          href="../../../public/files/Pouria Damavandi CV.pdf"
          className="mt-4 block"
          download="Pouria_Damavandi_CV.pdf"
        >
          Resume
        </a>
      </p>
    </div>
  );
};

export default HomePageHero;
