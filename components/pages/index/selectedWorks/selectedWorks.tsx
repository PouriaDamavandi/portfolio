import MainCard from "@/components/ui/card/mainCard";
import { data } from "@/data/data";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const SelectedWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const animation = { duration: 50000, easing: (t: number) => t };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: { origin: "center", perView: 2.5, spacing: 50 },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { origin: "center", perView: 1, spacing: 10 },
      },
    },

    mode: "free-snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {data.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <MainCard
              title={item.title}
              description={item.description}
              image={item.image}
              id={item.id}
            />
          </div>
        ))}
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
  );
};

export default SelectedWorks;
