import { CustomButton } from "../../button/CustomButton";
import data from "../../../db/data.json";
import "./about.scss";

export const About = ({
  id,
  title,
  textContent,
  image,
}: {
  id: number;
  title: string;
  textContent: string;
  image: string;
}) => {
  if (id === 0) {
    return (
      <div className="section-about-wrapper">
        <h2>{title}</h2>
        <p>{textContent}</p>
      </div>
    );
  } else if (id % 2 == 0) {
    return (
      <div className="section-about-wrapper-even">
        <div
          className="section-about-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="section-about-content">
          <h2>{title}</h2>
          <p>{textContent}</p>
          <CustomButton
            href={`tel:+48${data.contatact.telephoneNumber}`}
            className="reservation-even"
          >
            Zadzwoń
          </CustomButton>
        </div>
      </div>
    );
  } else {
    return (
      <div className="section-about-wrapper-odd">
        <div
          className="section-about-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="section-about-content">
          <h2>{title}</h2>
          <p>{textContent}</p>
          <CustomButton
            href={`tel:+48${data.contatact.telephoneNumber}`}
            className="reservation-odd"
          >
            Zadzwoń
          </CustomButton>
        </div>
      </div>
    );
  }
};
