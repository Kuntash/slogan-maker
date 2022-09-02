import React from "react";
import { Slogan } from "../../dummy-data";
import CrossIcon from "../icons/CrossIcon";
import "./slogan-input.css";
export type IProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setGeneratedSlogans: React.Dispatch<React.SetStateAction<Slogan[] | null>>;
};
const SloganInput = ({ input, setInput, setGeneratedSlogans }: IProps) => {
  const clearInput = () => {
    setInput("");
    setGeneratedSlogans(null);
  };
  return (
    <span className="input__container">
      <input
        className="slogan__input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="cross__button" onClick={clearInput}>
        <CrossIcon height={18} width={18} />
      </button>
    </span>
  );
};

export default SloganInput;
