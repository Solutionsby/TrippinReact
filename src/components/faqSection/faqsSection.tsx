import "./faqs.scss";
import { FAQ } from "../../db/data.json";
import { Faq } from "./faq/faq";

export const FaqSection = () => {
  return (
    <div className="faqs-section-wrapper" id="faqSection">
      {FAQ.map(
        ({
          id,
          question,
          answer,
        }: {
          id: number;
          question: string;
          answer: string;
        }) => (
          <Faq key={id} question={question} answer={answer} />
        )
      )}
    </div>
  );
};
