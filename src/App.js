import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather defaultCity="Glasgow" />
            <hr className="hr-2" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
