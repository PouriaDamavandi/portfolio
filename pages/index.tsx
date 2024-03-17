import HomePageHero from "@/components/pages/index/home";
import MainCard from "@/components/ui/card/mainCard";
import MainSection from "@/components/ui/section/mainSection";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import sample from "../public/images/mihanInsurance.png";
import sample2 from "../public/images/pwa.png";

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
      <HomePageHero />
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
