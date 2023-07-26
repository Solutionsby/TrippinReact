import "./aboutsection.scss";
import { content } from "../../db/data.json";
import { About } from "./About/About";

export const AboutSection = () => {
  return (
    <div className="about-section-wrapper" id="aboutSection">
      {content.map(
        ({
          id,
          title,
          textContent,
          image,
        }: {
          id: number;
          title: string;
          textContent: string;
          image?: string;
        }) => (
          <About
            key={id}
            id={id}
            title={title}
            textContent={textContent}
            image={image}
          />
        )
      )}
    </div>
  );
};
