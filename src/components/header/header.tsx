import { useEffect, useState } from "react";
import { CustomButton } from "../button/CustomButton";
import { Price } from "../../db/price";
import "./headerStyle.scss";

export const Header = () => {
  const [isPromActive, setPromActive] = useState(false);

  const checkPromotion = () => {
    if (Price.oldPrice > 0) {
      setPromActive(true);
    } else {
      setPromActive(false);
    }
  };

  useEffect(() => {
    checkPromotion();
  }, []);
  console.log(isPromActive);
  return (
    <div className="header-wrapper">
      <div className="heddings-wrapper">
        <h1>Odkryj Nieznane</h1>
        <h2>Wynajmij Mercedesa cabrio</h2>
        <h3>
          Cena już od{" "}
          <span className={`old-price ${isPromActive ? "show" : "hide"}`}>
            {Price.oldPrice}
          </span>{" "}
          <span className="new-price"> 300 zł</span>
        </h3>
      </div>
      <div className="links-wrappper"></div>
      <CustomButton
        href={"https://hoppygo.com/pl/user-profile/498bc75260/cars"}
        className={"headers-links"}
      >
        Wynajmij na HoppyGo
      </CustomButton>
      <CustomButton className={"headers-links"} href={"#"}>
        Dowiedz się więcej
      </CustomButton>
    </div>
  );
};
