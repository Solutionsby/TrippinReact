import { useEffect, useState } from "react";
import { CustomButton } from "../button/CustomButton";
import data from "../../db/data.json";
import "./headerStyle.scss";

export const Header = () => {
  const [isPromActive, setPromActive] = useState(false);

  const checkPromotion = () => {
    if (data.price.oldPrice > 1) {
      setPromActive(true);
    } else {
      setPromActive(false);
    }
  };

  console.log(isPromActive);
  useEffect(() => {
    checkPromotion();
  }, []);
  return (
    <div className="header-wrapper">
      <h1 className="hedding-title">Odkryj Nieznane</h1>
      <div className="heddings-wrapper">
        <h2>Wynajmij Mercedesa cabrio</h2>
        <h3>
          Cena już od
          <span className={`old-price ${isPromActive ? "show" : "hide"}`}>
            {`  ${data.price.oldPrice}`}
          </span>
          <span className="new-price"> {data.price.newPrice}</span>
        </h3>
      </div>
      <div className="links-wrappper">
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
    </div>
  );
};
