import "./customButton.scss";
import React from "react";

type CustomButtonProps = {
  href: string;
  className: string;
  children: React.ReactNode; // Lepsze używanie ogólnego typu React.ReactNode
};

export const CustomButton = ({
  href,
  children,
  className,
}: CustomButtonProps) => {
  return (
    <a href={href} className={`custom-button ${className}`}>
      {children}
    </a>
  );
};
