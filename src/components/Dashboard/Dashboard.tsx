import React, { useState } from "react";
import Button from "../Button/Button";
import SloganInput from "../SloganInput/SloganInput";
import "./dashboard.css";
const Dashboard = () => {
  const [sloganInput, setSloganInput] = useState<string>("");
  const generateSlogans = () => {
    console.log("Generate slogans");
  };
  return (
    <div className="dashboard">
      <div className="header">
        <h1 className="heading__lg">Free slogan maker</h1>
        <p className="body font__secondary-dark">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
        <SloganInput input={sloganInput} setInput={setSloganInput} />
        <Button
          text="Generate slogans"
          type="contained"
          backgroundColor="primary"
          size="md"
          onClick={generateSlogans}
        />
      </div>
    </div>
  );
};

export default Dashboard;
