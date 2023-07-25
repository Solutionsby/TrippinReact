import { useState } from "react";
import { MenuBurger } from "./Menu/MenuBurger";
import "./navigation.scss";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navigation-wrapper">
      <a href="#" className="navigation-logo"></a>

      <div className="navigation-menu">
        <div
          className={`navigation-menu-div-wrappers`}
          onClick={handleMenuToggle}
        >
          <div className={`burger-menu-div ${isOpen ? "active" : ""}`}></div>
          <div className={`burger-menu-div ${isOpen ? "active" : ""}`}></div>
        </div>
      </div>
      <MenuBurger onClick={handleMenuClick} isOpen={isOpen} />
    </div>
  );
};
