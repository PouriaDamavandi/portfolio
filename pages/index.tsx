import MainCard from "@/components/ui/card/mainCard";
import MainSection from "@/components/ui/section/mainSection";
import sample from "../public/images/mihanInsurance.png";
import sample2 from "../public/images/pwa.png";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    []
  );

  const data = [
    {
      id: 1,
      title: "Mihan Insurance Website",
      image: sample,
      description: "i work in mihan",
    },
    {
      id: 2,
      title: "Mihan Insurance Website",
      image: sample2,
      description: "i work in mihan",
    },
    {
      id: 3,
      title: "Mihan Insurance Website",
      image: sample,
      description: "i work in mihan",
    },
    {
      id: 4,
      title: "Mihan Insurance Website",
      image: sample2,
      description: "i work in mihan",
    },
  ];
  return (
    <main>
      <div className="my-32">
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
        <a href="#">Resume</a>
      </div>
      <MainSection id="work" title="Selected Works">
        <div ref={sliderRef} className="keen-slider">
          {data.map((item) => {
            return (
              <div key={item.id} className="keen-slider__slide">
                <MainCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </MainSection>
      <MainSection id="about" title="About Me">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut
          magni ea ratione rem cupiditate incidunt odit sit ducimus, voluptas
          soluta vero, eum architecto reprehenderit consequuntur quam? Expedita,
          atque accusantium?
        </p>
        <a href="#">Resume</a>
      </MainSection>

      <MainSection id="contact" title="Contact">
        social media links
      </MainSection>
    </main>
  );
}
