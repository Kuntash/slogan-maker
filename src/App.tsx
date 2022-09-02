import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Nav/Navigation";
import OtherProducts from "./components/OtherProducts/OtherProducts";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Dashboard />
      <Features />
      <OtherProducts />
      <Footer />
    </div>
  );
}

export default App;
