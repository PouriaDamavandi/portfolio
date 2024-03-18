import Image from "next/image";
import React from "react";
import sampleImage from "../../../public/images/man-presenting-something.jpg";

const HomePageHero = () => {
  return (
    <div className="my-16 flex flex-col gap-6 justify-center items-center md:flex-row ">
      <div className="text-justify w-1/2 flex flex-col gap-4">
        <h3 className="text-3xl">Hello!</h3>
        <h4 className="text-7xl">I am Pouria</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi
          numquam sunt repellendus nisi quos id possimus dignissimos, inventore
          ducimus, recusandae quia incidunt consequatur deleniti quae quaerat
          velit impedit. Quas? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Totam adipisci excepturi hic quas sunt eaque quod
          dolore omnis dignissimos saepe, expedita cupiditate laudantium,
          tenetur, aliquid libero recusandae distinctio quae consequuntur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          molestias deserunt non sed ut alias quaerat ipsum expedita quisquam ad
          culpa ab repellat odio ipsa veritatis, consequuntur explicabo animi
          iste.
        </p>
        <a
          href="../../../public/files/Pouria Damavandi CV.pdf"
          className="mt-4 block"
          download="Pouria_Damavandi_CV.pdf"
        >
          Resume
        </a>
      </div>

      <Image
        src={sampleImage}
        alt="Pouria Damavandi picture"
        className="w-96 h-96"
      />
    </div>
  );
};

export default HomePageHero;
