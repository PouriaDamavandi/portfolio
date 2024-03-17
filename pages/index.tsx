import HomePageHero from "@/components/pages/index/home";
import MainSection from "@/components/ui/section/mainSection";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

import SelectedWorks from "@/components/pages/index/selectedWorks/selectedWorks";

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

  return (
    <main>
      <HomePageHero />
      <MainSection id="work" title="SELECTED WORKS">
        <SelectedWorks />
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
