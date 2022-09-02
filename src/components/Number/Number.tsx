import React, { useRef } from "react";
import "./number.css";
export type IProps = {
  value: number;
  active?: boolean;
  onClick: (pageNo: number) => void;
};
const Number = ({ value, active, onClick }: IProps) => {
  const numberRef = useRef(null);
  return (
    <div
      onClick={() => {
        onClick(value);
      }}
      className={`number__box ${active && "number__box--active"}`}
      ref={numberRef}
    >
      {value}
    </div>
  );
};

export default Number;
