import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navigation from "./components/Nav/Navigation";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Dashboard />
    </div>
  );
}

export default App;
