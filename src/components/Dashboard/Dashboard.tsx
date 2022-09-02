import React, { useState } from "react";
import { allSlogans, Slogan } from "../../dummy-data";
import Button from "../Button/Button";
import GeneratedSlogans from "../GeneratedSlogans/GeneratedSlogans";
import SloganInput from "../SloganInput/SloganInput";
import "./dashboard.css";

const sloganPerPage = 18;
const Dashboard = () => {
  const [sloganInput, setSloganInput] = useState<string>("");
  const [generatedSlogans, setGeneratedSlogans] = useState<Slogan[] | null>(
    null
  );
  const [page, setPage] = useState(1);
  const generateSlogans = () => {
    if (sloganInput === "") {
      console.log("Enter a word");
      return;
    }
    let tempGeneratedSlogans = allSlogans.filter((slogan, index) =>
      slogan.keywords.includes(sloganInput)
    );
    setGeneratedSlogans(tempGeneratedSlogans);

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
        <h2 className="heading__md font__secondary-dark">
          Word for you slogan: Try "cozy"
        </h2>
        <SloganInput
          input={sloganInput}
          setInput={setSloganInput}
          setGeneratedSlogans={setGeneratedSlogans}
        />

        <Button
          text="Generate slogans"
          type="contained"
          backgroundColor="primary"
          size="md"
          onClick={generateSlogans}
        />
      </div>
      {generatedSlogans != null && (
        <GeneratedSlogans
          generatedSlogans={generatedSlogans}
          input={sloganInput}
          sloganPerPage={sloganPerPage}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default Dashboard;
