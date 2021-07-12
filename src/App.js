import React from "react";
import ReactDOM from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <hr />
        <Banner defaultCity="Winnipeg" />
        <Forecast />
        <hr />
      </div>
      <Footer />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);