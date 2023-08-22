import { useState } from "react";
import "./slider.scss";

export const Slider = ({ slides }: { slides: Array }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPreviuse = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="car-slider-wrapper">
      <div className="left-arrow slider-arrow" onClick={goToPreviuse}>
        ❰
      </div>
      <div className="right-arrow slider-arrow " onClick={goToNext}>
        ❱
      </div>
      <div
        className="car-photo"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {" "}
        <div className="slieder-dots-contener">
          {slides.map((slide, slideIndex: number) => (
            <div
              key={slideIndex}
              className={currentIndex === slideIndex ? "active" : "dots"}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
