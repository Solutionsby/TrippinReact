import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { numbers } from "../../db/data.json";
import "./baner.scss";

export const Baner = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartCount(entry.isIntersecting);
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, []);

  return (
    <div ref={myRef} className="banner-wrapper">
      <div className="banner-cars">
        {startCount && (
          <CountUp
            className="baner-counter"
            start={0}
            end={numbers.cars}
            duration={15}
          />
        )}
        <p>Samochodów</p>
      </div>
      <div className="baner-routs ">
        {startCount && (
          <CountUp
            className="baner-counter"
            start={0}
            end={numbers.routes}
            duration={7}
          />
        )}
        <p>Trasy</p>
      </div>
      <div className="baner-adventrue">
        {startCount && (
          <CountUp
            className="baner-counter"
            start={0}
            end={numbers.adventure}
            duration={25}
          />
        )}
        %<p>Przygody</p>
      </div>
    </div>
  );
};
