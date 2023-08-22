import { useState } from "react";
import "./faq.scss";

export const Faq = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, isOpen] = useState(false);

  const toqqleFaq = () => {
    isOpen(!open);
  };
  return (
    <div className="faq-wrapper">
      <div className="question-faq">
        <p>{question}</p>
        <div
          className={open ? "faq-angle open" : "faq-angle"}
          onClick={toqqleFaq}
        >
          &#10094;
        </div>
      </div>
      <div className={open ? "faq-answer open" : "faq-answer"}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
