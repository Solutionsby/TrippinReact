import { InstagramIcon } from "../../../assets/SVG/Instagram";
import { FacebookIcon } from "../../../assets/SVG/facebook";
import contact from "../../../db/contact.json";
import { CustomButton } from "../../button/CustomButton";
import "./menu.scss";

export const MenuBurger = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  const handleScrollToSection = (sectionId: string) => {
    const sectionChose = document.getElementById(sectionId);
    if (sectionChose) {
      sectionChose.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`navigation-menu-list ${isOpen ? "active" : ""}`}>
      <ul>
        <li>
          <h3 onClick={() => handleScrollToSection("aboutSection")}>O nas</h3>
        </li>
        <li>
          <h3 onClick={() => handleScrollToSection("aboutSection")}>
            Nasza oferta
          </h3>
        </li>
        <li>
          <h3 onClick={() => handleScrollToSection("aboutSection")}>
            Jak to działa
          </h3>
        </li>
        <li>
          <h3 onClick={() => handleScrollToSection("aboutSection")}>FAQ</h3>
        </li>
        <li>
          <div className="contact-wrapper">
            <a href={`mailto:${contact.contatcs.adresEmail}`} onClick={onClick}>
              {contact.contatcs.adresEmail}
            </a>
            <a
              href={`tel:+48${contact.contatcs.telephoneNumber}`}
              onClick={onClick}
            >
              {contact.contatcs.telephoneNumber}
            </a>
          </div>
        </li>
        <li>
          <div className="social-media-contener">
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
          </div>
        </li>
        <CustomButton
          href={"https://hoppygo.com/pl/user-profile/498bc75260/cars"}
          className={"hoppyGo-button"}
        >
          Zarezerwuj
        </CustomButton>
      </ul>
    </div>
  );
};
