import contact from "../../../db/contact.json";
import "./menu.scss";

export const MenuBurger = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  console.log(isOpen);
  return (
    <div className={`navigation-menu-list ${isOpen ? "active" : ""}`}>
      <ul>
        <li>
          <a href="http://" onClick={onClick}></a>
        </li>
        <li>
          <a href="http://" onClick={onClick}>
            O nas
          </a>
        </li>
        <li>
          <a href="http://" onClick={onClick}>
            Nasza oferta
          </a>
        </li>
        <li>
          <a href="http://" onClick={onClick}>
            Jak to działa
          </a>
        </li>
        <li>
          <a href="http://" onClick={onClick}>
            FAQ
          </a>
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
          <a href="http://" onClick={onClick}></a>
        </li>
      </ul>
    </div>
  );
};
