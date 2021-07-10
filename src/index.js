import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from "./Banner";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Form from "./Form";


function App() {
  return (
    <div className="Weather">
      <Form />
      <Banner />
      <Forecast />
      <Footer />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode >,
  document.getElementById('root')
);
