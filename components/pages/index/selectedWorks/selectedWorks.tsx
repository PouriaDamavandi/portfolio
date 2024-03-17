import MainCard from "@/components/ui/card/mainCard";
import { data } from "@/data/data";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const SelectedWorks = () => {
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
