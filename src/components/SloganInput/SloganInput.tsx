import React from "react";
import CrossIcon from "../icons/CrossIcon";
import "./slogan-input.css";
export type IProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};
const SloganInput = ({ input, setInput }: IProps) => {
  return (
    <span className="input__container">
      <input
        className="slogan__input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <CrossIcon height={18} width={18} />
    </span>
  );
};

export default SloganInput;
