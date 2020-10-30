import React from "react";
import WeatherMain from "./WeatherMain";
import Footer from "./Footer";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <WeatherMain defaultCity="Glasgow" />
            <hr className="hr-2" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
