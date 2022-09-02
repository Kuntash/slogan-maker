import React from "react";
import Button from "../Button/Button";
import DukaanLogo from "../icons/DukaanLogo";
import "./nav.css";
const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__item">
        <DukaanLogo width={156} height={44} />
      </div>
      <div className="nav__item">
        <Button
          type="unstyled"
          text="Sign in"
          size="md"
          backgroundColor="transparent"
        />
        <Button
          type="contained"
          text="Dukaan for PC"
          backgroundColor="secondary"
          size="md"
        />
      </div>
    </div>
  );
};

export default Navigation;
