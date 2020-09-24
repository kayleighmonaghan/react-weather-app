import React from "react";
import "./Row3.css";

export default function Row3({ temperature, imgSrc, imgAlt, humidity, wind }) {
  return (
    <div className="Row3">
      <div className="row">
        <div className="col-5 today-temp-div">
          <h1>
            <span>{temperature}</span>
            <span className="units">
              <button className="change-temp-btn active">°C</button>|
              <button className="change-temp-btn">°F</button>
            </span>
          </h1>
        </div>
        <div className="col-2 today-img-div">
          <img src={imgSrc} alt={imgAlt} className="today-img" />
        </div>
        <div className="col-5">
          <ul className="weather-stats">
            <li>
              Humidity
              <strong> {humidity}%</strong>
            </li>
            <li>
              Wind
              <strong> {wind} mph</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
