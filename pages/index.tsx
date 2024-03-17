import HomePageHero from "@/components/pages/index/home";
import MainCard from "@/components/ui/card/mainCard";
import { Arrow } from "@/components/ui/icons/arrow";
import MainSection from "@/components/ui/section/mainSection";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import sample from "../public/images/mihanInsurance.png";
import sample2 from "../public/images/pwa.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

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
      <MainSection id="work" title="SELECTED WORKS">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {data.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <MainCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </div>
            ))}
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current?.prev();
                  }}
                  disabled={currentSlide === 0}
                />
                <Arrow
                  onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current?.next();
                  }}
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots">
              {Array.from(
                Array(instanceRef.current.track.details.slides.length).keys()
              ).map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`dot${currentSlide === idx ? " active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>
      </MainSection>
      <MainSection id="about" title="ABOUT ME">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut
          magni ea ratione rem cupiditate incidunt odit sit ducimus, voluptas
          soluta vero, eum architecto reprehenderit consequuntur quam? Expedita,
          atque accusantium?
        </p>
        <a href="#">Resume</a>
      </MainSection>
      <MainSection id="contact" title="CONTACT">
        social media links
      </MainSection>
    </main>
  );
}
