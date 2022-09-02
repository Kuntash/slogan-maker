import React from "react";
import "./button.css";

export type IProps = {
  type: "outline" | "contained" | "unstyled";
  text: string;
  backgroundColor: "primary" | "secondary" | "transparent";
  size: "md" | "sm";
  onClick?: (argument?: any) => any;
};
const Button = ({ type, backgroundColor, text, size, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn__${type} btn__${backgroundColor} btn__${size}`}
    >
      {text}
    </button>
  );
};

export default Button;
