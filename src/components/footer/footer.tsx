import { InstagramIcon } from "../../assets/SVG/Instagram";
import { FacebookIcon } from "../../assets/SVG/Facebook";
import { JamelIcon } from "../../assets/SVG/jamel_logo";
import data from "../../db/data.json";
import "./footer.scss";

export const FooterSection = () => {
  const handleScrollToSection = (sectionId: string) => {
    const sectionChose = document.getElementById(sectionId);
    if (sectionChose) {
      sectionChose.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="footer-section-wrapper">
      <div className="footer-left-section">
        <a href="#">Polityka Prywatnosci</a>
        <a href={`mailto:${data.contatact.adresEmail}`}>
          {data.contatact.adresEmail}
        </a>
        <a href={`tel:+48${data.contatact.telephoneNumber}`}>
          {data.contatact.telephoneNumber}
        </a>
      </div>
      <div className="footer-small-menu">
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
            <div className="social-media-contener">
              <a href={data.contatact.websiteFacebook}>
                <FacebookIcon width={20} height={20} />
              </a>
              <a href={data.contatact.websiteInstagram}>
                <InstagramIcon width={20} height={20} />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-partners">
        <p>Partnerzy:</p>
        <a href="https://www.jamel.pl">
          <JamelIcon width={50} height={50} />
        </a>
      </div>
    </div>
  );
};
