import { InstagramIcon } from "../../../assets/SVG/Instagram";
import { FacebookIcon } from "../../../assets/SVG/Facebook";
import data from "../../../db/data.json";
import { CustomButton } from "../../button/CustomButton";
import "./menu.scss";

export const MenuBurger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleScrollToSection = (sectionId: string) => {
    const sectionChose = document.getElementById(sectionId);
    if (sectionChose) {
      sectionChose.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  return (
    <div className={`navigation-menu-list ${isOpen ? "active" : ""}`}>
      <ul>
        <li>
          <h3 onClick={() => handleScrollToSection("aboutSection")}>O nas</h3>
        </li>
        <li>
          <h3 onClick={() => handleScrollToSection("carSection")}>
            Nasza oferta
          </h3>
        </li>
        <li>
          <h3 onClick={() => handleScrollToSection("faqSection")}>FAQ</h3>
        </li>
        <li>
          <div className="contact-wrapper">
            <a href={`mailto:${data.contatact.adresEmail}`}>
              {data.contatact.adresEmail}
            </a>
            <a href={`tel:+48${data.contatact.telephoneNumber}`}>
              {data.contatact.telephoneNumber}
            </a>
          </div>
        </li>
        <li>
          <div className="social-media-contener">
            <a href={data.contatact.websiteFacebook}>
              <FacebookIcon width={40} height={40} />
            </a>
            <a href={data.contatact.websiteInstagram}>
              <InstagramIcon width={40} height={40} />
            </a>
          </div>
        </li>
        <CustomButton
          href={data.contatact.websiteHoppyGo}
          className={"hoppyGo-button"}
        >
          Zarezerwuj
        </CustomButton>
      </ul>
    </div>
  );
};
