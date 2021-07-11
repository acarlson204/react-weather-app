import './App.css';
import Banner from "./Banner";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Banner defaultCity="Winnipeg" />
      <Forecast />
      <Footer />
    </div>
  );
}