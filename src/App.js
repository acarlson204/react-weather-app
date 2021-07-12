import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Forecast from "./Forecast";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Banner defaultCity="Winnipeg" temp="11" />
      </div>
      <Footer />
    </div>
  );
}