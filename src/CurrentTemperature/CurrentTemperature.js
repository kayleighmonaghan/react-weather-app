import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
    function fahrenheit() {
        return Math.round((props.celsius * 9) / 5 + 32);
    }

    function showFahrenheit(event) {
        event.preventDefault();
        props.setUnits("imperial");
    }
    
    function showCelsius(event) {
        event.preventDefault();
        props.setUnits("metric");
    }

    if (props.units === "metric") {
        return (
            <div className="CurrentTemperature">
            <h1>
              <span>{props.celsius}</span>
              <span className="units">
                {" "}°C |
                <button className="change-temp-btn" onClick={showFahrenheit}>°F</button>
              </span>
            </h1>
            </div>
        );
    } else {
        return (
            <div className="CurrentTemperature">
            <h1>
              <span>{fahrenheit()}</span>
              <span className="units">
                <button className="change-temp-btn" onClick={showCelsius}>°C</button>
                {" "}| °F
              </span>
            </h1>
            </div>
        );
    }
}