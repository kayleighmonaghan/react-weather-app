import React from "react";
import "./Forecast.css";

export default function Forecast({ day, imgSrc, imgAlt, minTemp, maxTemp }) {
  return (
    <div className="Forecast row">
      <div className="col-4 week-day">
        <h3 id="day-1">{day}</h3>
      </div>
      <div className="col-3 week-icon">
        <img src={imgSrc} alt={imgAlt} className="week-img" id="forecast-img" />
      </div>
      <div className="col-5 week-temp">
        <h3>
          <span className="min-temp">{minTemp}</span>° |
          <strong>
            <span className="max-temp"> {maxTemp}</span>°
          </strong>
        </h3>
      </div>
    </div>
  );
}
